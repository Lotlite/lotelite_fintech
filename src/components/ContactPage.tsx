'use client';

import useScrollReveal from '../hooks/useScrollReveal';
import ProductQueries from './ProductQueries';
import Image from 'next/image';
import React from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import ContactFooter from './ContactFooter';

const ContactCard = ({ 
  icon, 
  title, 
  contact, 
  description,
  isEmail = false,
  cardType = 'default' // 'email', 'phone', 'whatsapp'
}: { 
  icon: React.ReactNode; 
  title: string; 
  contact: string; 
  description: string;
  isEmail?: boolean;
  cardType?: string;
}) => {
  const cardRef = useScrollReveal();
  
  const getGradient = (type: string) => {
    switch(type) {
      case 'email':
        return 'linear-gradient(135deg, rgba(255,193,7,0.9) 0%, rgba(255,152,0,0.85) 100%)';
      case 'phone':
        return 'linear-gradient(135deg, rgba(255,107,107,0.9) 0%, rgba(255,75,75,0.85) 100%)';
      case 'whatsapp':
        return 'linear-gradient(135deg, rgba(37,211,102,0.9) 0%, rgba(18,140,126,0.85) 100%)';
      default:
        return 'none';
    }
  };

  const isSpecialCard = cardType !== 'default';
  
  return (
    <div 
      ref={cardRef}
      className={`contact-card rounded-xl p-8 shadow-lg transition-all duration-500 ease-out relative overflow-hidden group hover:scale-105 transform ${isSpecialCard ? 'bg-transparent' : 'bg-white'}`}
    >
      {isSpecialCard && (
        <div 
          className="absolute inset-0 rounded-xl"
          style={{
            background: getGradient(cardType)
          }}
        ></div>
      )}
      
      <div className={`relative flex flex-col items-center text-center ${isSpecialCard ? 'z-20' : 'z-10'}`}>
        <div className={`icon-wrapper w-16 h-16 mb-6 transform transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-3 relative ${isSpecialCard ? 'bg-white rounded-full p-2' : ''}`}>
          {/* Glowing effect behind icon */}
          <div className={`absolute inset-0 rounded-full filter blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${
            cardType === 'phone' ? 'bg-red-400' : 
            cardType === 'whatsapp' ? 'bg-green-400' : 
            cardType === 'email' ? 'bg-yellow-400' : 
            'bg-blue-400'
          }`}></div>
          {icon}
        </div>
        <div className="space-y-4">
          <div className={`h-1 w-12 mx-auto rounded-full transform transition-all duration-500 group-hover:w-24 ${isSpecialCard ? 'bg-white' : 'bg-blue-600'} ${isSpecialCard ? 'group-hover:bg-gradient-to-r from-white to-white/80' : 'group-hover:bg-gradient-to-r from-blue-600 to-blue-400'}`}></div>
          <h3 className={`text-xl font-bold transform transition-all duration-500 group-hover:scale-105 relative ${isSpecialCard ? 'text-white' : 'text-blue-600'}`}>
            <span className="relative z-10">{title}</span>
            <span className={`absolute inset-0 filter blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${isSpecialCard ? 'bg-white' : 'bg-blue-400'}`}></span>
          </h3>
          <p className={`text-xl font-semibold transform transition-all duration-500 group-hover:scale-105 ${isSpecialCard ? 'text-white' : 'text-blue-600'}`}>{contact}</p>
          <p className={`transition-all duration-500 font-medium ${isSpecialCard ? 'text-white/90 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-700'}`}>{description}</p>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const titleRef = useScrollReveal();

  return (
    <>
      <section className="min-h-screen relative overflow-hidden flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Content - Fixed at bottom */}
        <div className="mt-auto relative px-4 z-10">
          <div className="max-w-6.5xl mx-auto w-full pb-12">
            <h2 
              ref={titleRef}
              className="text-4xl font-bold text-center text-white mb-12 relative"
            >
              <span className="relative inline-block">
                Contact Us
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-white rounded-full"></div>
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Email Card */}
              <ContactCard
                icon={
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
                    <defs>
                      <linearGradient id="emailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#FFFFFF' }} />
                        <stop offset="100%" style={{ stopColor: '#F0F0F0' }} />
                      </linearGradient>
                      <filter id="shadow">
                        <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.3"/>
                      </filter>
                    </defs>
                    <circle cx="12" cy="12" r="10" fill="url(#emailGrad)" filter="url(#shadow)"/>
                    <path d="M6 8l6 5 6-5" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" fill="none"/>
                    <rect x="6" y="8" width="12" height="8" rx="1" stroke="#FFD700" strokeWidth="2" fill="none"/>
                  </svg>
                }
                title="Email:"
                contact="lotlite.properties@gmail.com"
                description="For assistance with loans, credit cards, or any general inquiries, feel free to contact our team. You can also reach us via email for quick support."
                cardType="email"
              />

              {/* Updated Toll Free Card */}
              <ContactCard
                icon={
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
                    <defs>
                      <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#FF6B6B' }} />
                        <stop offset="100%" style={{ stopColor: '#FF4B4B' }} />
                      </linearGradient>
                      <filter id="phoneShadow">
                        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.4"/>
                        <feGaussianBlur stdDeviation="0.5" result="blur"/>
                      </filter>
                    </defs>
                    <circle cx="12" cy="12" r="11" fill="url(#phoneGrad)" filter="url(#phoneShadow)"/>
                    <g transform="translate(7, 7) scale(0.45)">
                      <path d="M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2ZM17 19H7V5H17V19Z" 
                        fill="white" stroke="white" strokeWidth="0.5"/>
                      <circle cx="12" cy="18" r="1.5" fill="white"/>
                    </g>
                  </svg>
                }
                title="Toll Free:"
                contact="+918805843309"
                description="Our customer service team is here to assist you! Reach out to us Monday to Saturday, from 8:00 AM to 7:30 PM."
                cardType="phone"
              />

              {/* Updated WhatsApp Card */}
              <ContactCard
                icon={
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
                    <defs>
                      <linearGradient id="whatsappGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#25D366' }} />
                        <stop offset="100%" style={{ stopColor: '#128C7E' }} />
                      </linearGradient>
                      <filter id="whatsappShadow">
                        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.4"/>
                        <feGaussianBlur stdDeviation="0.5" result="blur"/>
                      </filter>
                    </defs>
                    <circle cx="12" cy="12" r="11" fill="url(#whatsappGrad)" filter="url(#whatsappShadow)"/>
                    <g transform="translate(6, 6) scale(0.5)">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" 
                        fill="white" fillOpacity="0.2"/>
                      <path d="M12 5C8.13 5 5 8.13 5 12C5 13.74 5.58 15.35 6.58 16.65L5 19L7.35 17.42C8.65 18.42 10.26 19 12 19C15.87 19 19 15.87 19 12C19 8.13 15.87 5 12 5ZM15.84 14.59C15.64 15.04 14.91 15.45 14.36 15.45C13.86 15.45 13.36 15.3 11.91 14.7C10.21 14 8.91 12.18 8.76 11.97C8.61 11.76 7.91 10.76 7.91 9.71C7.91 8.66 8.41 8.16 8.61 7.91C8.81 7.66 9.06 7.61 9.21 7.61H9.71C9.86 7.61 10.06 7.61 10.21 8.01C10.41 8.41 10.91 9.56 10.96 9.66C11.01 9.76 11.01 9.91 10.91 10.06C10.51 10.71 10.06 10.66 10.31 11.11C11.21 12.51 11.91 12.91 13.31 13.91C13.56 14.06 13.71 14.01 13.86 13.81C14.01 13.61 14.46 13.06 14.61 12.81C14.76 12.56 14.91 12.61 15.11 12.71C15.31 12.81 16.91 13.61 17.11 13.71C17.31 13.81 17.46 13.91 17.46 14.01C17.46 14.11 17.46 14.69 17.21 15.29C16.91 15.89 15.84 16.49 15.29 16.54C14.74 16.59 14.36 16.29 14.11 16.29L15.84 14.59Z" 
                        fill="white"/>
                    </g>
                  </svg>
                }
                title="WhatsApp:"
                contact="+919766499364"
                description="Our dedicated customer service team is always ready to assist you. For seamless support, you can also connect with us via WhatsApp, where our experts will promptly address your queries."
                cardType="whatsapp"
              />
            </div>
          </div>
        </div>

        {/* Floating Icons Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-full h-full animate-float">
            <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-yellow-400 rounded-full opacity-10"></div>
            <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-blue-400 rounded-full opacity-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-green-400 rounded-full opacity-10"></div>
          </div>
        </div>
      </section>

      {/* Product Queries Section */}
      <ProductQueries />

      {/* Footer */}
      <ContactFooter />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .contact-card {
          background: white;
          box-shadow: 
            0 10px 30px -5px rgba(0, 0, 0, 0.2),
            0 0 20px rgba(255, 255, 255, 0.1);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .contact-card:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 
            0 20px 40px -5px rgba(0, 0, 0, 0.3),
            0 0 30px rgba(255, 255, 255, 0.2);
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
            rgba(255, 255, 255, 0.3)
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
          .animate-float {
            animation: none;
          }
        }
      `}</style>
    </>
  );
};

export default ContactPage; 