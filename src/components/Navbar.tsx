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
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600">
              Home
            </a>
            <a href="/products" className="text-gray-600 hover:text-blue-600">
              Products
            </a>
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
              Login / Sign In
            </a>
          </div>

          {/* Mobile menu button */}
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
              <a href="/products" className="text-gray-600 hover:text-blue-600">
                Products
              </a>
              <a href="/support" className="text-gray-600 hover:text-blue-600">
                Support
              </a>
              <a href="/contact" className="text-gray-600 hover:text-blue-600">
                Contact
              </Link>
              <Link
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