import {FormEvent, useState, ChangeEvent, useRef, useEffect } from "react";
import {motion, Variants} from "framer-motion";

interface FormData {
  selectedProduct: string;
  email: string;
  query: string;
}

const MAX_CHARS = 500;

const QueryForm = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [query]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log({ selectedProduct, email, query });
    setSelectedProduct('');
    setEmail('');
    setQuery('');
    setIsLoading(false);
  };

  // Animation variants
  const containerAnimation: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative"
      >
        <motion.div
          variants={containerAnimation}
          className="relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8"
        >
          <motion.h2
            variants={containerAnimation}
            className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
          >
            You can write to us...
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Product Selection */}
            <div className="space-y-2">
              <label
                className="block text-gray-400 text-lg font-medium"
                htmlFor="product"
              >
                Select Product
              </label>
              <select
                id="product"
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-3 text-gray-900
                  focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                required
              >
                <option value="">Select a product</option>
                <option value="property">Property Loan</option>
                <option value="loan">Loan against property</option>
                <option value="education">Education Loan</option>
              </select>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                className="block text-gray-400 text-lg font-medium"
                htmlFor="email"
              >
                Your Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-white/5 border border-gray-700 rounded-lg px-4 py-3 text-black
                  focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                required
              />
            </div>

            {/* Query Field with Character Counter */}
            <div className="space-y-2">
              <label 
                className="block text-gray-400 text-lg font-medium"
                htmlFor="query"
              >
                Describe your query
              </label>
              <div className="relative">
                <textarea
                  ref={textareaRef}
                  id="query"
                  value={query}
                  onChange={(e) => setQuery(e.target.value.slice(0, MAX_CHARS))}
                  placeholder="Please provide details about your query"
                  className="w-full min-h-[150px] bg-white/5 border border-gray-700 rounded-lg px-4 py-3 text-black
                    focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  required
                />
                <div className="absolute bottom-3 right-3 flex items-center">
                  <svg className="w-12 h-12" viewBox="0 0 36 36">
                    <motion.path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      strokeWidth="2"
                      stroke="rgba(100, 116, 139, 0.2)"
                      strokeLinecap="round"
                    />
                    <motion.path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      strokeWidth="2"
                      stroke="#3b82f6"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: query.length / MAX_CHARS }}
                    />
                  </svg>
                  <span className="text-sm text-gray-400 ml-2">{query.length}/{MAX_CHARS}</span>
                </div>
              </div>
            </div>

            {/* Submit Button with Loading State */}
            <motion.button
              type="submit"
              disabled={isLoading}
              className={`w-full relative py-3 px-6 rounded-lg text-white font-medium text-lg
                ${isLoading ? 'bg-blue-400' : 'bg-gradient-to-r from-blue-500 to-purple-600'}
                transition-all duration-300 overflow-hidden`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                initial={false}
                animate={{
                  x: isLoading ? '0%' : '-100%',
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0"
              />
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full mx-auto"
                />
              ) : (
                'Submit Query'
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default QueryForm;