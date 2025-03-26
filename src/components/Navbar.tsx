'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-6 fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-semibold text-blue-600">
              FinTech
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600">
              Home
            </a>

            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="text-gray-600 hover:text-blue-600 flex items-center">
                Products
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isProductsOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                  <a
                    href="/property-loan"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                  >
                    Property Loan
                  </a>
                  <a
                    href="/loan-against-property"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                  >
                    Loan Against Property
                  </a>
                  <a
                    href="/education-loan"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                  >
                    Education Loan
                  </a>
                </div>
              )}
            </div>

            <a href="/support" className="text-gray-600 hover:text-blue-600">
              Support
            </a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </a>
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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
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
              <a href="/" className="text-gray-600 hover:text-blue-600">
                Home
              </a>

              {/* Mobile Products Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="text-gray-600 hover:text-blue-600 flex items-center w-full text-left"
                >
                  Products
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {isProductsOpen && (
                  <div className="mt-2 space-y-2 pl-4">
                    <a
                      href="/property-loan"
                      className="block text-gray-700 hover:text-blue-600"
                    >
                      Property Loan
                    </a>
                    <a
                      href="/loan-against-property"
                      className="block text-gray-700 hover:text-blue-600"
                    >
                      Loan Against Property
                    </a>
                    <a
                      href="/education-loan"
                      className="block text-gray-700 hover:text-blue-600"
                    >
                      Education Loan
                    </a>
                  </div>
                )}
              </div>

              <a href="/support" className="text-gray-600 hover:text-blue-600">
                Support
              </a>
              <a href="/contact" className="text-gray-600 hover:text-blue-600">
                Contact
              </a>
              <Link
                href="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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
