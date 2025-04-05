'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PropertyLoanForm from '@/components/loan-forms/PropertyLoanForm';
import LoanAgainstPropertyForm from '@/components/loan-forms/LoanAgainstPropertyForm';
import EducationLoanForm from '@/components/loan-forms/EducationLoanForm';
import ContactFooter from '@/components/ContactFooter';
import ProductReviews from './ProductReviews';

const LoanApplicationPage = () => {
    const searchParams = useSearchParams();
    const [selectedLoanType, setSelectedLoanType] = useState<string>('');

    useEffect(() => {
        const type = searchParams.get('type');
        if (type) {
            setSelectedLoanType(type);
        }
    }, [searchParams]);

    const renderForm = () => {
        switch (selectedLoanType) {
            case 'property':
                return <PropertyLoanForm />;
            case 'lap':
                return <LoanAgainstPropertyForm />;
            case 'education':
                return <EducationLoanForm />;
            default:
                return (
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
                                onClick={() => setSelectedLoanType('property')}
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 border border-gray-100 w-full min-w-[280px]"
                            >
                                <div className="text-center">
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
                                    <div className="mb-4 text-left space-y-4">
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
                                        <div className="grid grid-cols-2 gap-4">
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
                                    <motion.button 
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md w-full"
                                    >
                                        Apply Now
                                    </motion.button>
                                </div>
                            </motion.div>

                            {/* loan against property */}
                            <motion.div
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedLoanType('lap')}
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 border border-gray-100 w-full min-w-[280px]"
                            >
                                <div className="text-center">
                                    <div className="relative w-full h-40 mb-6 rounded-lg overflow-hidden">
                                        <Image
                                            src="/images/Home-Loan.jpg"
                                            alt="Home Loan"
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            priority
                                        />
                                    </div>
                                    <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-transparent bg-clip-text whitespace-nowrap">LOAN AGAINST PROPERTY</h2>
                                    <div className="mb-4 text-left space-y-4">
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
                                        <div className="grid grid-cols-2 gap-4">
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
                                    <motion.button 
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md w-full"
                                    >
                                        Apply Now
                                    </motion.button>
                                </div>
                            </motion.div>

                            {/* Education Loan Card */}
                            <motion.div
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedLoanType('education')}
                                className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 border border-gray-100 w-full min-w-[280px]"
                            >
                                <div className="text-center">
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
                                    <div className="mb-4 text-left space-y-4">
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
                                        <div className="grid grid-cols-2 gap-4">
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
                                    <motion.button 
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md w-full"
                                    >
                                        Apply Now
                                    </motion.button>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                    {/* Animated Circles */}
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200/20"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-200/20"
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.5, 0.3, 0.5],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-blue-300/20"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.4, 0.6, 0.4],
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 py-12">
                {selectedLoanType && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 text-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedLoanType('')}
                            className="text-blue-600 hover:text-blue-800 flex items-center justify-center mx-auto transition-colors duration-200"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                            Back to Loan Types
                        </motion.button>
                    </motion.div>
                )}
                {renderForm()}
                {!selectedLoanType && <ProductReviews />}
            </div>
            <ContactFooter />
        </div>
    );
};

export default LoanApplicationPage; 