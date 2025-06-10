import { Phone, Mail, MapPin, Clock } from 'lucide-react';

// MCP Component Integration
// import { ContactForm } from '@aidan/mcp-components';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Temporary form handling until MCP integration
    alert('Thank you for your enquiry. We will contact you soon!');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 text-center">Contact Us</h1>
          <p className="text-xl text-gray-600 text-center mt-4">
            Get your free quote today
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                With over 35 years of experience in windows, doors, and conservatories, 
                we're here to help transform your home. Contact us for a free, 
                no-obligation quote.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8B7E6A] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <a href="tel:07774604190" className="text-[#8B7E6A] hover:text-[#6B5E4A]">
                      07774 604 190
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8B7E6A] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <a href="mailto:info@windowsbychoice.co.uk" className="text-[#8B7E6A] hover:text-[#6B5E4A]">
                      info@windowsbychoice.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8B7E6A] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Service Area</h3>
                    <p className="text-gray-600">
                      Shefford, Bedfordshire<br />
                      Covering South East England & London
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8B7E6A] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-12">
                <h3 className="font-semibold text-gray-800 mb-4">Accreditations</h3>
                <div className="flex gap-4">
                  <img 
                    src="/images/contact/which-trusted-wbc.png" 
                    alt="Which? Trusted Trader" 
                    className="h-16"
                  />
                  <img 
                    src="/images/contact/smq3.png" 
                    alt="Certification" 
                    className="h-16"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#FAF8F5] rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Request Your Free Quote
              </h2>

              {/* Future MCP Integration
              <ContactForm 
                mcpEndpoint="https://mcp.aidan.build/contact"
                businessId="windows-by-choice"
                formType="quote-request"
                fields={[
                  'name',
                  'email',
                  'phone',
                  'postcode',
                  'service',
                  'message'
                ]}
                services={[
                  'Windows',
                  'Doors',
                  'Conservatories',
                  'Living Rooms/Orangeries',
                  'Other'
                ]}
              />
              */}

              {/* Temporary Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B7E6A] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B7E6A] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B7E6A] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-2">
                    Postcode
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B7E6A] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B7E6A] focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="windows">Windows</option>
                    <option value="doors">Doors</option>
                    <option value="conservatories">Conservatories</option>
                    <option value="living-rooms">Living Rooms/Orangeries</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B7E6A] focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8B7E6A] text-white py-4 rounded-lg hover:bg-[#6B5E4A] transition-colors font-medium"
                >
                  Send Enquiry
                </button>

                <p className="text-sm text-gray-600 text-center">
                  We respect your privacy and will never share your information
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;