import { useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Mail, Scale, FileText, AlertCircle, Users, Ban, CreditCard } from 'lucide-react';
import Layout from '@/react-app/components/Layout';
import SEO from '@/react-app/components/SEO';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEO 
        title="Terms of Service | Anthor AI"
        description="Review Anthor AI's Terms of Service outlining user responsibilities and legal guidelines."
        canonical={`${window.location.origin}/terms`}
        keywords="terms of service, legal, user agreement, terms and conditions"
        ogType="website"
      />
      
      <div className="pt-20 pb-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-purple-900/30 backdrop-blur-sm rounded-full border border-purple-700/50 mb-6">
              <Scale className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm text-purple-300">Legal Agreement</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              ⚖️ Terms of Service
            </h1>
            
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-4">
              Please read these Terms of Service carefully before using Anthor AI's platform and services.
            </p>
            
            <p className="text-sm text-slate-400">
              Effective Date: <span className="text-cyan-400">October 5, 2025</span>
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <section className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-purple-400/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-purple-400 mr-3" />
                <h2 className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">1. Acceptance of Terms</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                By accessing or using Anthor AI's platform, website, or services (collectively, the "Services"), you agree to be 
                bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our Services.
              </p>
              <p className="text-slate-300 leading-relaxed mt-4">
                These Terms constitute a legally binding agreement between you and Anthor AI ("Company," "we," "our," or "us"). 
                We reserve the right to modify these Terms at any time, and your continued use of the Services constitutes acceptance 
                of any changes.
              </p>
            </section>

            {/* Eligibility */}
            <section className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-purple-400/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-purple-400 mr-3" />
                <h2 className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">2. Eligibility</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                You must be at least 18 years old and capable of forming a binding contract to use our Services. By using our Services, 
                you represent and warrant that you meet these eligibility requirements.
              </p>
              <p className="text-slate-300 leading-relaxed mt-4">
                If you are using the Services on behalf of an organization, you represent that you have the authority to bind that 
                organization to these Terms.
              </p>
            </section>

            {/* Account Registration */}
            <section className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-purple-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-4 hover:text-purple-400 transition-colors">3. Account Registration and Security</h2>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.1 Account Creation</h3>
              <p className="text-slate-300 leading-relaxed">
                To access certain features of our Services, you must create an account. You agree to provide accurate, current, and 
                complete information during registration and to update such information to keep it accurate.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.2 Account Security</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access or security breach</li>
                <li>Ensuring your account information remains accurate and up-to-date</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.3 Account Termination</h3>
              <p className="text-slate-300 leading-relaxed">
                We reserve the right to suspend or terminate your account at any time for violation of these Terms or for any other 
                reason at our sole discretion.
              </p>
            </section>

            {/* Use of Services */}
            <section className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-purple-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-4 hover:text-purple-400 transition-colors">4. Use of Services</h2>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.1 License Grant</h3>
              <p className="text-slate-300 leading-relaxed">
                Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use 
                our Services for your internal business purposes.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.2 Acceptable Use</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Use the Services for any fraudulent or malicious purpose</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with or disrupt the integrity or performance of the Services</li>
                <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
                <li>Use automated means to access the Services without our permission</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Impersonate any person or entity</li>
                <li>Collect or store personal data about other users without consent</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-purple-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-4 hover:text-purple-400 transition-colors">5. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.1 Our Intellectual Property</h3>
              <p className="text-slate-300 leading-relaxed">
                The Services, including all content, features, functionality, software, and technology, are owned by Anthor AI or our 
                licensors and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.2 Your Content</h3>
              <p className="text-slate-300 leading-relaxed">
                You retain all rights to any content you submit, upload, or create through the Services ("User Content"). By submitting 
                User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such 
                content solely to provide and improve our Services.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.3 Feedback</h3>
              <p className="text-slate-300 leading-relaxed">
                Any feedback, suggestions, or ideas you provide about our Services may be used by us without any obligation to you.
              </p>
            </section>

            {/* Payment Terms */}
            <section className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-purple-400/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <CreditCard className="w-6 h-6 text-purple-400 mr-3" />
                <h2 className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">6. Payment and Subscription Terms</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.1 Fees</h3>
              <p className="text-slate-300 leading-relaxed">
                Certain features of our Services may require payment of fees. You agree to pay all applicable fees as described in your 
                subscription plan. All fees are non-refundable unless otherwise stated.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.2 Billing</h3>
              <p className="text-slate-300 leading-relaxed">
                For subscription services, you authorize us to charge your payment method on a recurring basis. You are responsible for 
                maintaining valid payment information.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.3 Price Changes</h3>
              <p className="text-slate-300 leading-relaxed">
                We reserve the right to change our pricing with at least 30 days' notice. Continued use of the Services after a price 
                change constitutes acceptance of the new pricing.
              </p>
            </section>

            {/* Privacy */}
            <section className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-purple-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-4 hover:text-purple-400 transition-colors">7. Privacy</h2>
              <p className="text-slate-300 leading-relaxed">
                Your use of our Services is subject to our Privacy Policy, which is incorporated into these Terms by reference. Please 
                review our{' '}
                <Link to="/privacy" className="text-cyan-400 hover:text-cyan-300 transition-colors underline">
                  Privacy Policy
                </Link>
                {' '}to understand how we collect, use, and protect your information.
              </p>
            </section>

            {/* Disclaimers */}
            <section className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-purple-400/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <AlertCircle className="w-6 h-6 text-purple-400 mr-3" />
                <h2 className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">8. Disclaimers and Limitations of Liability</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">8.1 Service Availability</h3>
              <p className="text-slate-300 leading-relaxed">
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE THAT THE 
                SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">8.2 Limitation of Liability</h3>
              <p className="text-slate-300 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, ANTHOR AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, 
                OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">8.3 Maximum Liability</h3>
              <p className="text-slate-300 leading-relaxed">
                Our total liability for any claims arising from or related to these Terms or the Services shall not exceed the amount 
                you paid us in the twelve (12) months preceding the claim.
              </p>
            </section>

            {/* Indemnification */}
            <section className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-purple-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-4 hover:text-purple-400 transition-colors">9. Indemnification</h2>
              <p className="text-slate-300 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Anthor AI and its officers, directors, employees, and agents from 
                any claims, liabilities, damages, losses, and expenses arising from your use of the Services, violation of these Terms, 
                or violation of any rights of third parties.
              </p>
            </section>

            {/* Termination */}
            <section className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-purple-400/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Ban className="w-6 h-6 text-purple-400 mr-3" />
                <h2 className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">10. Termination</h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                We may suspend or terminate your access to the Services at any time, with or without cause or notice. You may terminate 
                your account at any time by contacting us. Upon termination, your right to use the Services will immediately cease.
              </p>
              <p className="text-slate-300 leading-relaxed mt-4">
                Sections that by their nature should survive termination shall survive, including but not limited to intellectual 
                property provisions, disclaimers, limitations of liability, and dispute resolution provisions.
              </p>
            </section>

            {/* Dispute Resolution */}
            <section className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-purple-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-4 hover:text-purple-400 transition-colors">11. Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">11.1 Governing Law</h3>
              <p className="text-slate-300 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, 
                without regard to its conflict of law provisions.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">11.2 Arbitration</h3>
              <p className="text-slate-300 leading-relaxed">
                Any dispute arising from these Terms or the Services shall be resolved through binding arbitration in accordance with 
                the rules of the American Arbitration Association, except where prohibited by law.
              </p>
            </section>

            {/* General Provisions */}
            <section className="bg-slate-900/50 backdrop-blur rounded-xl border border-slate-800 p-8 hover:border-purple-400/30 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-4 hover:text-purple-400 transition-colors">12. General Provisions</h2>
              <ul className="space-y-3 text-slate-300">
                <li>
                  <strong className="text-white">Entire Agreement:</strong> These Terms constitute the entire agreement between you 
                  and Anthor AI regarding the Services.
                </li>
                <li>
                  <strong className="text-white">Severability:</strong> If any provision is found to be unenforceable, the remaining 
                  provisions will continue in full force.
                </li>
                <li>
                  <strong className="text-white">Waiver:</strong> No waiver of any term shall be deemed a further or continuing 
                  waiver of such term or any other term.
                </li>
                <li>
                  <strong className="text-white">Assignment:</strong> You may not assign these Terms without our written consent. 
                  We may assign these Terms without restriction.
                </li>
                <li>
                  <strong className="text-white">Force Majeure:</strong> We shall not be liable for any failure to perform due to 
                  circumstances beyond our reasonable control.
                </li>
              </ul>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur rounded-xl border border-purple-400/50 p-8">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-purple-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">📩 Contact Us</h2>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                <p className="text-white font-semibold mb-2">Anthor AI Legal Team</p>
                <p className="text-slate-300">Email: <a href="mailto:support@anthorai.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">support@anthorai.com</a></p>
                <p className="text-slate-300 mt-2">Address: Anthor AI Technologies, Ground Floor, Innov8 Tech Park, #27, 100 Feet Road, Koramangala, Bengaluru, Karnataka – 560034, India</p>
              </div>
            </section>
          </div>

          {/* Footer Links */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link 
              to="/privacy"
              className="text-cyan-400 hover:text-cyan-300 transition-colors underline font-semibold"
            >
              View Privacy Policy
            </Link>
            
            <Link 
              to="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-400/50"
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
