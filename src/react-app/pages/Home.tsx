import { useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Zap, Shield, Globe, Users, Star, ChevronRight } from 'lucide-react';
import Layout from '@/react-app/components/Layout';

export default function Home() {
  useEffect(() => {
    // Update meta tags
    document.title = 'Anthor AI — Shaping the Future with AI';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Anthor AI builds enterprise-grade AI software and the ZYRA Shopify Suite. Founded by Ankit Rathor, we deliver intelligent automation and growth tools for businesses worldwide.');
    }
    
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-950"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 mb-8">
              <Zap className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-sm text-slate-300">Introducing the Future of AI Development</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Shaping the Future
              </span>
              <br />
              <span className="text-white">with Intelligent Software</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Enterprise AI products, bespoke AI engineering, and fast integrations — founded by{' '}
              <span className="text-blue-400 font-semibold">Ankit Rathor</span>, a self-made IT engineer 
              building the future of intelligent software solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                to="/products"
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center"
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-slate-800/50 flex items-center"
              >
                Request Demo
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'ZYRA Shopify Suite',
                description: 'Product Optimization & SEO automation platform that scales your e-commerce operations with AI-driven insights.',
                icon: '🛍️',
                gradient: 'from-purple-500 to-blue-500'
              },
              {
                title: 'Custom AI Solutions',
                description: 'Bespoke AI engineering tailored to your enterprise needs with seamless integration capabilities.',
                icon: '🤖',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'AI Workflow Automation',
                description: 'Intelligent automation tools that streamline business processes and enhance operational efficiency.',
                icon: '⚡',
                gradient: 'from-cyan-500 to-purple-500'
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-slate-800/50 backdrop-blur rounded-xl border border-slate-700 p-8 h-full hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-2xl`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product - ZYRA Shopify Suite */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-900/30 backdrop-blur-sm rounded-full border border-purple-700/50 mb-6">
              <Star className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm text-purple-300">Flagship Product</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ZYRA Shopify Suite
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Revolutionary AI-powered e-commerce automation platform that transforms 
              how Shopify stores operate, optimize, and scale globally.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur rounded-2xl border border-slate-700 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Next-Generation E-commerce Intelligence
                </h3>
                <ul className="space-y-4 mb-8">
                  {[
                    'AI-powered inventory optimization',
                    'Automated customer journey mapping',
                    'Real-time sales analytics & predictions',
                    'Intelligent marketing automation',
                    'Advanced conversion optimization'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-slate-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-4"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/products"
                  className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl p-8 border border-purple-500/30">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                    alt="ZYRA Dashboard"
                    className="w-full h-64 object-cover rounded-lg opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Anthor AI</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with enterprise-grade reliability 
              to deliver solutions that drive real business transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Bank-level security with SOC 2 compliance and end-to-end encryption for all your sensitive data.'
              },
              {
                icon: Globe,
                title: 'Global Scale',
                description: 'Built for international expansion with multi-region deployment and 99.99% uptime guarantee.'
              },
              {
                icon: Users,
                title: 'Expert Support',
                description: '24/7 dedicated support from AI specialists who understand your business needs and goals.'
              }
            ].map((value, index) => (
              <div key={index} className="group">
                <div className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 h-full hover:border-slate-700 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Join thousands of businesses worldwide who trust Anthor AI to power their digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Anthor AI's solutions have revolutionized our e-commerce operations. The AI-driven insights have increased our conversion rates by 300%.",
                author: "Sarah Chen",
                role: "CTO, TechCorp",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face"
              },
              {
                quote: "The level of automation and intelligence in their platform is unmatched. It's like having a team of AI experts working around the clock.",
                author: "Michael Rodriguez",
                role: "Founder, StartupX",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              },
              {
                quote: "Implementing Anthor AI's solutions was seamless. Their support team is exceptional and truly understands enterprise needs.",
                author: "Emily Johnson",
                role: "VP Engineering, GlobalTech",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur rounded-xl border border-slate-700 p-8 hover:border-slate-600 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.author}</h4>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Join the AI revolution and discover how Anthor AI can accelerate your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/products"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              Explore Our Solutions
            </Link>
            <Link
              to="/contact"
              className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-slate-800/50"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
