"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoanOfferForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    purpose: ""
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push('/loan-offer/result');
  };

  return (
    <div className="text-gray-600 flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-semibold mb-6">Loan Offer Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <input name="name" placeholder="Name" onChange={handleChange} required className="border p-2" />
        <input name="email" placeholder="Email" onChange={handleChange} required className="border p-2" />
        <input name="amount" placeholder="Loan Amount" onChange={handleChange} required className="border p-2" />
        <input name="purpose" placeholder="Loan Purpose" onChange={handleChange} required className="border p-2" />
        <button type="submit"
        onClick={() => router.push('/result')}
        className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Submit
        </button>
      </form>
    </div>
  );
}
