'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface LoanFormData {
    propertyValue: string;
    loanAmount: string;
    propertyType: string;
    propertyAge: string;
    income: string;
    employmentType: string;
}

export default function LoanAgainstPropertyPage() {
    const router = useRouter();
    const [formData, setFormData] = useState<LoanFormData>({
        propertyValue: '',
        loanAmount: '',
        propertyType: '',
        propertyAge: '',
        income: '',
        employmentType: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Loan Against Property
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Get a loan by leveraging your property as collateral
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow">
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
                                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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