import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  Building,
  User,
  CheckCircle
} from 'lucide-react';
import Layout from '@/react-app/components/Layout';
import SEO from '@/react-app/components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    reason: '',
    message: '',
    gdprConsent: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        reason: '',
        message: '',
        gdprConsent: false
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="pt-20 pb-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur rounded-2xl border border-slate-700 p-12">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-6">Thank You!</h2>
              <p className="text-xl text-slate-300 mb-4">
                Your message has been received successfully.
              </p>
              <p className="text-slate-400">
                Our team will get back to you within 24 hours via email.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO 
        title="Connect with Anthor AI for AI Solutions and Partnership Opportunities"
        description="Contact Anthor AI for enterprise AI solutions, partnerships, ZYRA Shopify Suite demos, and custom AI development. Get in touch with our team in Bengaluru, India."
        canonical={`${window.location.origin}/contact`}
        keywords="contact Anthor AI, AI consultation, enterprise AI partnership, ZYRA demo, AI solutions contact"
        ogType="website"
      />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-900/30 backdrop-blur-sm rounded-full border border-green-700/50 mb-6">
              <MessageCircle className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm text-green-300">Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get in touch with our team for partnerships, support, or inquiries
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-slate-900/50 backdrop-blur rounded-2xl border border-slate-800 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-11 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-11 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                        Company
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-11 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="Your company"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                        Phone (Optional)
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-11 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="reason" className="block text-sm font-medium text-slate-300 mb-2">
                      Reason for Contact *
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      required
                      value={formData.reason}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select a reason</option>
                      <option value="general">General Inquiry</option>
                      <option value="sales">Sales & Demos</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunities</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="gdprConsent"
                      name="gdprConsent"
                      required
                      checked={formData.gdprConsent}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-blue-600 bg-slate-800 border-slate-700 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <label htmlFor="gdprConsent" className="text-sm text-slate-300">
                      I agree to the processing of my personal data in accordance with Anthor AI's privacy policy and consent to receive communications about products and services. *
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Business Info */}
              <div className="bg-slate-900/50 backdrop-blur rounded-2xl border border-slate-800 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email</h3>
                      <a href="mailto:hello@anthorai.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                        hello@anthorai.com
                      </a>
                      <p className="text-slate-400 text-sm mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Phone</h3>
                      <span className="text-slate-300">+1 (555) 123-4567</span>
                      <p className="text-slate-400 text-sm mt-1">Mon-Fri, 9 AM - 6 PM PST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Office</h3>
                      <div className="text-slate-300">
                        <p>Anthor AI Technologies</p>
                        <p>Innov8 Tech Park,</p>
                        <p>Bengaluru, India</p>
                      </div>
                      <p className="text-slate-400 text-sm mt-1">Global operations, local support</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="bg-slate-900/50 backdrop-blur rounded-2xl border border-slate-800 p-8">
                <h3 className="text-xl font-bold text-white mb-4">Our Location</h3>
                <div className="bg-slate-800 rounded-lg h-64 flex items-center justify-center border border-slate-700">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                    <p className="text-slate-400">Interactive map integration</p>
                    <p className="text-slate-500 text-sm">Coming soon</p>
                  </div>
                </div>
              </div>
              
              {/* Quick Links */}
              <div className="bg-slate-900/50 backdrop-blur rounded-2xl border border-slate-800 p-8">
                <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a href="/products" className="block text-blue-400 hover:text-blue-300 transition-colors">
                    → Explore ZYRA Shopify Suite
                  </a>
                  <a href="/services" className="block text-blue-400 hover:text-blue-300 transition-colors">
                    → Custom AI Development
                  </a>
                  <a href="/about" className="block text-blue-400 hover:text-blue-300 transition-colors">
                    → Meet Our Team
                  </a>
                  <a href="/blog" className="block text-blue-400 hover:text-blue-300 transition-colors">
                    → Read Our Blog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
