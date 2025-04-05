'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ContactFooter from '@/components/ContactFooter';

const LoanOffer = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
      
      {/* Content */}
      <div className="relative pt-24 pb-12">
        <div className="max-w-7xl mx-auto p-8 relative z-10">
          <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 rounded-lg p-2">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-transparent bg-clip-text animate-gradient"
            >
              Get Your Perfect Loan Offer
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <p className="text-xl text-gray-600 mb-8">
              Compare personalized loan offers from multiple lenders and choose the best one for you.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {/* Loan Benefits Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-100"
            >
              <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 rounded-lg p-2">
                <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-transparent bg-clip-text">
                  Why Choose Our Loan Service?
                </h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Competitive interest rates starting from 6.5%</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Quick approval process within 24-48 hours</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Flexible loan amounts from ₹4 Lakh to ₹10 Cr</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Minimal documentation required</span>
                </li>
              </ul>
            </motion.div>

            {/* Quick Application Form */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-gray-100"
            >
              <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 rounded-lg p-2">
                <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-transparent bg-clip-text">
                  Quick Eligibility Check
                </h2>
              </div>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Loan Amount Required</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter amount"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Monthly Income</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter monthly income"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Employment Type</label>
                  <select 
                    className="w-full px-4 py-2 border border-gray-300 text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    aria-label="Select employment type"
                  >
                    <option value="">Select employment type</option>
                    <option value="salaried">Salaried</option>
                    <option value="self-employed">Self Employed</option>
                    <option value="business">Business Owner</option>
                  </select>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-md font-semibold shadow-md transition-all duration-200"
                >
                  Check Eligibility
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 rounded-lg p-2">
              <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-transparent bg-clip-text">
                Our Loan Process
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl text-blue-600 font-semibold mb-2">1. Apply Online</h3>
                <p className="text-gray-600">Fill out our simple online application form with your basic details</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl text-blue-600 font-semibold mb-2">2. Get Approved</h3>
                <p className="text-gray-600">Quick verification and approval process within 24-48 hours</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl text-blue-600 font-semibold mb-2">3. Get Funded</h3>
                <p className="text-gray-600">Receive your loan amount directly in your bank account</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <ContactFooter />
    </div>
  );
};

export default LoanOffer; 