import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Clock, MapPin, Phone, Mail } from 'lucide-react';

const AboutPage = () => {
  const milestones = [
    {
      year: '1989',
      title: 'Company Founded',
      description: 'Windows by Choice established as a family-run business in Bedfordshire'
    },
    {
      year: '1995',
      title: 'FENSA Certification',
      description: 'Achieved FENSA certification for competent person scheme compliance'
    },
    {
      year: '2005',
      title: 'Which? Trusted Trader',
      description: 'Became a Which? Trusted Trader, recognised for exceptional customer service'
    },
    {
      year: '2015',
      title: 'Orangery Specialists',
      description: 'Expanded expertise to include luxury orangeries and living room extensions'
    },
    {
      year: '2024',
      title: '35+ Years of Excellence',
      description: 'Celebrating over three decades of quality installations across South East England'
    }
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We never compromise on quality. Every product is carefully selected and every installation is carried out to the highest standards.'
    },
    {
      icon: Users,
      title: 'Family Values',
      description: 'As a family-run business, we treat every customer like family. Personal service and genuine care are at the heart of everything we do.'
    },
    {
      icon: Clock,
      title: 'Reliable Service',
      description: 'We arrive on time, complete work as promised, and stand behind our installations with comprehensive warranties.'
    }
  ];

  const certifications = [
    'FENSA Registered',
    'Which? Trusted Trader',
    'CERTASS Approved',
    'Building Regulations Compliant',
    'Insurance Backed Guarantees',
    'Trading Standards Approved'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
            About Windows by Choice
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            A family-run business serving Bedfordshire and South East England for over 35 years. 
            We take pride in delivering exceptional quality and service to every customer.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Windows by Choice was founded in 1989 with a simple mission: to provide homeowners 
                  with the highest quality windows, doors, and conservatories, backed by exceptional 
                  customer service and craftsmanship.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Over the past 35+ years, we've grown from a small local business to one of 
                  Bedfordshire's most trusted names in home improvements, whilst maintaining our 
                  family values and commitment to quality.
                </p>
                <p className="text-lg text-gray-600">
                  Today, we continue to serve families across Bedfordshire, South East England, 
                  and London, helping them transform their homes with beautiful, energy-efficient 
                  windows, doors, conservatories, and orangeries.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src="/images/about us/about-us-1.jpg" 
                  alt="Windows by Choice team"
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold">35+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Our Journey
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 text-blue-600 rounded-full mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Accreditations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Certifications & Accreditations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recognised for our quality and professionalism
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-800">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Service Area
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Based in Shefford, Bedfordshire, we proudly serve customers across:
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Bedfordshire and surrounding areas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">South East England</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Greater London area</span>
                  </div>
                </div>
                
                <p className="text-gray-600">
                  Not sure if we cover your area? Give us a call and we'll be happy to help.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <a href="tel:07774604190" className="text-gray-700 hover:text-blue-600">
                      07774 604 190
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a href="mailto:info@windowsbychoice.co.uk" className="text-gray-700 hover:text-blue-600">
                      info@windowsbychoice.co.uk
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div className="text-gray-700">
                      Shefford, Bedfordshire<br />
                      South East England
                    </div>
                  </div>
                </div>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the difference that 35+ years of expertise makes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Get Free Consultation
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

export default AboutPage;