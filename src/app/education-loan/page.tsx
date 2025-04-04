'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface EducationLoanFormData {
    // Student Details
    studentName: string;
    dateOfBirth: string;
    aadharNumber: string;
    panNumber: string;
    email: string;
    phone: string;
    address: string;

    // Parent/Guardian Details
    guardianName: string;
    guardianRelation: string;
    guardianPhone: string;
    guardianEmail: string;
    guardianAddress: string;

    // Course Details
    courseName: string;
    instituteName: string;
    courseDuration: string;
    totalFees: string;

    // Loan Details
    loanAmount: string;
    loanTenure: string;
    collateralType: string;
    collateralValue: string;

    // Bank Details
    bankName: string;
    accountNumber: string;
    ifscCode: string;
    branchName: string;
}

function EducationLoanPage() {
    const [mounted, setMounted] = useState(false);
    const [formData, setFormData] = useState<EducationLoanFormData>({
        // Student Details
        studentName: '',
        dateOfBirth: '',
        aadharNumber: '',
        panNumber: '',
        email: '',
        phone: '',
        address: '',

        // Parent/Guardian Details
        guardianName: '',
        guardianRelation: '',
        guardianPhone: '',
        guardianEmail: '',
        guardianAddress: '',

        // Course Details
        courseName: '',
        instituteName: '',
        courseDuration: '',
        totalFees: '',

        // Loan Details
        loanAmount: '',
        loanTenure: '',
        collateralType: '',
        collateralValue: '',

        // Bank Details
        bankName: '',
        accountNumber: '',
        ifscCode: '',
        branchName: ''
    });

    useEffect(() => {
        setMounted(true);
    }, []);

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
                    Education Loan Application
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-xl text-blue-300 max-w-2xl mx-auto"
                >
                    Fill out the form below to apply for an education loan
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-12 max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {/* Student Details */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Student Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="studentName"
                                    name="studentName"
                                    value={formData.studentName}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Course Details */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Course Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">
                                    Course Name
                                </label>
                                <input
                                    type="text"
                                    id="courseName"
                                    name="courseName"
                                    value={formData.courseName}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="instituteName" className="block text-sm font-medium text-gray-700">
                                    Institute Name
                                </label>
                                <input
                                    type="text"
                                    id="instituteName"
                                    name="instituteName"
                                    value={formData.instituteName}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-5">
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Submit Application
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}

export default EducationLoanPage; 
