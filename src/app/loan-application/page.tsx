'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ContactFooter from '@/components/ContactFooter';
import ProductReviews from './ProductReviews';

const LoanCalculator = () => {
    const [loanAmount, setLoanAmount] = useState<number>(1000000);
    const [interestRate, setInterestRate] = useState<number>(8.5);
    const [tenure, setTenure] = useState<number>(20);
    const [emi, setEmi] = useState<number>(0);
    const [totalInterest, setTotalInterest] = useState<number>(0);
    const [totalPayment, setTotalPayment] = useState<number>(0);

    const calculateEMI = () => {
        const principal = loanAmount;
        const ratePerMonth = interestRate / (12 * 100);
        const numberOfPayments = tenure * 12;

        const emiAmount = principal * ratePerMonth * Math.pow(1 + ratePerMonth, numberOfPayments) / (Math.pow(1 + ratePerMonth, numberOfPayments) - 1);
        const totalPaymentAmount = emiAmount * numberOfPayments;
        const totalInterestAmount = totalPaymentAmount - principal;

        setEmi(emiAmount);
        setTotalInterest(totalInterestAmount);
        setTotalPayment(totalPaymentAmount);
    };

    const handleCalculate = (e: React.FormEvent) => {
        e.preventDefault();
        calculateEMI();
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto mb-32 mt-24 p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg"
        >
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-transparent bg-clip-text">
                Loan EMI Calculator
            </h2>
            <form onSubmit={handleCalculate} className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Loan Amount (₹)
                        </label>
                        <input
                            type="number"
                            value={loanAmount}
                            onChange={(e) => {
                                const value = e.target.value.replace(/^0+/, '');
                                setLoanAmount(value ? Number(value) : 0);
                            }}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                            min="100000"
                            step="100000"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Interest Rate (%)
                        </label>
                        <input
                            type="number"
                            value={interestRate}
                            onChange={(e) => setInterestRate(Number(e.target.value))}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                            min="5"
                            max="20"
                            step="0.1"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Loan Tenure (Years)
                        </label>
                        <input
                            type="number"
                            value={tenure}
                            onChange={(e) => {
                                const value = e.target.value.replace(/^0+/, '');
                                setTenure(value ? Number(value) : 0);
                            }}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                            min="1"
                            max="30"
                        />
                    </div>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md"
                    >
                        Calculate EMI
                    </button>
                </div>
            </form>

            {emi > 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 grid md:grid-cols-3 gap-6"
                >
                    <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-blue-600 mb-2">Monthly EMI</h3>
                        <p className="text-2xl font-bold text-gray-800">₹{emi.toFixed(2)}</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-purple-600 mb-2">Total Interest</h3>
                        <p className="text-2xl font-bold text-gray-800">₹{totalInterest.toFixed(2)}</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-green-600 mb-2">Total Payment</h3>
                        <p className="text-2xl font-bold text-gray-800">₹{totalPayment.toFixed(2)}</p>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
};

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
                                        <p className="text-lg font-semibold text-blue-600">Starting from 9.0%</p>
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

                <LoanCalculator />
                
                <ProductReviews />
            </div>
            <ContactFooter />
        </div>
    );
};

export default LoanApplicationPage; 