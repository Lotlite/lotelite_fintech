'use client';

import useScrollReveal from '@/hooks/useScrollReveal';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const itemRef = useScrollReveal();
  
  return (
    <div ref={itemRef} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{question}</h3>
      <p className="text-gray-600">{answer}</p>
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
        <h2 ref={titleRef} className="text-4xl font-bold text-center mb-12">
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