export default function LoanResult() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-3xl font-bold mb-6">Your Loan Offer</h2>
        <div className="bg-gray-100 p-6 rounded shadow w-80 text-center">
          <p><strong>Loan Amount:</strong> ₹5,00,000</p>
          <p><strong>Interest Rate:</strong> 10% per annum</p>
          <p><strong>EMI:</strong> ₹10,500/month</p>
          <p><strong>Duration:</strong> 5 Years</p>
        </div>
      </div>
    );
  }
  