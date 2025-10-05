import { useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Mail, Shield, Lock, Eye, Database, UserCheck, Globe } from 'lucide-react';
import Layout from '@/react-app/components/Layout';
import SEO from '@/react-app/components/SEO';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEO 
        title="Privacy Policy | Anthor AI"
        description="Learn how Anthor AI collects, uses, and protects your personal data securely."
        canonical={`${window.location.origin}/privacy`}
        keywords="privacy policy, data protection, security, GDPR, data privacy"
        ogType="website"
      />
      
      <div className="pt-20 pb-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-900/30 backdrop-blur-sm rounded-full border border-blue-700/50 mb-6">
              <Shield className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-sm text-blue-300">Legal Documents</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              🔒 Privacy Policy
            </h1>
            
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              At Anthor AI, we respect your privacy and are committed to protecting your personal data. 
              This Privacy Policy explains how we collect, use, and safeguard your information.
            </p>
            
            <p className="text-sm text-slate-400">
              Effective Date: <span className="text-cyan-400">October 5, 2025</span>
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Introduction */}
            <section className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-cyan-400/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Anthor AI ("we," "our," or "us") is committed to protecting the privacy and security of your personal information. 
                This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you use our AI SaaS 
                platform, website, and related services (collectively, the "Services").
              </p>
              <p className="text-slate-300 leading-relaxed mt-4">
                By accessing or using our Services, you agree to the terms of this Privacy Policy. If you do not agree with our 
                policies and practices, please do not use our Services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-cyan-400/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">2. Information We Collect</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.1 Personal Information</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                <li>Account information (name, email address, password)</li>
                <li>Profile information (company name, job title, profile picture)</li>
                <li>Payment information (billing address, payment method details)</li>
                <li>Communication data (support tickets, feedback, survey responses)</li>
                <li>Content you create or upload through our Services</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                When you use our Services, we automatically collect certain information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                <li>Usage data (features used, time spent, interaction patterns)</li>
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Log data (access times, pages viewed, referring URLs)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">2.3 Information from Third Parties</h3>
              <p className="text-slate-300 leading-relaxed">
                We may receive information about you from third-party services you connect to our platform, such as 
                authentication providers, payment processors, and analytics services.
              </p>
            </section>

            {/* How We Use Your Information */}
            <section className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-cyan-400/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <UserCheck className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">3. How We Use Your Information</h2>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                <li>To provide, maintain, and improve our Services</li>
                <li>To process transactions and send related information</li>
                <li>To send technical notices, updates, and security alerts</li>
                <li>To respond to your comments, questions, and customer service requests</li>
                <li>To communicate about products, services, offers, and events</li>
                <li>To monitor and analyze trends, usage, and activities</li>
                <li>To detect, prevent, and address technical issues and fraudulent activity</li>
                <li>To personalize and improve your experience</li>
                <li>To train and improve our AI models (with appropriate safeguards)</li>
                <li>To comply with legal obligations and enforce our terms</li>
              </ul>
            </section>

            {/* Information Sharing and Disclosure */}
            <section className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-cyan-400/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">4. Information Sharing and Disclosure</h2>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.1 Service Providers</h3>
              <p className="text-slate-300 leading-relaxed">
                We may share your information with third-party service providers who perform services on our behalf, 
                such as payment processing, data analysis, email delivery, hosting services, and customer service.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.2 Business Transfers</h3>
              <p className="text-slate-300 leading-relaxed">
                If we are involved in a merger, acquisition, or sale of assets, your information may be transferred 
                as part of that transaction.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.3 Legal Requirements</h3>
              <p className="text-slate-300 leading-relaxed">
                We may disclose your information if required to do so by law or in response to valid requests by 
                public authorities (e.g., a court or government agency).
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.4 With Your Consent</h3>
              <p className="text-slate-300 leading-relaxed">
                We may share your information for any other purpose with your consent.
              </p>
            </section>

            {/* Data Security */}
            <section className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-cyan-400/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">5. Data Security</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4 mt-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection and security</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
              <p className="text-slate-300 leading-relaxed mt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive 
                to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            {/* Your Rights */}
            <section className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-cyan-400/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">6. Your Rights and Choices</h2>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                <li><strong className="text-white">Access:</strong> Request access to your personal information</li>
                <li><strong className="text-white">Correction:</strong> Request correction of inaccurate data</li>
                <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information</li>
                <li><strong className="text-white">Portability:</strong> Request a copy of your data in a structured format</li>
                <li><strong className="text-white">Objection:</strong> Object to certain processing of your information</li>
                <li><strong className="text-white">Restriction:</strong> Request restriction of processing</li>
                <li><strong className="text-white">Withdrawal:</strong> Withdraw consent where we rely on consent</li>
              </ul>
              <p className="text-slate-300 leading-relaxed mt-4">
                To exercise these rights, please contact us at <a href="mailto:support@anthorai.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">support@anthorai.com</a>.
              </p>
            </section>

            {/* Data Retention */}
            <section className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-cyan-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
              <p className="text-slate-300 leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
                unless a longer retention period is required or permitted by law. When we no longer need your information, we will 
                securely delete or anonymize it.
              </p>
            </section>

            {/* International Data Transfers */}
            <section className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-cyan-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-4">8. International Data Transfers</h2>
              <p className="text-slate-300 leading-relaxed">
                Your information may be transferred to and maintained on servers located outside of your country, where data 
                protection laws may differ. We ensure appropriate safeguards are in place to protect your information in accordance 
                with this Privacy Policy and applicable laws.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-cyan-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
              <p className="text-slate-300 leading-relaxed">
                Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information 
                from children. If we become aware that we have collected personal information from a child without parental consent, 
                we will take steps to delete that information.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-cyan-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-slate-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new 
                Privacy Policy on this page and updating the "Effective Date" at the top. Your continued use of our Services after 
                any changes constitutes your acceptance of the updated Privacy Policy.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur rounded-xl border border-cyan-400/50 p-8">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">📩 Contact Us</h2>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                <p className="text-white font-semibold mb-2">Anthor AI Privacy Team</p>
                <p className="text-slate-300">Email: <a href="mailto:support@anthorai.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">support@anthorai.com</a></p>
                <p className="text-slate-300 mt-2">Address: Anthor AI Technologies, Innov8 Tech Park, Bengaluru, India</p>
              </div>
            </section>
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Link 
              to="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-400/50"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
