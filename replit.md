# Anthor AI - Mocha App

## Overview
This is a React + Vite application with a Cloudflare Workers backend built using the Mocha framework. The app features an AI-focused website with authentication, multiple pages (Home, About, Products, Services, Blog, Contact), and integration with the Mocha Users Service for authentication.

## Project Architecture

### Frontend (React + Vite)
- **Location**: `src/react-app/`
- **Framework**: React 19 with React Router 7
- **Styling**: Tailwind CSS
- **Build Tool**: Vite 6.2.0
- **Key Features**:
  - Navigation with routing
  - Authentication flows (Sign In, Sign Up, OAuth callback)
  - Multiple content pages
  - Responsive layout with components

### Backend (Cloudflare Worker)
- **Location**: `src/worker/index.ts`
- **Framework**: Hono
- **API Endpoints**:
  - `/api/oauth/google/redirect_url` - Get Google OAuth redirect URL
  - `/api/sessions` - Exchange OAuth code for session token
  - `/api/users/me` - Get current user (authenticated)
  - `/api/logout` - Logout user

### Dependencies
- **Runtime**: Node.js 20
- **Package Manager**: npm
- **Key Libraries**:
  - React 19.0.0
  - Hono 4.7.7
  - Vite 6.2.0
  - Tailwind CSS 3.4.17
  - @getmocha/users-service for authentication
  - @cloudflare/vite-plugin for Cloudflare Workers integration

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
- **2025-10-03**: Initial project import and setup
  - Downgraded Vite from 7.1.3 to 6.2.0 for compatibility with @getmocha/vite-plugins
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
- The project uses Mocha framework for streamlined development
- Authentication is handled via @getmocha/users-service
- Supports Google OAuth for user authentication
- Cloudflare Workers provides serverless backend
