'use client';

import { useState } from 'react';
import useScrollReveal from '@/hooks/useScrollReveal';

interface EducationLoanFormData {
    studentName: string;
    email: string;
    phone: string;
    courseType: string;
    courseName: string;
    institutionName: string;
    courseDuration: string;
    courseStartDate: string;
    courseEndDate: string;
    loanAmount: string;
    employmentType: string;
    monthlyIncome: string;
    address: string;
    documents: File[];
    coApplicantName: string;
    coApplicantRelation: string;
    coApplicantIncome: string;
}

const EducationLoanForm = () => {
    const formRef = useScrollReveal();
    const [formData, setFormData] = useState<EducationLoanFormData>({
        studentName: '',
        email: '',
        phone: '',
        courseType: '',
        courseName: '',
        institutionName: '',
        courseDuration: '',
        courseStartDate: '',
        courseEndDate: '',
        loanAmount: '',
        employmentType: '',
        monthlyIncome: '',
        address: '',
        documents: [],
        coApplicantName: '',
        coApplicantRelation: '',
        coApplicantIncome: '',
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
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Education Loan Application</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Student Information */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-700">Student Information</h3>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Student Name</label>
                        <input
                            type="text"
                            name="studentName"
                            value={formData.studentName}
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

                {/* Course Details */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-700">Course Details</h3>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Course Type</label>
                        <select
                            name="courseType"
                            value={formData.courseType}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option value="">Select Course Type</option>
                            <option value="undergraduate">Undergraduate</option>
                            <option value="postgraduate">Postgraduate</option>
                            <option value="phd">PhD</option>
                            <option value="diploma">Diploma</option>
                            <option value="certification">Certification</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Course Name</label>
                        <input
                            type="text"
                            name="courseName"
                            value={formData.courseName}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Institution Name</label>
                        <input
                            type="text"
                            name="institutionName"
                            value={formData.institutionName}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Course Duration (Years)</label>
                        <input
                            type="text"
                            name="courseDuration"
                            value={formData.courseDuration}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Course Start Date</label>
                        <input
                            type="date"
                            name="courseStartDate"
                            value={formData.courseStartDate}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Course End Date</label>
                        <input
                            type="date"
                            name="courseEndDate"
                            value={formData.courseEndDate}
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
                </div>

                {/* Co-Applicant Information */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-700">Co-Applicant Information</h3>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Co-Applicant Name</label>
                        <input
                            type="text"
                            name="coApplicantName"
                            value={formData.coApplicantName}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Relation with Student</label>
                        <select
                            name="coApplicantRelation"
                            value={formData.coApplicantRelation}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                            <option value="">Select Relation</option>
                            <option value="parent">Parent</option>
                            <option value="spouse">Spouse</option>
                            <option value="sibling">Sibling</option>
                            <option value="guardian">Guardian</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Co-Applicant Monthly Income</label>
                        <input
                            type="text"
                            name="coApplicantIncome"
                            value={formData.coApplicantIncome}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Address */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-700">Address</h3>
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
                            Please upload: Admission letter, Course fee structure, ID proof, Income proof, Bank statements, Academic records
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