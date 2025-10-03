import { useEffect } from 'react';
import { Link } from 'react-router';
import { 
  ArrowLeft, 
  Zap, 
  BarChart3, 
  Target, 
  Bot, 
  Settings, 
  TrendingUp,
  CheckCircle,
  Sparkles,
  Globe,
  Calendar,
  User,
  Clock,
  Tag,
  Share2
} from 'lucide-react';
import Layout from '@/react-app/components/Layout';

export default function ZyraBlog() {
  useEffect(() => {
    document.title = 'ZYRA – The Future of AI-Powered eCommerce | Anthor AI Blog';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover how ZYRA transforms Shopify stores with AI-powered SEO, automation, and smart optimization. Learn about Anthor AI\'s flagship product revolutionizing eCommerce.');
    }
  }, []);

  const features = [
    {
      title: 'AI-Driven Product Optimization & SEO',
      description: 'Automatically optimize product titles, descriptions, and meta tags using advanced AI algorithms that understand search intent and customer behavior.',
      icon: Target
    },
    {
      title: 'Smart Conversion Boost',
      description: 'Intelligent A/B testing and AI-powered recommendations that dynamically adjust your store to maximize conversion rates.',
      icon: TrendingUp
    },
    {
      title: 'Campaign Automation & Personalized Marketing',
      description: 'Create personalized marketing campaigns that adapt in real-time based on customer behavior and preferences.',
      icon: Bot
    },
    {
      title: 'Shopify One-Click Integration',
      description: 'Seamlessly integrate with your existing Shopify store in minutes, no technical expertise required.',
      icon: Settings
    },
    {
      title: 'Real-Time Analytics & AI Insights',
      description: 'Get actionable insights powered by AI that help you make data-driven decisions to grow your business.',
      icon: BarChart3
    }
  ];

  const benefits = [
    'Increase organic traffic by up to 300%',
    'Boost conversion rates with smart optimization',
    'Save 20+ hours per week on manual tasks',
    'Scale globally with multi-language AI support',
    'Get real-time performance insights',
    'Automate repetitive marketing workflows'
  ];

  return (
    <Layout>
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              to="/blog"
              className="inline-flex items-center text-slate-400 hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>

          {/* Blog Header */}
          <article className="bg-slate-900/50 backdrop-blur rounded-2xl border border-slate-800 overflow-hidden">
            {/* Featured Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img 
                src="https://mocha-cdn.com/0199a16e-4e5e-783a-bb44-229227969afa/zyra-hero-image.jpg"
                alt="ZYRA - The Future of AI-Powered eCommerce"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-purple-600/90 text-white text-sm rounded-full">
                    Product Updates
                  </span>
                  <div className="flex items-center text-slate-300 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    8 min read
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div className="p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                ZYRA – The Future of AI-Powered eCommerce
              </h1>

              <div className="flex flex-wrap items-center justify-between mb-8 text-slate-400 text-sm border-b border-slate-800 pb-6">
                <div className="flex items-center space-x-6 mb-4 md:mb-0">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span>Ankit Rathor</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>December 15, 2024</span>
                  </div>
                </div>
                <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['ZYRA', 'AI for Shopify', 'eCommerce automation', 'Anthor AI'].map((tag, index) => (
                  <span key={index} className="inline-flex items-center px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Introduction */}
              <div className="prose prose-lg prose-invert max-w-none">
                <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-xl p-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white mb-3">Introducing ZYRA</h2>
                      <p className="text-slate-300 leading-relaxed">
                        At Anthor AI, we've revolutionized how Shopify merchants approach e-commerce with ZYRA – 
                        our flagship AI-powered suite that transforms ordinary Shopify stores into intelligent, 
                        self-optimizing sales machines. Built from the ground up with cutting-edge artificial 
                        intelligence, ZYRA empowers merchants to automate complex workflows, optimize for maximum 
                        conversions, and scale globally with unprecedented efficiency.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                  The e-commerce landscape is evolving rapidly, and success today requires more than just great products. 
                  It demands intelligent automation, data-driven optimization, and the ability to adapt in real-time to 
                  changing market conditions. That's why we created ZYRA – to give Shopify merchants the AI advantage 
                  they need to thrive in the modern digital marketplace.
                </p>

                {/* Core Features Section */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                    <Zap className="w-6 h-6 mr-3 text-blue-400" />
                    Core Features That Transform Your Business
                  </h2>
                  
                  <div className="space-y-8">
                    {features.map((feature, index) => (
                      <div key={index} className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex-shrink-0">
                            <feature.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Why ZYRA is Different */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-white mb-6">Why ZYRA Stands Apart</h2>
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-8 border border-slate-700">
                    <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                      Unlike traditional e-commerce tools that require constant manual intervention, ZYRA operates 
                      with intelligent autonomy. Our AI doesn't just analyze data – it acts on it, making real-time 
                      optimizations that traditional tools simply can't match.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">⚡ Lightning Speed</h3>
                        <p className="text-slate-400">
                          Process and optimize thousands of products in seconds, not hours.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">🤖 True Automation</h3>
                        <p className="text-slate-400">
                          Set it once, let AI handle everything from SEO to conversion optimization.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">🧠 Intelligent Workflows</h3>
                        <p className="text-slate-400">
                          AI that learns from your store's unique patterns and customer behavior.
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">🌍 Global Scale</h3>
                        <p className="text-slate-400">
                          Multi-language, multi-currency support powered by advanced AI translation.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Benefits */}
                <section className="mb-12">
                  <h2 className="text-2xl font-bold text-white mb-6">What ZYRA Delivers</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Vision Section */}
                <section className="mb-12">
                  <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-700/50 rounded-xl p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-4">Our Vision for the Future</h2>
                        <p className="text-slate-300 leading-relaxed text-lg">
                          ZYRA represents more than just a product – it embodies Anthor AI's mission to democratize 
                          artificial intelligence for businesses worldwide. We envision a future where every entrepreneur, 
                          regardless of their technical background, can harness the full power of AI to build and scale 
                          their business globally.
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      As we continue to expand our AI SaaS portfolio, ZYRA serves as the foundation for what's possible 
                      when cutting-edge technology meets practical business needs. We're not just building tools – 
                      we're crafting the future of intelligent business automation.
                    </p>
                  </div>
                </section>

                {/* Call to Action */}
                <section className="text-center">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur rounded-2xl border border-slate-700 p-12">
                    <div className="max-w-2xl mx-auto">
                      <h2 className="text-3xl font-bold text-white mb-6">
                        Ready to Transform Your Shopify Store?
                      </h2>
                      <p className="text-xl text-slate-300 mb-8">
                        Join thousands of merchants already using ZYRA to supercharge their Shopify growth with AI. 
                        Experience the future of e-commerce automation today.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                          to="/contact"
                          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
                        >
                          <Zap className="w-5 h-5 mr-2" />
                          Try ZYRA Today
                        </Link>
                        <Link
                          to="/products"
                          className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-slate-800/50 inline-flex items-center justify-center"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/blog/building-scalable-ai-solutions" className="group">
                <div className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-6 hover:border-slate-700 transition-all duration-300 hover:transform hover:scale-105">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    Building Scalable AI Solutions: Lessons from 1000+ Implementations
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Key insights and best practices learned from implementing AI solutions across diverse industries.
                  </p>
                  <div className="flex items-center text-slate-500 text-sm">
                    <User className="w-4 h-4 mr-2" />
                    <span>Ankit Rathor • 12 min read</span>
                  </div>
                </div>
              </Link>
              
              <Link to="/blog/ai-ecommerce-trends-2024" className="group">
                <div className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-6 hover:border-slate-700 transition-all duration-300 hover:transform hover:scale-105">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    AI in E-commerce: 2024 Trends and Predictions
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Explore the latest trends in AI-powered e-commerce and what's coming next.
                  </p>
                  <div className="flex items-center text-slate-500 text-sm">
                    <User className="w-4 h-4 mr-2" />
                    <span>Anthor AI Team • 6 min read</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
