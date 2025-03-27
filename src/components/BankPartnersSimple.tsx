'use client';

import { useState } from 'react';
import Image from 'next/image';
import useScrollReveal from '@/hooks/useScrollReveal';

interface Bank {
  name: string;
  logo: string;
}

const banks: Bank[] = [
  { name: 'State Bank of India', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/State_Bank_of_India_Logo.svg' },
  { name: 'HDFC Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/23/HDFC_Bank_Logo.svg' },
  { name: 'ICICI Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/ICICI_Bank_logo.svg' },
  { name: 'Punjab National Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Punjab_National_Bank_logo.svg' },
  { name: 'Bank of Baroda', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Bank_of_Baroda_Logo.svg' },
  { name: 'Canara Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Canara_Bank_logo.svg' },
  { name: 'Union Bank of India', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Union_Bank_of_India_logo.svg' },
  { name: 'Axis Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Axis_Bank_logo.svg' },
  { name: 'Kotak Mahindra Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Kotak_Mahindra_Bank_logo.svg' },
  { name: 'IndusInd Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/IndusInd_Bank_logo.svg' }
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
          {banks.map((bank, index) => (
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
      </div>
    </section>
  );
};

export default BankPartners; 