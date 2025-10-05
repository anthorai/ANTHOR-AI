import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router';
import { Home, ChevronRight, Clock, User, Tag, ArrowLeft } from 'lucide-react';
import Layout from '@/react-app/components/Layout';
import { allArticles } from '@/react-app/data/blogArticles';

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = allArticles.find(a => a.slug === slug);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Anthor AI Blog`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', article.excerpt);
      }
    }
  }, [article]);

  if (!article) {
    return (
      <Layout>
        <div className="pt-20 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Article Not Found</h1>
            <p className="text-slate-400 mb-8">The article you're looking for doesn't exist.</p>
            <Link 
              to="/blog"
              className="inline-flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-cyan-400/50"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="text-cyan-400 font-semibold truncate">{article.category}</span>
          </nav>

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-slate-400 hover:text-cyan-400 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back
          </button>

          {/* Article Header */}
          <article>
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-cyan-600/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30 mb-6">
                {article.category}
              </span>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-slate-400 mb-6">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  <span className="italic font-medium">{article.author}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{article.readTime}</span>
                </div>
                <span>{article.date}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-lg border border-slate-700"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={article.image}
                alt={article.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 mb-8">
                <p className="text-xl text-slate-300 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                
                <div className="space-y-6 text-slate-300">
                  {article.content && article.content.sections ? (
                    <>
                      {article.content.introduction && (
                        <p className="text-lg leading-relaxed whitespace-pre-line">
                          {article.content.introduction}
                        </p>
                      )}
                      
                      {article.content.sections.map((section, index) => (
                        <div key={index} className="mt-8">
                          <h2 className="text-2xl font-bold text-white mb-4">
                            {section.heading}
                          </h2>
                          <p className="leading-relaxed whitespace-pre-line">
                            {section.content}
                          </p>
                        </div>
                      ))}
                      
                      {article.content.conclusion && (
                        <>
                          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Conclusion</h2>
                          <p className="leading-relaxed whitespace-pre-line">
                            {article.content.conclusion}
                          </p>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <p>
                        This is a demo article showcasing the blog functionality of Anthor AI. 
                        In a production environment, this would contain the full article content 
                        with rich text, images, code snippets, and other media.
                      </p>
                      
                      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Highlights</h2>
                      <ul className="list-disc list-inside space-y-2 text-slate-300">
                        <li>Deep insights into {article.category.toLowerCase()} trends</li>
                        <li>Practical examples and real-world applications</li>
                        <li>Expert analysis from the Anthor AI team</li>
                        <li>Actionable takeaways for your business</li>
                      </ul>
                      
                      <h2 className="text-2xl font-bold text-white mt-8 mb-4">Conclusion</h2>
                      <p>
                        Stay tuned for more insights from Anthor AI. Subscribe to our newsletter 
                        to get the latest updates on AI technology, product announcements, and 
                        business strategies delivered to your inbox.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-slate-800">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link 
                  to="/blog"
                  className="inline-flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-cyan-400/50"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back to Blog
                </Link>
                
                <div className="flex items-center space-x-3">
                  <span className="text-slate-400 text-sm">Share this article:</span>
                  <div className="flex space-x-2">
                    <a 
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                      aria-label="Share on Twitter"
                    >
                      <svg className="w-5 h-5 text-slate-400 hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                      aria-label="Share on LinkedIn"
                    >
                      <svg className="w-5 h-5 text-slate-400 hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
}
