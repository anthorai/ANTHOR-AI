import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '@getmocha/users-service/react';
import { 
  LogIn, 
  Shield,
  AlertCircle,
  Loader2
} from 'lucide-react';
import Layout from '@/react-app/components/Layout';

export default function SignIn() {
  const navigate = useNavigate();
  const { user, redirectToLogin, isPending } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    document.title = 'Sign In — Anthor AI';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Sign in to your Anthor AI account.');
    }

    // Redirect if already authenticated
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      setError('');
      await redirectToLogin();
    } catch (err) {
      console.error('Sign in failed:', err);
      setError('Failed to start sign in process. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="pt-20 pb-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-900/30 backdrop-blur-sm rounded-full border border-blue-700/50 mb-6">
              <LogIn className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-sm text-blue-300">Welcome Back</span>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Sign In
            </h1>
            <p className="text-slate-300">
              Access your Anthor AI account securely with Google
            </p>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur rounded-2xl border border-slate-800 p-8">
            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-900/20 border border-red-700/50 rounded-lg flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-red-400 font-semibold mb-1">Sign In Failed</h3>
                  <p className="text-red-300 text-sm">{error}</p>
                </div>
              </div>
            )}

            {/* Loading State */}
            {isPending && (
              <div className="mb-6 p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg flex items-center space-x-3">
                <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />
                <p className="text-blue-300 text-sm">Checking authentication status...</p>
              </div>
            )}
            
            {/* Google OAuth Button */}
            <div className="mb-6">
              <button
                onClick={handleGoogleSignIn}
                disabled={isLoading || isPending}
                className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{
                  boxShadow: '0 4px 16px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                    Connecting...
                  </>
                ) : (
                  <>
                    <img 
                      src="https://developers.google.com/identity/images/g-logo.png" 
                      alt="Google" 
                      className="w-5 h-5 mr-3"
                    />
                    Sign in with Google
                  </>
                )}
              </button>
            </div>
            
            {/* Security Features */}
            <div className="mb-6 p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Secure Authentication</h3>
                  <p className="text-slate-400 text-sm">
                    OAuth 2.0 with Google provides enterprise-grade security for your account
                  </p>
                </div>
              </div>
            </div>
            
            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-slate-400">
                New to Anthor AI?{' '}
                <Link 
                  to="/signup" 
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Create your account
                </Link>
              </p>
            </div>
            
            {/* Security Notice */}
            <div className="mt-6 text-center">
              <p className="text-slate-500 text-xs">
                Secured by OAuth 2.0. By signing in, you agree to our{' '}
                <Link to="/terms" className="text-blue-400 hover:text-blue-300">Terms of Service</Link>
                {' '}and{' '}
                <Link to="/privacy" className="text-blue-400 hover:text-blue-300">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
