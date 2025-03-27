'use client';

import { useState } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What documents do I need to apply for a loan?",
    answer: "You'll need to provide identity proof (Aadhaar/PAN), address proof, income proof (salary slips/IT returns), bank statements, and property documents (for property loans). Additional documents may be required based on the loan type."
  },
  {
    question: "How long does the loan approval process take?",
    answer: "The loan approval process typically takes 24-48 hours for most loans. However, property loans may take 3-5 working days due to property verification and documentation."
  },
  {
    question: "What is the minimum credit score required?",
    answer: "Most banks require a minimum credit score of 650-700. However, some banks may offer loans with lower credit scores at higher interest rates."
  },
  {
    question: "Can I prepay my loan?",
    answer: "Yes, you can prepay your loan. Most banks allow partial or full prepayment after 12 months of regular EMI payments. Some banks may charge a prepayment penalty."
  },
  {
    question: "What is the maximum loan amount I can get?",
    answer: "The maximum loan amount depends on your income, credit score, and the type of loan. For personal loans, it's usually up to 24 times your monthly income. For property loans, it can be up to 75% of the property value."
  },
  {
    question: "Do I need to provide collateral for all loans?",
    answer: "No, not all loans require collateral. Personal loans and education loans up to certain limits are unsecured. Property loans and business loans typically require collateral."
  },
  {
    question: "What is the interest rate calculation method?",
    answer: "Most banks use the reducing balance method for interest calculation. This means interest is calculated on the remaining principal amount after each EMI payment."
  },
  {
    question: "Can I transfer my loan to another bank?",
    answer: "Yes, you can transfer your loan to another bank through a balance transfer facility. This can help you get better interest rates. However, there may be processing fees and documentation requirements."
  },
  {
    question: "What happens if I miss an EMI payment?",
    answer: "Missing an EMI payment can affect your credit score and may attract late payment charges. It's important to inform your bank in advance if you anticipate difficulty in making payments."
  },
  {
    question: "Is there a processing fee for loans?",
    answer: "Yes, most banks charge a processing fee, which is usually 1-3% of the loan amount. Some banks may offer zero processing fee during special promotions."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const titleRef = useScrollReveal();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-3xl font-bold text-gray-800 mb-12 text-center"
        >
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;