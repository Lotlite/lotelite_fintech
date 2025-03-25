import './PartnerBanks.css';

const PartnerBanks = () => {
  const banks = [
    {
      name: "HDFC Bank",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg"
    },
    {
      name: "ICICI Bank",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg"
    },
    {
      name: "Axis Bank",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Axis_Bank_logo.svg"
    },
    {
      name: "State Bank",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg"
    },
    {
      name: "Kotak Bank",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/Kotak_Mahindra_Bank_logo.svg"
    },
    {
      name: "Yes Bank",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/94/Yes_Bank_Logo.svg"
    }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, bankName: string) => {
    const target = e.target as HTMLImageElement;
    // Create a colored background with bank name as fallback
    target.onerror = null; // Prevent infinite loop
    target.style.width = '120px';
    target.style.height = '40px';
    target.style.backgroundColor = '#f0f0f0';
    target.style.display = 'flex';
    target.style.alignItems = 'center';
    target.style.justifyContent = 'center';
    target.style.borderRadius = '4px';
    target.style.color = '#1e40af';
    target.style.fontSize = '14px';
    target.style.fontWeight = '500';
    target.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40">
        <rect width="100%" height="100%" fill="#f0f0f0"/>
        <text x="50%" y="50%" font-family="Arial" font-size="12" fill="#1e40af" text-anchor="middle" dy=".3em">${bankName}</text>
      </svg>`
    )}`;
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Partner Banks</h2>
        
        <div className="relative overflow-hidden">
          <div className="bank-scroll-container">
            <div className="bank-scroll flex gap-8">
              {/* First set of banks */}
              {banks.map((bank, index) => (
                <div 
                  key={`bank-1-${index}`}
                  className="flex-shrink-0 w-40 h-20 bg-white rounded-lg shadow-md p-4 flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={bank.logo}
                    alt={`${bank.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => handleImageError(e, bank.name)}
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {banks.map((bank, index) => (
                <div 
                  key={`bank-2-${index}`}
                  className="flex-shrink-0 w-40 h-20 bg-white rounded-lg shadow-md p-4 flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={bank.logo}
                    alt={`${bank.name} logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => handleImageError(e, bank.name)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
            View All Partners
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnerBanks; 