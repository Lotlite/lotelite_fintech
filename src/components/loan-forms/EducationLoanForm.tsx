'use client';

import { useState } from 'react';

interface EducationLoanFormData {
    fullName: string;
    email: string;
    phone: string;
    courseType: string;
    courseName: string;
    instituteName: string;
    courseDuration: string;
    totalFees: string;
    loanAmount: string;
    employmentType: string;
    monthlyIncome: string;
    address: string;
    documents: File[];
    coApplicantName: string;
    coApplicantIncome: string;
}

const EducationLoanForm = () => {
    const [formData, setFormData] = useState<EducationLoanFormData>({
        fullName: '',
        email: '',
        phone: '',
        courseType: '',
        courseName: '',
        instituteName: '',
        courseDuration: '',
        totalFees: '',
        loanAmount: '',
        employmentType: '',
        monthlyIncome: '',
        address: '',
        documents: [],
        coApplicantName: '',
        coApplicantIncome: ''
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
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Education Loan Application</h2>
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

                {/* Course Details */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-700">Course Details</h3>
                    <div>
                        <label htmlFor="courseType" className="block text-sm font-medium text-gray-700">Course Type</label>
                        <select
                            id="courseType"
                            name="courseType"
                            value={formData.courseType}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option value="">Select Course Type</option>
                            <option value="undergraduate">Undergraduate</option>
                            <option value="postgraduate">Postgraduate</option>
                            <option value="professional">Professional</option>
                            <option value="vocational">Vocational</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">Course Name</label>
                        <input
                            id="courseName"
                            type="text"
                            name="courseName"
                            value={formData.courseName}
                            onChange={handleChange}
                            required
                            placeholder="Enter course name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="instituteName" className="block text-sm font-medium text-gray-700">Institute Name</label>
                        <input
                            id="instituteName"
                            type="text"
                            name="instituteName"
                            value={formData.instituteName}
                            onChange={handleChange}
                            required
                            placeholder="Enter institute name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="courseDuration" className="block text-sm font-medium text-gray-700">Course Duration (Years)</label>
                        <input
                            id="courseDuration"
                            type="text"
                            name="courseDuration"
                            value={formData.courseDuration}
                            onChange={handleChange}
                            required
                            placeholder="Enter course duration"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Financial Details */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-700">Financial Details</h3>
                    <div>
                        <label htmlFor="totalFees" className="block text-sm font-medium text-gray-700">Total Course Fees</label>
                        <input
                            id="totalFees"
                            type="text"
                            name="totalFees"
                            value={formData.totalFees}
                            onChange={handleChange}
                            required
                            placeholder="Enter total course fees"
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

                {/* Co-Applicant Details */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-700">Co-Applicant Details</h3>
                    <div>
                        <label htmlFor="coApplicantName" className="block text-sm font-medium text-gray-700">Co-Applicant Name</label>
                        <input
                            id="coApplicantName"
                            type="text"
                            name="coApplicantName"
                            value={formData.coApplicantName}
                            onChange={handleChange}
                            required
                            placeholder="Enter co-applicant name"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="coApplicantIncome" className="block text-sm font-medium text-gray-700">Co-Applicant Monthly Income</label>
                        <input
                            id="coApplicantIncome"
                            type="text"
                            name="coApplicantIncome"
                            value={formData.coApplicantIncome}
                            onChange={handleChange}
                            required
                            placeholder="Enter co-applicant monthly income"
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
                            Please upload: Admission letter, Fee structure, ID proof, Income proof, Bank statements
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

export default EducationLoanForm; 