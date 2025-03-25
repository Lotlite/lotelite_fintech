import { useScrollReveal } from '../hooks/useScrollReveal';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
}

const ProcessStep = ({ icon, title, description, stepNumber }: ProcessStepProps) => {
  const stepRef = useScrollReveal({ threshold: 0.2 });
  
  return (
    <div ref={stepRef} className="flex flex-col items-center text-center relative">
      {/* Step number badge */}
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
        {stepNumber}
      </div>
      
      {/* Icon */}
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
        {icon}
      </div>
      
      {/* Content */}
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const ApplicationProcess = () => {
  const titleRef = useScrollReveal();
  const lineRef = useScrollReveal({ threshold: 0.5 });

  const steps = [
    {
      title: "Fill Application",
      description: "Complete our simple online application form",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="text-3xl font-bold text-center mb-12">
          Simple Application Process
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connection lines */}
          <div 
            ref={lineRef}
            className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" 
          />
          
          {/* Process steps */}
          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <ProcessStep
                icon={step.icon}
                title={step.title}
                description={step.description}
                stepNumber={index + 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess; 