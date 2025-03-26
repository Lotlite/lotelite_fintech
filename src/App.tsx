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
        <div 
          className="relative text-white min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://t4.ftcdn.net/jpg/06/40/43/45/360_F_640434524_FdncjuL69D4JBezF6dULNtfqzuWG7fpW.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="absolute inset-0 bg-blue-300 bg-opacity-20"></div>
          <div className="relative max-w-7xl mx-auto text-center px-4">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Find the Perfect Loan<br /> for Your Needs
            </h1>
            <p className="text-3xl mb-12 text-gray-100">
              Compare, Apply, and Track loans from multiple lenders
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-white text-blue-600 px-12 py-5 text-xl rounded-md font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105 hover:shadow-lg">
                Check Your Eligibility
              </button>
              <button className="bg-white text-blue-600 px-12 py-5 text-xl rounded-md font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105 hover:shadow-lg">
                Compare Now
              </button>
              <button className="bg-white text-blue-600 px-12 py-5 text-xl rounded-md font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105 hover:shadow-lg">
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