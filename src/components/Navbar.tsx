'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.products-dropdown')) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleProductClick = (type: string) => {
    setIsProductsOpen(false);
    setIsMenuOpen(false);
    router.push(`/loan-application?type=${type}`);
  };

  return (
    <nav className="bg-white py-4 px-6 fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-semibold text-blue-600">
              LotliteFintech
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative group products-dropdown"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <Link
                href="/loan-application"
                className="text-gray-600 hover:text-blue-600 flex items-center px-3 py-2 focus:outline-none"
              >
                Products
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </Link>

              {/* Dropdown Menu */}
              {isProductsOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 transition-all duration-300 ease-in-out transform opacity-100 scale-100 z-50">
                  <Link
                    href="/property-loan"
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                    onClick={() => {
                      setIsProductsOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Property Loan
                  </Link>
                  <Link
                    href="/loan-against-property"
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                    onClick={() => {
                      setIsProductsOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Loan Against Property
                  </Link>
                  <Link
                    href="/education-loan"
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                    onClick={() => {
                      setIsProductsOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    Education Loan
                  </Link>
                </div>
              )}
            </div>

            <Link href="/support-center" className="text-gray-600 hover:text-blue-600">
              Support
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Login/Sign Up Button */}
          <div className="hidden md:block">
            <Link
              href="/login"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
                setIsProductsOpen(false);
              }}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle mobile menu"
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
              <Link 
                href="/" 
                className="text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Products Dropdown */}
              <div className="relative products-dropdown">
                <Link
                  href="/loan-application"
                  className="text-gray-600 hover:text-blue-600 flex items-center w-full text-left"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsProductsOpen(false);
                  }}
                >
                  Products
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </Link>

                {isProductsOpen && (
                  <div className="mt-2 space-y-2 pl-4">
                    <Link
                      href="/property-loan"
                      className="block w-full text-left text-gray-700 hover:text-blue-600 py-2"
                      onClick={() => {
                        setIsProductsOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      Property Loan
                    </Link>
                    <Link
                      href="/loan-against-property"
                      className="block w-full text-left text-gray-700 hover:text-blue-600 py-2"
                      onClick={() => {
                        setIsProductsOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      Loan Against Property
                    </Link>
                    <Link
                      href="/education-loan"
                      className="block w-full text-left text-gray-700 hover:text-blue-600 py-2"
                      onClick={() => {
                        setIsProductsOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      Education Loan
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="/support-center" 
                className="text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                href="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;