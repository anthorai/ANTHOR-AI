import { Link } from 'react-router';
import { 
  BookOpen, 
  ArrowRight, 
  Clock, 
  User, 
  Tag,
  TrendingUp,
  Lightbulb,
  Newspaper
} from 'lucide-react';
import Layout from '@/react-app/components/Layout';
import SEO from '@/react-app/components/SEO';

export default function Blog() {
  const categories = [
    { name: 'AI News', count: 12, icon: Newspaper, color: 'from-blue-500 to-cyan-500', path: '/blog/ai-news' },
    { name: 'Product Updates', count: 8, icon: TrendingUp, color: 'from-purple-500 to-pink-500', path: '/blog/product-updates' },
    { name: 'Business Insights', count: 15, icon: Lightbulb, color: 'from-cyan-500 to-purple-500', path: '/blog/business-insights' }
  ];

  const featuredPosts = [
    {
      title: 'ZYRA – Revolutionizing Shopify with AI',
      excerpt: 'Discover how ZYRA transforms Shopify stores with AI-powered SEO, automation, and smart optimization.',
      author: 'ANKIT RATHOR',
      date: 'December 15, 2024',
      readTime: '8 min read',
      category: 'Product Updates',
      image: 'https://mocha-cdn.com/0199a16e-4e5e-783a-bb44-229227969afa/zyra-blog-card.jpg',
      tags: ['ZYRA', 'AI for Shopify', 'eCommerce automation', 'Anthor AI'],
      slug: 'zyra-revolutionizing-shopify-with-ai'
    },
    {
      title: 'ZYRA 2.0: Enhanced Analytics and Predictive Intelligence',
      excerpt: 'Announcing major updates to ZYRA with advanced analytics, predictive modeling, and new automation features for Shopify merchants.',
      author: 'Anthor AI Team',
      date: 'December 10, 2024', 
      readTime: '5 min read',
      category: 'Product Updates',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop',
      tags: ['ZYRA', 'Update', 'Analytics', 'Features']
    },
    {
      title: 'Building Scalable AI Solutions: Lessons from 1000+ Implementations',
      excerpt: 'Key insights and best practices learned from implementing AI solutions across diverse industries and business sizes.',
      author: 'ANKIT RATHOR',
      date: 'December 5, 2024',
      readTime: '12 min read',
      category: 'Business Insights',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop',
      tags: ['AI', 'Scalability', 'Best Practices', 'Enterprise']
    }
  ];

  const recentPosts = [
    {
      title: 'How AI is Revolutionizing Customer Support in 2024',
      author: 'Sarah Chen',
      date: 'December 12, 2024',
      category: 'AI News',
      readTime: '6 min read'
    },
    {
      title: 'ZYRA Integration: New Shopify Plus Features',
      author: 'Dev Team',
      date: 'December 8, 2024',
      category: 'Product Updates',
      readTime: '4 min read'
    },
    {
      title: 'ROI Analysis: Measuring AI Implementation Success',
      author: 'Analytics Team',
      date: 'December 3, 2024',
      category: 'Business Insights',
      readTime: '10 min read'
    },
    {
      title: 'Machine Learning Model Optimization Strategies',
      author: 'ANKIT RATHOR',
      date: 'November 28, 2024',
      category: 'AI News',
      readTime: '8 min read'
    }
  ];

  return (
    <Layout>
      <SEO 
        title="AI News, Product Updates, and Business Insights"
        description="Stay ahead with Anthor AI's latest insights on AI technology, ZYRA product updates, business automation strategies, and industry trends in artificial intelligence."
        canonical={`${window.location.origin}/blog`}
        keywords="AI news, AI blog, product updates, business insights, AI trends, ZYRA updates, AI SaaS blog"
        ogType="website"
      />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-900/30 backdrop-blur-sm rounded-full border border-green-700/50 mb-6">
              <BookOpen className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm text-green-300">Latest Insights</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Blog
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Insights on AI, technology, and the future of software development
            </p>
          </div>
          
          {/* Categories */}
          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <Link key={index} to={category.path} className="group">
                  <div className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-6 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-cyan-400/20">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-slate-400 mb-4">{category.count} articles</p>
                    <div className="flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors text-sm">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Featured Posts */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">Featured Articles</h2>
              <Link 
                to="/blog/all"
                className="text-blue-400 hover:text-blue-300 font-semibold flex items-center transition-colors"
              >
                View All
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <article key={index} className="group">
                  <div className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 overflow-hidden hover:border-slate-700 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-600/90 text-white text-sm rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-slate-400 text-sm mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            <span className="italic">{post.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <span>{post.date}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="inline-flex items-center px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        to={`/blog/${post.slug || post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Recent Posts */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Recent Posts</h2>
            
            <div className="space-y-6">
              {recentPosts.map((post, index) => (
                <article key={index} className="group">
                  <div className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-6 hover:border-slate-700 transition-all duration-300 hover:transform hover:scale-[1.02]">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full">
                            {post.category}
                          </span>
                          <div className="flex items-center text-slate-400 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {post.title}
                        </h3>
                        
                        <div className="flex items-center text-slate-400 text-sm">
                          <User className="w-4 h-4 mr-1" />
                          <span className="mr-4 italic">{post.author}</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                      
                      <Link 
                        to={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        className="ml-6 flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                      >
                        Read
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur rounded-2xl border border-slate-700 p-12">
              <BookOpen className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Get the latest AI insights, product updates, and industry trends 
                delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
