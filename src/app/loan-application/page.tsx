'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import PropertyLoanForm from '@/components/loan-forms/PropertyLoanForm';
import HomeLoanForm from '@/components/loan-forms/HomeLoanForm';
import EducationLoanForm from '@/components/loan-forms/EducationLoanForm';

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
            case 'home':
                return <HomeLoanForm />;
            case 'education':
                return <EducationLoanForm />;
            default:
                return (
                    <div className="max-w-4xl mx-auto p-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Select Loan Type</h1>
                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Property Loan Card */}
                            <div
                                onClick={() => setSelectedLoanType('property')}
                                className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="text-center">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Property Loan</h2>
                                    <p className="text-gray-600 mb-4">
                                        Get financing for your property with competitive interest rates and flexible terms.
                                    </p>
                                    <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
                                        Apply Now
                                    </button>
                                </div>
                            </div>

                            {/* Home Loan Card */}
                            <div
                                onClick={() => setSelectedLoanType('home')}
                                className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="text-center">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Home Loan</h2>
                                    <p className="text-gray-600 mb-4">
                                        Make your dream home a reality with our comprehensive home loan solutions.
                                    </p>
                                    <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
                                        Apply Now
                                    </button>
                                </div>
                            </div>

                            {/* Education Loan Card */}
                            <div
                                onClick={() => setSelectedLoanType('education')}
                                className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="text-center">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education Loan</h2>
                                    <p className="text-gray-600 mb-4">
                                        Invest in your future with our education loan programs for various courses.
                                    </p>
                                    <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
                                        Apply Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            {selectedLoanType && (
                <div className="mb-8 text-center">
                    <button
                        onClick={() => setSelectedLoanType('')}
                        className="text-blue-600 hover:text-blue-800 flex items-center justify-center mx-auto"
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
                    </button>
                </div>
            )}
            {renderForm()}
        </div>
    );
};

export default LoanApplicationPage; 