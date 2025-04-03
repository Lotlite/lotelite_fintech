'use client';

import { useState } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';

interface HomeLoanFormData {
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

const HomeLoanForm = () => {
    const formRef = useScrollReveal();
    const [formData, setFormData] = useState<HomeLoanFormData>({
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
        existingLoans: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
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
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Home Loan Application</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-700">Personal Information</h3>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Property Details */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-700">Property Details</h3>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Property Type</label>
                        <select
                            name="propertyType"
                            value={formData.propertyType}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option value="">Select Property Type</option>
                            <option value="apartment">Apartment</option>
                            <option value="villa">Villa</option>
                            <option value="plot">Plot</option>
                            <option value="underconstruction">Under Construction</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Property Value</label>
                        <input
                            type="text"
                            name="propertyValue"
                            value={formData.propertyValue}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Down Payment Amount</label>
                        <input
                            type="text"
                            name="downPayment"
                            value={formData.downPayment}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Loan Amount Required</label>
                        <input
                            type="text"
                            name="loanAmount"
                            value={formData.loanAmount}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Loan Tenure (Years)</label>
                        <select
                            name="loanTenure"
                            value={formData.loanTenure}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option value="">Select Tenure</option>
                            <option value="5">5 Years</option>
                            <option value="10">10 Years</option>
                            <option value="15">15 Years</option>
                            <option value="20">20 Years</option>
                            <option value="25">25 Years</option>
                            <option value="30">30 Years</option>
                        </select>
                    </div>
                </div>

                {/* Employment Details */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-700">Employment Details</h3>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Employment Type</label>
                        <select
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
                            <option value="self-employed">Self Employed</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Monthly Income</label>
                        <input
                            type="text"
                            name="monthlyIncome"
                            value={formData.monthlyIncome}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Existing Loans (if any)</label>
                        <input
                            type="text"
                            name="existingLoans"
                            value={formData.existingLoans}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Property Address */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-700">Property Address</h3>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Complete Address</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Document Upload */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-700">Required Documents</h3>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Upload Documents</label>
                        <input
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
                            Please upload: Property documents, ID proof, Income proof, Bank statements, Salary slips/IT returns
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

export default HomeLoanForm; 