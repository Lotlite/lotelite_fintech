import { useScrollReveal } from '../hooks/useScrollReveal';

interface LoanCardProps {
  title: string;
  description: string;
  image: string;  
}

const LoanCard = ({ title, description, image }: LoanCardProps) => {
  const cardRef = useScrollReveal();
  const isPropertyLoan = title === "Property Loan"; // Check for Property Loan card

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
        isPropertyLoan ? "hover:opacity-50 hover:scale-95" : "hover:shadow-lg"
      }`}
    >
      {/* Loan Product Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover transition-transform duration-300" />

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href="#" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
          Learn More
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};


const LoanServices = () => {
  const titleRef = useScrollReveal();

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="text-3xl font-bold text-center mb-12">
          Our Loan Products
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Property Loan */}
          <LoanCard
            title="Property Loan"
            description="Finance your dream home with competitive interest rates"
            image="https://www.mahindrafinance.com/wp-content/uploads/2024/02/What-is-a-Home-Loan.jpg"  
          />

          {/* Loan Against Property */}
          <LoanCard
            title="Loan Against Property"
            description="Get the best value of your property with secured loans"
            image="https://images.moneycontrol.com/static-mcnews/2022/10/Home-Loan.png?impolicy=website&width=1600&height=900"
          />

          {/* Education Loan */}
          <LoanCard
            title="Education Loan"
            description="Invest in your future with flexible education financing"
            image="https://www.avanse.com/blogs/images/blog-18.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default LoanServices;


