'use client';

import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';
import { useState } from 'react';

const ContactUs = () => {
  const titleRef = useScrollReveal();
  const formRef = useScrollReveal();
  const infoRef = useScrollReveal();

  type FormDataType = {
    name: string;
    email: string;
    message: string;
  };

  // Define state with correct type
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          ref={titleRef}
          className="text-3xl text-black font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            className="bg-white rounded-lg shadow-md p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {(['name', 'email', 'message'] as (keyof FormDataType)[]).map((field, index) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * index }}
                >
                  <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  {field !== 'message' ? (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      value={formData[field]} // ✅ No TypeScript error
                      onChange={handleChange}
                      className="text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-lg"
                      required
                    />
                  ) : (
                    <textarea
                      id={field}
                      name={field}
                      value={formData[field]} // ✅ No TypeScript error
                      onChange={handleChange}
                      rows={4}
                      className="text-gray-600 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-lg"
                      required
                    />
                  )}
                </motion.div>
              ))}
              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            ref={infoRef}
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { title: 'Address', text: 'Lotlite Fintech Pvt Ltd. Office - 122,Gera Imperium, Opp- Wipro, Hinjewadi Phase 2, Rajiv Gandhi Infotech Park, Pune, Maharashtra 411057', icon: 'location' },
              { title: 'Email', text: 'contact@lotlitefintech.com', icon: 'mail' },
              { title: 'Phone', text: '+91 8805843309', icon: 'phone' }
            ].map(({ title, text, icon }, index) => (
              <motion.div
                key={title}
                className="flex items-start space-x-4 p-4 rounded-lg transition duration-300 hover:bg-blue-50 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <div className="text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {icon === 'location' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    )}
                    {icon === 'mail' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    )}
                    {icon === 'phone' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    )}
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
                  <p className="text-gray-600">{text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;