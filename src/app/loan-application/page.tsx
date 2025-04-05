'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ContactFooter from '@/components/ContactFooter';
import ProductReviews from './ProductReviews';

const LoanApplicationPage = () => {
    const router = useRouter();

    const handleLoanSelection = (type: string) => {
        switch (type) {
            case 'property':
                router.push('/property-loan');
                break;
            case 'lap':
                router.push('/loan-against-property');
                break;
            case 'education':
                router.push('/education-loan');
                break;
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
            
            {/* Content */}
            <div className="relative pt-24 pb-12">
                <div className="max-w-7xl mx-auto p-8 relative z-10">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-transparent bg-clip-text animate-gradient"
                    >
                        Select Your Loan Type
                    </motion.h1>
                    
                    <motion.div
                        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        {/* Property Loan Card */}
                        <motion.div
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleLoanSelection('property')}
                            className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 border border-gray-100 w-full min-w-[280px] relative group"
                        >
                            <div className="relative w-full h-40 mb-6 rounded-lg overflow-hidden">
                                <Image
                                    src="/images/Property-Loan (1).jpg"
                                    alt="Property Loan"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    priority
                                />
                            </div>
                            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-transparent bg-clip-text">Property Loan</h2>
                            <div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-600">Interest Rate</p>
                                        <p className="text-lg font-semibold text-blue-600">Starting from 8.5%</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Processing Time</p>
                                        <p className="text-lg font-semibold text-blue-600">24-48 hours</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div>
                                        <p className="text-sm text-gray-600">Min Amount</p>
                                        <p className="text-lg font-semibold text-blue-600">₹30 Lakh</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Max Amount</p>
                                        <p className="text-lg font-semibold text-blue-600">₹10 Cr</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 text-center text-white bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2 rounded-md group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-200 shadow-md">
                                Apply Now
                            </div>
                        </motion.div>

                        {/* Loan Against Property Card */}
                        <motion.div
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleLoanSelection('lap')}
                            className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 border border-gray-100 w-full min-w-[280px] relative group"
                        >
                            <div className="relative w-full h-40 mb-6 rounded-lg overflow-hidden">
                                <Image
                                    src="/images/Home-Loan.jpg"
                                    alt="Home Loan"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    priority
                                />
                            </div>
                            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-transparent bg-clip-text whitespace-nowrap">Loan Against Property</h2>
                            <div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-600">Interest Rate</p>
                                        <p className="text-lg font-semibold text-blue-600">Starting from 9%</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Processing Time</p>
                                        <p className="text-lg font-semibold text-blue-600">48-72 hours</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div>
                                        <p className="text-sm text-gray-600">Min Amount</p>
                                        <p className="text-lg font-semibold text-blue-600">₹10 Lakh</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Max Amount</p>
                                        <p className="text-lg font-semibold text-blue-600">₹10 Cr</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 text-center text-white bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2 rounded-md group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-200 shadow-md">
                                Apply Now
                            </div>
                        </motion.div>

                        {/* Education Loan Card */}
                        <motion.div
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleLoanSelection('education')}
                            className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 border border-gray-100 w-full min-w-[280px] relative group"
                        >
                            <div className="relative w-full h-40 mb-6 rounded-lg overflow-hidden">
                                <Image
                                    src="/images/Edu-Loan.jpg"
                                    alt="Education Loan"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    priority
                                />
                            </div>
                            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-transparent bg-clip-text">Education Loan</h2>
                            <div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-sm text-gray-600">Interest Rate</p>
                                        <p className="text-lg font-semibold text-blue-600">Starting from 6.5%</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Processing Time</p>
                                        <p className="text-lg font-semibold text-blue-600">5-7 days</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div>
                                        <p className="text-sm text-gray-600">Min Amount</p>
                                        <p className="text-lg font-semibold text-blue-600">₹4 Lakh</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Max Amount</p>
                                        <p className="text-lg font-semibold text-blue-600">₹1.5 Cr</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 text-center text-white bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2 rounded-md group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-200 shadow-md">
                                Apply Now
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
                <ProductReviews />
            </div>
            <ContactFooter />
        </div>
    );
};

export default LoanApplicationPage; 