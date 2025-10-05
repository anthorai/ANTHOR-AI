import { Link } from 'react-router';
import { 
  Package, 
  ArrowRight, 
  Zap, 
  BarChart3, 
  Target, 
  Cpu, 
  Globe, 
  Shield,
  Star,
  CheckCircle
} from 'lucide-react';
import Layout from '@/react-app/components/Layout';
import SEO from '@/react-app/components/SEO';
import { ProductSchema } from '@/react-app/components/SchemaMarkup';

export default function Products() {
  return (
    <Layout>
      <SEO 
        title="Enterprise AI Software for E-commerce, Marketing & Workflow Automation"
        description="ZYRA Shopify Suite and AI tools for eCommerce, SEO optimization, product management, and business automation. Transform your online store with AI-powered solutions."
        canonical={`${window.location.origin}/products`}
        keywords="Shopify AI tools, AI for eCommerce, ZYRA AI Suite, AI marketing tools, AI workflow automation, eCommerce automation software"
        ogType="website"
      />
      <ProductSchema 
        name="ZYRA - AI-Powered Shopify Suite"
        description="ZYRA is an AI-powered automation suite for Shopify stores, featuring intelligent SEO optimization, product management, alt text generation, and comprehensive analytics to boost eCommerce performance."
        brand="Anthor AI"
        aggregateRating={{
          ratingValue: 4.8,
          reviewCount: 127
        }}
      />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-900/30 backdrop-blur-sm rounded-full border border-purple-700/50 mb-6">
              <Package className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm text-purple-300">Our Product Suite</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Our Products
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover our flagship ZYRA Shopify Suite and upcoming AI SaaS tools
            </p>
          </div>
          
          {/* ZYRA Shopify Suite - Main Product */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur rounded-2xl border border-slate-700 p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-purple-900/30 backdrop-blur-sm rounded-full border border-purple-700/50 mb-6">
                    <Star className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-sm text-purple-300">Flagship Product</span>
                  </div>
                  <h2 className="text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      ZYRA Shopify Suite
                    </span>
                  </h2>
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                    Revolutionary AI-powered e-commerce automation platform that transforms 
                    how Shopify stores operate, optimize, and scale globally.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {[
                      { icon: BarChart3, title: 'Analytics & Insights', desc: 'Real-time performance tracking' },
                      { icon: Target, title: 'SEO Optimization', desc: 'AI-driven search optimization' },
                      { icon: Zap, title: 'Automation Tools', desc: 'Streamlined workflows' },
                      { icon: Shield, title: 'Security First', desc: 'Enterprise-grade protection' }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                          <p className="text-slate-400 text-sm">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      disabled
                      className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold opacity-75 cursor-not-allowed"
                    >
                      Coming Soon
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                    <Link
                      to="/contact"
                      className="inline-flex items-center border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-slate-800/50"
                    >
                      Request Demo
                    </Link>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl p-8 border border-purple-500/30">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                      alt="ZYRA Dashboard Interface"
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">ZYRA Key Features</h2>
              <p className="text-xl text-slate-300">Everything you need to optimize your Shopify store</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'AI-Powered Inventory Optimization',
                  description: 'Smart inventory management with predictive analytics to prevent stockouts and overstock situations.',
                  icon: Package
                },
                {
                  title: 'Automated Customer Journey Mapping',
                  description: 'Track and optimize customer interactions across all touchpoints with intelligent automation.',
                  icon: Target
                },
                {
                  title: 'Real-time Sales Analytics',
                  description: 'Advanced analytics dashboard with AI-driven insights and sales predictions.',
                  icon: BarChart3
                },
                {
                  title: 'Intelligent Marketing Automation',
                  description: 'AI-powered email campaigns, retargeting, and personalized marketing strategies.',
                  icon: Zap
                },
                {
                  title: 'Advanced Conversion Optimization',
                  description: 'A/B testing, heatmaps, and conversion rate optimization powered by machine learning.',
                  icon: Cpu
                },
                {
                  title: 'Global SEO Management',
                  description: 'Multi-language SEO optimization with AI-generated content and meta descriptions.',
                  icon: Globe
                }
              ].map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-6 h-full hover:border-slate-700 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Upcoming Products */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Upcoming AI Tools</h2>
              <p className="text-xl text-slate-300">Next-generation AI solutions in development</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Anthor AI Writer',
                  description: 'Advanced AI content generation platform for marketing teams, with brand voice training and multi-language support.',
                  status: 'Coming Q2 2025',
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Enterprise Analytics Suite',
                  description: 'Comprehensive business intelligence platform with predictive analytics and custom AI model training.',
                  status: 'Coming Q3 2025', 
                  gradient: 'from-cyan-500 to-purple-500'
                }
              ].map((product, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-slate-700 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">{product.title}</h3>
                    <span className={`px-3 py-1 text-sm bg-gradient-to-r ${product.gradient} text-white rounded-full`}>
                      {product.status}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6">{product.description}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                  >
                    Get Early Access
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur rounded-2xl border border-slate-700 p-12">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using ZYRA to optimize their 
                e-commerce operations and drive growth with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/contact"
                  className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-slate-800/50"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
