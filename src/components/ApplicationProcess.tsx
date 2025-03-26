'use client';

import useScrollReveal from '@/hooks/useScrollReveal';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
}

const ProcessStep = ({ icon, title, description, stepNumber }: ProcessStepProps) => {
  const stepRef = useScrollReveal({ threshold: 0.2 });
  
  return (
    <div ref={stepRef} className="flex flex-col items-center space-y-2">
      {/* Number Badge */}
      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
        {stepNumber}
      </div>
      
      {/* Content */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-1 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const DownArrow = () => (
  <div className="flex justify-center">
    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
);

const ApplicationProcess = () => {
  const titleRef = useScrollReveal();

  const steps = [
    {
      title: "Fill Application",
      description: "Complete our simple online application form",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
          />
        </svg>
      )
    },
    {
      title: "Choose Offer",
      description: "Select from multiple loan offers",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
      )
    },
    {
      title: "Verify Documents",
      description: "Upload required documents securely",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" 
          />
        </svg>
      )
    },
    {
      title: "Get Approved",
      description: "Get approved within 24 hours",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="text-3xl font-bold text-gray-800 mb-12 text-center">
          How to apply?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index}>
                <ProcessStep
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  stepNumber={index + 1}
                />
                {index !== steps.length - 1 && <DownArrow />}
              </div>
            ))}
          </div>
          
          <div className="hidden md:flex justify-center">
            <img 
              src="https://website-static.boldsign.com/2024/06/3c595204-how-boldsign-improves-the-loan-application-process-for-banks.webp" 
              alt="Loan Application Process" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
