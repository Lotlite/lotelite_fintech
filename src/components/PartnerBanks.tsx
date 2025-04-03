'use client';

import { useEffect, useRef } from 'react';
import './PartnerBanks.css';

const banks = [
  { name: "HDFC Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg" },
  { name: "ICICI Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg" },
  { name: "Axis Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Axis_Bank_logo.svg" },
  { name: "State Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg" },
  { name: "Kotak Bank", logo: "https://upload.wikimedia.org/wikipedia/en/3/39/Kotak_Mahindra_Group_logo.svg" },
  { name: "Yes Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Yes_Bank_Logo_2024.jpg" },
];

// Handle missing images
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, bankName: string) => {
  const target = e.target as HTMLImageElement;
  target.onerror = null;
  target.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40">
      <rect width="100%" height="100%" fill="#f0f0f0"/>
      <text x="50%" y="50%" font-family="Arial" font-size="12" fill="#1e40af" text-anchor="middle" dy=".3em">${bankName}</text>
    </svg>`
  )}`;
};

const PartnerBanks = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollElement = scrollRef.current;
      let scrollAmount = 0;

      const scroll = () => {
        scrollAmount += 1;
        if (scrollAmount >= scrollElement.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollElement.scrollLeft = scrollAmount;
        requestAnimationFrame(scroll);
      };

      requestAnimationFrame(scroll);
    }
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-black font-bold text-center mb-12">Our Partner Banks</h2>

        {/* Scroll Container */}
        <div className="bank-slider">
          <div className="bank-track">
            {/* Duplicate bank logos for seamless effect */}
            {[...banks, ...banks].map((bank, index) => (
              <div key={index} className="bank-logo-card">
                <img 
                  src={bank.logo} 
                  alt={`${bank.name} logo`} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBanks;
