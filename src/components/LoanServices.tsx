'use client';

import useScrollReveal from '@/hooks/useScrollReveal';

interface LoanCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const LoanCard = ({ title, description, icon }: LoanCardProps) => {
  const cardRef = useScrollReveal();

  return (
    <div ref={cardRef} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-blue-600 mb-4 text-4xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
        Learn More
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};

const LoanServices = () => {
  const titleRef = useScrollReveal();

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="text-3xl text-black font-bold text-center mb-12">
          Our Loan Products
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Property Loan */}
          <LoanCard
            title="Property Loan"
            description="Finance your dream home with competitive interest rates"
            icon={
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                />
              </svg>
            }
          />

          {/* Loan Against Property */}
          <LoanCard
            title="Loan Against Property"
            description="Get the best value of your property with secured loans"
            icon={
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                />
              </svg>
            }
          />

          {/* Education Loan */}
          <LoanCard
            title="Education Loan"
            description="Invest in your future with flexible education financing"
            icon={
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M12 14l9-5-9-5-9 5 9 5m0 0l9-5m-9 5v9m-9-9h18" 
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default LoanServices; 