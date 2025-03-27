'use client';

import useScrollReveal from '@/hooks/useScrollReveal';

interface LoanCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  interestRate: string;
  processingTime: string;
  maxAmount: string;
  minAmount: string;
  eligibility: string[];
}

const LoanCard = ({ title, description, image, features, interestRate, processingTime, maxAmount, minAmount, eligibility }: LoanCardProps) => {
  const cardRef = useScrollReveal();

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      {/* Loan Product Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3 text-gray-800">Key Features</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Loan Details */}
        <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
          <div>
            <div className="text-sm text-gray-500">Interest Rate</div>
            <div className="text-xl font-bold text-blue-600">{interestRate}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Processing Time</div>
            <div className="text-xl font-bold text-blue-600">{processingTime}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Min Amount</div>
            <div className="text-xl font-bold text-blue-600">{minAmount}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Max Amount</div>
            <div className="text-xl font-bold text-blue-600">{maxAmount}</div>
          </div>
        </div>

        {/* Eligibility */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3 text-gray-800">Eligibility</h4>
          <ul className="space-y-2">
            {eligibility.map((item, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <a 
          href="#" 
          className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

const LoanServices = () => {
  const titleRef = useScrollReveal();

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-4xl font-bold text-gray-900 mb-4">
            Our Loan Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of loan products designed to meet your specific financial needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Property Loan */}
          <LoanCard
            title="Property Loan"
            description="Finance your dream home with competitive interest rates and flexible repayment options."
            image="/images/PropertyLoan.jpg"
            features={[
              "Up to 90% of property value",
              "Flexible tenure up to 30 years",
              "No prepayment charges",
              "Balance transfer facility"
            ]}
            interestRate="Starting from 8.5%"
            processingTime="24-48 hours"
            maxAmount="₹10 Cr"
            minAmount="₹30 Lakh"
            eligibility={[
              "Age: 23-58 years",
              "Minimum income: ₹25,000/month",
              "Stable employment",
              "Good credit score"
            ]}
          />

          {/* Loan Against Property */}
          <LoanCard
            title="Loan Against Property"
            description="Get the best value of your property with secured loans at attractive interest rates."
            image="/images/LAP-img.jpg"
            features={[
              "Up to 75% of property value",
              "Longer repayment tenure",
              "Lower interest rates",
              "Multiple end-use options"
            ]}
            interestRate="Starting from 7.5%"
            processingTime="48-72 hours"
            maxAmount="₹5 Cr"
            minAmount="₹10 Lakh"
            eligibility={[
              "Age: 25-65 years",
              "Property ownership",
              "Regular income source",
              "Property valuation"
            ]}
          />

          {/* Education Loan */}
          <LoanCard
            title="Education Loan"
            description="Invest in your future with flexible education financing for domestic and international studies."
            image="/images/Edu-img.jpg"
            features={[
              "Coverage for all education expenses",
              "No collateral for loans up to 7.5L",
              "Flexible repayment options",
              "Tax benefits available"
            ]}
            interestRate="Starting from 6.5%"
            processingTime="5-7 days"
            maxAmount="₹1.5 Cr"
            minAmount="₹4 Lakh"
            eligibility={[
              "Age: 18-35 years",
              "Admission confirmation",
              "Co-applicant required",
              "Academic performance"
            ]}
          />
        </div>

        
        
      </div>
    </section>
  );
};

export default LoanServices;


