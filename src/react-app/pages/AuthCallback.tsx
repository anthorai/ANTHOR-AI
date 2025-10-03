import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '@getmocha/users-service/react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import Layout from '@/react-app/components/Layout';

export default function AuthCallback() {
  const navigate = useNavigate();
  const { exchangeCodeForSessionToken } = useAuth();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    document.title = 'Authenticating — Anthor AI';

    const handleAuth = async () => {
      try {
        await exchangeCodeForSessionToken();
        setStatus('success');
        
        // Redirect to home page after successful authentication
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } catch (err) {
        console.error('Authentication failed:', err);
        setStatus('error');
        setError('Authentication failed. Please try again.');
        
        // Redirect to sign in page after error
        setTimeout(() => {
          navigate('/signin');
        }, 3000);
      }
    };

    handleAuth();
  }, [exchangeCodeForSessionToken, navigate]);

  return (
    <Layout>
      <div className="pt-20 pb-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/50 backdrop-blur rounded-2xl border border-slate-800 p-8 text-center">
            {status === 'loading' && (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                    <Loader2 className="w-8 h-8 text-white animate-spin" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white mb-2">
                    Authenticating...
                  </h1>
                  <p className="text-slate-300">
                    Please wait while we complete your sign in.
                  </p>
                </div>
              </div>
            )}

            {status === 'success' && (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white mb-2">
                    Welcome to Anthor AI!
                  </h1>
                  <p className="text-slate-300">
                    You have been successfully authenticated. Redirecting you to the dashboard...
                  </p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="p-4 bg-gradient-to-r from-red-500 to-orange-600 rounded-full">
                    <AlertCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white mb-2">
                    Authentication Failed
                  </h1>
                  <p className="text-slate-300 mb-4">
                    {error}
                  </p>
                  <p className="text-slate-400 text-sm">
                    Redirecting you back to sign in...
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
