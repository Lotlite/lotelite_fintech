"use client";
import { useState } from "react";
import { X } from "lucide-react";

interface EligibilityFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EligibilityForm({ isOpen, onClose }: EligibilityFormProps) {
  if (!isOpen) return null; // Do not render when not open

  const [formData, setFormData] = useState({
    name: "",
    pan: "",
    dob: "",
    phone: "",
    email: "",
  });

  const [cibilScore, setCibilScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkCibilScore = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const randomScore = Math.floor(Math.random() * (900 - 300 + 1)) + 300;
      setCibilScore(randomScore);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="text-black fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        {/* Close Button */}
        <button className="absolute top-3 right-3 text-gray-600 hover:text-red-500" onClick={onClose}>
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-4">Check Your CIBIL Score</h2>

        {cibilScore === null ? (
          <form onSubmit={checkCibilScore} className="space-y-3">
            <input type="text" name="name" placeholder="Full Name" required className="w-full p-2 border rounded-md" value={formData.name} onChange={handleChange} />
            <input type="text" name="pan" placeholder="PAN Number" required className="w-full p-2 border rounded-md" value={formData.pan} onChange={handleChange} />
            <input type="date" name="dob" required className="w-full p-2 border rounded-md" value={formData.dob} onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-2 border rounded-md" value={formData.phone} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email Address" required className="w-full p-2 border rounded-md" value={formData.email} onChange={handleChange} />

            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md w-full" disabled={loading}>
              {loading ? "Checking..." : "Check CIBIL Score"}
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Your CIBIL Score</h3>
            <p className="text-3xl font-bold text-blue-600">{cibilScore}</p>
            <button onClick={() => setCibilScore(null)} className="mt-4 text-blue-500">
              Check Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
