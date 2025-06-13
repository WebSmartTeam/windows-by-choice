import { Link } from 'react-router-dom';
import { ArrowRight, Check, Shield, Lock, Palette } from 'lucide-react';


const DoorsPage = () => {
  const doorTypes = [
    {
      id: 'composite',
      title: 'Composite Doors',
      description: 'Durable, secure doors with authentic timber appearance and superior insulation',
      image: '/images/doors/composite-doors-1.jpg',
      features: [
        'Exceptional security',
        'Energy efficient',
        'Weather resistant',
        'Low maintenance',
        'Wide range of colours'
      ]
    },
    {
      id: 'bifold',
      title: 'Bi-Fold Doors',
      description: 'Create seamless indoor-outdoor living with our premium bi-fold door systems',
      image: '/images/doors/aluminium-bi-fold-doors-2.jpg',
      features: [
        'Maximum opening space',
        'Slim sight lines',
        'Smooth operation',
        'High security',
        'Various configurations'
      ]
    },
    {
      id: 'patio',
      title: 'Patio Doors',
      description: 'Large sliding doors perfect for garden access and natural light',
      image: '/images/doors/upvc-patio-doors-1.jpg',
      features: [
        'Space-saving design',
        'Large glass areas',
        'Smooth sliding action',
        'Excellent insulation',
        'Easy maintenance'
      ]
    },
    {
      id: 'french',
      title: 'French Doors',
      description: 'Classic elegance with modern performance for traditional and contemporary homes',
      image: '/images/doors/upvc-french-doors-1.jpg',
      features: [
        'Timeless design',
        'Excellent ventilation',
        'Security features',
        'Energy efficient',
        'Custom sizes available'
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Superior Security',
      description: 'Multi-point locking systems and reinforced frames for maximum protection'
    },
    {
      icon: Lock,
      title: 'Energy Efficiency',
      description: 'Advanced insulation technology to keep your home warm and reduce bills'
    },
    {
      icon: Palette,
      title: 'Custom Design',
      description: 'Choose from hundreds of colours, finishes, and hardware options'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Interactive Hero Header */}
      <section className="relative min-h-[60vh] flex items-center">
        {/* Background Image */}
        <img 
          src="/images/doors/20250613_1431_Stylish British Home Entrance_simple_compose_01jxm89e90etns0cs6bhged3fe.png"
          alt="Stylish British Home Entrance"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-slate-800/30 to-slate-900/40" />
        
        {/* Floating Security Badge */}
        <div className="absolute top-10 right-10 bg-emerald-500/90 backdrop-blur-sm rounded-xl p-4 animate-bounce">
          <div className="text-white text-center">
            <Shield className="w-8 h-8 mx-auto mb-2" />
            <div className="text-sm font-bold">Multi-Point<br/>Locking</div>
          </div>
        </div>
        
        {/* Floating Efficiency Badge */}
        <div className="absolute bottom-10 left-10 bg-blue-500/90 backdrop-blur-sm rounded-xl p-4 animate-pulse">
          <div className="text-white text-center">
            <div className="text-2xl font-bold">A+</div>
            <div className="text-sm">Energy Rating</div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Premium Doors
            </h1>
            <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
              Enhance your home's entrance with our range of high-quality doors. 
              From secure composite doors to space-saving bi-folds, we have the perfect solution for every home.
            </p>
            
            {/* Interactive CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:07774604190"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-800 transition-all duration-300 font-semibold transform hover:scale-105"
              >
                Call 07774 604 190
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 mt-8 text-slate-200">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium">Secured by Design</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium">Multi-Point Locks</span>
              </div>
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium">Custom Colours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Door Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {doorTypes.map((type, index) => (
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
              Why Choose Our Doors?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional installation with comprehensive warranties
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

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Our Door Installations
          </h2>
          
          
          {/* Temporary Gallery */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <img src="/images/doors/door-services-hitchin-1.jpg" alt="Door installation" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/doors/composite-doors-2.jpg" alt="Composite door" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/doors/aluminium-bi-fold-doors-3.jpg" alt="Bi-fold doors" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/doors/upvc-patio-doors-3.jpg" alt="Patio doors" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/doors/upvc-french-doors-2.jpg" alt="French doors" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/doors/composite-doors-2.jpg" alt="Composite doors" className="w-full h-64 object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Upgrade Your Doors?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote from our expert team
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

export default DoorsPage;