import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

interface MegaMenuSection {
  title: string;
  description: string;
  image: string;
  items: { name: string; href: string; }[];
}

interface NavigationItem {
  name: string;
  href: string;
  megaMenu?: {
    title: string;
    description: string;
    sections: MegaMenuSection[];
  };
}

const NewHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const navigation: NavigationItem[] = [
    { name: 'Home', href: '/' },
    {
      name: 'Windows',
      href: '/windows',
      megaMenu: {
        title: 'Window Solutions',
        description: 'Premium windows for every home',
        sections: [
          {
            title: 'UPVC Windows',
            description: 'Energy efficient and low maintenance',
            image: '/images/windows/upvc-windows-2.jpg',
            items: [
              { name: 'Casement Windows', href: '/windows#casement' },
              { name: 'Tilt & Turn Windows', href: '/windows#tilt-turn' },
              { name: 'Bay Windows', href: '/windows#bay' },
              { name: 'Sash Windows', href: '/windows#sash' }
            ]
          },
          {
            title: 'Aluminium Windows',
            description: 'Modern style with slim profiles',
            image: '/images/windows/aluminium-windows-1.jpg',
            items: [
              { name: 'Bi-Fold Windows', href: '/windows#bifold' },
              { name: 'Sliding Windows', href: '/windows#sliding' },
              { name: 'Fixed Windows', href: '/windows#fixed' },
              { name: 'Corner Windows', href: '/windows#corner' }
            ]
          },
          {
            title: 'Roof Windows',
            description: 'Bring natural light from above',
            image: '/images/windows/lantern-roofs-1.jpg',
            items: [
              { name: 'Lantern Roofs', href: '/windows#lantern' },
              { name: 'Roof Lights', href: '/windows#rooflights' },
              { name: 'Skylights', href: '/windows#skylights' },
              { name: 'Velux Windows', href: '/windows#velux' }
            ]
          }
        ]
      }
    },
    {
      name: 'Doors',
      href: '/doors',
      megaMenu: {
        title: 'Door Solutions',
        description: 'Secure and stylish entrance doors',
        sections: [
          {
            title: 'Front Doors',
            description: 'Make a stunning first impression',
            image: '/images/doors/composite-doors-1.jpg',
            items: [
              { name: 'Composite Doors', href: '/doors#composite' },
              { name: 'UPVC Doors', href: '/doors#upvc' },
              { name: 'Stable Doors', href: '/doors#stable' },
              { name: 'Period Doors', href: '/doors#period' }
            ]
          },
          {
            title: 'Patio Doors',
            description: 'Connect indoor and outdoor spaces',
            image: '/images/doors/aluminium-patio-doors-1.jpg',
            items: [
              { name: 'Bi-Fold Doors', href: '/doors#bifold' },
              { name: 'Sliding Doors', href: '/doors#sliding' },
              { name: 'French Doors', href: '/doors#french' },
              { name: 'Inline Doors', href: '/doors#inline' }
            ]
          },
          {
            title: 'Commercial Doors',
            description: 'Heavy duty for business use',
            image: '/images/doors/aluminium-doors-1.jpg',
            items: [
              { name: 'Fire Doors', href: '/doors#fire' },
              { name: 'Security Doors', href: '/doors#security' },
              { name: 'Automatic Doors', href: '/doors#automatic' },
              { name: 'Curtain Walling', href: '/doors#curtain' }
            ]
          }
        ]
      }
    },
    {
      name: 'Conservatories',
      href: '/conservatories',
      megaMenu: {
        title: 'Conservatory & Extension Solutions',
        description: 'Beautiful spaces to enjoy all year round',
        sections: [
          {
            title: 'Classic Conservatories',
            description: 'Traditional designs for every home',
            image: '/images/conservatories/victorian-conservatories-hitchin-2.jpg',
            items: [
              { name: 'Victorian', href: '/conservatories#victorian' },
              { name: 'Edwardian', href: '/conservatories#edwardian' },
              { name: 'Lean-To', href: '/conservatories#lean-to' },
              { name: 'Gable End', href: '/conservatories#gable' }
            ]
          },
          {
            title: 'Modern Conservatories',
            description: 'Contemporary living spaces',
            image: '/images/conservatories/p-shaped-conservatories-hitchin-1-1.jpg',
            items: [
              { name: 'P-Shaped', href: '/conservatories#p-shaped' },
              { name: 'T-Shaped', href: '/conservatories#t-shaped' },
              { name: 'L-Shaped', href: '/conservatories#l-shaped' },
              { name: 'Bespoke Design', href: '/conservatories#bespoke' }
            ]
          },
          {
            title: 'Extensions',
            description: 'Add valuable living space',
            image: '/images/living-room-orangeries/livin-room-and-orangeries-1.jpg',
            items: [
              { name: 'Orangeries', href: '/living-rooms#orangeries' },
              { name: 'Garden Rooms', href: '/living-rooms#garden-rooms' },
              { name: 'House Extensions', href: '/living-rooms#extensions' },
              { name: 'Sunrooms', href: '/living-rooms#sunrooms' }
            ]
          }
        ]
      }
    },
    {
      name: 'Livin-Room & Orangeries',
      href: '/living-rooms',
      megaMenu: {
        title: 'Living Space Extensions',
        description: 'Premium orangeries and garden rooms',
        sections: [
          {
            title: 'Orangeries',
            description: 'Luxury brick and glass extensions',
            image: '/images/living-room-orangeries/livin-rooms-1.jpg',
            items: [
              { name: 'Traditional Orangeries', href: '/living-rooms#traditional' },
              { name: 'Modern Orangeries', href: '/living-rooms#modern' },
              { name: 'Kitchen Extensions', href: '/living-rooms#kitchen' },
              { name: 'Dining Extensions', href: '/living-rooms#dining' }
            ]
          },
          {
            title: 'Garden Rooms',
            description: 'Year-round outdoor living',
            image: '/images/living-room-orangeries/livin-rooms-2.jpg',
            items: [
              { name: 'Home Office', href: '/living-rooms#office' },
              { name: 'Gym & Wellness', href: '/living-rooms#gym' },
              { name: 'Entertainment Room', href: '/living-rooms#entertainment' },
              { name: 'Guest Suite', href: '/living-rooms#guest' }
            ]
          },
          {
            title: 'Roof Options',
            description: 'Perfect roofing for every space',
            image: '/images/living-room-orangeries/livin-rooms-3.jpg',
            items: [
              { name: 'Solid Tile Roof', href: '/living-rooms#solid-roof' },
              { name: 'Glass Roof', href: '/living-rooms#glass-roof' },
              { name: 'Lantern Roof', href: '/living-rooms#lantern-roof' },
              { name: 'Hybrid Roof', href: '/living-rooms#hybrid-roof' }
            ]
          }
        ]
      }
    },
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar - Full Width */}
      <div className="bg-slate-800 py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="text-slate-200 font-medium">
              35+ Years of Excellence in Windows & Doors
            </div>
            <a href="tel:07774604190" className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-bold">
              <Phone className="w-4 h-4" />
              CALL NOW ON 07774 604 190
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/images/logo/413776ca-d0ec-471a-a4d9-4fbe072a37d0.png" 
                alt="Windows by Choice" 
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.megaMenu && setActiveMegaMenu(item.name)}
                  onMouseLeave={() => setActiveMegaMenu(null)}
                >
                  <Link
                    to={item.href}
                    className="flex items-center gap-1 text-gray-700 hover:text-[#8B7E6A] font-medium transition-colors"
                  >
                    {item.name}
                    {item.megaMenu && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  
                  {/* Compact Mega Menu */}
                  {item.megaMenu && activeMegaMenu === item.name && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-100 z-50">
                      <div className="p-4">
                        <div className="text-center mb-4">
                          <img 
                            src={item.megaMenu.sections[0]?.image} 
                            alt={item.megaMenu.title}
                            className="w-full h-24 object-cover rounded-lg mb-2"
                          />
                          <h3 className="text-lg font-bold text-gray-800">{item.megaMenu.title}</h3>
                        </div>
                        
                        <div className="space-y-3">
                          {item.megaMenu.sections.map((section, index) => (
                            <div key={index}>
                              <h4 className="font-semibold text-sm text-gray-800 mb-1">{section.title}</h4>
                              <div className="grid grid-cols-2 gap-1">
                                {section.items.slice(0, 4).map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.href}
                                    className="text-xs text-gray-600 hover:text-[#8B7E6A] transition-colors py-1"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-4 pt-3 border-t border-gray-100 flex gap-2">
                          <Link
                            to="/quote"
                            className="flex-1 bg-[#8B7E6A] text-white px-3 py-2 rounded text-sm font-medium hover:bg-[#6B5E4A] transition-colors text-center"
                          >
                            Get Quote
                          </Link>
                          <Link
                            to={item.href}
                            className="flex-1 border border-[#8B7E6A] text-[#8B7E6A] px-3 py-2 rounded text-sm font-medium hover:bg-[#8B7E6A] hover:text-white transition-colors text-center"
                          >
                            View All
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#8B7E6A]"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block py-2 text-gray-700 hover:text-[#8B7E6A] font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.megaMenu && (
                    <div className="ml-4 space-y-1 mt-1">
                      {item.megaMenu.sections.map((section) => (
                        <div key={section.title} className="py-2">
                          <div className="font-medium text-sm text-gray-800 mb-1">{section.title}</div>
                          {section.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block py-1 text-sm text-gray-600 hover:text-[#8B7E6A] ml-4"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NewHeader;