import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Quote, ArrowRight } from 'lucide-react';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuData = {
    windows: {
      title: "Windows",
      icon: "🪟",
      items: [
        {
          name: "UPVC Windows",
          description: "Energy-efficient, low maintenance, excellent insulation",
          image: "/images/windows/upvc-windows-2.jpg",
          href: "/windows#upvc"
        },
        {
          name: "Aluminium Windows",
          description: "Modern, durable, sleek design with slim frames",
          image: "/images/windows/aluminium-windows-1.jpg",
          href: "/windows#aluminium"
        },
        {
          name: "Lantern Roofs",
          description: "Flood your space with natural light and style",
          image: "/images/windows/lantern-roofs-1.jpg",
          href: "/windows#lantern"
        },
        {
          name: "Bay Windows",
          description: "Classic design adding space and elegance",
          image: "/images/windows/window-services-hitchin-1.jpg",
          href: "/windows#bay"
        },
        {
          name: "Sash Windows",
          description: "Traditional charm with modern performance",
          image: "/images/windows/window-services-hitchin-2.jpg",
          href: "/windows#sash"
        }
      ]
    },
    doors: {
      title: "Doors",
      icon: "🚪",
      items: [
        {
          name: "Composite Doors",
          description: "Secure, stylish front doors with superior insulation",
          image: "/images/doors/composite-doors-1.jpg",
          href: "/doors#composite"
        },
        {
          name: "Bi-Fold Doors",
          description: "Open up your space with seamless indoor-outdoor living",
          image: "/images/doors/aluminium-bi-fold-doors-2.jpg",
          href: "/doors#bifold"
        },
        {
          name: "Patio Doors",
          description: "Smooth sliding access to your garden and outdoor space",
          image: "/images/doors/upvc-patio-doors-1.jpg",
          href: "/doors#patio"
        },
        {
          name: "French Doors",
          description: "Elegant traditional design with modern security",
          image: "/images/doors/upvc-french-doors-1.jpg",
          href: "/doors#french"
        },
        {
          name: "Stable Doors",
          description: "Charming country-style doors with practical functionality",
          image: "/images/doors/stable-doors-1.jpg",
          href: "/doors#stable"
        }
      ]
    },
    conservatories: {
      title: "Conservatories & Extensions",
      icon: "🏡",
      items: [
        {
          name: "Victorian Conservatories",
          description: "Classic elegance with ornate detailing and bay facets",
          image: "/images/conservatories/victorian-conservatories-hitchin-2.jpg",
          href: "/conservatories#victorian"
        },
        {
          name: "Edwardian Conservatories",
          description: "Rectangular design maximising space and light",
          image: "/images/conservatories/edwardian-conservatories-hitchin-2.jpg",
          href: "/conservatories#edwardian"
        },
        {
          name: "Lean-To Conservatories",
          description: "Simple, cost-effective design perfect for smaller spaces",
          image: "/images/conservatories/lean-to-conservatories-hitchin-1.jpg",
          href: "/conservatories#lean-to"
        },
        {
          name: "Orangeries",
          description: "Luxury living spaces with solid walls and glazed roof",
          image: "/images/living-room-orangeries/livin-room-and-orangeries-1.jpg",
          href: "/living-rooms#orangeries"
        },
        {
          name: "P-Shaped Extensions",
          description: "Combines Victorian and Lean-to for maximum space",
          image: "/images/conservatories/p-shaped-conservatories-hitchin-1-1.jpg",
          href: "/conservatories#p-shaped"
        }
      ]
    }
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 w-full mega-menu-glass shadow-2xl border-t border-gray-100 z-50 animate-scaleIn">
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white/90 to-emerald-50/80"></div>
      
      <div className="relative container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(menuData).map(([key, section]) => (
            <div key={key} className="space-y-4">
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-2xl">{section.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 bg-gradient-to-r from-blue-800 to-emerald-600 bg-clip-text text-transparent">
                  {section.title}
                </h3>
              </div>

              {/* Menu Items */}
              <div className="space-y-3">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100/50 hover:border-blue-200/50 mega-menu-item animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onMouseEnter={() => setHoveredItem(`${key}-${index}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className="flex items-start gap-4 p-4 transition-all duration-300"
                    >
                      {/* Thumbnail */}
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-slate-800 group-hover:text-blue-800 transition-colors line-clamp-1">
                            {item.name}
                          </h4>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2 group-hover:text-gray-700 transition-colors">
                          {item.description}
                        </p>

                        {/* Hover Actions */}
                        <div className={`flex items-center gap-3 mt-3 transition-all duration-300 ${
                          hoveredItem === `${key}-${index}` ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                        }`}>
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors">
                            <ArrowRight className="w-3 h-3" />
                            Learn More
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 hover:text-emerald-700 transition-colors">
                            <Quote className="w-3 h-3" />
                            Get Quote
                          </span>
                        </div>
                      </div>
                    </Link>

                    {/* Hover gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 to-emerald-500/5 transition-opacity duration-300 ${
                      hoveredItem === `${key}-${index}` ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                  </div>
                ))}
              </div>

              {/* Section CTA */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  to={key === 'conservatories' ? '/conservatories' : `/${key}`}
                  onClick={onClose}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:text-emerald-600 transition-colors group"
                >
                  View All {section.title}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-slate-800">Ready to Transform Your Home?</h4>
              <p className="text-sm text-gray-600">Get a free, no-obligation quote today</p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                onClick={onClose}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-800 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-200/50 group"
              >
                <Quote className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Get Free Quote
              </Link>
              <a
                href="tel:07774604190"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-500 hover:to-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-200/50"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Click overlay to close */}
      <div 
        className="absolute inset-0 -z-10" 
        onClick={onClose}
      />
    </div>
  );
};

export default MegaMenu;