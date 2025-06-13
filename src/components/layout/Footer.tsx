import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'UPVC Windows', href: '/windows#upvc' },
    { name: 'Aluminium Windows', href: '/windows#aluminium' },
    { name: 'Composite Doors', href: '/doors#composite' },
    { name: 'Bi-Fold Doors', href: '/doors#bifold' },
    { name: 'Conservatories', href: '/conservatories' },
    { name: 'Living Rooms', href: '/living-rooms' },
    { name: 'Kitchen and Bathroom Fitting', href: 'https://www.lms-interiors.co.uk/', external: true },
    { name: 'Painting & Decorating in Hitchin', href: 'https://www.heavenlydecor.co.uk/', external: true }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' }
  ];

  return (
    <footer className="bg-gray-50 text-gray-700">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Windows by Choice</h3>
              <p className="text-sm">Quality Windows for You</p>
            </div>
            <p className="mb-4">
              Family-run business with over 35 years of experience in windows, doors, and conservatories.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/windowsbychoice/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="mailto:info@windowsbychoice.co.uk" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:07774604190" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="hover:text-blue-400 transition-colors flex items-center gap-1"
                  >
                    <ArrowRight className="w-3 h-3" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="hover:text-blue-600 transition-colors flex items-center gap-1"
                  >
                    <ArrowRight className="w-3 h-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="tel:07774604190"
                className="flex items-start gap-3 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">07774 604 190</p>
                  <p className="text-sm">Mon-Fri: 8AM-6PM</p>
                </div>
              </a>
              
              <a
                href="mailto:info@windowsbychoice.co.uk"
                className="flex items-start gap-3 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>info@windowsbychoice.co.uk</span>
              </a>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Shefford, Bedfordshire</p>
                  <p className="text-sm">Covering South East & London</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">
                Ready to Transform Your Home?
              </h3>
              <p className="text-white/90">Get your free quote today</p>
            </div>
            <div className="flex gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:07774604190"
                className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Bar */}
      <div className="bg-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h4 className="text-gray-800 font-semibold mb-2">Trusted & Certified</h4>
            <p className="text-gray-600 text-sm">Accredited by leading industry bodies for your peace of mind</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 items-center justify-items-center">
            <img src="/images/footer logos/fensa.png" alt="FENSA Registered" className="h-16 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/footer logos/all-seasons-trees-which-trusted-trader.png" alt="Which? Trusted Trader" className="h-16 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/footer logos/kitemark.png" alt="BSI Kitemark" className="h-16 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/footer logos/Rehau-Logo.png" alt="Rehau Partner" className="h-12 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/footer logos/Smart-300w.png" alt="Smart Systems" className="h-12 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/footer logos/liniar-goe-approved.png" alt="Liniar Approved" className="h-14 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/footer logos/solidor-premium-installer-300x159.webp" alt="Solidor Premium Installer" className="h-14 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/footer logos/ultra-installer-logo.png" alt="Ultra Installer" className="h-12 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/images/footer logos/images.png" alt="Certification Logo" className="h-14 opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-300 py-4">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm">
            <p className="text-gray-700">
              © {currentYear} Windows by Choice Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;