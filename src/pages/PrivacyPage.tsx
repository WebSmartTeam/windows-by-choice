import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, Mail } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Interactive Hero Header */}
      <section className="relative min-h-[40vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/contact/contact-wbc.jpg')"
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/85 to-gray-900/90" />
        
        {/* Floating Security Badge */}
        <div className="absolute top-10 right-10 bg-blue-600/90 backdrop-blur-sm rounded-xl p-4 animate-pulse">
          <div className="text-white text-center">
            <Shield className="w-8 h-8 mx-auto mb-2" />
            <div className="text-sm font-bold">GDPR<br/>Compliant</div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              to="/" 
              className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Your privacy matters to us. Learn how we collect, use, and protect your personal information.
            </p>
            
            <div className="flex items-center justify-center gap-8 mt-8 text-gray-200">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">UK GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">Data Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">Transparent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg prose-slate">
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <p className="text-blue-800 font-medium mb-2">Last Updated: January 2025</p>
              <p className="text-blue-700">This privacy policy explains how Windows by Choice Ltd collects, uses, and protects your personal information in accordance with UK GDPR and Data Protection Act 2018.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Who We Are</h2>
            <p>Windows by Choice Ltd is a family-run business based in Shefford, Bedfordshire, specialising in windows, doors, conservatories, and home improvements. We are committed to protecting your privacy and handling your data responsibly.</p>
            
            <div className="bg-gray-50 p-4 rounded-lg my-6">
              <h3 className="font-semibold text-gray-800 mb-2">Data Controller:</h3>
              <p><strong>Windows by Choice Ltd</strong><br />
              Shefford, Bedfordshire<br />
              Email: info@windowsbychoice.co.uk<br />
              Phone: 07774 604 190</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Information You Provide</h3>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, phone number, postal address</li>
              <li><strong>Project Details:</strong> Information about your home improvement requirements</li>
              <li><strong>Communication Records:</strong> Records of our conversations, emails, and correspondence</li>
              <li><strong>Payment Information:</strong> Billing details (processed securely by third-party payment providers)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Information Collected Automatically</h3>
            <ul>
              <li><strong>Website Usage:</strong> Pages visited, time spent, referral sources</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
              <li><strong>Cookies:</strong> Small files to improve website functionality (see Cookie Policy)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. How We Use Your Information</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Legitimate Business Purposes</h3>
            <ul>
              <li>Providing quotes and consultations for your home improvement projects</li>
              <li>Scheduling appointments and site visits</li>
              <li>Managing installation projects and aftercare services</li>
              <li>Processing payments and maintaining financial records</li>
              <li>Responding to enquiries and providing customer support</li>
              <li>Improving our services and website functionality</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Marketing Communications (With Consent)</h3>
            <ul>
              <li>Sending newsletters about new products and services</li>
              <li>Sharing home improvement tips and advice</li>
              <li>Informing you about special offers and promotions</li>
              <li>Following up on completed projects for feedback</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Legal Basis for Processing</h2>
            <p>We process your personal data based on:</p>
            <ul>
              <li><strong>Contract Performance:</strong> To provide our services and fulfil contractual obligations</li>
              <li><strong>Legitimate Interests:</strong> To operate our business, improve services, and prevent fraud</li>
              <li><strong>Consent:</strong> For marketing communications and non-essential cookies</li>
              <li><strong>Legal Obligation:</strong> To comply with tax, accounting, and regulatory requirements</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Data Sharing and Disclosure</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Third-Party Service Providers</h3>
            <p>We may share your data with trusted partners who help us operate our business:</p>
            <ul>
              <li><strong>Payment Processors:</strong> For secure payment handling</li>
              <li><strong>Installation Partners:</strong> Qualified contractors for project delivery</li>
              <li><strong>IT Service Providers:</strong> For website hosting and maintenance</li>
              <li><strong>Marketing Platforms:</strong> For email communications (with your consent)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Legal Requirements</h3>
            <p>We may disclose your information if required by law, court order, or to protect our legal rights.</p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Data Security</h2>
            <p>We implement appropriate technical and organisational measures to protect your data:</p>
            <ul>
              <li>Secure hosting with SSL encryption for data transmission</li>
              <li>Access controls and authentication for staff systems</li>
              <li>Regular security updates and vulnerability assessments</li>
              <li>Secure disposal of paper records and electronic data</li>
              <li>Staff training on data protection responsibilities</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Data Retention</h2>
            <p>We retain your personal data for as long as necessary:</p>
            <ul>
              <li><strong>Customer Records:</strong> 7 years after project completion (for warranty and legal purposes)</li>
              <li><strong>Marketing Contacts:</strong> Until you unsubscribe or withdraw consent</li>
              <li><strong>Website Analytics:</strong> 26 months maximum</li>
              <li><strong>Financial Records:</strong> 7 years (UK tax requirements)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Your Rights Under UK GDPR</h2>
            <p>You have the following rights regarding your personal data:</p>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Access & Portability</h4>
                <ul className="text-sm">
                  <li>• Request a copy of your data</li>
                  <li>• Receive data in a portable format</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Correction & Deletion</h4>
                <ul className="text-sm">
                  <li>• Correct inaccurate information</li>
                  <li>• Request deletion of your data</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Processing Controls</h4>
                <ul className="text-sm">
                  <li>• Restrict or object to processing</li>
                  <li>• Withdraw consent at any time</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Complaints</h4>
                <ul className="text-sm">
                  <li>• Lodge complaints with ICO</li>
                  <li>• Seek judicial remedies</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Cookies and Website Analytics</h2>
            <p>Our website uses cookies to improve functionality and user experience:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for website operation (no consent needed)</li>
              <li><strong>Analytics Cookies:</strong> Help us understand website usage (with consent)</li>
              <li><strong>Marketing Cookies:</strong> For targeted advertising (with consent)</li>
            </ul>
            <p>You can manage cookie preferences through your browser settings or our cookie banner.</p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. Please review their privacy policies before providing personal information.</p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Changes to This Policy</h2>
            <p>We may update this privacy policy periodically to reflect changes in our practices or legal requirements. Significant changes will be communicated via email or website notification.</p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Contact Us</h2>
            <p>For any privacy-related questions, concerns, or to exercise your rights, please contact us:</p>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Data Protection Enquiries:</h4>
                  <p className="text-blue-700">
                    <Mail className="w-4 h-4 inline mr-1" />
                    info@windowsbychoice.co.uk
                  </p>
                  <p className="text-blue-700">Subject: Data Protection Enquiry</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Response Time:</h4>
                  <p className="text-blue-700">We will respond within 30 days of receiving your request, as required by UK GDPR.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Supervisory Authority</h2>
            <p>If you have concerns about our data processing practices, you can contact the UK's supervisory authority:</p>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Information Commissioner's Office (ICO)</strong><br />
              Website: <a href="https://ico.org.uk" className="text-blue-600 hover:text-blue-700">ico.org.uk</a><br />
              Phone: 0303 123 1113<br />
              Post: Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 mt-8">
              <h3 className="font-semibold text-green-800 mb-2">Questions About This Policy?</h3>
              <p className="text-green-700">We're committed to transparency and protecting your privacy. If you have any questions about this policy or how we handle your data, please don't hesitate to contact us.</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your privacy is protected. Get your free quote with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:07774604190"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-800 transition-colors font-medium"
            >
              Call 07774 604 190
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;