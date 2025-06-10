import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Windows',
      href: '/windows',
      dropdown: [
        { name: 'UPVC Windows', href: '/windows#upvc' },
        { name: 'Aluminium Windows', href: '/windows#aluminium' },
        { name: 'Lantern Roofs', href: '/windows#lantern' }
      ]
    },
    {
      name: 'Doors',
      href: '/doors',
      dropdown: [
        { name: 'Composite Doors', href: '/doors#composite' },
        { name: 'Bi-Fold Doors', href: '/doors#bifold' },
        { name: 'Patio Doors', href: '/doors#patio' },
        { name: 'French Doors', href: '/doors#french' }
      ]
    },
    {
      name: 'Conservatories',
      href: '/conservatories',
      dropdown: [
        { name: 'Victorian', href: '/conservatories#victorian' },
        { name: 'Edwardian', href: '/conservatories#edwardian' },
        { name: 'Lean-To', href: '/conservatories#lean-to' },
        { name: 'P-Shaped', href: '/conservatories#p-shaped' },
        { name: 'T-Shaped', href: '/conservatories#t-shaped' }
      ]
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
            <a href="tel:07774604190" className="flex items-center gap-2 text-[#8B7E6A] hover:text-[#6B5E4A] font-medium">
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
                src="/images/homepage/logo.png" 
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
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className="flex items-center gap-1 text-gray-700 hover:text-[#8B7E6A] font-medium transition-colors"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-[#FAF8F5] hover:text-[#8B7E6A] transition-colors"
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
                  {item.dropdown && (
                    <div className="ml-4 space-y-1 mt-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block py-1 text-sm text-gray-600 hover:text-[#8B7E6A]"
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

    </header>
  );
};

export default Header;