-- Anthor AI - Supabase Database Setup Script
-- Run this in your Supabase SQL Editor to set up the database schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- PROFILES TABLE
-- Extends the auth.users table with additional user information
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  company TEXT,
  role TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
-- Users can view their own profile
CREATE POLICY "Users can view own profile" 
  ON public.profiles FOR SELECT 
  USING (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile" 
  ON public.profiles FOR UPDATE 
  USING (auth.uid() = id);

-- Allow public to insert profiles (for signup)
CREATE POLICY "Enable insert for authenticated users only" 
  ON public.profiles FOR INSERT 
  WITH CHECK (auth.uid() = id);

-- ============================================================================
-- CONTACT SUBMISSIONS TABLE
-- Store contact form submissions from the website
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'responded', 'archived')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can submit a contact form
CREATE POLICY "Anyone can insert contact submissions" 
  ON public.contact_submissions FOR INSERT 
  WITH CHECK (true);

-- Policy: Users can view their own submissions
CREATE POLICY "Users can view own submissions" 
  ON public.contact_submissions FOR SELECT 
  USING (auth.uid() = user_id OR user_id IS NULL);

-- ============================================================================
-- NEWSLETTER SUBSCRIPTIONS TABLE
-- Store email newsletter subscriptions
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.newsletter_subscriptions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Enable RLS
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can subscribe
CREATE POLICY "Anyone can insert newsletter subscription" 
  ON public.newsletter_subscriptions FOR INSERT 
  WITH CHECK (true);

-- Policy: Users can view their own subscription
CREATE POLICY "Users can view own subscription" 
  ON public.newsletter_subscriptions FOR SELECT 
  USING (auth.uid() = user_id OR user_id IS NULL);

-- Policy: Users can update their own subscription
CREATE POLICY "Users can update own subscription" 
  ON public.newsletter_subscriptions FOR UPDATE 
  USING (auth.uid() = user_id);

-- ============================================================================
-- USER ACTIVITY LOG TABLE
-- Track user activities and engagement
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.user_activity_log (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  activity_type TEXT NOT NULL,
  activity_data JSONB,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.user_activity_log ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own activity
CREATE POLICY "Users can view own activity" 
  ON public.user_activity_log FOR SELECT 
  USING (auth.uid() = user_id);

-- Policy: Service can insert activity logs
CREATE POLICY "Enable insert for authenticated users" 
  ON public.user_activity_log FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- ============================================================================
-- FUNCTIONS
-- ============================================================================

-- Function to automatically create a profile when a user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', '')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update updated_at on profiles
DROP TRIGGER IF EXISTS on_profile_updated ON public.profiles;
CREATE TRIGGER on_profile_updated
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- ============================================================================
-- INDEXES
-- ============================================================================

-- Profiles
CREATE INDEX IF NOT EXISTS profiles_email_idx ON public.profiles(email);

-- Contact Submissions
CREATE INDEX IF NOT EXISTS contact_submissions_user_id_idx ON public.contact_submissions(user_id);
CREATE INDEX IF NOT EXISTS contact_submissions_status_idx ON public.contact_submissions(status);
CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx ON public.contact_submissions(created_at DESC);

-- Newsletter Subscriptions
CREATE INDEX IF NOT EXISTS newsletter_subscriptions_email_idx ON public.newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS newsletter_subscriptions_status_idx ON public.newsletter_subscriptions(status);

-- User Activity Log
CREATE INDEX IF NOT EXISTS user_activity_log_user_id_idx ON public.user_activity_log(user_id);
CREATE INDEX IF NOT EXISTS user_activity_log_created_at_idx ON public.user_activity_log(created_at DESC);
CREATE INDEX IF NOT EXISTS user_activity_log_activity_type_idx ON public.user_activity_log(activity_type);

-- ============================================================================
-- GRANTS
-- ============================================================================

-- Grant usage on schema
GRANT USAGE ON SCHEMA public TO anon, authenticated;

-- Grant access to tables
GRANT ALL ON public.profiles TO authenticated;
GRANT SELECT ON public.profiles TO anon;

GRANT ALL ON public.contact_submissions TO authenticated;
GRANT INSERT ON public.contact_submissions TO anon;

GRANT ALL ON public.newsletter_subscriptions TO authenticated;
GRANT INSERT, SELECT ON public.newsletter_subscriptions TO anon;

GRANT ALL ON public.user_activity_log TO authenticated;

-- ============================================================================
-- SETUP COMPLETE
-- ============================================================================
-- This script sets up:
-- 1. User profiles table (extends auth.users)
-- 2. Contact form submissions table
-- 3. Newsletter subscriptions table
-- 4. User activity logging table
-- 5. Row Level Security (RLS) policies for data protection
-- 6. Automatic profile creation on user signup
-- 7. Proper indexes for query performance
-- 8. Triggers for updated_at timestamps
--
-- Next steps:
-- 1. Configure Supabase Auth settings in your dashboard
-- 2. Set up email templates for magic links
-- 3. Configure allowed redirect URLs
-- 4. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your environment
-- ============================================================================
