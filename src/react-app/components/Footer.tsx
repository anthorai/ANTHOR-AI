import { Link } from 'react-router';
import { Mail, MapPin, Phone, Github, Twitter, Linkedin } from 'lucide-react';

const LogoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className}>
    <path d="M100 20 L170 120 L145 120 L130 95 L70 95 L55 120 L30 120 L100 20 Z M100 55 L85 85 L115 85 L100 55 Z" fill="currentColor" />
    <path d="M60 100 Q80 85 100 90 Q120 95 140 85 Q160 75 180 80 L185 95 Q165 88 145 98 Q125 108 105 103 Q85 98 65 108 Z" fill="#ef4444" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mx-2 lg:mx-4 mb-2 lg:mb-4 rounded-2xl lg:rounded-3xl shadow-2xl backdrop-blur-xl"
      style={{
        background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))',
        boxShadow: '0 -8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg"
                style={{
                  boxShadow: '0 4px 16px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}>
                <LogoIcon className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                Anthor AI
              </span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-md">
              Shaping the Future with AI. Global leader in AI SaaS solutions, founded by Ankit Rathor. 
              Building next-generation software development tools and enterprise AI solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
                <Twitter className="w-5 h-5 text-slate-400 hover:text-blue-400" />
              </a>
              <a href="#" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
                <Linkedin className="w-5 h-5 text-slate-400 hover:text-blue-400" />
              </a>
              <a href="#" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
                <Github className="w-5 h-5 text-slate-400 hover:text-blue-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'Services', path: '/services' },
                { name: 'Blog', path: '/blog' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-slate-400" />
                <a href="mailto:hello@anthorai.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                  hello@anthorai.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-slate-400" />
                <span className="text-slate-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-slate-400 mt-1" />
                <span className="text-slate-400">
                  Silicon Valley, CA<br />
                  United States
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Anthor AI — Founded by Ankit Rathor
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
