'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoanFormData {
    propertyValue: string;
    loanAmount: string;
    propertyType: string;
    propertyAge: string;
    income: string;
    employmentType: string;
}

export default function LoanAgainstPropertyPage() {
    const [mounted, setMounted] = useState(false);
    const [formData, setFormData] = useState<LoanFormData>({
        propertyValue: '',
        loanAmount: '',
        propertyType: '',
        propertyAge: '',
        income: '',
        employmentType: ''
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    if (!mounted) {
        return null;
    }

    return (
        <div className="mt-16 min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">

            <div className="max-w-6xl mx-auto text-center relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-blue-600 bg-clip-text text-transparent"
                >
                    Loan Against Property
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-xl text-blue-300 max-w-2xl mx-auto"
                >
                    Get a loan by leveraging your property as collateral
                </motion.p>
            </div>

            <div className="max-w-3xl mx-auto">

                <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow mt-4">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="propertyValue" className="block text-sm font-medium text-gray-700">
                                Property Value
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    id="propertyValue"
                                    name="propertyValue"
                                    value={formData.propertyValue}
                                    onChange={(e) => setFormData({ ...formData, propertyValue: e.target.value })}
                                    className="text-gray-600 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Your Property Value"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">
                                Loan Amount Required
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    id="loanAmount"
                                    name="loanAmount"
                                    value={formData.loanAmount}
                                    onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                                    className="text-gray-600 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Your Required Loan Amount"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">
                                Property Type
                            </label>
                            <div className="mt-1">
                                <select
                                    id="propertyType"
                                    name="propertyType"
                                    value={formData.propertyType}
                                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                                    className="text-gray-600 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                >
                                    <option value="">Select property type</option>
                                    <option value="residential">Residential</option>
                                    <option value="commercial">Commercial</option>
                                    <option value="industrial">Industrial</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="propertyAge" className="block text-sm font-medium text-gray-700">
                                Property Age (in years)
                            </label>
                            <div className="mt-1">
                                <input
                                    type="number"
                                    id="propertyAge"
                                    name="propertyAge"
                                    value={formData.propertyAge}
                                    onChange={(e) => setFormData({ ...formData, propertyAge: e.target.value })}
                                    className="text-gray-600 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Your Property Age"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="income" className="block text-sm font-medium text-gray-700">
                                Monthly Income
                            </label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    id="income"
                                    name="income"
                                    value={formData.income}
                                    onChange={(e) => setFormData({ ...formData, income: e.target.value })}
                                    className="text-gray-600 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Your Monthly Income"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700">
                                Employment Type
                            </label>
                            <div className="mt-1">
                                <select
                                    id="employmentType"
                                    name="employmentType"
                                    value={formData.employmentType}
                                    onChange={(e) => setFormData({ ...formData, employmentType: e.target.value })}
                                    className="text-gray-600 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                >
                                    <option value="">Select employment type</option>
                                    <option value="salaried">Salaried</option>
                                    <option value="self-employed">Self Employed</option>
                                    <option value="business">Business Owner</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Apply Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
} 