import { Link } from 'react-router';
import { 
  Code, 
  Puzzle, 
  Workflow, 
  BarChart, 
  Headphones, 
  Cpu,
  Database,
  Cloud,
  Shield,
  Zap,
  Users
} from 'lucide-react';
import Layout from '@/react-app/components/Layout';
import SEO from '@/react-app/components/SEO';

export default function Services() {
  return (
    <Layout>
      <SEO 
        title="Custom AI Development & Enterprise Integration Services"
        description="Bespoke AI engineering, enterprise integrations, workflow automation, and analytics solutions. Transform your business with custom AI development from Anthor AI."
        canonical={`${window.location.origin}/services`}
        keywords="custom AI development, AI consulting services, enterprise AI integration, AI workflow automation, machine learning services"
        ogType="website"
      />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-900/30 backdrop-blur-sm rounded-full border border-blue-700/50 mb-6">
              <Code className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-sm text-blue-300">Enterprise AI Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive AI software development and enterprise solutions
            </p>
          </div>
          
          {/* Main Services Grid */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Code,
                  title: 'Custom AI Development',
                  description: 'Bespoke AI solutions tailored to your business needs, from machine learning models to intelligent automation systems.',
                  features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: Puzzle,
                  title: 'Enterprise Integrations', 
                  description: 'Seamless integration of AI capabilities into your existing systems and workflows with minimal disruption.',
                  features: ['API Development', 'Legacy System Integration', 'Cloud Migration', 'Data Pipeline Setup'],
                  gradient: 'from-cyan-500 to-purple-500'
                },
                {
                  icon: Workflow,
                  title: 'Workflow Orchestration',
                  description: 'Intelligent automation that streamlines complex business processes and enhances operational efficiency.',
                  features: ['Process Automation', 'Task Scheduling', 'Decision Trees', 'Workflow Optimization'],
                  gradient: 'from-purple-500 to-pink-500'
                },
                {
                  icon: BarChart,
                  title: 'Data Analytics',
                  description: 'Advanced analytics platforms that transform raw data into actionable business insights and strategic decisions.',
                  features: ['Business Intelligence', 'Real-time Dashboards', 'Reporting Tools', 'KPI Tracking'],
                  gradient: 'from-pink-500 to-blue-500'
                },
                {
                  icon: Headphones,
                  title: 'Support & Maintenance',
                  description: '24/7 dedicated support with proactive monitoring, updates, and optimization of your AI systems.',
                  features: ['24/7 Monitoring', 'Regular Updates', 'Performance Optimization', 'Technical Support'],
                  gradient: 'from-blue-500 to-purple-500'
                }
              ].map((service, index) => (
                <div key={index} className={`group ${index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}>
                  <div className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 h-full hover:border-slate-700 transition-all duration-300 hover:transform hover:scale-105">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-slate-300 leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-400 text-sm">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Development Process</h2>
              <p className="text-xl text-slate-300">From consultation to deployment, we ensure excellence at every step</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Planning',
                  description: 'We analyze your business needs and create a comprehensive AI strategy.',
                  icon: Users
                },
                {
                  step: '02', 
                  title: 'Development & Testing',
                  description: 'Our team builds and rigorously tests your custom AI solution.',
                  icon: Cpu
                },
                {
                  step: '03',
                  title: 'Integration & Deployment',
                  description: 'Seamless integration into your existing systems with minimal downtime.',
                  icon: Cloud
                },
                {
                  step: '04',
                  title: 'Support & Optimization',
                  description: 'Ongoing support, monitoring, and continuous improvement of your AI systems.',
                  icon: Shield
                }
              ].map((process, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-6 hover:border-slate-700 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <process.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{process.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technology Stack */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Technology Stack</h2>
              <p className="text-xl text-slate-300">Cutting-edge tools and frameworks for superior AI solutions</p>
            </div>
            
            <div className="bg-slate-900/50 backdrop-blur rounded-2xl border border-slate-800 p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    category: 'AI & Machine Learning',
                    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI GPT', 'Hugging Face', 'LangChain'],
                    icon: Cpu
                  },
                  {
                    category: 'Cloud & Infrastructure',
                    technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Cloudflare'],
                    icon: Cloud
                  },
                  {
                    category: 'Development & Data',
                    technologies: ['Python', 'Node.js', 'React', 'PostgreSQL', 'MongoDB', 'Redis'],
                    icon: Database
                  }
                ].map((stack, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <stack.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-4">{stack.category}</h3>
                    <div className="space-y-2">
                      {stack.technologies.map((tech, idx) => (
                        <div key={idx} className="inline-block bg-slate-800/50 text-slate-300 px-3 py-1 rounded-full text-sm mx-1 mb-2">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur rounded-2xl border border-slate-700 p-12">
              <Zap className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI services can drive innovation and growth 
                for your organization. Get started with a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Contact Sales
                </Link>
                <Link
                  to="/contact"
                  className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-slate-800/50"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
