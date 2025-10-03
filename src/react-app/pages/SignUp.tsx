import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useSupabaseAuth } from '@/react-app/contexts/SupabaseAuthContext';
import { 
  UserPlus, 
  Shield,
  AlertCircle,
  Loader2,
  Zap,
  Mail,
  CheckCircle
} from 'lucide-react';
import Layout from '@/react-app/components/Layout';

export default function SignUp() {
  const navigate = useNavigate();
  const { user, signInWithEmail, loading } = useSupabaseAuth();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    document.title = 'Sign Up — Anthor AI';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Create your Anthor AI account and start transforming your business with AI.');
    }

    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      setIsLoading(true);
      setError('');
      setSuccess(false);
      
      const { error } = await signInWithEmail(email);
      
      if (error) {
        setError(error.message || 'Failed to send magic link. Please try again.');
      } else {
        setSuccess(true);
      }
    } catch (err) {
      console.error('Sign up failed:', err);
      setError('Failed to send magic link. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="pt-20 pb-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-purple-900/30 backdrop-blur-sm rounded-full border border-purple-700/50 mb-6">
              <UserPlus className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm text-purple-300">Join Anthor AI</span>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Create Your Account
            </h1>
            <p className="text-slate-300">
              Enter your email to get started with a secure magic link
            </p>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur rounded-2xl border border-slate-800 p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-900/20 border border-red-700/50 rounded-lg flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-red-400 font-semibold mb-1">Sign Up Failed</h3>
                  <p className="text-red-300 text-sm">{error}</p>
                </div>
              </div>
            )}

            {success && (
              <div className="mb-6 p-4 bg-green-900/20 border border-green-700/50 rounded-lg flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-green-400 font-semibold mb-1">Check Your Email!</h3>
                  <p className="text-green-300 text-sm">
                    We've sent a magic link to <strong>{email}</strong>. Click the link to complete your account setup.
                  </p>
                </div>
              </div>
            )}

            {loading && (
              <div className="mb-6 p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg flex items-center space-x-3">
                <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />
                <p className="text-blue-300 text-sm">Checking authentication status...</p>
              </div>
            )}

            <div className="mb-6 p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-700/50 rounded-lg">
              <div className="flex items-start space-x-3">
                <Zap className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-2">What you'll get with Anthor AI:</h3>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• Access to ZYRA Shopify AI Suite</li>
                    <li>• AI-powered business automation</li>
                    <li>• Enterprise-grade AI solutions</li>
                    <li>• Priority support and updates</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleEmailSignUp} className="mb-6">
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    disabled={isLoading || success}
                    className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading || loading || success}
                className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{
                  boxShadow: '0 4px 16px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                    Sending Magic Link...
                  </>
                ) : success ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-3" />
                    Email Sent!
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5 mr-3" />
                    Create Account
                  </>
                )}
              </button>
            </form>
            
            <div className="mb-6 p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Passwordless & Secure</h3>
                  <p className="text-slate-400 text-sm">
                    No passwords to remember. Sign up securely with just your email.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-slate-400">
                Already have an account?{' '}
                <Link 
                  to="/signin" 
                  className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  Sign in here
                </Link>
              </p>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-slate-500 text-xs">
                Secured by Supabase Auth. By creating an account, you agree to our{' '}
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
