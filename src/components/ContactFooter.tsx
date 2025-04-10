'use client';

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
            <p className="text-gray-400 text-sm">
              At Fintech, we specialize in developing innovative loan solutions tailored to meet the unique financial needs of your business.
            </p>
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
                <Link href="/loan-application" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/support-center" className="text-gray-400 hover:text-white transition-colors">
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

          {/* Contact Information */}
          <div className="col-span-1">
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
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