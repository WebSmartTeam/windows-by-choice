import { Calculator, Shield, Award, Users, Clock, CheckCircle } from 'lucide-react';

const QuotePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Calculator className="w-16 h-16 mx-auto mb-6 animate-bounce" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your Free Quote
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Professional windows, doors & conservatory estimates in minutes
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { icon: Shield, title: '35+ Years Experience' },
                { icon: Award, title: 'Which? Trusted Trader' },
                { icon: Users, title: 'Family Business' },
                { icon: Clock, title: '24hr Response' }
              ].map((feature) => (
                <div key={feature.title} className="text-center">
                  <feature.icon className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                  <p className="text-sm text-blue-100">{feature.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Use Our Quote Calculator?
            </h2>
            <p className="text-lg text-gray-600">
              Get accurate estimates based on your specific requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Instant Estimates',
                description: 'Get preliminary pricing immediately based on professional rates and current market costs',
                icon: '⚡'
              },
              {
                title: 'Accurate Pricing',
                description: 'Our calculator uses real project data from 35+ years of installations across Bedfordshire',
                icon: '🎯'
              },
              {
                title: 'No Pressure',
                description: 'Explore options at your own pace before speaking with our team for your free site survey',
                icon: '😌'
              }
            ].map((benefit) => (
              <div key={benefit.title} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Simple steps to get your personalised quote
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '1',
                title: 'Choose Service',
                description: 'Select windows, doors, conservatories, or multiple services'
              },
              {
                step: '2',
                title: 'Add Details',
                description: 'Specify quantities, materials, and special requirements'
              },
              {
                step: '3',
                title: 'Get Estimate',
                description: 'Receive instant preliminary pricing based on your selections'
              },
              {
                step: '4',
                title: 'Book Survey',
                description: 'Arrange free site visit for accurate measurements and final quote'
              }
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4 text-lg font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What's Included in Every Quote
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive service from start to finish
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Installation & Service</h3>
                <div className="space-y-3">
                  {[
                    'Professional installation by certified team',
                    'Building regulations compliance',
                    'Full site cleanup and waste removal',
                    'Comprehensive product warranty',
                    'After-sales support and maintenance'
                  ].map((item) => (
                    <div key={item} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Quality Assurance</h3>
                <div className="space-y-3">
                  {[
                    'Free site survey and accurate measurements',
                    'Technical drawings and planning support',
                    'Quality materials from trusted suppliers',
                    'FENSA registration and certification',
                    '10-year comprehensive guarantee'
                  ].map((item) => (
                    <div key={item} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Click the calculator button below to begin your quote
          </p>
          <div className="flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
              <Calculator className="w-16 h-16 mx-auto mb-4 animate-pulse" />
              <p className="text-lg font-medium">
                Look for the floating calculator button at the bottom right of your screen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The calculator itself is already included globally in App.tsx */}
    </div>
  );
};

export default QuotePage;