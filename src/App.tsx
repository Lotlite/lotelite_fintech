import Navbar from './components/Navbar'
import LoanServices from './components/LoanServices'
import WhyChooseUs from './components/WhyChooseUs'
import PartnerBanks from './components/PartnerBanks'
import ApplicationProcess from './components/ApplicationProcess'
import FAQ from './components/FAQ'
import ContactUs from './components/ContactUs'


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="w-full" style={{ backgroundColor: 'rgb(59 130 246)' }}>
          <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="max-w-3xl">
              <h1 className="text-[40px] leading-[1.2] font-bold text-black mb-4">
                Find the Perfect Loan for Your Needs
              </h1>
              <p className="text-xl text-black mb-8">
                Compare, Apply, and Track loans from multiple lenders
              </p>
              <button className="bg-white text-black text-[#3B82F6] px-8 py-3 rounded-md font-medium text-lg hover:bg-opacity-90 transition-all">
                Get Started
              </button>
            </div>
          </div>
        </section>

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

      
    </div>
  )
}

export default App 