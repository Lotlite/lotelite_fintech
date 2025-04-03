import useScrollReveal from '../hooks/useScrollReveal';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const QueryCard = ({
  icon,
  email,
  description,
  gradientFrom,
  gradientTo
}: {
  icon: React.ReactNode;
  email: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
}) => {
  const cardRef = useScrollReveal();

  return (
    <div
      ref={cardRef}
      className="contact-card bg-white rounded-xl p-6 shadow-lg transition-all duration-500 ease-out relative overflow-hidden group hover:scale-105 transform border border-gray-200 h-[170px] flex flex-col justify-between w-[350px]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/[0.04] to-purple-600/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative flex flex-col items-center text-center z-10">
        <div className="icon-wrapper w-12 h-12 mb-3 transform transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-3">
          {icon}
        </div>
        <div className="space-y-2">
          <div className="h-0.5 w-8 bg-blue-400 mx-auto rounded-full transform transition-all duration-500 group-hover:w-16 group-hover:bg-gradient-to-r from-blue-600 to-purple-600"></div>
          <a href={`mailto:${email}`} className="text-base font-bold text-blue-600 block hover:text-blue-700 transform transition-all duration-500 group-hover:scale-105">
            {email}
          </a>
          <p className="text-gray-700 text-xs transition-all duration-500 group-hover:text-gray-900 font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ProductQueries = () => {
  const titleRef = useScrollReveal();
  const mapRef = useScrollReveal();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Initialize video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <>
      <div className="relative py-12 px-4 bg-white min-h-[600px]">
        <div className="max-w-7xl mx-auto relative">
          <div className="relative mb-8 group text-center">
            <h2
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient-x relative inline-block"
            >
              Got any product related queries?
              {/* Animated underline */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-700 ease-in-out"></div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 filter blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
            </h2>
          </div>
          <p className="text-gray-700 mb-12 max-w-3xl text-lg md:text-xl font-medium text-center mx-auto">
            We have got dedicated service teams to help you with your queries. Just select a product and write to us. We usually respond within 48 hours.
          </p>

          <div className="flex flex-col md:flex-row gap-20 justify-center relative">
            {/* Left Side Section */}
            <div className="flex-1 flex justify-center">
              <div className="space-y-6">
                {/* Credit Report Query Card */}
                <QueryCard
                  icon={
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
                      <defs>
                        <linearGradient id="creditGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#4CAF50' }} />
                          <stop offset="100%" style={{ stopColor: '#2E7D32' }} />
                        </linearGradient>
                        <filter id="creditShadow">
                          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.4"/>
                          <feGaussianBlur stdDeviation="1" result="blur"/>
                          <feFlood floodColor="#4CAF50" floodOpacity="0.2"/>
                          <feComposite in2="blur" operator="in"/>
                          <feComposite in="SourceGraphic"/>
                        </filter>
                      </defs>
                      <circle cx="12" cy="12" r="11" fill="url(#creditGrad)" filter="url(#creditShadow)"/>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="white"/>
                    </svg>
                  }
                  email="lotlite.properties@gmail.com"
                  description="For any help / support about your Credit Report or Credit Profile"
                  gradientFrom="from-[#4CAF50]"
                  gradientTo="to-[#2E7D32]"
                />
                
                {/* Step Up Care Query Card */}
                <QueryCard
                  icon={
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
                      <defs>
                        <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#5C6BC0' }} />
                          <stop offset="100%" style={{ stopColor: '#3949AB' }} />
                        </linearGradient>
                        <filter id="cardShadow">
                          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.4"/>
                          <feGaussianBlur stdDeviation="1" result="blur"/>
                          <feFlood floodColor="#5C6BC0" floodOpacity="0.2"/>
                          <feComposite in2="blur" operator="in"/>
                          <feComposite in="SourceGraphic"/>
                        </filter>
                      </defs>
                      <circle cx="12" cy="12" r="11" fill="url(#cardGrad)" filter="url(#cardShadow)"/>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 11h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3H8c-.55 0-1-.45-1-1s.45-1 1-1h3V8c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z" fill="white"/>
                    </svg>
                  }
                  email="lotlite.properties@gmail.com"
                  description="For your step up card account and Fixed Deposit related queries"
                  gradientFrom="from-[#5C6BC0]"
                  gradientTo="to-[#3949AB]"
                />
              </div>
            </div>

            {/* Right Side Section */}
            <div className="flex-1">
              <div className="space-y-6">
                {/* Image Container */}
                <div className="relative w-[500px] h-[400px]">
                  <Image
                    src="/images/Contact-left1.jpg"
                    alt="Contact Support"
                    fill
                    className="rounded-xl shadow-lg object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Centered Cards Container */}
          <div className="flex flex-col items-center gap-6 mt-8">
            {/* First Row */}
            <div className="flex gap-6">
              {/* NPS Query Card */}
              <QueryCard
                icon={
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
                    <defs>
                      <linearGradient id="npsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#FF7043' }} />
                        <stop offset="100%" style={{ stopColor: '#E64A19' }} />
                      </linearGradient>
                      <filter id="npsShadow">
                        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.4"/>
                        <feGaussianBlur stdDeviation="1" result="blur"/>
                        <feFlood floodColor="#FF7043" floodOpacity="0.2"/>
                        <feComposite in2="blur" operator="in"/>
                        <feComposite in="SourceGraphic"/>
                      </filter>
                    </defs>
                    <circle cx="12" cy="12" r="11" fill="url(#npsGrad)" filter="url(#npsShadow)"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" fill="white"/>
                  </svg>
                }
                email="lotlite.properties@gmail.com"
                description="For help related to your NPS account or investments"
                gradientFrom="from-[#FF7043]"
                gradientTo="to-[#E64A19]"
              />

              {/* Mutual Funds Query Card */}
              <QueryCard
                icon={
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
                    <defs>
                      <linearGradient id="mutualGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#FFA726' }} />
                        <stop offset="100%" style={{ stopColor: '#F57C00' }} />
                      </linearGradient>
                      <filter id="mutualShadow">
                        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.4"/>
                        <feGaussianBlur stdDeviation="1" result="blur"/>
                        <feFlood floodColor="#FFA726" floodOpacity="0.2"/>
                        <feComposite in2="blur" operator="in"/>
                        <feComposite in="SourceGraphic"/>
                      </filter>
                    </defs>
                    <circle cx="12" cy="12" r="11" fill="url(#mutualGrad)" filter="url(#mutualShadow)"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" fill="white"/>
                  </svg>
                }
                email="lotlite.properties@gmail.com"
                description="For help with your Mutual Funds Account or your investments"
                gradientFrom="from-[#FFA726]"
                gradientTo="to-[#F57C00]"
              />

              {/* Additional Card 1 */}
              <QueryCard
                icon={
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
                    <defs>
                      <linearGradient id="additionalGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#26A69A' }} />
                        <stop offset="100%" style={{ stopColor: '#00796B' }} />
                      </linearGradient>
                      <filter id="additionalShadow1">
                        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.4"/>
                        <feGaussianBlur stdDeviation="1" result="blur"/>
                        <feFlood floodColor="#26A69A" floodOpacity="0.2"/>
                        <feComposite in2="blur" operator="in"/>
                        <feComposite in="SourceGraphic"/>
                      </filter>
                    </defs>
                    <circle cx="12" cy="12" r="11" fill="url(#additionalGrad1)" filter="url(#additionalShadow1)"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="white"/>
                  </svg>
                }
                email="lotlite.properties@gmail.com"
                description="For help with your Investment Portfolio and Advisory Services"
                gradientFrom="from-[#26A69A]"
                gradientTo="to-[#00796B]"
              />
            </div>

            {/* Second Row */}
            <div className="flex gap-6">
              {/* Additional Card 2 */}
              <QueryCard
                icon={
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
                    <defs>
                      <linearGradient id="additionalGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#7E57C2' }} />
                        <stop offset="100%" style={{ stopColor: '#512DA8' }} />
                      </linearGradient>
                      <filter id="additionalShadow2">
                        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.4"/>
                        <feGaussianBlur stdDeviation="1" result="blur"/>
                        <feFlood floodColor="#7E57C2" floodOpacity="0.2"/>
                        <feComposite in2="blur" operator="in"/>
                        <feComposite in="SourceGraphic"/>
                      </filter>
                    </defs>
                    <circle cx="12" cy="12" r="11" fill="url(#additionalGrad2)" filter="url(#additionalShadow2)"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="white"/>
                  </svg>
                }
                email="lotlite.properties@gmail.com"
                description="For assistance with Global Investment Opportunities"
                gradientFrom="from-[#7E57C2]"
                gradientTo="to-[#512DA8]"
              />

              {/* Additional Card 3 */}
              <QueryCard
                icon={
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
                    <defs>
                      <linearGradient id="additionalGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#EC407A' }} />
                        <stop offset="100%" style={{ stopColor: '#C2185B' }} />
                      </linearGradient>
                      <filter id="additionalShadow3">
                        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.4"/>
                        <feGaussianBlur stdDeviation="1" result="blur"/>
                        <feFlood floodColor="#EC407A" floodOpacity="0.2"/>
                        <feComposite in2="blur" operator="in"/>
                        <feComposite in="SourceGraphic"/>
                      </filter>
                    </defs>
                    <circle cx="12" cy="12" r="11" fill="url(#additionalGrad3)" filter="url(#additionalShadow3)"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="white"/>
                  </svg>
                }
                email="lotlite.properties@gmail.com"
                description="For Tax Planning and Investment Advisory"
                gradientFrom="from-[#EC407A]"
                gradientTo="to-[#C2185B]"
              />

              {/* Additional Card 4 */}
              <QueryCard
                icon={
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
                    <defs>
                      <linearGradient id="additionalGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#66BB6A' }} />
                        <stop offset="100%" style={{ stopColor: '#388E3C' }} />
                      </linearGradient>
                      <filter id="additionalShadow4">
                        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.4"/>
                        <feGaussianBlur stdDeviation="1" result="blur"/>
                        <feFlood floodColor="#66BB6A" floodOpacity="0.2"/>
                        <feComposite in2="blur" operator="in"/>
                        <feComposite in="SourceGraphic"/>
                      </filter>
                    </defs>
                    <circle cx="12" cy="12" r="11" fill="url(#additionalGrad4)" filter="url(#additionalShadow4)"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="white"/>
                  </svg>
                }
                email="lotlite.properties@gmail.com"
                description="For Retirement Planning and Pension Services"
                gradientFrom="from-[#66BB6A]"
                gradientTo="to-[#388E3C]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-12 bg-gradient-to-b from-white to-gray-50 w-full">
        <div 
          ref={mapRef}
          className="relative w-full overflow-hidden shadow-2xl transform-gpu hover:scale-[1.01] transition-transform duration-500"
        >
          {/* 3D Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-pink-500/20 transform-gpu blur-3xl opacity-30"></div>
          
          {/* Map Container */}
          <div className="relative bg-white overflow-hidden">
            <div className="w-full relative h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2547158278226!2d73.91419611127858!3d18.562551782436315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>

            {/* Location Info Overlay */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-2xl max-w-sm">
              <div className="flex items-center space-x-2 mb-2">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-800">Visit Us</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Phoenix Marketcity, Viman Nagar, Pune, Maharashtra 411014
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-gradient-x {
          animation: gradient-x 8s ease infinite;
        }

        .contact-card {
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .contact-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 35px -5px rgba(0, 0, 0, 0.1);
        }

        .contact-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 0.75rem;
          padding: 2px;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(59, 130, 246, 0.1)
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .contact-card:hover::before {
          opacity: 1;
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-card,
          .contact-card:hover,
          .contact-card::before,
          .icon-wrapper {
            transition: none;
            transform: none;
          }
        }
      `}</style>
    </>
  );
};

export default ProductQueries; 