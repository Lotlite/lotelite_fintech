'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import QueryForm from './QueryForm';
import ContactFooter from '@/components/ContactFooter';

// FAQ Data with categories
const faqData = [
  {
    id: 1,
    question: "How can I check my application status?",
    answer: "You can check your application status by logging into your account or contacting our support team.",
    category: "Applications",
    related: [2, 4],
  },
  {
    id: 2,
    question: "What documents do I need to submit?",
    answer: "Required documents vary by product. Please check the specific product page or contact our support team for details.",
    category: "Documentation",
    related: [1, 3],
  },
  {
    id: 3,
    question: "How long does the approval process take?",
    answer: "Approval times vary by product and application type. Most applications are processed within 24-48 hours.",
    category: "Applications",
    related: [2, 4],
  },
  {
    id: 4,
    question: "Can I modify my application after submission?",
    answer: "Yes, you can modify your application within 24 hours of submission. Contact our support team for assistance.",
    category: "Applications",
    related: [1, 3],
  },
  {
    id: 5,
    question: "What are the interest rates for different loans?",
    answer: "Interest rates depend on various factors including loan type, amount, and tenure. Please visit our products page for detailed information.",
    category: "Products",
    related: [6, 7],
  },
  {
    id: 6,
    question: "How do I make loan payments?",
    answer: "You can make payments through our online portal, mobile app, or visit any of our branches. We also offer auto-debit facility.",
    category: "Payments",
    related: [5, 7],
  },
  {
    id: 7,
    question: "What happens if I miss a payment?",
    answer: "Missing payments may affect your credit score. Please contact us immediately to discuss payment options and avoid penalties.",
    category: "Payments",
    related: [6, 8],
  },
  {
    id: 8,
    question: "How can I get my loan statement?",
    answer: "You can download your loan statement from our online portal or request one through our customer service.",
    category: "Documentation",
    related: [6, 7],
  }
];

const SupportCenterPage = () => {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Get unique categories
  const categories = ['All', ...new Set(faqData.map(faq => faq.category))];

  // Filter FAQs based on search and category
  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get related questions
  const getRelatedQuestions = (relatedIds: number[]) => {
    return faqData.filter(faq => relatedIds.includes(faq.id));
  };

  if (!mounted) {
    return null; // or return a loading spinner
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
        {/* Hero Section with Premium Styling */}
        <div className="relative py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30"></div>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
            >
              Customer Support
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-blue-100/80 max-w-2xl mx-auto"
            >
              We're here to assist you with all your questions and concerns
            </motion.p>
          </div>
        </div>

        {/* FAQ Section with Premium Design */}
        <div className="max-w-6xl mx-auto py-16 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 rounded-3xl backdrop-blur-3xl"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start relative z-10">
            {/* Support Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-[500px] w-full sticky top-8"
            >
              <Image
                src="/images/customer-support-service-vector-2642390.jpg"
                alt="Customer Support Service"
                fill
                className="object-contain p-4"
                priority
              />
            </motion.div>

            {/* Interactive FAQ Content */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/10"
            >
              {/* Search Bar */}
              <div className="relative mb-6">
                <svg 
                  className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                      ${selectedCategory === category 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* FAQ List */}
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-white/10 rounded-lg overflow-hidden"
                  >
                    {/* Question */}
                    <button
                      onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                    >
                      <h3 className="font-semibold text-white flex items-center gap-2">
                        <span className="text-blue-400">Q.</span>
                        {faq.question}
                      </h3>
                      <svg 
                        className={`w-6 h-6 text-gray-400 transition-transform ${
                          expandedId === faq.id ? 'rotate-180' : ''
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

                    {/* Answer and Related Questions */}
                    {expandedId === faq.id && (
                      <div className="px-6 pb-4">
                        <p className="text-blue-100/70 mb-4">{faq.answer}</p>
                        
                        {/* Related Questions */}
                        <div>
                          <p className="text-sm text-gray-400 mb-2">Related Questions:</p>
                          <div className="space-y-2">
                            {getRelatedQuestions(faq.related).map((related) => (
                              <button
                                key={related.id}
                                onClick={() => setExpandedId(related.id)}
                                className="block text-sm text-blue-300 hover:text-blue-200 transition-colors"
                              >
                                {related.question}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Query Form Section */}
      <QueryForm />

      {/* Contact Footer */}
      <ContactFooter />
    </>
  );
};

export default SupportCenterPage;