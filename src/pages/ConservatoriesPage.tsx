import { Link } from 'react-router-dom';
import { ArrowRight, Check, Sun, Home, Thermometer } from 'lucide-react';


const ConservatoriesPage = () => {
  const conservatoryTypes = [
    {
      id: 'victorian',
      title: 'Victorian Conservatories',
      description: 'Classic multi-faceted design with ornate ridging and elegant curves',
      image: '/images/conservatories/victorian-conservatories-hitchin-2.jpg',
      features: [
        '3, 5 or 7 faceted bay',
        'Ornate ridge details',
        'Period authentic design',
        'Excellent space utilisation',
        'Various size options'
      ]
    },
    {
      id: 'edwardian',
      title: 'Edwardian Conservatories',
      description: 'Square or rectangular design maximising floor space and natural light',
      image: '/images/conservatories/edwardian-conservatories-hitchin-2.jpg',
      features: [
        'Square or rectangular floor',
        'Maximum floor space',
        'Clean, simple lines',
        'Perfect for furniture',
        'Cost-effective design'
      ]
    },
    {
      id: 'lean-to',
      title: 'Lean-To Conservatories',
      description: 'Simple, elegant design perfect for bungalows and restricted height properties',
      image: '/images/conservatories/lean-to-conservatories-hitchin-1.jpg',
      features: [
        'Simple sloping roof',
        'Space-efficient design',
        'Great for bungalows',
        'Contemporary styling',
        'Budget-friendly option'
      ]
    },
    {
      id: 'p-shaped',
      title: 'P-Shaped Conservatories',
      description: 'Combination design offering separate living and dining areas',
      image: '/images/conservatories/p-shaped-conservatories-hitchin-1-1.jpg',
      features: [
        'Two distinct areas',
        'Victorian & lean-to combined',
        'Versatile layout options',
        'Large family spaces',
        'Impressive appearance'
      ]
    },
    {
      id: 't-shaped',
      title: 'T-Shaped Conservatories',
      description: 'Distinctive central projection creating unique living spaces',
      image: '/images/conservatories/t-shaped-conservatories-hitchin-1.jpg',
      features: [
        'Central projection feature',
        'Unique architectural impact',
        'Multiple room areas',
        'Impressive from garden',
        'Bespoke configurations'
      ]
    }
  ];

  const benefits = [
    {
      icon: Sun,
      title: 'Natural Light',
      description: 'Flood your home with natural light and create a bright, airy space'
    },
    {
      icon: Home,
      title: 'Extra Living Space',
      description: 'Add valuable living space without the cost of a traditional extension'
    },
    {
      icon: Thermometer,
      title: 'Year-Round Comfort',
      description: 'Modern insulation technology for comfortable use throughout all seasons'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Interactive Hero Header */}
      <section className="relative min-h-[60vh] flex items-center">
        {/* Background Image */}
        <img 
          src="/images/conservatories/20250613_1432_Victorian Conservatory Haven_simple_compose_01jxm89vt6fegt2nrhs75pc312.png"
          alt="Victorian Conservatory Haven"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/85 via-green-800/75 to-green-900/85" />
        
        {/* Floating Year-Round Badge */}
        <div className="absolute top-10 right-10 bg-orange-500/90 backdrop-blur-sm rounded-xl p-4 animate-bounce">
          <div className="text-white text-center">
            <Sun className="w-8 h-8 mx-auto mb-2" />
            <div className="text-sm font-bold">Year-Round<br/>Comfort</div>
          </div>
        </div>
        
        {/* Floating Space Badge */}
        <div className="absolute bottom-10 left-10 bg-blue-500/90 backdrop-blur-sm rounded-xl p-4 animate-pulse">
          <div className="text-white text-center">
            <Home className="w-8 h-8 mx-auto mb-2" />
            <div className="text-sm font-bold">Extra Living<br/>Space</div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Beautiful Conservatories
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Transform your home with a stunning conservatory. 
              Choose from our range of classic and contemporary designs to create the perfect year-round living space.
            </p>
            
            {/* Interactive CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Free Design
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:07774604190"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-800 transition-all duration-300 font-semibold transform hover:scale-105"
              >
                Call 07774 604 190
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 mt-8 text-green-100">
              <div className="flex items-center gap-2">
                <Sun className="w-5 h-5 text-orange-400" />
                <span className="text-sm font-medium">All Season Use</span>
              </div>
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5 text-orange-400" />
                <span className="text-sm font-medium">Adds Property Value</span>
              </div>
              <div className="flex items-center gap-2">
                <Thermometer className="w-5 h-5 text-orange-400" />
                <span className="text-sm font-medium">Thermal Efficient</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conservatory Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {conservatoryTypes.map((type, index) => (
            <div
              key={type.id}
              id={type.id}
              className={`mb-16 ${index % 2 === 1 ? 'bg-gray-50 -mx-4 px-4 py-12 md:-mx-8 md:px-8' : ''}`}
            >
              <div className="max-w-6xl mx-auto">
                <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{type.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{type.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {type.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose a Conservatory?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Add value and living space to your home with our beautiful conservatory designs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 text-blue-600 rounded-full mb-6">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Design Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial consultation to final installation, we guide you through every step
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: '1', title: 'Consultation', description: 'Free home visit and design consultation' },
              { step: '2', title: 'Design', description: 'Custom design tailored to your home' },
              { step: '3', title: 'Planning', description: 'Planning permission assistance if required' },
              { step: '4', title: 'Installation', description: 'Professional installation by our expert team' }
            ].map((process) => (
              <div key={process.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Our Conservatory Projects
          </h2>
          
          
          {/* Temporary Gallery */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <img src="/images/conservatories/conservatories-hitchin.png" alt="Conservatory installation" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/conservatories/victorian-conservatories-hitchin-3.jpg" alt="Victorian conservatory" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/conservatories/edwardian-conservatories-hitchin-3.jpg" alt="Edwardian conservatory" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/conservatories/lean-to-conservatories-hitchin-2.jpg" alt="Lean-to conservatory" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/conservatories/p-shaped-conservatories-hitchin-2.jpg" alt="P-shaped conservatory" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/conservatories/t-shaped-conservatories-hitchin-2.jpg" alt="T-shaped conservatory" className="w-full h-64 object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Add a Conservatory?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free design consultation and quote from our conservatory specialists
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:07774604190"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
            >
              Call 07774 604 190
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConservatoriesPage;