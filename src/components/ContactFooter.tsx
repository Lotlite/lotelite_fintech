'use client';

import Image from 'next/image';
import Link from 'next/link';

const ContactFooter = () => {
  return (
    <footer className="bg-[#1C1F2E] text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute right-0 bottom-0">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
          <path d="M400 0v400H0C0 179.086 179.086 0 400 0z" fill="url(#footer-gradient)" fillOpacity="0.1"/>
        </svg>
        <defs>
          <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1"/>
            <stop offset="100%" stopColor="#60A5FA"/>
          </linearGradient>
        </defs>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Fintech
              </h3>
            </div>
            <p className="text-gray-400 text-sm mb-6">
            At Fintech, we specialize in developing innovative loan solutions tailored to meet the unique financial needs of your business.
            </p>
            <Link href="/about" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center group">
              Learn More About Us
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/ContactPage" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
                </li>
                <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="text-xl font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services/property-loans" className="text-gray-400 hover:text-white transition-colors">
                  Property Loans
                </Link>
              </li>
              <li>
                <Link href="/services/loan-against-property" className="text-gray-400 hover:text-white transition-colors">
                  Loan Against Property
                </Link>
              </li>
              <li>
                <Link href="/services/education-loans" className="text-gray-400 hover:text-white transition-colors">
                  Education Loans
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-span-1">
            <h4 className="text-xl font-semibold mb-6">Follow Us</h4>
            <div className="flex space-x-4 mb-8">
              <Link href="https://facebook.com" className="social-icon bg-white/10 hover:bg-blue-600/20 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6">
                <svg className="w-5 h-5 transform transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </Link>
              <Link href="https://twitter.com" className="social-icon bg-white/10 hover:bg-blue-400/20 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:-rotate-6">
                <svg className="w-5 h-5 transform transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </Link>
              <Link href="https://instagram.com" className="social-icon bg-white/10 hover:bg-pink-500/20 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6">
                <svg className="w-5 h-5 transform transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link href="https://linkedin.com" className="social-icon bg-white/10 hover:bg-blue-700/20 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:-rotate-6">
                <svg className="w-5 h-5 transform transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </Link>
            </div>

            <style jsx>{`
              .social-icon {
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
              }
              .social-icon:hover {
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                transform: translateY(-2px);
              }
              @media (prefers-reduced-motion: reduce) {
                .social-icon {
                  transition: none;
                  transform: none;
                }
              }
            `}</style>

            {/* Contact Information */}
            <div className="space-y-4">
              <p className="text-gray-400">
                <a href="tel:+918805843309" className="hover:text-white transition-colors">
                  +91 8805843309
                </a>
              </p>
              <p className="text-gray-400">
                <a href="tel:+919766499364" className="hover:text-white transition-colors">
                  +91 9766499364
                </a>
              </p>
              <p className="text-gray-400">
                <a href="mailto:contact@lotlitefintech.com" className="hover:text-white transition-colors">
                  contact@lotlitefintech.com
                </a>
              </p>
              <p className="text-gray-400">
                Lotlite Fintech Pvt Ltd. Office - 122,<br />
                Gera Imperium, Opp- Wipro, Hinjewadi<br />
                Phase 2, Rajiv Gandhi Infotech Park,<br />
                Pune, Maharashtra 411057
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>© 2025 Lotlite Fintech Private Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter; 