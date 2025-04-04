'use client';

import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Rajesh Sharma",
        role: "Business Owner",
        content: "The loan against property process was incredibly smooth. The team guided me through every step, and I received the funds within 48 hours. Highly recommended!",
        rating: 5,
        loanType: "Loan Against Property",
        bgColor: "bg-blue-500",
        cardBg: "bg-blue-900",
        textColor: "text-blue-50",
        roleColor: "text-blue-200"
    },
    {
        name: "Priya Patel",
        role: "Real Estate Investor",
        content: "I was impressed by the professional approach and competitive interest rates. The property loan helped me expand my real estate portfolio seamlessly.",
        rating: 5,
        loanType: "Property Loan",
        bgColor: "bg-purple-500",
        cardBg: "bg-purple-900",
        textColor: "text-purple-50",
        roleColor: "text-purple-200"
    },
    {
        name: "Amit Kumar",
        role: "Parent",
        content: "The education loan for my daughter's higher studies was approved quickly. The flexible repayment options and low interest rates made it an excellent choice.",
        rating: 5,
        loanType: "Education Loan",
        bgColor: "bg-indigo-500",
        cardBg: "bg-indigo-900",
        textColor: "text-indigo-50",
        roleColor: "text-indigo-200"
    },
    {
        name: "Neha Gupta",
        role: "Restaurant Owner",
        content: "The loan against property helped me expand my restaurant chain. The team was very supportive throughout the process, making it stress-free.",
        rating: 5,
        loanType: "Loan Against Property",
        bgColor: "bg-green-500",
        cardBg: "bg-green-900",
        textColor: "text-green-50",
        roleColor: "text-green-200"
    },
    {
        name: "Suresh Reddy",
        role: "IT Professional",
        content: "Got a property loan for my dream home. The competitive interest rates and quick processing made the experience exceptional.",
        rating: 5,
        loanType: "Property Loan",
        bgColor: "bg-rose-500",
        cardBg: "bg-rose-900",
        textColor: "text-rose-50",
        roleColor: "text-rose-200"
    },
    {
        name: "Meera Shah",
        role: "Student",
        content: "Thanks to the education loan, I could pursue my masters in data science. The process was straightforward and the team was very helpful.",
        rating: 5,
        loanType: "Education Loan",
        bgColor: "bg-cyan-500",
        cardBg: "bg-cyan-900",
        textColor: "text-cyan-50",
        roleColor: "text-cyan-200"
    }
];

const ProductReviews = () => {
    return (
        <section className="py-16 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-blue-50/50" />
            
            {/* Heading Section with Full-width Background */}
            <div className="w-full bg-gray-900/95 backdrop-blur-sm shadow-lg border-y border-gray-800 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center py-12 px-4 max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text relative">
                        Customer Success Stories
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-full"></div>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mt-6">
                        Discover how we've helped our customers achieve their financial goals through our tailored loan solutions.
                    </p>
                </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ 
                                scale: 1.02,
                                y: -5,
                                boxShadow: "0px 20px 40px rgba(0,0,0,0.4), 0px 10px 20px rgba(0,0,0,0.3)"
                            }}
                            className={`${testimonial.cardBg} backdrop-blur-sm p-6 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.2),0_0_6px_rgba(0,0,0,0.1)] border border-gray-800 transform hover:shadow-2xl transition-all duration-300 ease-out`}
                        >
                            <div className="flex items-center mb-4 relative">
                                <motion.div 
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-semibold ${testimonial.bgColor} shadow-lg`}
                                >
                                    {testimonial.name.charAt(0)}
                                </motion.div>
                                <div className="ml-4">
                                    <motion.h3 
                                        whileHover={{ x: 2 }}
                                        className={`font-semibold ${testimonial.textColor} text-lg`}
                                    >
                                        {testimonial.name}
                                    </motion.h3>
                                    <p className={`text-sm ${testimonial.roleColor}`}>{testimonial.role}</p>
                                </div>
                            </div>
                            
                            <div className="mb-4">
                                <div className="flex mb-2">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <motion.svg
                                            key={i}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                                            whileHover={{ scale: 1.2 }}
                                            className={`w-5 h-5 ${testimonial.roleColor}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </motion.svg>
                                    ))}
                                </div>
                            </div>

                            <motion.p 
                                whileHover={{ x: 2 }}
                                className={`${testimonial.textColor} mb-4 italic`}
                            >
                                "{testimonial.content}"
                            </motion.p>
                            
                            <div className="mt-4">
                                <motion.span 
                                    whileHover={{ y: -2, scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className={`inline-block px-4 py-1.5 ${testimonial.bgColor} ${testimonial.textColor} rounded-full text-sm font-medium shadow-lg`}
                                >
                                    {testimonial.loanType}
                                </motion.span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Decorative Elements */}
                <motion.div
                    className="absolute top-10 right-10 w-20 h-20 rounded-full bg-blue-200/20"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-purple-200/20"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>
        </section>
    );
};

export default ProductReviews; 