import { useEffect } from 'react';
import { Link } from 'react-router';
import { Users, Target, Lightbulb, Clock, Award, Globe } from 'lucide-react';
import Layout from '@/react-app/components/Layout';

export default function About() {
  useEffect(() => {
    document.title = 'About Anthor AI — Our Story & Mission';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Learn about Anthor AI's mission, vision, and founder Ankit Rathor — building a top AI SaaS company from the ground up.");
    }
  }, []);

  return (
    <Layout>
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              About Anthor AI
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Building the future of AI-powered software development and enterprise solutions
            </p>
          </div>
          
          {/* Founder Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur rounded-2xl border border-slate-700 p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-blue-900/30 backdrop-blur-sm rounded-full border border-blue-700/50 mb-6">
                    <Users className="w-4 h-4 text-blue-400 mr-2" />
                    <span className="text-sm text-blue-300">Founder & Lead Engineer</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-6">Ankit Rathor</h2>
                  <p className="text-slate-300 text-lg leading-relaxed italic">
                    Founder of Anthor AI, combining deep technical expertise with entrepreneurial vision 
                    to deliver enterprise-grade AI products that empower businesses globally and transform 
                    complex challenges into actionable solutions.
                  </p>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-blue-500/30">
                    <img
                      src="https://mocha-cdn.com/0199a16e-4e5e-783a-bb44-229227969afa/OFFICE-DP.jpg"
                      alt="Ankit Rathor, Founder of Anthor AI"
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission, Vision, Values */}
          <section className="mb-20">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: 'Our Mission',
                  description: 'To democratize AI technology by building enterprise-grade solutions that are accessible, reliable, and transformative for businesses of all sizes.',
                  gradient: 'from-blue-500 to-purple-600'
                },
                {
                  icon: Lightbulb,
                  title: 'Our Vision',
                  description: 'A world where every business has access to intelligent automation and AI-powered insights that drive growth, efficiency, and innovation.',
                  gradient: 'from-purple-500 to-pink-500'
                },
                {
                  icon: Award,
                  title: 'Our Values',
                  description: 'Innovation-first mindset, customer-centric approach, responsible AI development, and commitment to transparency and ethical technology.',
                  gradient: 'from-pink-500 to-blue-500'
                }
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 h-full hover:border-slate-700 transition-all duration-300 hover:transform hover:scale-105">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Journey</h2>
              <p className="text-xl text-slate-300">Key milestones in our mission to transform AI</p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  year: '2023',
                  title: 'Company Founded',
                  description: 'Ankit Rathor establishes Anthor AI with a vision to democratize artificial intelligence for enterprises worldwide.'
                },
                {
                  year: '2024',
                  title: 'ZYRA Launch',
                  description: 'Launch of ZYRA Shopify Suite, our flagship AI-powered e-commerce optimization platform, serving hundreds of merchants globally.'
                },
                {
                  year: '2024',
                  title: 'Global Expansion',
                  description: 'Expanded operations internationally, establishing partnerships across North America, Europe, and Asia-Pacific regions.'
                },
                {
                  year: '2025',
                  title: 'Future Vision',
                  description: 'Developing next-generation AI tools and expanding our enterprise solutions portfolio to serve Fortune 500 companies.'
                }
              ].map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-6 flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur rounded-2xl border border-slate-700 p-12">
              <Globe className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-6">Join Our Mission</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Ready to be part of the AI revolution? Explore career opportunities 
                and help us build the future of intelligent software.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Meet the Team
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
