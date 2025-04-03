'use client';

import useScrollReveal from '@/hooks/useScrollReveal';

interface ProcessStepProps {
  title: string;
  description: string;
  stepNumber: number;
  delay?: string;
}

const ProcessStep = ({ title, description, stepNumber, delay = '0ms' }: ProcessStepProps) => {
  const stepRef = useScrollReveal({ threshold: 0.2 });

  return (
    <div
      ref={stepRef}
      className="flex flex-col items-center text-center"
      style={{ animationDelay: delay }}
    >
      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
        {stepNumber}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const DownArrow = () => (
  <div className="arrow-wrapper flex justify-center py-4">
    <svg className="w-6 h-6 text-blue-600 animate-bounce-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <section className="py-16 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-3xl font-bold text-gray-800 mb-12 text-center animate-fade-in"
        >
          How to apply?
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="process-step-wrapper">
                <ProcessStep
                  title={step.title}
                  description={step.description}
                  stepNumber={index + 1}
                  delay={`${(index + 1) * 200}ms`}
                />
                {index !== steps.length - 1 && <DownArrow />}
              </div>
            ))}
          </div>

          <div className="hidden md:flex justify-center">
            <img
              src="https://website-static.boldsign.com/2024/06/3c595204-how-boldsign-improves-the-loan-application-process-for-banks.webp"
              alt="Loan Application Process"
              className="w-full h-auto rounded-lg shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>

      <style>{`
        .process-step {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.5s ease-out;
        }
        .process-step.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .step-number::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          background: linear-gradient(45deg, #3B82F6, #60A5FA);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .process-step:hover .step-number::before {
          opacity: 1;
          transform: scale(1.1);
        }

        .process-step:hover {
          transform: translateY(-5px);
        }

        @keyframes stepEntrance {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }

        .animate-fade-in {
          opacity: 0;
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .arrow-wrapper {
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .arrow-wrapper:hover {
          opacity: 1;
          transform: scale(1.1);
        }

        .process-step-wrapper {
          transition: all 0.5s ease;
        }

        .process-step-wrapper:hover {
          transform: translateX(10px);
        }

        @media (prefers-reduced-motion: reduce) {
          .process-step,
          .animate-float,
          .animate-bounce-slow,
          .animate-fade-in {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ApplicationProcess;