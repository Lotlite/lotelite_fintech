'use client';

import { useState } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useScrollReveal();
  
  return (
    <div 
      ref={itemRef} 
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
          <button 
            aria-label={isOpen ? 'Close answer' : 'View answer'}
            className={`w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          >
            <svg 
              className="w-4 h-4 text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} 
              />
            </svg>
          </button>
        </div>
        <div 
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-48 mt-4 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const titleRef = useScrollReveal();

  const faqs: FAQItemProps[] = [
    {
      question: "What documents are required for loan application?",
      answer: "Basic documents include ID proof, address proof, income proof, and property documents for secured loans."
    },
    {
      question: "How long does the loan approval process take?",
      answer: "Typically, loans are approved within 24-48 hours after document verification."
    },
    {
      question: "What are the interest rates offered?",
      answer: "Interest rates start from 8.5% and vary based on loan type and applicant profile."
    },
    {
      question: "Is there a prepayment penalty?",
      answer: "Prepayment charges vary by loan type and lender. Most home loans have zero prepayment charges."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 
          ref={titleRef} 
          className="text-4xl text-black font-bold text-center mb-12"
        >
          Frequently Asked Questions
        </h2>
        
        <div className="grid gap-6 md:grid-cols-1 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 