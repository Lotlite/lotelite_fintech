import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-6 fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-300">
              FinTech
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <a href="/products" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 relative group">
                Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              {/* Invisible bridge to prevent dropdown from closing */}
              <div className="absolute top-full left-0 w-full h-2 bg-transparent"></div>
              {isProductsOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 transition-all duration-300 ease-in-out">
                  <a href="/products/personal-loan" className="block px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300 relative group">
                    <span className="absolute left-0 top-0 h-full w-1 bg-blue-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></span>
                    <span className="ml-2">Property Loan</span>
                  </a>
                  <a href="/products/home-loan" className="block px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300 relative group">
                    <span className="absolute left-0 top-0 h-full w-1 bg-blue-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></span>
                    <span className="ml-2">Loan Against Property</span>
                  </a>
                  <a href="/products/education-loan" className="block px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300 relative group">
                    <span className="absolute left-0 top-0 h-full w-1 bg-blue-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></span>
                    <span className="ml-2">Education Loan</span>
                  </a>
                </div>
              )}
            </div>
            <a href="/support" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 relative group">
              Support
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Login/Sign Up Button */}
          <div className="hidden md:block">
            <a
              href="/login"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Sign In
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                Home
              </a>
              <div className="flex flex-col space-y-2">
                <a href="/products" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Products
                </a>
                <div className="pl-4 space-y-2">
                  <a href="/products/personal-loan" className="block text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:pl-6">
                    Property Loan
                  </a>
                  <a href="/products/home-loan" className="block text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:pl-6">
                    Loan Against Property
                  </a>
                  <a href="/products/education-loan" className="block text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:pl-6">
                    Education Loan
                  </a>
                </div>
              </div>
              <a href="/support" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                Support
              </a>
              <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                Contact
              </a>
              <a
                href="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Sign In
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 