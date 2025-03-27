'use client';

import useScrollReveal from '@/hooks/useScrollReveal';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: string;
}

const FeatureCard = ({ title, description, icon, delay = '0ms' }: FeatureCardProps) => {
  const cardRef = useScrollReveal();
  
  return (
    <div 
      ref={cardRef} 
      className="feature-card flex flex-col items-center text-center p-6 rounded-xl bg-white transition-all duration-700 ease-out"
      style={{ animationDelay: delay }}
    >
      <div className="icon-wrapper mb-4 p-3 rounded-lg bg-blue-50 transition-all duration-500">
        <div className="w-12 h-12 relative z-10">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const titleRef = useScrollReveal();

  return (
    <section className="py-10 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 
          ref={titleRef} 
          className="text-3xl text-black font-bold text-center mb-10"
        >
          Why Choose Us
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {/* Quick Approval */}
          <FeatureCard
            title="Quick Approval"
            description="Get loan approval within 24 hours"
            delay="100ms"
            icon={
              <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" fill="#E6F0FF"/>
                <circle cx="24" cy="24" r="16" fill="#3B82F6"/>
                <path d="M24 16V24L30 28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="24" cy="24" r="2" fill="white"/>
              </svg>
            }
          />

          {/* Best Interest Rates */}
          <FeatureCard
            title="Best Interest Rates"
            description="Competitive rates from trusted lenders"
            delay="200ms"
            icon={
              <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" fill="#E6F0FF"/>
                <circle cx="24" cy="24" r="16" fill="#3B82F6"/>
                <path d="M24 14V34" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <path d="M29 18H21C19.3431 18 18 19.3431 18 21C18 22.6569 19.3431 24 21 24H27C28.6569 24 30 25.3431 30 27C30 28.6569 28.6569 30 27 30H18" 
                  stroke="white" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            }
          />

          {/* Digital Process */}
          <FeatureCard
            title="Digital Process"
            description="100% paperless application process"
            delay="300ms"
            icon={
              <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" fill="#E6F0FF"/>
                <rect x="14" y="14" width="20" height="20" rx="3" fill="#3B82F6"/>
                <path d="M19 24L24 29L29 24" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24 19V29" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            }
          />

          {/* Expert Support */}
          <FeatureCard
            title="Expert Support"
            description="24/7 customer support available"
            delay="400ms"
            icon={
              <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" fill="#E6F0FF"/>
                <circle cx="24" cy="24" r="16" fill="#3B82F6"/>
                <path d="M18 22C18 22 20 26 24 26C28 26 30 22 30 22" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="24" cy="24" r="2" fill="white"/>
              </svg>
            }
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Secure & Reliable */}
          <FeatureCard
            title="Secure & Reliable"
            description="Your data is encrypted and protected with top security measures."
            delay="500ms"
            icon={
              <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" fill="#E6F0FF"/>
                <path d="M16 22V18C16 14.6863 19.5817 12 24 12C28.4183 12 32 14.6863 32 18V22" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round"/>
                <rect x="14" y="22" width="20" height="16" rx="2" fill="#3B82F6"/>
                <path d="M24 28L24 32" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            }
          />

          {/* Easy Repayment Plans */}
          <FeatureCard
            title="Easy Repayment Plans"
            description="Multiple repayment options with flexible tenures."
            delay="600ms"
            icon={
              <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" fill="#E6F0FF"/>
                <circle cx="24" cy="24" r="16" fill="#3B82F6"/>
                <path d="M18 24H30" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <path d="M24 18V30" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <path d="M20 20L28 28" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            }
          />

          {/* Minimal Documentation */}
          <FeatureCard
            title="Minimal Documentation"
            description="Apply with just a few basic documents, no lengthy paperwork required."
            delay="700ms"
            icon={
              <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" fill="#E6F0FF"/>
                <rect x="16" y="12" width="16" height="24" rx="2" fill="#3B82F6"/>
                <path d="M20 18H28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M20 24H28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M20 30H24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            }
          />
        </div>
      </div>

      <style jsx global>{`
        .feature-card {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          animation: cardEntrance 0.8s cubic-bezier(0.2, 0.85, 0.4, 1.275) forwards;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .feature-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04);
          background: linear-gradient(145deg, #ffffff, #f8faff);
        }

        .feature-card:hover .icon-wrapper {
          transform: scale(1.1) rotate(5deg);
          background: linear-gradient(135deg, #EBF5FF 0%, #ffffff 100%);
          box-shadow: 0 8px 16px -4px rgba(59, 130, 246, 0.2);
        }

        @keyframes cardEntrance {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        .feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 0.75rem;
          padding: 2px;
          background: linear-gradient(
            45deg,
            transparent 0%,
            rgba(59, 130, 246, 0.1) 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          transition: all 0.7s ease;
        }

        .feature-card:hover::before {
          background: linear-gradient(
            45deg,
            rgba(59, 130, 246, 0.1) 0%,
            rgba(59, 130, 246, 0.2) 100%
          );
        }

        @media (prefers-reduced-motion: reduce) {
          .feature-card {
            animation: none;
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          
          .feature-card:hover {
            transform: none;
          }
          
          .feature-card:hover .icon-wrapper {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs; 