'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

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

interface FormErrors {
    [key: string]: string;
}

function EducationLoanPage() {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
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

    const [errors, setErrors] = useState<FormErrors>({});
    const [isLoading, setIsLoading] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        // Student Details Validation
        if (!formData.studentName.trim()) {
            newErrors.studentName = 'Student name is required';
        }

        if (!formData.dateOfBirth) {
            newErrors.dateOfBirth = 'Date of birth is required';
        } else {
            const dob = new Date(formData.dateOfBirth);
            const today = new Date();
            const age = today.getFullYear() - dob.getFullYear();
            if (age < 18) {
                newErrors.dateOfBirth = 'Student must be at least 18 years old';
            }
        }

        if (!formData.aadharNumber.trim()) {
            newErrors.aadharNumber = 'Aadhar number is required';
        } else if (!/^\d{12}$/.test(formData.aadharNumber)) {
            newErrors.aadharNumber = 'Aadhar number must be 12 digits';
        }

        if (!formData.panNumber.trim()) {
            newErrors.panNumber = 'PAN number is required';
        } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panNumber)) {
            newErrors.panNumber = 'Invalid PAN number format';
        }

        if (!formData.address.trim()) {
            newErrors.address = 'Address is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = 'Phone number is required';
        } else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Phone number must be 10 digits';
        }

        // Parent/Guardian Details Validation
        if (!formData.guardianName.trim()) {
            newErrors.guardianName = 'Guardian name is required';
        }

        if (!formData.guardianRelation.trim()) {
            newErrors.guardianRelation = 'Guardian relation is required';
        }

        if (!formData.guardianPhone.trim()) {
            newErrors.guardianPhone = 'Guardian phone number is required';
        } else if (!/^[0-9]{10}$/.test(formData.guardianPhone)) {
            newErrors.guardianPhone = 'Phone number must be 10 digits';
        }

        if (!formData.annualFamilyIncome.trim()) {
            newErrors.annualFamilyIncome = 'Annual family income is required';
        }

        // Course Details Validation
        if (!formData.courseName.trim()) {
            newErrors.courseName = 'Course name is required';
        }

        if (!formData.courseDuration.trim()) {
            newErrors.courseDuration = 'Course duration is required';
        }

        if (!formData.instituteName.trim()) {
            newErrors.instituteName = 'Institute name is required';
        }

        if (!formData.instituteAddress.trim()) {
            newErrors.instituteAddress = 'Institute address is required';
        }

        if (!formData.courseCountry.trim()) {
            newErrors.courseCountry = 'Course country is required';
        }

        if (!formData.totalCourseFee.trim()) {
            newErrors.totalCourseFee = 'Total course fee is required';
        }

        if (!formData.admissionStatus.trim()) {
            newErrors.admissionStatus = 'Admission status is required';
        }

        // Loan Details Validation
        if (!formData.loanAmount.trim()) {
            newErrors.loanAmount = 'Loan amount is required';
        }

        if (!formData.loanTenure.trim()) {
            newErrors.loanTenure = 'Loan tenure is required';
        }

        if (!formData.collateralType.trim()) {
            newErrors.collateralType = 'Collateral type is required';
        }

        // Bank Details Validation
        if (!formData.bankName.trim()) {
            newErrors.bankName = 'Bank name is required';
        }

        if (!formData.accountNumber.trim()) {
            newErrors.accountNumber = 'Account number is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError(null);

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Form submitted:', formData);
            router.push('/success');
        } catch (error) {
            setSubmitError('Failed to submit form. Please try again.');
            console.error('Form submission error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    if (!mounted) {
        return null; // or a loading spinner
    }

    return (
        <div className="mt-20 min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Education Loan Application
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Invest in your future with our education loan
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow">
                    {submitError && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <span className="block sm:inline">{submitError}</span>
                        </div>
                    )}
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
                                    onChange={handleInputChange}
                                    className={`mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${errors.studentName ? 'border-red-500' : ''}`}
                                    placeholder="Enter Your Full Name"
                                    required
                                />
                                {errors.studentName && (
                                    <p className="mt-1 text-sm text-red-600">{errors.studentName}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                                <input
                                    type="date"
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleInputChange}
                                    className={`mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${errors.dateOfBirth ? 'border-red-500' : ''}`}
                                    required
                                />
                                {errors.dateOfBirth && (
                                    <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="aadharNumber" className="block text-sm font-medium text-gray-700">Aadhar Number</label>
                                <input
                                    type="text"
                                    id="aadharNumber"
                                    name="aadharNumber"
                                    value={formData.aadharNumber}
                                    onChange={handleInputChange}
                                    className={`mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${errors.aadharNumber ? 'border-red-500' : ''}`}
                                    placeholder="Enter Your Aadhar Number"
                                    required
                                />
                                {errors.aadharNumber && (
                                    <p className="mt-1 text-sm text-red-600">{errors.aadharNumber}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="panNumber" className="block text-sm font-medium text-gray-700">PAN Number</label>
                                <input
                                    type="text"
                                    id="panNumber"
                                    name="panNumber"
                                    value={formData.panNumber}
                                    onChange={handleInputChange}
                                    className={`mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${errors.panNumber ? 'border-red-500' : ''}`}
                                    placeholder="Enter Your PAN Number"
                                    required
                                />
                                {errors.panNumber && (
                                    <p className="mt-1 text-sm text-red-600">{errors.panNumber}</p>
                                )}
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Residential Address</label>
                                <textarea
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className={`mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${errors.address ? 'border-red-500' : ''}`}
                                    placeholder="Enter Your Complete Address"
                                    rows={3}
                                    required
                                />
                                {errors.address && (
                                    <p className="mt-1 text-sm text-red-600">{errors.address}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${errors.email ? 'border-red-500' : ''}`}
                                    placeholder="Enter Your Email Address"
                                    required
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    className={`mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md ${errors.phoneNumber ? 'border-red-500' : ''}`}
                                    placeholder="Enter Your Phone Number"
                                    required
                                />
                                {errors.phoneNumber && (
                                    <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
                                )}
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
                                    onChange={handleInputChange}
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    onChange={handleInputChange}
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    onChange={handleInputChange}
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    onChange={handleInputChange}
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    onChange={handleInputChange}
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    onChange={handleInputChange}
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    onChange={handleInputChange}
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    onChange={handleInputChange}
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    onChange={handleInputChange}
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    onChange={handleInputChange}
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    onChange={handleInputChange}
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    onChange={handleInputChange}
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
                                    onChange={handleInputChange}
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    onChange={handleInputChange}
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    onChange={handleInputChange}
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    onChange={handleInputChange}
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    onChange={handleInputChange}
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                    onChange={handleInputChange}
                                    className="mt-1 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                                disabled={isLoading}
                                className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </>
                                ) : (
                                    'Submit Application'
                                )}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EducationLoanPage; 