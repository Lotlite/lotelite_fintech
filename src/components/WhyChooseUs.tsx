import { useScrollReveal } from '../hooks/useScrollReveal';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  const cardRef = useScrollReveal();
  
  return (
    <div ref={cardRef} className="flex flex-col items-center text-center p-6">
      <div className="text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const titleRef = useScrollReveal();

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {/* Quick Approval */}
          <FeatureCard
            title="Quick Approval"
            description="Get loan approval within 24 hours"
            icon={
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            }
          />

          {/* Best Interest Rates */}
          <FeatureCard
            title="Best Interest Rates"
            description="Competitive rates from trusted lenders"
            icon={
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" 
                />
              </svg>
            }
          />

          {/* Digital Process */}
          <FeatureCard
            title="Digital Process"
            description="100% paperless application process"
            icon={
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
            }
          />

          {/* Expert Support */}
          <FeatureCard
            title="Expert Support"
            description="24/7 customer support available"
            icon={
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" 
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 