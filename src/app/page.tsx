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
import UserExperience from '../components/UserExperience'

export default function Home() {
  return (
    <UserExperience>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-0">
          {/* Hero Section */}
          <div
            className="relative text-white h-[85vh] flex items-center justify-center bg-cover bg-center bg-no-repeat animate-fade-in"
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
              <div className="mb-6 animate-fade-in-up">
                <span className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-medium">
                  Trusted by 1M+ Customers
                </span>
              </div>

              <h1
                className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up"
              >
                Your Financial Journey Starts Here
              </h1>

              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-up">
                Get the best loan deals with competitive interest rates and quick approval
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
                <a
                  href="/loan-application"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Apply Now
                </a>
                <a
                  href="#contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  Contact Us
                </a>
              </div>
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