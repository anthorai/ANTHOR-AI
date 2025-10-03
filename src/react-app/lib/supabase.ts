import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    '❌ Missing Supabase environment variables. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your Secrets.'
  );
}

if (supabaseUrl && !supabaseUrl.startsWith('https://')) {
  console.error(
    `❌ Invalid VITE_SUPABASE_URL: "${supabaseUrl}"\n` +
    'Expected format: https://yourproject.supabase.co\n' +
    'Current value appears to be a JWT token. Please check your Secrets configuration.'
  );
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key',
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  }
);
