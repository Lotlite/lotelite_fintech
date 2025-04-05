'use client';

import useScrollReveal from '../hooks/useScrollReveal';
import ProductQueries from './ProductQueries';
import Image from 'next/image';
import React from 'react';
import { FaEnvelope } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa6';
import ContactFooter from './ContactFooter';
import styles from './ContactPage.module.css';
import { motion, AnimatePresence } from 'framer-motion';

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
        return 'linear-gradient(135deg, rgba(255,193,7,0.8) 0%, rgba(255,152,0,0.75) 100%)';
      case 'phone':
        return 'linear-gradient(135deg, rgba(255,107,107,0.8) 0%, rgba(255,75,75,0.75) 100%)';
      case 'whatsapp':
        return 'linear-gradient(135deg, rgba(37,211,102,0.8) 0%, rgba(18,140,126,0.75) 100%)';
      default:
        return 'none';
    }
  };

  const isSpecialCard = cardType !== 'default';
  
  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        y: -2,
        transition: { duration: 0.2 }
      }}
      className={`${styles.contactCard} rounded-xl p-8 shadow-md transition-all duration-300 ease-out relative overflow-hidden group ${isSpecialCard ? 'bg-transparent' : 'bg-white'}`}
    >
      {isSpecialCard && (
        <motion.div 
          className="absolute inset-0 rounded-xl"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          style={{
            background: getGradient(cardType)
          }}
        ></motion.div>
      )}
      
      <div className={`relative flex flex-col items-center text-center ${isSpecialCard ? 'z-20' : 'z-10'}`}>
        <motion.div 
          className={`icon-wrapper w-16 h-16 mb-6 relative ${isSpecialCard ? 'bg-white rounded-full p-2' : ''}`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className={`absolute inset-0 rounded-full filter blur-xl opacity-15 ${
              cardType === 'phone' ? 'bg-red-400' : 
              cardType === 'whatsapp' ? 'bg-green-400' : 
              cardType === 'email' ? 'bg-yellow-400' : 
              'bg-blue-400'
            }`}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.2, 0.15]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {icon}
        </motion.div>
        <div className="space-y-4">
          <motion.div 
            className={`h-1 w-12 mx-auto rounded-full ${isSpecialCard ? 'bg-white' : 'bg-blue-600'}`}
            whileHover={{ width: 96 }}
            transition={{ duration: 0.3 }}
          />
          <motion.h3 
            className={`text-xl font-bold relative ${isSpecialCard ? 'text-white' : 'text-blue-600'}`}
            whileHover={{ scale: 1.02 }}
          >
            <span className="relative z-10">{title}</span>
            <motion.span 
              className={`absolute inset-0 filter blur-sm ${isSpecialCard ? 'bg-white' : 'bg-blue-400'}`}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.1 }}
            />
          </motion.h3>
          <motion.p 
            className={`text-xl font-semibold ${isSpecialCard ? 'text-white' : 'text-blue-600'}`}
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            {contact}
          </motion.p>
          <motion.p 
            className={`${isSpecialCard ? 'text-white/90' : 'text-gray-600'}`}
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

const ContactPage = () => {
  const titleRef = useScrollReveal();

  return (
    <>
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen relative overflow-hidden flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      >
        {/* Content */}
        <div className="mt-auto relative px-4 z-10">
          <div className="max-w-6.5xl mx-auto w-full pb-12">
            <motion.h2 
              ref={titleRef}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-center text-white mb-12 relative"
            >
              <motion.span 
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Contact Us
                <motion.div 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 w-24 bg-white rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
              </motion.span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Contact Cards */}
              <AnimatePresence>
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

                {/* Phone Card */}
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

                {/* WhatsApp Card */}
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
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Floating Icons Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className={`${styles.animateFloat} absolute w-full h-full`}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div 
              className="absolute top-1/4 left-1/4 w-8 h-8 bg-yellow-400 rounded-full opacity-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-1/3 right-1/3 w-6 h-6 bg-blue-400 rounded-full opacity-10"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-green-400 rounded-full opacity-10"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.1, 0.25, 0.1]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Product Queries Section */}
      <ProductQueries />

      {/* Footer */}
      <ContactFooter />
    </>
  );
};

export default ContactPage; 