# Anthor AI - Mocha App

## Overview
This is a React + Vite application with a Cloudflare Workers backend built using the Mocha framework. The app features an AI-focused website with passwordless email authentication via Supabase, multiple pages (Home, About, Products, Services, Blog, Contact), and custom branding with "ANKIT RATHOR" in italics.

## Project Architecture

### Frontend (React + Vite)
- **Location**: `src/react-app/`
- **Framework**: React 19 with React Router 7
- **Styling**: Tailwind CSS
- **Build Tool**: Vite 6.2.0
- **Key Features**:
  - Navigation with routing
  - Passwordless authentication (Log In, Create Account, OAuth callback)
  - Supabase authentication with magic link emails
  - Multiple content pages
  - Responsive layout with components

### Authentication (Supabase)
- **Provider**: Supabase
- **Method**: Email-only magic link (passwordless)
- **Pages**:
  - `/login` - Log in page with magic link email
  - `/create-account` - Create account page
  - `/auth/callback` - OAuth callback handler for magic link verification
- **Environment Variables**:
  - `VITE_SUPABASE_URL` - Supabase project URL
  - `VITE_SUPABASE_ANON_KEY` - Supabase anonymous key

### Dependencies
- **Runtime**: Node.js 20
- **Package Manager**: npm
- **Key Libraries**:
  - React 19.0.0
  - Vite 6.2.0
  - Tailwind CSS 3.4.17
  - @supabase/supabase-js for authentication
  - Lucide React for icons

## Configuration

### Development Server
- **Host**: 0.0.0.0
- **Port**: 5000
- **Start Command**: `npm run dev`
- **Vite Config**: Configured with `allowedHosts: true` for Replit proxy compatibility

### Build & Deployment
- **Build Command**: `npm run build`
- **Deployment Type**: Autoscale (Cloudflare Workers)
- **Wrangler Config**: `wrangler.json` for Cloudflare settings

## Recent Changes
- **2025-10-03**: Authentication pages renamed to Log In and Create Account
  - Renamed `/signin` route to `/login` and SignIn.tsx to LogIn.tsx
  - Renamed `/signup` route to `/create-account` and SignUp.tsx to CreateAccount.tsx
  - Updated all user-facing text from "Sign In/Sign Up" to "Log In/Create Account"
  - Updated Navigation component to use new routes and terminology
  
- **2025-10-03**: Implemented Supabase email-only authentication
  - Replaced Google OAuth with passwordless magic link authentication
  - Created SupabaseAuthContext for authentication state management
  - Updated authentication pages to use Supabase magic links
  - Added proper OTP verification in AuthCallback page
  - Configured environment variables for Supabase credentials
  
- **2025-10-03**: Updated branding
  - Changed all instances to "ANKIT RATHOR" in italic style
  - Added custom Anthor AI logo at public/assets/anthor-logo.png
  
- **2025-10-03**: Initial project import and setup
  - Downgraded Vite from 7.1.3 to 6.2.0 for compatibility
  - Configured Vite server to use host 0.0.0.0 and port 5000
  - Set up development workflow
  - Configured deployment settings for autoscale

## Development Workflow
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Access at: http://localhost:5000 or through Replit preview
4. Build for production: `npm run build`

## File Structure
```
src/
  react-app/          # React application
    components/       # Reusable components
    pages/           # Page components
    App.tsx          # Main app with routing
    main.tsx         # Entry point
  worker/            # Cloudflare Worker backend
    index.ts         # API endpoints
  shared/            # Shared types
```

## Notes
- The project uses Supabase for passwordless authentication via magic links
- All branding uses "ANKIT RATHOR" in italics throughout the application
- Authentication pages use "Log In" and "Create Account" terminology (not "Sign In/Sign Up")
- Requires VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables
- Magic links expire after 1 hour for security
