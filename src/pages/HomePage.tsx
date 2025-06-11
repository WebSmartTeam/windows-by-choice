import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Clock, Phone } from 'lucide-react';


const HomePage = () => {
  const services = [
    {
      title: 'Windows',
      description: 'UPVC & aluminium windows with energy-efficient double glazing',
      image: '/images/windows/window-services-hitchin-1.jpg',
      link: '/windows'
    },
    {
      title: 'Doors',
      description: 'Composite, bi-fold, patio & French doors for every home',
      image: '/images/doors/door-services-hitchin-1.jpg',
      link: '/doors'
    },
    {
      title: 'Conservatories',
      description: 'Victorian, Edwardian & modern conservatory designs',
      image: '/images/conservatories/conservatories-hitchin.png',
      link: '/conservatories'
    },
    {
      title: 'Living Rooms',
      description: 'Stunning orangeries and living room extensions',
      image: '/images/living-room-orangeries/livin-room-and-orangeries-1.jpg',
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
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-6">
              We Produce Quality Windows for You
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Transform your home with our premium windows, doors, and conservatories. 
              35+ years of excellence in Bedfordshire and South East England.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-blue-800 text-white rounded-lg hover:bg-emerald-500 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 hover:animate-pulse"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:animate-bounce" />
              </Link>
              <a
                href="tel:07774604190"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-blue-800 text-blue-800 rounded-lg hover:bg-blue-800 hover:text-white transition-all duration-300 font-medium transform hover:scale-105"
              >
                <Phone className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                07774 604 190
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