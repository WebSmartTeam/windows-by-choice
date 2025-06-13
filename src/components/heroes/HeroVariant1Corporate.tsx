import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const HeroVariant1Corporate = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Clean Background Image - No Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/images/homepage/20250613_0028_Modern Suburban Elegance_simple_compose_01jxjr11ehfv68aq7zdcbvr047.png"
          alt="Modern suburban home with premium windows and doors" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Simple Content - Bottom Left */}
      <div className="relative z-10 h-screen flex items-end">
        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-xl">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              
              {/* Simple Headline */}
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4 leading-tight">
                Premium Windows & Doors
              </h1>
              
              <p className="text-lg text-slate-600 mb-6">
                Transform your home with 35+ years of excellence in Bedfordshire and South East England.
              </p>

              {/* Single Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  to="/quote" 
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                
                <a 
                  href="tel:07774604190" 
                  className="inline-flex items-center justify-center border-2 border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  07774 604 190
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVariant1Corporate;