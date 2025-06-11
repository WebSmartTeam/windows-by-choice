import { Link } from 'react-router-dom';
import { ArrowRight, Check, Shield, Zap, Home } from 'lucide-react';


const WindowsPage = () => {
  const windowTypes = [
    {
      id: 'upvc',
      title: 'UPVC Windows',
      description: 'Energy-efficient, low-maintenance windows with excellent insulation properties',
      image: '/images/windows/upvc-windows-2.jpg',
      features: [
        'A+ energy rating',
        'Multi-point locking systems',
        '10-year guarantee',
        'Low maintenance',
        'Excellent sound insulation'
      ]
    },
    {
      id: 'aluminium',
      title: 'Aluminium Windows',
      description: 'Sleek, modern windows with slim profiles and maximum glass area',
      image: '/images/windows/aluminium-windows-1.jpg',
      features: [
        'Ultra-slim frames',
        'Powder-coated finishes',
        'Thermally broken profiles',
        'Contemporary design',
        'Extremely durable'
      ]
    },
    {
      id: 'lantern',
      title: 'Lantern Roofs',
      description: 'Transform your extension with natural light from above',
      image: '/images/windows/lantern-roofs-1.jpg',
      features: [
        'Maximum natural light',
        'Thermal efficiency',
        'Contemporary aesthetics',
        'Various size options',
        'Professional installation'
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Multi-point locking systems and toughened glass for your peace of mind'
    },
    {
      icon: Zap,
      title: 'Energy Efficient',
      description: 'A+ rated windows to reduce your energy bills and carbon footprint'
    },
    {
      icon: Home,
      title: 'Bespoke Design',
      description: 'Custom-made to your exact specifications and style preferences'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Interactive Hero Header */}
      <section className="relative min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/windows/window-services-hitchin-1.jpg')"
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-800/75 to-blue-900/85" />
        
        {/* Floating Elements */}
        <div className="absolute top-10 right-10 bg-white/20 backdrop-blur-sm rounded-xl p-4 animate-bounce">
          <div className="text-white text-center">
            <div className="text-2xl font-bold">A+</div>
            <div className="text-sm">Energy Rating</div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-10 bg-emerald-500/90 backdrop-blur-sm rounded-xl p-4 animate-pulse">
          <div className="text-white text-center">
            <div className="text-2xl font-bold">35+</div>
            <div className="text-sm">Years Experience</div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Premium Windows
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Transform your home with our range of high-quality windows. 
              From traditional UPVC to contemporary aluminium, we have the perfect solution for your property.
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
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-800 transition-all duration-300 font-semibold transform hover:scale-105"
              >
                Call 07774 604 190
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 mt-8 text-blue-100">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium">Which? Trusted Trader</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium">A+ Energy Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium">10 Year Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Window Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {windowTypes.map((type, index) => (
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
              Why Choose Our Windows?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With 35+ years of experience, we deliver quality that lasts
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
            Our Window Installations
          </h2>
          
          
          {/* Temporary Gallery */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <img src="/images/windows/window-services-hitchin-1.jpg" alt="Window installation" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/windows/upvc-windows-3.jpg" alt="UPVC windows" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/windows/aluminium-windows-3.jpg" alt="Aluminium windows" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/windows/lantern-roofs-2.jpg" alt="Lantern roof" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/windows/window-services-hitchin-2.jpg" alt="Window service" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/windows/lantern-roofs-3.jpg" alt="Roof lantern" className="w-full h-64 object-cover rounded-lg" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Upgrade Your Windows?
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

export default WindowsPage;