'use client';

import useScrollReveal from '@/hooks/useScrollReveal';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  const cardRef = useScrollReveal();
  
  return (
    <div ref={cardRef} className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-blue-50">
      <div className="mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const titleRef = useScrollReveal();

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="text-4xl text-black font-bold text-center mb-16">
          Why Choose Us
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {/* Quick Approval */}
          <FeatureCard
            title="Quick Approval"
            description="Get loan approval within 24 hours"
            icon={
              <svg className="w-16 h-16" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" fill="#EBF5FF" stroke="#2563EB" strokeWidth="1.5"/>
                <circle cx="24" cy="24" r="16" fill="white" stroke="#2563EB" strokeWidth="1.5"/>
                <path d="M24 16V24L30 28" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 24L32 24" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="24" cy="24" r="2" fill="#2563EB"/>
              </svg>
            }
          />

          {/* Best Interest Rates */}
          <FeatureCard
            title="Best Interest Rates"
            description="Competitive rates from trusted lenders"
            icon={
              <svg className="w-16 h-16" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" fill="#EBF5FF" stroke="#2563EB" strokeWidth="1.5"/>
                <path d="M24 12V36" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
                <path d="M30 16H21C18.7909 16 17 17.7909 17 20C17 22.2091 18.7909 24 21 24H27C29.2091 24 31 25.7909 31 28C31 30.2091 29.2091 32 27 32H17" 
                  stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
                <path d="M20 14L28 34" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            }
          />

          {/* Digital Process */}
          <FeatureCard
            title="Digital Process"
            description="100% paperless application process"
            icon={
              <svg className="w-16 h-16" viewBox="0 0 48 48" fill="none">
                <rect x="8" y="8" width="32" height="24" rx="3" fill="#EBF5FF" stroke="#2563EB" strokeWidth="1.5"/>
                <rect x="10" y="10" width="28" height="20" rx="2" fill="white" stroke="#2563EB" strokeWidth="1.5"/>
                <path d="M16 22L20 18M20 18L24 22M20 18V26" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M28 19H32" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
                <path d="M28 23H32" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
                <path d="M28 27H32" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            }
          />

          {/* Expert Support */}
          <FeatureCard
            title="Expert Support"
            description="24/7 customer support available"
            icon={
              <svg className="w-16 h-16" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" fill="#EBF5FF" stroke="#2563EB" strokeWidth="1.5"/>
                <path d="M34 22C34 16.4772 29.5228 12 24 12C18.4772 12 14 16.4772 14 22V26C14 31.5228 18.4772 36 24 36C29.5228 36 34 31.5228 34 26V22Z" 
                  fill="white" stroke="#2563EB" strokeWidth="1.5"/>
                <path d="M14 24H34" stroke="#2563EB" strokeWidth="1.5"/>
                <circle cx="20" cy="20" r="2" fill="#2563EB"/>
                <circle cx="28" cy="20" r="2" fill="#2563EB"/>
                <path d="M20 28C20 28 21 30 24 30C27 30 28 28 28 28" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 