import Navbar from './components/Navbar'
import LoanServices from './components/LoanServices'
import WhyChooseUs from './components/WhyChooseUs'
import PartnerBanks from './components/PartnerBanks'
import ApplicationProcess from './components/ApplicationProcess'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find the Perfect Loan for Your Needs
            </h1>
            <p className="text-xl mb-8">
              Compare, Apply, and Track loans from multiple lenders
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300">
              Get Started
            </button>
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

        {/* Contact Us Section */}
        <ContactUs />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App 