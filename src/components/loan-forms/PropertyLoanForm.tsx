'use client';

import { useState } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';

interface PropertyLoanFormData {
    fullName: string;
    email: string;
    phone: string;
    propertyType: string;
    propertyValue: string;
    loanAmount: string;
    employmentType: string;
    monthlyIncome: string;
    address: string;
    documents: File[];
    downPayment: string;
    loanTenure: string;
    existingLoans: string;
}

const PropertyLoanForm = () => {
    const formRef = useScrollReveal();
    const [formData, setFormData] = useState<PropertyLoanFormData>({
        fullName: '',
        email: '',
        phone: '',
        propertyType: '',
        propertyValue: '',
        loanAmount: '',
        employmentType: '',
        monthlyIncome: '',
        address: '',
        documents: [],
        downPayment: '',
        loanTenure: '',
        existingLoans: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFormData(prev => ({
                ...prev,
                documents: Array.from(e.target.files || [])
            }));
        }
    };

    return (
        <div ref={formRef} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Property Loan Application</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-700">Personal Information</h3>
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            id="fullName"
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email address"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="Enter your phone number"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Property Details */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-700">Property Details</h3>
                    <div>
                        <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">Property Type</label>
                        <select
                            id="propertyType"
                            name="propertyType"
                            value={formData.propertyType}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option value="">Select Property Type</option>
                            <option value="residential">Residential</option>
                            <option value="commercial">Commercial</option>
                            <option value="industrial">Industrial</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="propertyValue" className="block text-sm font-medium text-gray-700">Property Value</label>
                        <input
                            id="propertyValue"
                            type="text"
                            name="propertyValue"
                            value={formData.propertyValue}
                            onChange={handleChange}
                            required
                            placeholder="Enter property value"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">Loan Amount Required</label>
                        <input
                            id="loanAmount"
                            type="text"
                            name="loanAmount"
                            value={formData.loanAmount}
                            onChange={handleChange}
                            required
                            placeholder="Enter loan amount"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Employment Details */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-700">Employment Details</h3>
                    <div>
                        <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700">Employment Type</label>
                        <select
                            id="employmentType"
                            name="employmentType"
                            value={formData.employmentType}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option value="">Select Employment Type</option>
                            <option value="salaried">Salaried</option>
                            <option value="business">Business</option>
                            <option value="professional">Professional</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="monthlyIncome" className="block text-sm font-medium text-gray-700">Monthly Income</label>
                        <input
                            id="monthlyIncome"
                            type="text"
                            name="monthlyIncome"
                            value={formData.monthlyIncome}
                            onChange={handleChange}
                            required
                            placeholder="Enter monthly income"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Property Address */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-700">Property Address</h3>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Complete Address</label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            rows={4}
                            placeholder="Enter complete property address"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Document Upload */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-700">Required Documents</h3>
                    <div>
                        <label htmlFor="documents" className="block text-sm font-medium text-gray-700">Upload Documents</label>
                        <input
                            id="documents"
                            type="file"
                            multiple
                            onChange={handleFileChange}
                            className="mt-1 block w-full text-sm text-gray-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-md file:border-0
                            file:text-sm file:font-semibold
                            file:bg-blue-50 file:text-blue-700
                            hover:file:bg-blue-100"
                        />
                        <p className="mt-1 text-sm text-gray-500">
                            Please upload: Property documents, ID proof, Income proof, Bank statements
                        </p>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
};

export default PropertyLoanForm; 