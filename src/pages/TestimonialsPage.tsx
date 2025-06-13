import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote } from 'lucide-react';

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Mrs. Sarah Johnson',
      location: 'Bedford',
      service: 'UPVC Windows Installation',
      rating: 5,
      text: 'Absolutely delighted with our new windows from Windows by Choice. The team was professional, punctual, and left everything spotless. The quality is outstanding and our home feels so much warmer. Would highly recommend to anyone considering new windows.',
      date: 'November 2024',
      reviewImage: '/images/Testimonials/tes1.jpg'
    },
    {
      id: 2,
      name: 'Mr. Michael Thompson',
      location: 'Luton',
      service: 'Bi-Fold Doors',
      rating: 5,
      text: 'The bi-fold doors have completely transformed our living space. Windows by Choice handled everything from planning to installation. The attention to detail was exceptional and the doors operate beautifully. Excellent value for money.',
      date: 'October 2024',
      reviewImage: '/images/Testimonials/tes2.jpg'
    },
    {
      id: 3,
      name: 'Mrs. Emma Davies',
      location: 'Hitchin',
      service: 'Victorian Conservatory',
      rating: 5,
      text: 'Our Victorian conservatory is everything we dreamed of and more. The team at Windows by Choice guided us through every step, from design to completion. We now have a beautiful space we use all year round. Thank you for making our dream come true.',
      date: 'September 2024',
      reviewImage: '/images/Testimonials/tes3.jpg'
    },
    {
      id: 4,
      name: 'Mr. Robert Wilson',
      location: 'St Albans',
      service: 'Composite Front Door',
      rating: 5,
      text: 'Excellent service from start to finish. The composite door looks fantastic and the security features give us real peace of mind. The installation was quick and tidy. Very pleased with the whole experience and the aftercare service.',
      date: 'August 2024',
      reviewImage: '/images/Testimonials/tes4.jpg'
    },
    {
      id: 5,
      name: 'Mrs. Lisa Chen',
      location: 'Cambridge',
      service: 'Orangery Extension',
      rating: 5,
      text: 'Our orangery has added so much value to our home. The build quality is superb and it stays comfortable in all weather. Windows by Choice exceeded our expectations in every way. The project management was flawless.',
      date: 'July 2024',
      reviewImage: '/images/Testimonials/tes5.jpg'
    },
    {
      id: 6,
      name: 'Mr. David Brown',
      location: 'Milton Keynes',
      service: 'Aluminium Windows',
      rating: 5,
      text: 'The sleek aluminium windows have given our home a modern look. Energy efficiency has improved dramatically and the noise reduction is impressive. Professional service throughout and great communication.',
      date: 'June 2024',
      reviewImage: '/images/Testimonials/tes6.jpg'
    },
    {
      id: 7,
      name: 'Mrs. Jennifer Smith',
      location: 'Stevenage',
      service: 'French Doors',
      rating: 5,
      text: 'Beautiful French doors that have opened up our living space perfectly. The installation team was courteous and efficient. Very happy with the quality and finish. Would definitely use Windows by Choice again.',
      date: 'May 2024',
      reviewImage: '/images/Testimonials/tes7.jpg'
    },
    {
      id: 8,
      name: 'Mr. Paul Roberts',
      location: 'Dunstable',
      service: 'Lean-To Conservatory',
      rating: 5,
      text: 'Perfect addition to our home. The lean-to conservatory design fits our space perfectly and the build quality is excellent. Great value and professional service throughout. Highly recommended.',
      date: 'April 2024',
      reviewImage: '/images/Testimonials/tes8.jpg'
    }
  ];

  const stats = [
    {
      number: '98%',
      label: 'Customer Satisfaction',
      description: 'Based on customer feedback surveys'
    },
    {
      number: '4.9/5',
      label: 'Average Rating',
      description: 'From independent review platforms'
    },
    {
      number: '95%',
      label: 'Repeat Customers',
      description: 'Customers who recommend us to friends'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Interactive Hero Header */}
      <section className="relative min-h-[60vh] flex items-center">
        {/* Background Image */}
        <img 
          src="/images/Testimonials/20250613_1447_Delighted Homeowners' Joy_simple_compose_01jxm96yk1earbe5j6p9gpgas9.png"
          alt="Delighted Homeowners Joy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-purple-800/30 to-purple-900/40" />
        
        {/* Floating Rating Badge */}
        <div className="absolute top-10 right-10 bg-yellow-500/90 backdrop-blur-sm rounded-xl p-4 animate-bounce">
          <div className="text-white text-center">
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-white fill-current" />
              ))}
            </div>
            <div className="text-sm font-bold">4.9/5 Rating</div>
          </div>
        </div>
        
        {/* Floating Satisfaction Badge */}
        <div className="absolute bottom-10 left-10 bg-green-600/90 backdrop-blur-sm rounded-xl p-4 animate-pulse">
          <div className="text-white text-center">
            <div className="text-3xl font-bold">98%</div>
            <div className="text-sm font-bold">Satisfaction</div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Customer Testimonials
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              See what our customers say about their experience with Windows by Choice. 
              Over 35 years of happy customers across Bedfordshire and South East England.
            </p>
            
            {/* Interactive CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Your Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:07774604190"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-800 transition-all duration-300 font-semibold transform hover:scale-105"
              >
                Call 07774 604 190
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 mt-8 text-purple-100">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">5-Star Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Quote className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Verified Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Trusted Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</div>
                <div className="text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            What Our Customers Say
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Review Letter Image */}
                  <div className="relative">
                    <img
                      src={testimonial.reviewImage}
                      alt={`Review letter from ${testimonial.name}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Review Content */}
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start mb-4">
                        <Quote className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-800 mb-1">{testimonial.name}</h3>
                          <p className="text-sm text-blue-600 font-medium">{testimonial.service}</p>
                          <p className="text-sm text-gray-600">{testimonial.location} • {testimonial.date}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 text-sm leading-relaxed italic">
                        "{testimonial.text}"
                      </p>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center text-xs text-gray-500">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                          ✓ Verified Customer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Trusted & Accredited
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality is recognised by leading industry bodies
            </p>
          </div>

          <div className="flex justify-center items-center gap-8 flex-wrap max-w-4xl mx-auto">
            <div className="text-center">
              <img 
                src="/images/contact/which-trusted-wbc.png" 
                alt="Which? Trusted Trader" 
                className="h-20 mx-auto mb-2"
              />
              <div className="text-sm font-medium text-gray-700">Which? Trusted Trader</div>
            </div>
            <div className="text-center">
              <img 
                src="/images/contact/smq3.png" 
                alt="FENSA Registered" 
                className="h-20 mx-auto mb-2"
              />
              <div className="text-sm font-medium text-gray-700">FENSA Registered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              How We Collect Reviews
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              All our reviews are collected from genuine customers who have used our services. 
              We believe in transparency and authenticity in all our customer feedback.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Project Completion</h3>
                <p className="text-sm text-gray-600">After completing your installation, we send a feedback request</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Independent Verification</h3>
                <p className="text-sm text-gray-600">Reviews are verified through trusted third-party platforms</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Published Reviews</h3>
                <p className="text-sm text-gray-600">Genuine reviews are published to help future customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get your free quote today and experience the Windows by Choice difference
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

export default TestimonialsPage;