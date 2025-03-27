'use client';

import { useState } from 'react';
import Image from 'next/image';
import useScrollReveal from '@/hooks/useScrollReveal';

interface Bank {
  name: string;
  logo: string;
}

const banks: Bank[] = [
  { name: 'State Bank of India', logo: '/images/banks/sbi.png' },
  { name: 'HDFC Bank', logo: '/images/banks/hdfc.png' },
  { name: 'ICICI Bank', logo: '/images/banks/icici.png' },
  { name: 'Punjab National Bank', logo: '/images/banks/pnb.png' },
  { name: 'Bank of Baroda', logo: '/images/banks/bob.png' },
  { name: 'Canara Bank', logo: '/images/banks/canara.png' },
  { name: 'Union Bank of India', logo: '/images/banks/union.png' },
  { name: 'Axis Bank', logo: '/images/banks/axis.png' },
  { name: 'Kotak Mahindra Bank', logo: '/images/banks/kotak.png' },
  { name: 'IndusInd Bank', logo: '/images/banks/indusind.png' },
  { name: 'Bank of India', logo: '/images/banks/boi.png' },
  { name: 'Indian Bank', logo: '/images/banks/indian.png' },
  { name: 'Central Bank of India', logo: '/images/banks/central.png' },
  { name: 'UCO Bank', logo: '/images/banks/uco.png' },
  { name: 'Bank of Maharashtra', logo: '/images/banks/bom.png' },
  { name: 'Punjab & Sind Bank', logo: '/images/banks/psb.png' },
  { name: 'Indian Overseas Bank', logo: '/images/banks/iob.png' },
  { name: 'IDBI Bank', logo: '/images/banks/idbi.png' },
  { name: 'Yes Bank', logo: '/images/banks/yes.png' },
  { name: 'Federal Bank', logo: '/images/banks/federal.png' },
  { name: 'RBL Bank', logo: '/images/banks/rbl.png' },
  { name: 'Nainital Bank', logo: '/images/banks/nainital.png' },
  { name: 'Karnataka Bank', logo: '/images/banks/karnataka.png' },
  { name: 'City Union Bank', logo: '/images/banks/city.png' },
  { name: 'South Indian Bank', logo: '/images/banks/south.png' },
  { name: 'TMB Bank', logo: '/images/banks/tmb.png' },
  { name: 'DCB Bank', logo: '/images/banks/dcb.png' },
  { name: 'Bandhan Bank', logo: '/images/banks/bandhan.png' },
  { name: 'CSB Bank', logo: '/images/banks/csb.png' },
  { name: 'Dhanlaxmi Bank', logo: '/images/banks/dhanlaxmi.png' },
  { name: 'Jammu & Kashmir Bank', logo: '/images/banks/jk.png' },
  { name: 'IDFC First Bank', logo: '/images/banks/idfc.png' },
  { name: 'AU Small Finance Bank', logo: '/images/banks/au.png' },
  { name: 'Equitas Small Finance Bank', logo: '/images/banks/equitas.png' },
  { name: 'Ujjivan Small Finance Bank', logo: '/images/banks/ujjivan.png' },
  { name: 'ESAF Small Finance Bank', logo: '/images/banks/esaf.png' },
  { name: 'Fincare Small Finance Bank', logo: '/images/banks/fincare.png' },
  { name: 'Jana Small Finance Bank', logo: '/images/banks/jana.png' },
  { name: 'North East Small Finance Bank', logo: '/images/banks/nesfb.png' },
  { name: 'Shivalik Small Finance Bank', logo: '/images/banks/shivalik.png' },
  { name: 'Unity Small Finance Bank', logo: '/images/banks/unity.png' },
  { name: 'Utkarsh Small Finance Bank', logo: '/images/banks/utkarsh.png' },
  { name: 'Suryoday Small Finance Bank', logo: '/images/banks/suryoday.png' },
  { name: 'Capital Small Finance Bank', logo: '/images/banks/capital.png' },
  { name: 'NSDL Payments Bank', logo: '/images/banks/nsdl.png' },
  { name: 'India Post Payments Bank', logo: '/images/banks/indiapost.png' },
  { name: 'Airtel Payments Bank', logo: '/images/banks/airtel.png' },
  { name: 'Paytm Payments Bank', logo: '/images/banks/paytm.png' },
  { name: 'Fino Payments Bank', logo: '/images/banks/fino.png' },
  { name: 'Jio Payments Bank', logo: '/images/banks/jio.png' },
  { name: 'Aditya Birla Payments Bank', logo: '/images/banks/adityabirla.png' }
];

const BankPartners = () => {
  const [showAll, setShowAll] = useState(false);
  const titleRef = useScrollReveal();
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (bankName: string) => {
    setImageErrors(prev => ({
      ...prev,
      [bankName]: true
    }));
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 
          ref={titleRef} 
          className="text-3xl font-bold text-gray-800 mb-12 text-center"
        >
          Our Banking Partners
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {banks.slice(0, showAll ? banks.length : 10).map((bank, index) => (
            <div 
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
            >
              <div className="relative w-full h-20">
                {!imageErrors[bank.name] ? (
                  <Image
                    src={bank.logo}
                    alt={bank.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={() => handleImageError(bank.name)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
                    <span className="text-gray-500 text-sm text-center">{bank.name}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {!showAll && banks.length > 10 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              View All Partners
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BankPartners; 