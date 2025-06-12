import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Award, Shield, Clock, Star } from 'lucide-react';

const HeroVariant1Corporate = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      {/* Background Property Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/homepage/window-services-hitchin.jpg"
          alt="Beautiful home with Windows by Choice installations" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Main Content */}
          <div className="text-white space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <Award className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-sm font-medium">Which? Trusted Trader Approved</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Premium
                <span className="block text-blue-400">Windows & Doors</span>
                <span className="block text-2xl lg:text-3xl font-normal text-slate-200">
                  for Discerning Homeowners
                </span>
              </h1>
              
              <p className="text-xl text-slate-200 max-w-2xl leading-relaxed">
                Transform your property with our bespoke windows, doors, and conservatories. 
                35+ years of excellence serving Bedfordshire and South East England.
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-blue-400">35+</div>
                <div className="text-sm text-slate-300">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">2,500+</div>
                <div className="text-sm text-slate-300">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">A+</div>
                <div className="text-sm text-slate-300">Energy Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">10</div>
                <div className="text-sm text-slate-300">Year Warranty</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <a 
                href="tel:07774604190" 
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now: 07774 604 190
              </a>
            </div>
          </div>

          {/* Right Side - Trust Indicators & Features */}
          <div className="space-y-6">
            {/* Which? Trusted Trader Large Badge */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <div className="flex items-center space-x-4">
                <img 
                  src="/images/contact/which-trusted-wbc.png" 
                  alt="Which? Trusted Trader" 
                  className="w-16 h-16"
                />
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Which? Trusted Trader</h3>
                  <p className="text-slate-600">Vetted & Approved</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-slate-600">5.0 Rating</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-green-400" />
                  <div>
                    <h4 className="font-semibold text-white">FENSA Registered</h4>
                    <p className="text-sm text-slate-300">All installations certified</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-blue-400" />
                  <div>
                    <h4 className="font-semibold text-white">Same Day Quotes</h4>
                    <p className="text-sm text-slate-300">Free, no-obligation surveys</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Ready to Transform Your Home?</h3>
              <p className="text-blue-100 mb-4">Get your free, no-obligation quote today</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">07774 604 190</span>
                <Phone className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-1 h-8 bg-white/30 rounded-full">
            <div className="w-1 h-4 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroVariant1Corporate;