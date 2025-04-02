'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface PropertyLoanFormData {
    // Personal Information
    fullName: string;
    dateOfBirth: string;
    panNumber: string;
    aadharNumber: string;
    address: string;
    email: string;
    phoneNumber: string;
    employmentType: string;
    monthlyIncome: string;

    // Loan Details
    loanAmount: string;
    loanPurpose: string;
    loanTenure: string;
    propertyType: string;
    propertyValue: string;
    propertyAddress: string;
}

export default function PropertyLoanPage() {
    const router = useRouter();
    const [formData, setFormData] = useState<PropertyLoanFormData>({
        fullName: '',
        dateOfBirth: '',
        panNumber: '',
        aadharNumber: '',
        address: '',
        email: '',
        phoneNumber: '',
        employmentType: '',
        monthlyIncome: '',
        loanAmount: '',
        loanPurpose: '',
        loanTenure: '',
        propertyType: '',
        propertyValue: '',
        propertyAddress: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Show success message
        alert('Application submitted successfully! Please login to track your application.');
        // Redirect to login page
        router.push('/login');
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-blue-600 sm:text-5xl mb-4 bg-white p-4 rounded-lg shadow-sm inline-block">
                        Property Loan Application
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                        Get a loan with competitive interest rates for your dream home
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow">
                    {/* Personal Information Section */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2">
                            Personal Information
                        </h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                    placeholder="Enter Your Full Name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                                    Date of Birth
                                </label>
                                <input
                                    type="date"
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
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
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    placeholder="Enter Your Monthly Income"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Loan Details Section */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2">
                            Loan Details
                        </h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">Loan Amount Required</label>
                                <input
                                    type="text"
                                    id="loanAmount"
                                    name="loanAmount"
                                    value={formData.loanAmount}
                                    onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2">
                            Property Details
                        </h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">Property Type</label>
                                <select
                                    id="propertyType"
                                    name="propertyType"
                                    value={formData.propertyType}
                                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    placeholder="Enter Property Address"
                                    rows={3}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
} 