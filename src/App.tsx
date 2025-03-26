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
      <main>
        {/* Hero Section */}
        <div className="relative text-white py-32 px-4" style={{ backgroundImage: "url('/images/hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0 bg-blue-600 bg-opacity-20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find the Perfect Loan<br /> for Your Needs
            </h1>
            <p className="text-2xl mb-10">
              Compare, Apply, and Track loans from multiple lenders
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-white text-blue-600 px-10 py-4 text-lg rounded-md font-semibold hover:bg-gray-100 transition duration-300">
                Check Your Eligibility
              </button>
              <button className="bg-white text-blue-600 px-10 py-4 text-lg rounded-md font-semibold hover:bg-gray-100 transition duration-300">
                Compare Now
              </button>
              <button className="bg-white text-blue-600 px-10 py-4 text-lg rounded-md font-semibold hover:bg-gray-100 transition duration-300">
                Get a Loan Offer
              </button>
            </div>
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