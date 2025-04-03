'use client';

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from "react";

import Navbar from '../components/Navbar'
import LoanServices from '../components/LoanServices'
import WhyChooseUs from '../components/WhyChooseUs'
import PartnerBanks from '../components/PartnerBanks'

import ApplicationProcess from '../components/ApplicationProcess'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import ContactFooter from '@/components/ContactFooter';

import FAQ from '../components/FAQ'
import UserExperience from '../components/UserExperience'
import EligibilityForm from '@/components/EligibilityForm';

const stats = [
  { value: 50, suffix: "Cr+", label: "Loans Disbursed" },
  { value: 50, suffix: "+", label: "Partner Banks" },
  { value: 24, suffix: "/7", label: "Customer Support" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
];

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [animatedValues, setAnimatedValues] = useState(
    stats.map(() => 0) // Initialize all numbers to 0
  );

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 1000; // 2 seconds
      const incrementTime = 30; // Update every 30ms
      const steps = duration / incrementTime;
      const increment = end / steps;

      let current = start;
      const timer = setInterval(() => {
        current += increment;
        setAnimatedValues((prev) => {
          const newValues = [...prev];
          newValues[index] = Math.min(Math.floor(current), end);
          return newValues;
        });

        if (current >= end) {
          clearInterval(timer);
        }
      }, incrementTime);
    });
  }, []);

  return (
    <UserExperience>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-0 mt-20">


          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-white h-[85vh] flex items-center justify-center bg-cover bg-center bg-no-repeat "
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
               <button
                  className="bg-white text-blue-600 px-8 py-3 text-lg rounded-md font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105 hover:shadow-lg"
                  onClick={() => setIsFormOpen(true)} // Open form on click
                >
                  Check Your Eligibility
                </button>
                {isFormOpen && <EligibilityForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />}

                <button className="bg-white text-blue-600 px-8 py-3 text-lg rounded-md font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105 hover:shadow-lg">
                  Get a Loan Offer
                </button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-white grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              >
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-lg transform hover:scale-105 transition-transform duration-300"
                  >
                    <motion.div className="text-2xl font-bold mb-1">
                      {animatedValues[index].toLocaleString()}
                      {stat.suffix}
                    </motion.div>
                    <div className="text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>


          {/* Rest of the sections */}
          <LoanServices />
          <WhyChooseUs />
          <PartnerBanks />

          <ApplicationProcess />
          <FAQ />
          <ContactUs />

        </main>
        {/* <Footer /> */}
        <ContactFooter />
      </div>
    </UserExperience>
  );
}