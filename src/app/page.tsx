'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar'
import LoanServices from '../components/LoanServices'
import WhyChooseUs from '../components/WhyChooseUs'
import PartnerBanks from '../components/PartnerBanks'
import ApplicationProcess from '../components/ApplicationProcess'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import BankPartners from '@/components/BankPartnersSimple'
import FAQ from '../components/FAQ'
import UserExperience from '../components/UserExperience'

export default function Home() {
  return (
    <UserExperience>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-0">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-white h-[85vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: "url('/images/hero-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              marginTop: "-64px"
            }}
          >
            <div className="absolute inset-0 bg-blue-600 bg-opacity-25"></div>
            <div className="relative max-w-7xl mx-auto text-center px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-6"
              >
                <span className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-medium">
                  Trusted by 1M+ Customers
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              >
                Find the Perfect Loan<br /> for Your Needs
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto"
              >
                Compare, Apply, & Track loans from multiple lenders. Get instant approval and competitive rates.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col md:flex-row gap-4 justify-center mb-12"
              >
                <button className="bg-white text-blue-600 px-8 py-3 text-lg rounded-md font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105 hover:shadow-lg">
                  Check Your Eligibility
                </button>
                
                <button className="bg-white text-blue-600 px-8 py-3 text-lg rounded-md font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105 hover:shadow-lg">
                  Get a Loan Offer
                </button>
              </motion.div>
              
              {/* Trust Indicators */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-blue-600 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold mb-1">₹50Cr+</div>
                  <div className="text-sm">Loans Disbursed</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold mb-1">50+</div>
                  <div className="text-sm">Partner Banks</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold mb-1">24/7</div>
                  <div className="text-sm">Customer Support</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold mb-1">98%</div>
                  <div className="text-sm">Customer Satisfaction</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Loan Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <LoanServices />
          </motion.div>

          {/* Why Choose Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <WhyChooseUs />
          </motion.div>

          {/* Partner Banks Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <PartnerBanks />
          </motion.div>

          {/* Application Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ApplicationProcess />
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <FAQ />
          </motion.div>

          {/* Contact Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ContactUs />
          </motion.div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </UserExperience>
  )
}