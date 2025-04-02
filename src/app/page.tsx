'use client';

import Navbar from '../components/Navbar'
import LoanServices from '../components/LoanServices'
import WhyChooseUs from '../components/WhyChooseUs'
import PartnerBanks from '../components/PartnerBanks'
import ApplicationProcess from '../components/ApplicationProcess'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
// import BankPartners from '@/components/BankPartnersSimple'
import FAQ from '../components/FAQ'
import UserExperience from '../components/UserExperience'
import { useState, useEffect } from "react";

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Animation duration in milliseconds (2 seconds)
    const increment = value / (duration / 10); // Increment per interval

    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(interval);
      }
      setCount(Math.floor(start)); // Update state with rounded value
    }, 10); // Update every 10ms

    return () => clearInterval(interval);
  }, [value]);

  return <>{count.toLocaleString()}{suffix}</>; // Format number with commas
};

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
              backgroundImage: "url('/images/Hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              marginTop: "-64px"
            }}
          >
            <div className="absolute inset-0 bg-blue-600 bg-opacity-25"></div>
            <div className="relative max-w-7xl mx-auto text-center px-4">
              <div className="mb-6 animate-fade-in-up">
                <span className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-medium">
                  Trusted by 1M+ Customers
                </span>
              </div>

              <h1
                className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up"
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
      transition={{ delay: 0.5, duration: 0.8 }}
      className="text-blue-700 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
    >
      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
        <div className="text-2xl font-bold mb-1"><Counter value={50} suffix='cr'/></div>
        <div className="text-sm">Loans Disbursed</div>
      </div>
      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
        <div className="text-2xl font-bold mb-1"><Counter value={50}  suffix='+'/></div>
        <div className="text-sm">Partner Banks</div>
      </div>
      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
        <div className="text-2xl font-bold mb-1"><Counter value={24}  suffix='hr'/></div>
        <div className="text-sm">Customer Support</div>
      </div>
      <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
        <div className="text-2xl font-bold mb-1"><Counter value={98} suffix='%'/></div>
        <div className="text-sm">Customer Satisfaction</div>
      </div>
    </motion.div>
            </div>
          </div>

          {/* Rest of the sections */}
          <LoanServices />
          <WhyChooseUs />
          <PartnerBanks />
          <ApplicationProcess />
          <FAQ />
          <ContactUs />
          <BankPartners />
        </main>
        <Footer />
      </div>
    </UserExperience>
  );
}