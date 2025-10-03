import { createClient } from '@supabase/supabase-js';

let supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let isConfigValid = true;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    '❌ Missing Supabase environment variables. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your Secrets.'
  );
  isConfigValid = false;
}

if (supabaseUrl && !supabaseUrl.startsWith('https://')) {
  console.error(
    `❌ Invalid VITE_SUPABASE_URL: "${supabaseUrl}"\n` +
    'Expected format: https://yourproject.supabase.co\n' +
    'Current value appears to be a JWT token. Please check your Secrets configuration.'
  );
  isConfigValid = false;
  supabaseUrl = 'https://placeholder.supabase.co';
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTIwMDAsImV4cCI6MTk2MDc2ODAwMH0.XXX',
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  }
);

export const isSupabaseConfigured = isConfigValid;
