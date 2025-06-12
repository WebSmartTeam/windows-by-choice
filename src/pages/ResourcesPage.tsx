import React from 'react';
import { BookOpen, FileText, Home, Lightbulb, CheckCircle } from 'lucide-react';
import PDFGenerator from '../components/PDFGenerator';

const ResourcesPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.8), rgba(59, 130, 246, 0.8)), url("/images/homepage/window-services-hitchin.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Free Home Improvement Resources
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Professional guides and resources to help you make informed decisions about your home improvements
          </p>
        </div>
      </section>

      {/* PDF Downloads Section */}
      <PDFGenerator />

      {/* Additional Resources Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Additional Resources
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              More helpful information to support your home improvement journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Planning Permission Guide */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-800 text-white p-3 rounded-lg">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Planning Permission Guide</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">When planning permission is required</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Application process step-by-step</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Common reasons for refusal</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">How we can help with your application</span>
                </div>
              </div>
            </div>

            {/* Building Regulations Guide */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-500 text-white p-3 rounded-lg">
                  <Home className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Building Regulations</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Understanding Building Regs requirements</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Thermal efficiency standards</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Safety glass requirements</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Compliance certification process</span>
                </div>
              </div>
            </div>

            {/* Maintenance Guide */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yellow-500 text-white p-3 rounded-lg">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Maintenance Tips</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Seasonal maintenance checklist</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Cleaning and care instructions</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">When to call for professional help</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600">Warranty information and claims</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and processes
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {[
                {
                  question: "How long does a typical installation take?",
                  answer: "Most window installations take 1-2 days depending on the number of windows. Door installations typically take half a day. Conservatories usually take 1-2 weeks from start to finish."
                },
                {
                  question: "Do you provide guarantees on your work?",
                  answer: "Yes, we provide a 10-year guarantee on all frames, 5-year guarantee on hardware (locks, hinges, handles), and 2-year guarantee on installation workmanship."
                },
                {
                  question: "Do I need planning permission for my project?",
                  answer: "Most window replacements don't require planning permission if they're like-for-like replacements. Conservatories under 4m high and covering less than 50% of your garden usually don't need permission. We check this for you during our survey."
                },
                {
                  question: "What areas do you cover?",
                  answer: "We serve Bedfordshire, Hertfordshire, and selected London areas. Free surveys are available within 20 miles of Shefford. Longer distances may incur a small travel charge."
                },
                {
                  question: "Can you help with grant applications?",
                  answer: "Yes, we can check your eligibility for various grants including ECO4, Green Homes Grant, and local authority schemes. We handle the application process for you at no extra cost."
                },
                {
                  question: "How much will my project cost?",
                  answer: "Costs vary depending on size, style, and specification. We provide detailed, itemized quotes with no hidden costs. Our prices are competitive and we offer various payment options including 0% finance."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 text-white" style={{background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)'}}>
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            Need More Information?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our experienced team is here to answer any questions and provide personalized advice for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-white rounded-lg hover:bg-white hover:text-blue-800 transition-all duration-300 font-medium shadow-lg transform hover:scale-105"
            >
              Get Expert Advice
            </a>
            <a
              href="tel:07774604190"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-800 transition-all duration-300 font-medium transform hover:scale-105"
            >
              Call 07774 604 190
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;