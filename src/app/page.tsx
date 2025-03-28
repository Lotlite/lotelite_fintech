'use client';

import Navbar from '../components/Navbar'
import LoanServices from '../components/LoanServices'
import WhyChooseUs from '../components/WhyChooseUs'
import PartnerBanks from '../components/PartnerBanks'
import ApplicationProcess from '../components/ApplicationProcess'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import BankPartners from '@/components/BankPartnersSimple'
import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-0">
        {/* Hero Section */}
        <div 
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
            {/* <div className="mb-6">
              <span className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-medium">
                Trusted by 1M+ Customers
              </span>
            </div> */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Find the Perfect Loan<br /> for Your Needs
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">
              Compare, Apply, & Track loans from multiple lenders. Get instant approval and competitive rates.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <button className="bg-white text-blue-600 px-8 py-3 text-lg rounded-md font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105 hover:shadow-lg">
                Check Your Eligibility
              </button>
              
              <button className="bg-white text-blue-600 px-8 py-3 text-lg rounded-md font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105 hover:shadow-lg">
                Get a Loan Offer
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="text-blue-600 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold mb-1">₹50Cr+</div>
                <div className="text-sm">Loans Disbursed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold mb-1">50+</div>
                <div className="text-sm">Partner Banks</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold mb-1">24/7</div>
                <div className="text-sm">Customer Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold mb-1">98%</div>
                <div className="text-sm">Customer Satisfaction</div>
              </div>
            </div>

            {/* Quick Features */}
            

          </div>
        </div>

        {/* Loan Services Section */}
        <LoanServices />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Partner Banks Section */}
        <PartnerBanks />

        {/* Application Process Section */}
        <ApplicationProcess />

        {/* FAQ Section */}
        <FAQ />

        {/* Contact Us Section */}
        <ContactUs />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
