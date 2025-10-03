import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { useSupabaseAuth } from '@/react-app/contexts/SupabaseAuthContext';
import { Menu, X, LogOut } from 'lucide-react';

const LogoIcon = ({ className }: { className?: string }) => (
  <img src="/assets/anthor-logo.png" alt="Anthor AI Logo" className={className} />
);

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useSupabaseAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Handle background scroll lock when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleCloseMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await signOut();
      setUserMenuOpen(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-2 left-2 right-2 lg:left-4 lg:right-4 z-50 transition-all duration-300 rounded-2xl lg:rounded-3xl shadow-2xl ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-[0_8px_32px_rgba(0,0,0,0.4)] transform-gpu' 
          : 'bg-slate-900/20 backdrop-blur-sm border border-slate-800/30'
      }`}
        style={{
          background: scrolled 
            ? 'linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))'
            : 'linear-gradient(145deg, rgba(15, 23, 42, 0.2), rgba(30, 41, 59, 0.2))',
          boxShadow: scrolled 
            ? '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1)'
            : '0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
        }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Mobile hamburger and logo */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={handleToggleMobileMenu}
                className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/70 transition-all duration-200 mr-3 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                aria-label="Toggle navigation menu"
                style={{
                  background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(51, 65, 85, 0.8))',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <Link to="/" className="flex items-center space-x-2 group" onClick={handleCloseMobileMenu}>
                <LogoIcon className="w-10 h-10 rounded-xl group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl" />
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                  Anthor AI
                </span>
              </Link>
            </div>

            {/* Desktop logo */}
            <Link to="/" className="hidden lg:flex items-center space-x-3 group">
              <LogoIcon className="w-12 h-12 rounded-xl group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-xl" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                Anthor AI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-all duration-200 hover:text-blue-400 relative px-3 py-2 rounded-lg hover:bg-slate-800/30 hover:backdrop-blur-sm ${
                    location.pathname === item.path
                      ? 'text-blue-400 font-bold bg-blue-600/10 shadow-inner'
                      : 'text-slate-300'
                  }`}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <div className="absolute -bottom-1 left-1 right-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center space-x-3 px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200"
                  >
                    <img
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.email || 'User')}&background=3b82f6&color=fff`}
                      alt={user.email || 'User'}
                      className="w-8 h-8 rounded-full border-2 border-blue-500/50"
                    />
                    <span className="hidden lg:block text-sm font-medium">
                      {user.email?.split('@')[0] || 'User'}
                    </span>
                  </button>

                  {/* User Dropdown Menu */}
                  {userMenuOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl z-50">
                      <div className="p-4 border-b border-slate-700/50">
                        <div className="flex items-center space-x-3">
                          <img
                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.email || 'User')}&background=3b82f6&color=fff`}
                            alt={user.email || 'User'}
                            className="w-10 h-10 rounded-full border-2 border-blue-500/50"
                          />
                          <div>
                            <p className="text-white font-medium">
                              {user.email?.split('@')[0] || 'User'}
                            </p>
                            <p className="text-slate-400 text-sm">{user.email}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-2">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center space-x-3 px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                  style={{
                    boxShadow: '0 4px 16px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  }}
                  onClick={handleCloseMobileMenu}
                >
                  Log In
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={handleCloseMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* User Menu Overlay */}
      {userMenuOpen && (
        <div 
          className="fixed inset-0 z-40 lg:z-30"
          onClick={() => setUserMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Menu */}
      <div className={`fixed top-20 left-2 right-2 z-50 lg:hidden transform transition-all duration-300 ease-out ${
        mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
      }`}>
        <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl p-6"
          style={{
            background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))',
            boxShadow: '0 16px 64px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}>
          <nav>
            <ul className="space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                
                return (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={handleCloseMobileMenu}
                      className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 backdrop-blur-sm ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-600/30 to-purple-600/20 text-blue-400 border-l-4 border-blue-400 shadow-lg shadow-blue-600/20'
                          : 'text-slate-300 hover:text-blue-400 hover:bg-slate-800/60 hover:shadow-lg hover:scale-[1.02]'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            
            <div className="mt-6 pt-4 border-t border-slate-800/50">
              {user ? (
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 px-4 py-3">
                    <img
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.email || 'User')}&background=3b82f6&color=fff`}
                      alt={user.email || 'User'}
                      className="w-10 h-10 rounded-full border-2 border-blue-500/50"
                    />
                    <div>
                      <p className="text-white font-medium">
                        {user.email?.split('@')[0] || 'User'}
                      </p>
                      <p className="text-slate-400 text-sm">{user.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      handleCloseMobileMenu();
                    }}
                    className="flex items-center justify-center w-full bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl active:scale-95"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <Link
                  to="/create-account"
                  onClick={handleCloseMobileMenu}
                  className="flex items-center justify-center w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl active:scale-95"
                  style={{
                    boxShadow: '0 4px 16px rgba(34, 197, 94, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <span>Get Started</span>
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
