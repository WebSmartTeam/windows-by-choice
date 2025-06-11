import { Phone, Mail, MapPin, Clock } from 'lucide-react';


const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Temporary form handling until MCP integration
    alert('Thank you for your enquiry. We will contact you soon!');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Interactive Hero Header */}
      <section className="relative min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/contact/contact-wbc.jpg')"
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-800/85 to-teal-900/90" />
        
        {/* Floating Phone Badge */}
        <div className="absolute top-10 right-10 bg-green-600/90 backdrop-blur-sm rounded-xl p-4 animate-bounce">
          <div className="text-white text-center">
            <Phone className="w-8 h-8 mx-auto mb-2" />
            <div className="text-sm font-bold">Free Quote<br/>Call Now</div>
          </div>
        </div>
        
        {/* Floating Experience Badge */}
        <div className="absolute bottom-10 left-10 bg-blue-600/90 backdrop-blur-sm rounded-xl p-4 animate-pulse">
          <div className="text-white text-center">
            <div className="text-3xl font-bold">35+</div>
            <div className="text-sm font-bold">Years Trusted</div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Get your free quote today from Bedfordshire's trusted window, door, and conservatory specialists.
            </p>
            
            {/* Interactive CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:07774604190"
                className="group inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call 07774 604 190
              </a>
              <a
                href="mailto:info@windowsbychoice.co.uk"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-teal-800 transition-all duration-300 font-semibold transform hover:scale-105"
              >
                <Mail className="mr-2 w-5 h-5" />
                Email Us
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 mt-8 text-teal-100">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">Local Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">Quick Response</span>
              </div>
            </div>
          </div>
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
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <a href="tel:07774604190" className="text-blue-600 hover:text-blue-700">
                      07774 604 190
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <a href="mailto:info@windowsbychoice.co.uk" className="text-blue-600 hover:text-blue-700">
                      info@windowsbychoice.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
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
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
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
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Request Your Free Quote
              </h2>


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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-2">
                    Postcode
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
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