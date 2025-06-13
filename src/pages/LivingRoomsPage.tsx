import { Link } from 'react-router-dom';
import { ArrowRight, Check, Home, Crown, Building } from 'lucide-react';


const LivingRoomsPage = () => {
  const orangeryTypes = [
    {
      id: 'contemporary',
      title: 'Contemporary Orangeries',
      description: 'Modern design with clean lines and maximum natural light for stylish living',
      image: '/images/living-room-orangeries/livin-room-and-orangeries-2.jpg',
      features: [
        'Floor-to-ceiling glazing',
        'Flat or pitched roof options',
        'Integrated blinds available',
        'Modern architectural styling',
        'Energy-efficient construction'
      ]
    },
    {
      id: 'traditional',
      title: 'Traditional Orangeries',
      description: 'Classic brick pillars and period features combined with modern performance',
      image: '/images/living-room-orangeries/livin-rooms-1.jpg',
      features: [
        'Brick pillar construction',
        'Period-style windows',
        'Decorative cornice details',
        'Heritage colour options',
        'Planning-friendly design'
      ]
    },
    {
      id: 'lantern',
      title: 'Lantern Roof Extensions',
      description: 'Stunning roof lanterns that flood your space with natural light from above',
      image: '/images/living-room-orangeries/livin-rooms-2.jpg',
      features: [
        'Central roof lantern feature',
        'Maximum overhead lighting',
        'Various size configurations',
        'Self-cleaning glass options',
        'Superior thermal performance'
      ]
    }
  ];

  const benefits = [
    {
      icon: Home,
      title: 'Luxury Living Space',
      description: 'Create a premium living area that seamlessly blends indoor and outdoor living'
    },
    {
      icon: Crown,
      title: 'Prestigious Design',
      description: 'Add architectural grandeur and significantly increase your property value'
    },
    {
      icon: Building,
      title: 'Solid Construction',
      description: 'Built with brick or stone pillars for a permanent, substantial feel'
    }
  ];

  const features = [
    'Planning permission often not required',
    'Superior insulation vs conservatories',
    'Year-round comfortable temperatures',
    'Substantial brick or stone construction',
    'High-end finishes and fixtures',
    'Bespoke design service'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Interactive Hero Header */}
      <section className="relative min-h-[60vh] flex items-center">
        {/* Background Image */}
        <img 
          src="/images/living-room-orangeries/20250613_1441_Luxury British Orangery_simple_compose_01jxm8v09gew8bv752qxhc8ndd.png"
          alt="Luxury British Orangery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/40 via-orange-800/30 to-orange-900/40" />
        
        {/* Floating Elements */}
        <div className="absolute top-10 right-10 bg-white/20 backdrop-blur-sm rounded-xl p-4 animate-bounce">
          <div className="text-white text-center">
            <div className="text-2xl font-bold">365</div>
            <div className="text-sm">Days Comfort</div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-10 bg-emerald-500/90 backdrop-blur-sm rounded-xl p-4 animate-pulse">
          <div className="text-white text-center">
            <div className="text-2xl font-bold">Premium</div>
            <div className="text-sm">Extensions</div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Luxury Orangeries & Living Room Extensions
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Create the ultimate living space with our luxury orangeries. 
              Combining traditional construction with modern glazing for year-round comfort.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:07774604190" 
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Call for Free Consultation
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-orange-800 transition-all duration-300 font-semibold transform hover:scale-105"
              >
                View Our Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is an Orangery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              What is an Orangery?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              An orangery is the perfect blend of a traditional extension and a conservatory. 
              With substantial brick or stone pillars, a flat or pitched roof with lantern features, 
              and large glazed areas, orangeries provide a luxurious living space that can be used year-round.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Orangery Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Choose Your Orangery Style
          </h2>
          
          {orangeryTypes.map((type, index) => (
            <div
              key={type.id}
              id={type.id}
              className={`mb-16 ${index % 2 === 1 ? 'bg-white -mx-4 px-4 py-12 md:-mx-8 md:px-8 rounded-lg' : ''}`}
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
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">{type.title}</h3>
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
              Why Choose an Orangery?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The premium choice for homeowners seeking luxury, comfort, and substantial property value addition
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

      {/* Planning & Regulations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Planning & Building Regulations
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Permitted Development</h3>
                <p className="text-gray-600 mb-4">
                  Many orangeries can be built under Permitted Development Rights, meaning no planning application is required.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Single storey rear extensions up to 6m (detached) or 4m (semi/terraced)
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Maximum height of 4m or 3m within 2m of boundary
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Building Regulations</h3>
                <p className="text-gray-600 mb-4">
                  We handle all Building Regulations applications and ensure full compliance with current standards.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Structural calculations and drawings
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    Energy efficiency compliance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Our Orangery Projects
          </h2>
          
          
          {/* Temporary Gallery */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <img src="/images/living-room-orangeries/livin-room-and-orangeries-1.jpg" alt="Orangery installation" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/living-room-orangeries/livin-room-and-orangeries-2.jpg" alt="Contemporary orangery" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/living-room-orangeries/livin-rooms-1.jpg" alt="Traditional orangery" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/living-room-orangeries/livin-rooms-2.jpg" alt="Lantern roof extension" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/living-room-orangeries/livin-room-and-orangeries-3.jpg" alt="Luxury orangery" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/living-room-orangeries/livin-rooms-3.jpg" alt="Orangery interior" className="w-full h-64 object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Create Your Dream Living Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free design consultation and quote for your luxury orangery project
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

export default LivingRoomsPage;