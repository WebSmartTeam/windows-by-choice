import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Clock, Phone } from 'lucide-react';


const HomePage = () => {
  const services = [
    {
      title: 'Windows',
      description: 'UPVC & aluminium windows with energy-efficient double glazing',
      image: '/images/homepage/window-services-hitchin.jpg',
      link: '/windows'
    },
    {
      title: 'Doors',
      description: 'Composite, bi-fold, patio & French doors for every home',
      image: '/images/homepage/door-services-hitchin.jpg',
      link: '/doors'
    },
    {
      title: 'Conservatories',
      description: 'Victorian, Edwardian & modern conservatory designs',
      image: '/images/homepage/conservatory-services-hitchin.jpg',
      link: '/conservatories'
    },
    {
      title: 'Living Rooms',
      description: 'Stunning orangeries and living room extensions',
      image: '/images/homepage/living-room-services-hitchin.jpg',
      link: '/living-rooms'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: '35+ Years Experience',
      description: 'Family-run business serving Bedfordshire since 1989'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Which? Trusted Trader with FENSA certification'
    },
    {
      icon: Clock,
      title: 'Professional Service',
      description: 'From consultation to installation, we handle everything'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/homepage/window-services-hitchin.jpg')"
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-900/90" />
        
        {/* Which? Trusted Trader Badge */}
        <div className="absolute top-8 right-8 z-20">
          <img 
            src="/images/contact/which-trusted-wbc.png" 
            alt="Which? Trusted Trader" 
            className="h-16 w-auto drop-shadow-lg"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              We Produce Quality Windows for You
            </h1>
            <p className="text-xl text-blue-100 mb-4 max-w-2xl">
              Transform your home with our premium windows, doors, and conservatories. 
            </p>
            <p className="text-lg text-blue-200 mb-8 max-w-2xl">
              Over 35 years of excellence serving Bedfordshire, South East England, and London. 
              Family-run business with FENSA certification and Which? Trusted Trader status.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-6 mb-8 text-blue-100">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium">FENSA Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium">Which? Trusted Trader</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium">35+ Years Experience</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Free Quote Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:07774604190"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-800 transition-all duration-300 font-semibold transform hover:scale-105"
              >
                <Phone className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                Call 07774 604 190
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of windows, doors, and home extensions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <span className="inline-flex items-center text-blue-800 font-medium group-hover:text-emerald-500 transition-all duration-300">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 group-hover:animate-bounce transition-all duration-300" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{backgroundColor: '#F9FAFB'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Why Choose Windows by Choice?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Trusted by homeowners across Bedfordshire for over three decades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-800 text-white rounded-full mb-6 hover:bg-emerald-500 transition-all duration-300 transform hover:scale-110 hover:animate-pulse">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our Professional Installation Process
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From initial consultation to final installation, we ensure a seamless experience with minimal disruption to your daily life
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '1',
                title: 'Free Consultation',
                description: 'Visit your home to assess requirements, take measurements, and discuss your needs. No obligation quote provided within 24 hours.',
                icon: '🏠'
              },
              {
                step: '2', 
                title: 'Design & Planning',
                description: 'Custom design created to your specifications. Planning permission assistance if required. Technical drawings and product selection.',
                icon: '📐'
              },
              {
                step: '3',
                title: 'Professional Installation',
                description: 'Expert installation by our trained team. Minimal disruption, clean work practices, and full building regulations compliance.',
                icon: '🔧'
              },
              {
                step: '4',
                title: 'Quality Assurance',
                description: 'Final inspection, customer walkthrough, and comprehensive warranty. Aftercare support and maintenance guidance provided.',
                icon: '✅'
              }
            ].map((process) => (
              <div key={process.step} className="text-center bg-gray-50 p-6 rounded-xl">
                <div className="text-4xl mb-4">{process.icon}</div>
                <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-800 text-white rounded-full mb-4 text-lg font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{process.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Deep Dive */}
      <section className="py-20" style={{backgroundColor: '#F9FAFB'}}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Premium Products for Every Home
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We exclusively source from leading manufacturers to ensure the highest quality windows, doors, and conservatories for your home
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Energy Efficiency & Performance</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span><strong>A+ Energy Ratings:</strong> Reduce heating bills by up to 30% with our ultra-efficient glazing systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Triple Glazing Available:</strong> Superior insulation for maximum comfort and noise reduction</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Low-E Coatings:</strong> Advanced glass technology reflects heat back into your home</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Argon Gas Filling:</strong> Enhanced thermal performance in sealed units</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Security & Peace of Mind</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Multi-Point Locking:</strong> Advanced security systems on all doors and windows</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Laminated Glass Options:</strong> Extra security and safety with reinforced glazing</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Police Approved Locks:</strong> Secure by Design certification available</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span><strong>10-Year Guarantees:</strong> Comprehensive warranty covering all installations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Serving South East England & London
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Based in Shefford, Bedfordshire, we proudly serve customers across a wide area with the same high standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-800 text-white rounded-full mb-6">
                <span className="text-2xl font-bold">B</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Bedfordshire</h3>
              <p className="text-slate-600 text-sm">Bedford, Luton, Dunstable, Leighton Buzzard, Biggleswade, Sandy, Flitwick, Ampthill, Woburn</p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-800 text-white rounded-full mb-6">
                <span className="text-2xl font-bold">H</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Hertfordshire</h3>
              <p className="text-slate-600 text-sm">Hitchin, St Albans, Hemel Hempstead, Watford, Stevenage, Welwyn Garden City, Hertford</p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-800 text-white rounded-full mb-6">
                <span className="text-2xl font-bold">L</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">London Areas</h3>
              <p className="text-slate-600 text-sm">North London, North West London, selected Central London areas - call to confirm coverage</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              <strong>Free surveys available within 20 miles of Shefford.</strong> Longer distances may incur a small travel charge.
            </p>
            <a href="tel:07774604190" className="text-blue-800 hover:text-emerald-500 font-semibold">
              Call 07774 604 190 to confirm we cover your area
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section - Softer Blue */}
      <section className="py-20 text-white" style={{background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)'}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Home?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your windows, doors, or conservatory project
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-white rounded-lg hover:bg-white hover:text-blue-800 transition-all duration-300 font-medium shadow-lg transform hover:scale-105 hover:animate-pulse"
            >
              Request Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:animate-bounce" />
            </Link>
            <a
              href="tel:07774604190"
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-800 transition-all duration-300 font-medium transform hover:scale-105"
            >
              <Phone className="mr-2 w-5 h-5 group-hover:animate-bounce" />
              Call Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;