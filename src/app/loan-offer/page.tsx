"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function LoanOfferForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    purpose: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/loan-offer/result");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Form Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-10 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            Get Your Loan Offer
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              required
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="amount"
              placeholder="Loan Amount"
              onChange={handleChange}
              required
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <input
              name="purpose"
              placeholder="Loan Purpose"
              onChange={handleChange}
              required
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/images/loan-offer.jpg"
            alt="Loan Image"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
