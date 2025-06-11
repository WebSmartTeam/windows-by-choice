import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote } from 'lucide-react';

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Bedford',
      service: 'UPVC Windows',
      rating: 5,
      text: 'Absolutely delighted with our new windows from Windows by Choice. The team was professional, punctual, and left everything spotless. The quality is outstanding and our home feels so much warmer. Highly recommended!',
      date: 'November 2024'
    },
    {
      id: 2,
      name: 'Michael Thompson',
      location: 'Luton',
      service: 'Bi-Fold Doors',
      rating: 5,
      text: 'The bi-fold doors have completely transformed our living space. Windows by Choice handled everything from planning to installation. The attention to detail was exceptional and the doors operate beautifully.',
      date: 'October 2024'
    },
    {
      id: 3,
      name: 'Emma Davies',
      location: 'Hitchin',
      service: 'Victorian Conservatory',
      rating: 5,
      text: 'Our Victorian conservatory is everything we dreamed of and more. The team at Windows by Choice guided us through every step, from design to completion. We now have a beautiful space we use all year round.',
      date: 'September 2024'
    },
    {
      id: 4,
      name: 'Robert Wilson',
      location: 'St Albans',
      service: 'Composite Doors',
      rating: 5,
      text: 'Excellent service from start to finish. The composite door looks fantastic and the security features give us real peace of mind. The installation was quick and tidy. Very pleased with the whole experience.',
      date: 'August 2024'
    },
    {
      id: 5,
      name: 'Lisa Chen',
      location: 'Cambridge',
      service: 'Orangery Extension',
      rating: 5,
      text: 'Our orangery has added so much value to our home. The build quality is superb and it stays comfortable in all weather. Windows by Choice exceeded our expectations in every way.',
      date: 'July 2024'
    },
    {
      id: 6,
      name: 'David Brown',
      location: 'Milton Keynes',
      service: 'Aluminium Windows',
      rating: 5,
      text: 'The sleek aluminium windows have given our home a modern look. Energy efficiency has improved dramatically and the noise reduction is impressive. Professional service throughout.',
      date: 'June 2024'
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
      {/* Page Header */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
            Customer Testimonials
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            See what our customers say about their experience with Windows by Choice. 
            Over 35 years of happy customers across Bedfordshire and South East England.
          </p>
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-blue-600 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                  <div className="text-sm text-blue-600 font-medium">{testimonial.service}</div>
                  <div className="text-xs text-gray-500 mt-1">{testimonial.date}</div>
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
                src="./images/contact/which-trusted-wbc.png" 
                alt="Which? Trusted Trader" 
                className="h-20 mx-auto mb-2"
              />
              <div className="text-sm font-medium text-gray-700">Which? Trusted Trader</div>
            </div>
            <div className="text-center">
              <img 
                src="./images/contact/smq3.png" 
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