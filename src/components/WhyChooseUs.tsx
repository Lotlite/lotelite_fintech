'use client';

import useScrollReveal from '@/hooks/useScrollReveal';
import { useState } from 'react';
import Image from 'next/image';

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
      className="feature-card flex flex-col items-center text-center p-6 rounded-xl bg-white/20 backdrop-blur-lg transition-all duration-700 ease-out relative"
      style={{ animationDelay: delay }}
    >
      <div className="icon-wrapper mb-4 p-3 rounded-lg bg-blue-50/90 transition-all duration-500">
        <div className="w-12 h-12">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white drop-shadow-lg">{title}</h3>
      <p className="text-sm text-white font-medium drop-shadow-md">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const titleRef = useScrollReveal();
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      title: "Quick Approval",
      description: "Get loan approval within 24 hours",
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="#E6F0FF"/>
          <circle cx="24" cy="24" r="16" fill="#3B82F6"/>
          <path d="M24 16V24L30 28" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="24" cy="24" r="2" fill="white"/>
        </svg>
      ),
      delay: "100ms"
    },
    {
      title: "Best Interest Rates",
      description: "Competitive rates from trusted lenders",
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="#E6F0FF"/>
          <circle cx="24" cy="24" r="16" fill="#3B82F6"/>
          <path d="M24 14V34" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <path d="M29 18H21C19.3431 18 18 19.3431 18 21C18 22.6569 19.3431 24 21 24H27C28.6569 24 30 25.3431 30 27C30 28.6569 28.6569 30 27 30H18" 
            stroke="white" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      delay: "200ms"
    },
    {
      title: "Digital Process",
      description: "100% paperless application process",
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="#E6F0FF"/>
          <rect x="14" y="14" width="20" height="20" rx="3" fill="#3B82F6"/>
          <path d="M19 24L24 29L29 24" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 19V29" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      delay: "300ms"
    },
    {
      title: "Expert Support",
      description: "24/7 customer support available",
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="#E6F0FF"/>
          <circle cx="24" cy="24" r="16" fill="#3B82F6"/>
          <path d="M18 22C18 22 20 26 24 26C28 26 30 22 30 22" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="24" cy="24" r="2" fill="white"/>
        </svg>
      ),
      delay: "400ms"
    },
    {
      title: "Dedicated Relationship Manager",
      description: "Personal assistance throughout your loan journey",
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="#E6F0FF"/>
          <circle cx="24" cy="24" r="16" fill="#3B82F6"/>
          <circle cx="24" cy="20" r="6" fill="white"/>
          <path d="M16 34C16 30.6863 19.5817 28 24 28C28.4183 28 32 30.6863 32 34" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      delay: "450ms"
    },
    {
      title: "Secure & Reliable",
      description: "Your data is encrypted and protected with top security measures.",
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="#E6F0FF"/>
          <path d="M16 22V18C16 14.6863 19.5817 12 24 12C28.4183 12 32 14.6863 32 18V22" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round"/>
          <rect x="14" y="22" width="20" height="16" rx="2" fill="#3B82F6"/>
          <path d="M24 28L24 32" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      delay: "500ms"
    },
    {
      title: "Easy Repayment Plans",
      description: "Multiple repayment options with flexible tenures.",
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="#E6F0FF"/>
          <circle cx="24" cy="24" r="16" fill="#3B82F6"/>
          <path d="M18 24H30" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <path d="M24 18V30" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          <path d="M20 20L28 28" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
      delay: "600ms"
    },
    {
      title: "Minimal Documentation",
      description: "Apply with just a few basic documents, no lengthy paperwork required.",
      icon: (
        <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="#E6F0FF"/>
          <rect x="16" y="12" width="16" height="24" rx="2" fill="#3B82F6"/>
          <path d="M20 18H28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 24H28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 30H24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      delay: "700ms"
    }
  ];

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 2 + features.length) % features.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 2) % features.length);
  };

  return (
    <section className="relative w-full h-[800px] overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <Image
          src="/images/Us.jpg"
          alt="Why Choose Us Background"
          fill
          priority
          className="object-cover object-center brightness-[1.02] contrast-[1.02]"
          sizes="100vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50"></div>
      </div>

      {/* Content Container with flex-col and justify-between */}
      <div className="relative h-full z-10 flex flex-col justify-between w-full px-4 overflow-hidden py-16">
        {/* Header Section */}
        <div className="text-center">
          <h2 
            ref={titleRef} 
            className="text-5xl font-bold text-white drop-shadow-md"
          >
            Why Choose Us
          </h2>
        </div>
        
        {/* Carousel Container - Moved to bottom */}
        <div className="w-full max-w-[900px] mx-auto overflow-hidden">
          <div className="flex justify-center items-center">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-blue-600/20 hover:bg-blue-600/30 transition-all duration-300 hover:scale-110 backdrop-blur-none shrink-0 z-10"
              aria-label="Previous slide"
              title="Previous slide"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex justify-center items-center gap-6 w-full max-w-[800px] mx-4 overflow-hidden">
              {features.slice(currentIndex, currentIndex + 2).map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  delay={feature.delay}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-blue-600/20 hover:bg-blue-600/30 transition-all duration-300 hover:scale-110 backdrop-blur-none shrink-0 z-10"
              aria-label="Next slide"
              title="Next slide"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center mt-8 gap-3">
            {Array.from({ length: Math.ceil(features.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 2)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index * 2 
                    ? 'bg-blue-500 w-8' 
                    : 'bg-blue-400/50 hover:bg-blue-400/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                title={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .feature-card {
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          animation: cardEntrance 0.8s cubic-bezier(0.2, 0.85, 0.4, 1.275) forwards;
          width: 380px;
          height: 220px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.4);
          flex-shrink: 0;
          margin: 0;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          box-shadow: 
            0 4px 24px -1px rgba(0, 0, 0, 0.1),
            0 0 0 1px rgba(255, 255, 255, 0.5) inset,
            0 0 0 1px rgba(23, 92, 230, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.2),
            rgba(37, 99, 235, 0.1),
            rgba(29, 78, 216, 0.05)
          );
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .feature-card::after {
          content: '';
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(255, 255, 255, 0) 60%
          );
          opacity: 0;
          transform: rotate(30deg);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }

        .feature-card .icon-wrapper {
          background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
          border-radius: 16px;
          padding: 1rem;
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          box-shadow: 
            0 8px 16px -4px rgba(59, 130, 246, 0.5),
            0 0 0 1px rgba(59, 130, 246, 0.1) inset;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature-card .icon-wrapper svg {
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature-card h3 {
          background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0.75rem 0;
          font-size: 1.25rem;
          font-weight: 700;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .feature-card p {
          color: #1E3A8A;
          line-height: 1.6;
          font-size: 0.875rem;
          text-align: center;
          margin: 0;
          max-width: 90%;
          position: relative;
          z-index: 1;
          transition: color 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 
            0 20px 40px -5px rgba(59, 130, 246, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.6) inset,
            0 0 0 1px rgba(23, 92, 230, 0.2);
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-card:hover::after {
          opacity: 0.8;
          transform: rotate(0deg) scale(1.5);
        }

        .feature-card:hover .icon-wrapper {
          transform: scale(1.1);
          box-shadow: 
            0 12px 24px -4px rgba(59, 130, 246, 0.6),
            0 0 0 2px rgba(59, 130, 246, 0.2) inset;
          background: linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%);
        }

        .feature-card:hover .icon-wrapper svg {
          transform: scale(1.1) rotate(8deg);
        }

        .feature-card:hover p {
          color: #1E40AF;
        }

        @keyframes cardEntrance {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.9);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @media (max-width: 1024px) {
          .feature-card {
            width: 340px;
            height: 200px;
          }
          .feature-card .icon-wrapper {
            width: 56px;
            height: 56px;
            padding: 0.875rem;
          }
          .feature-card h3 {
            font-size: 1.125rem;
          }
        }

        @media (max-width: 768px) {
          .feature-card {
            width: 300px;
            height: 190px;
          }
          .feature-card .icon-wrapper {
            width: 48px;
            height: 48px;
            padding: 0.75rem;
          }
          .feature-card p {
            font-size: 0.8125rem;
          }
        }

        @media (max-width: 640px) {
          .feature-card {
            width: 280px;
            height: 180px;
          }
          .feature-card .icon-wrapper {
            width: 44px;
            height: 44px;
            padding: 0.625rem;
          }
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

          .feature-card:hover .icon-wrapper svg {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;