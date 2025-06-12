import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import MegaMenu from './MegaMenu';

interface NavigationItem {
  name: string;
  href: string;
  megaMenu?: boolean;
  dropdown?: { name: string; href: string; }[];
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const navigation: NavigationItem[] = [
    { 
      name: 'Services', 
      href: '#', 
      megaMenu: true 
    },
    { name: 'Living Rooms', href: '/living-rooms' },
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="border-b border-gray-100 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="text-gray-600">
              35+ Years of Excellence in Windows & Doors
            </div>
            <a href="tel:07774604190" className="flex items-center gap-2 text-blue-800 hover:text-emerald-500 font-medium">
              <Phone className="w-4 h-4" />
              07774 604 190
            </a>
          </div>
        </div>

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
                  onMouseEnter={() => {
                    if (item.megaMenu) {
                      setIsMegaMenuOpen(true);
                    } else if (item.dropdown) {
                      setActiveDropdown(item.name);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.megaMenu) {
                      // Don't close mega menu immediately - let MegaMenu component handle it
                    } else {
                      setActiveDropdown(null);
                    }
                  }}
                >
                  {item.megaMenu ? (
                    <button
                      className="flex items-center gap-1 text-slate-700 hover:text-blue-800 font-medium transition-colors"
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center gap-1 text-slate-700 hover:text-blue-800 font-medium transition-colors"
                    >
                      {item.name}
                      {item.dropdown && <ChevronDown className="w-4 h-4" />}
                    </Link>
                  )}
                  
                  {/* Dropdown Menu for regular items */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
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
                  {item.megaMenu ? (
                    <div>
                      <div className="py-2 font-medium text-gray-700">
                        {item.name}
                      </div>
                      <div className="ml-4 space-y-1">
                        <Link
                          to="/windows"
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Windows
                        </Link>
                        <Link
                          to="/doors"
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Doors
                        </Link>
                        <Link
                          to="/conservatories"
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Conservatories
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.dropdown && (
                    <div className="ml-4 space-y-1 mt-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Mega Menu */}
      <div 
        className="relative"
        onMouseEnter={() => setIsMegaMenuOpen(true)}
        onMouseLeave={() => setIsMegaMenuOpen(false)}
      >
        <MegaMenu 
          isOpen={isMegaMenuOpen} 
          onClose={() => setIsMegaMenuOpen(false)} 
        />
      </div>
    </header>
  );
};

export default Header;