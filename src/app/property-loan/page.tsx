'use client';

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

interface PropertyLoanFormData {
    // Personal Information
    fullName: string;
    dateOfBirth: string;
    age: string;
    panNumber: string;
    aadharNumber: string;
    address: string;
    email: string;
    phoneNumber: string;
    employmentType: string;
    monthlyIncome: string;

    // Loan Details
    loanAmount: string;
    loanTenure: string;
    loanPurpose: string;

    // Property Details
    propertyType: string;
    propertyAddress: string;
    ownershipStatus: string;

    // Bank Details
    bankName: string;
    accountNumber: string;
    existingLoan: string;
    creditScore: string;
}

const PropertyLoanPage: React.FC = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<PropertyLoanFormData>({
        // Personal Information
        fullName: '',
        dateOfBirth: '',
        age: '',
        panNumber: '',
        aadharNumber: '',
        address: '',
        email: '',
        phoneNumber: '',
        employmentType: '',
        monthlyIncome: '',

        // Loan Details
        loanAmount: '',
        loanTenure: '',
        loanPurpose: '',

        // Property Details
        propertyType: '',
        propertyAddress: '',
        ownershipStatus: '',

        // Bank Details
        bankName: '',
        accountNumber: '',
        existingLoan: '',
        creditScore: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="mt-16 min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-blue-600 bg-clip-text text-transparent"
                >
                    Property Loan Application
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-xl text-blue-300 max-w-2xl mx-auto"
                >
                    Get a loan with competitive interest rates for your dream home
                </motion.p>
            </div>
            <div className="max-w-4xl mx-auto">


                <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow mt-4">
                    {/* Personal Information Section */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">Personal Information</h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Your Full Name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                                <input
                                    type="date"
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="panNumber" className="block text-sm font-medium text-gray-700">PAN Number</label>
                                <input
                                    type="text"
                                    id="panNumber"
                                    name="panNumber"
                                    value={formData.panNumber}
                                    onChange={(e) => setFormData({ ...formData, panNumber: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Your PAN Number"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="aadharNumber" className="block text-sm font-medium text-gray-700">Aadhar Number</label>
                                <input
                                    type="text"
                                    id="aadharNumber"
                                    name="aadharNumber"
                                    value={formData.aadharNumber}
                                    onChange={(e) => setFormData({ ...formData, aadharNumber: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Your Aadhar Number"
                                    required
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Residential Address</label>
                                <textarea
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Your Complete Address"
                                    rows={3}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Your Email Address"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Your Phone Number"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700">Employment Type</label>
                                <select
                                    id="employmentType"
                                    name="employmentType"
                                    value={formData.employmentType}
                                    onChange={(e) => setFormData({ ...formData, employmentType: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    required
                                >
                                    <option value="">Select Employment Type</option>
                                    <option value="salaried">Salaried</option>
                                    <option value="self-employed">Self Employed</option>
                                    <option value="business">Business Owner</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="monthlyIncome" className="block text-sm font-medium text-gray-700">Monthly Income</label>
                                <input
                                    type="text"
                                    id="monthlyIncome"
                                    name="monthlyIncome"
                                    value={formData.monthlyIncome}
                                    onChange={(e) => setFormData({ ...formData, monthlyIncome: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Your Monthly Income"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Loan Details Section */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">Loan Details</h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">Loan Amount Required</label>
                                <input
                                    type="text"
                                    id="loanAmount"
                                    name="loanAmount"
                                    value={formData.loanAmount}
                                    onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Required Loan Amount"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="loanTenure" className="block text-sm font-medium text-gray-700">Loan Tenure (in years)</label>
                                <input
                                    type="number"
                                    id="loanTenure"
                                    name="loanTenure"
                                    value={formData.loanTenure}
                                    onChange={(e) => setFormData({ ...formData, loanTenure: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Loan Tenure"
                                    min="1"
                                    max="30"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="loanPurpose" className="block text-sm font-medium text-gray-700">Purpose of Loan</label>
                                <select
                                    id="loanPurpose"
                                    name="loanPurpose"
                                    value={formData.loanPurpose}
                                    onChange={(e) => setFormData({ ...formData, loanPurpose: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    required
                                >
                                    <option value="">Select Purpose</option>
                                    <option value="new-purchase">New Home Purchase</option>
                                    <option value="construction">Construction</option>
                                    <option value="renovation">Renovation</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Property Details Section */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">Property Details</h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">Property Type</label>
                                <select
                                    id="propertyType"
                                    name="propertyType"
                                    value={formData.propertyType}
                                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    required
                                >
                                    <option value="">Select Property Type</option>
                                    <option value="flat">Flat/Apartment</option>
                                    <option value="house">Independent House</option>
                                    <option value="land">Land</option>
                                </select>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="propertyAddress" className="block text-sm font-medium text-gray-700">Property Address</label>
                                <textarea
                                    id="propertyAddress"
                                    name="propertyAddress"
                                    value={formData.propertyAddress}
                                    onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Property Address"
                                    rows={3}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bank Details Section */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">Bank & Financial Details</h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">Bank Name</label>
                                <input
                                    type="text"
                                    id="bankName"
                                    name="bankName"
                                    value={formData.bankName}
                                    onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Bank Name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">Account Number</label>
                                <input
                                    type="text"
                                    id="accountNumber"
                                    name="accountNumber"
                                    value={formData.accountNumber}
                                    onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Account Number"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="existingLoan" className="block text-sm font-medium text-gray-700">Existing Loan (if any)</label>
                                <input
                                    type="text"
                                    id="existingLoan"
                                    name="existingLoan"
                                    value={formData.existingLoan}
                                    onChange={(e) => setFormData({ ...formData, existingLoan: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Existing Loan Details"
                                />
                            </div>

                            <div>
                                <label htmlFor="creditScore" className="block text-sm font-medium text-gray-700">Credit Score</label>
                                <input
                                    type="text"
                                    id="creditScore"
                                    name="creditScore"
                                    value={formData.creditScore}
                                    onChange={(e) => setFormData({ ...formData, creditScore: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Credit Score"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Declaration & Submit */}
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="declaration"
                                    name="declaration"
                                    type="checkbox"
                                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                    required
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="declaration" className="font-medium text-gray-700">
                                    Declaration
                                </label>
                                <p className="text-gray-500">I hereby declare that all the information provided above is true and correct to the best of my knowledge.</p>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Submit Application
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PropertyLoanPage; 