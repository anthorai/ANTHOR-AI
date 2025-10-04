import { useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Clock, User, Tag, Home, ChevronRight } from 'lucide-react';
import Layout from '@/react-app/components/Layout';
import { productUpdatesArticles } from '@/react-app/data/blogArticles';

export default function ProductUpdates() {
  useEffect(() => {
    document.title = 'Anthor AI Product Updates | Latest Features & Improvements';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover the newest features, improvements, and roadmap updates from Anthor AI.');
    }
  }, []);

  return (
    <Layout>
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm text-slate-400 mb-8">
            <Link to="/" className="hover:text-cyan-400 transition-colors flex items-center">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/blog" className="hover:text-cyan-400 transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-cyan-400 font-semibold">Product Updates</span>
          </nav>

          {/* Hero Section */}
          <div className="relative mb-16 overflow-hidden rounded-3xl"
            style={{
              background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))',
              boxShadow: '0 8px 32px rgba(168, 85, 247, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
            <div className="relative px-8 py-16 md:py-24">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Anthor AI Product Updates
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl">
                Discover the newest features, improvements, and roadmap updates from Anthor AI.
              </p>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">
                {productUpdatesArticles.length} Articles
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {productUpdatesArticles.map((article) => (
                <article key={article.id} className="group">
                  <div className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20">
                    <div className="relative overflow-hidden">
                      <img 
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-purple-600/90 text-white text-sm rounded-full">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-slate-400 text-sm mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            <span className="italic">{article.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {article.readTime}
                          </div>
                        </div>
                        <span>{article.date}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="inline-flex items-center px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        to={`/blog/${article.slug}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Back to Blog Home Button */}
          <div className="flex justify-center">
            <Link 
              to="/blog"
              className="inline-flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-cyan-400/50"
            >
              ← Back to Blog Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
