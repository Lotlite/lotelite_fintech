'use client';

import PropertyLoanForm from '@/components/loan-forms/PropertyLoanForm';

const PropertyLoanPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Property Loan Application
                </h1>
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <PropertyLoanForm />
                </div>
            </div>
        </div>
    );
};

export default PropertyLoanPage; 