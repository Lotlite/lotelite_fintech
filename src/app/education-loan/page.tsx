'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

interface EducationLoanFormData {
    // Student Details
    studentName: string;
    dateOfBirth: string;
    aadharNumber: string;
    panNumber: string;
    address: string;
    email: string;
    phoneNumber: string;

    // Parent/Guardian Details
    guardianName: string;
    guardianRelation: string;
    guardianPhone: string;
    annualFamilyIncome: string;

    // Course Details
    courseName: string;
    courseDuration: string;
    instituteName: string;
    instituteAddress: string;
    courseCountry: string;
    totalCourseFee: string;
    admissionStatus: string;

    // Loan Details
    loanAmount: string;
    loanTenure: string;
    collateralType: string;

    // Bank Details
    bankName: string;
    accountNumber: string;
    existingLoan: string;
    creditScore: string;
}

function EducationLoanPage() {
    const router = useRouter();
    const [formData, setFormData] = useState<EducationLoanFormData>({
        // Student Details
        studentName: '',
        dateOfBirth: '',
        aadharNumber: '',
        panNumber: '',
        address: '',
        email: '',
        phoneNumber: '',

        // Parent/Guardian Details
        guardianName: '',
        guardianRelation: '',
        guardianPhone: '',
        annualFamilyIncome: '',

        // Course Details
        courseName: '',
        courseDuration: '',
        instituteName: '',
        instituteAddress: '',
        courseCountry: '',
        totalCourseFee: '',
        admissionStatus: '',

        // Loan Details
        loanAmount: '',
        loanTenure: '',
        collateralType: '',

        // Bank Details
        bankName: '',
        accountNumber: '',
        existingLoan: '',
        creditScore: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

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
                    Invest in your future with our education loan
                </motion.p>
            </div>

            <div className="max-w-4xl mx-auto">


                <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow mt-4">
                    {/* Student Details Section */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">Student Details</h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    id="studentName"
                                    name="studentName"
                                    value={formData.studentName}
                                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
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
                        </div>
                    </div>

                    {/* Parent/Guardian Details Section */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">Parent/Guardian Details</h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="guardianName" className="block text-sm font-medium text-gray-700">Guardian Name</label>
                                <input
                                    type="text"
                                    id="guardianName"
                                    name="guardianName"
                                    value={formData.guardianName}
                                    onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Guardian's Name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="guardianRelation" className="block text-sm font-medium text-gray-700">Relationship with Guardian</label>
                                <select
                                    id="guardianRelation"
                                    name="guardianRelation"
                                    value={formData.guardianRelation}
                                    onChange={(e) => setFormData({ ...formData, guardianRelation: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    required
                                >
                                    <option value="">Select Relationship</option>
                                    <option value="father">Father</option>
                                    <option value="mother">Mother</option>
                                    <option value="guardian">Legal Guardian</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="guardianPhone" className="block text-sm font-medium text-gray-700">Guardian's Phone Number</label>
                                <input
                                    type="tel"
                                    id="guardianPhone"
                                    name="guardianPhone"
                                    value={formData.guardianPhone}
                                    onChange={(e) => setFormData({ ...formData, guardianPhone: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Guardian's Phone Number"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="annualFamilyIncome" className="block text-sm font-medium text-gray-700">Annual Family Income</label>
                                <input
                                    type="text"
                                    id="annualFamilyIncome"
                                    name="annualFamilyIncome"
                                    value={formData.annualFamilyIncome}
                                    onChange={(e) => setFormData({ ...formData, annualFamilyIncome: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Annual Family Income"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Course Details Section */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">Course Details</h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="courseName" className="block text-sm font-medium text-gray-700">Course Name</label>
                                <input
                                    type="text"
                                    id="courseName"
                                    name="courseName"
                                    value={formData.courseName}
                                    onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Course Name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="courseDuration" className="block text-sm font-medium text-gray-700">Course Duration (in years)</label>
                                <input
                                    type="number"
                                    id="courseDuration"
                                    name="courseDuration"
                                    value={formData.courseDuration}
                                    onChange={(e) => setFormData({ ...formData, courseDuration: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Course Duration"
                                    min="1"
                                    max="8"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="instituteName" className="block text-sm font-medium text-gray-700">Institute Name</label>
                                <input
                                    type="text"
                                    id="instituteName"
                                    name="instituteName"
                                    value={formData.instituteName}
                                    onChange={(e) => setFormData({ ...formData, instituteName: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Institute Name"
                                    required
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="instituteAddress" className="block text-sm font-medium text-gray-700">Institute Address</label>
                                <textarea
                                    id="instituteAddress"
                                    name="instituteAddress"
                                    value={formData.instituteAddress}
                                    onChange={(e) => setFormData({ ...formData, instituteAddress: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Institute Address"
                                    rows={3}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="courseCountry" className="block text-sm font-medium text-gray-700">Country of Study</label>
                                <select
                                    id="courseCountry"
                                    name="courseCountry"
                                    value={formData.courseCountry}
                                    onChange={(e) => setFormData({ ...formData, courseCountry: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    required
                                >
                                    <option value="">Select Country</option>
                                    <option value="india">India</option>
                                    <option value="usa">USA</option>
                                    <option value="uk">UK</option>
                                    <option value="canada">Canada</option>
                                    <option value="australia">Australia</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="totalCourseFee" className="block text-sm font-medium text-gray-700">Total Course Fee</label>
                                <input
                                    type="text"
                                    id="totalCourseFee"
                                    name="totalCourseFee"
                                    value={formData.totalCourseFee}
                                    onChange={(e) => setFormData({ ...formData, totalCourseFee: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    placeholder="Enter Total Course Fee"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="admissionStatus" className="block text-sm font-medium text-gray-700">Admission Status</label>
                                <select
                                    id="admissionStatus"
                                    name="admissionStatus"
                                    value={formData.admissionStatus}
                                    onChange={(e) => setFormData({ ...formData, admissionStatus: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    required
                                >
                                    <option value="">Select Status</option>
                                    <option value="confirmed">Confirmed</option>
                                    <option value="applied">Applied</option>
                                    <option value="awaiting">Awaiting</option>
                                </select>
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
                                    max="15"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="collateralType" className="block text-sm font-medium text-gray-700">Collateral Type</label>
                                <select
                                    id="collateralType"
                                    name="collateralType"
                                    value={formData.collateralType}
                                    onChange={(e) => setFormData({ ...formData, collateralType: e.target.value })}
                                    className="text-gray-600 mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
                                    required
                                >
                                    <option value="">Select Collateral Type</option>
                                    <option value="property">Property</option>
                                    <option value="fixed-deposit">Fixed Deposit</option>
                                    <option value="insurance">Insurance Policy</option>
                                    <option value="none">No Collateral</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Bank Details Section */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-900 border-b pb-2">Bank Details</h2>
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
                                <label htmlFor="existingLoan" className="block text-sm font-medium text-gray-700">Existing Education Loan (if any)</label>
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
                                <label htmlFor="creditScore" className="block text-sm font-medium text-gray-700">Credit Score (if applicable)</label>
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
}

export default EducationLoanPage; 