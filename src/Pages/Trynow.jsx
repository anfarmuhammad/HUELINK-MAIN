// File: TryNow.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Dot from '../assets/images/Dot.png';

const Trynow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          agreeToTerms: false,
        });
      }, 1500);
    }
  };

  // const faqData = [
  //   {
  //     question: "Is HuLink free to use?",
  //     answer: "Yes, creating an account and using HuLink to connect with your community is completely free."
  //   },
  //   {
  //     question: " Do I need to verify my email?",
  //     answer: "Yes, to ensure security and trust, we require all users to verify their email after signup."
  //   },
  //   {
  //     question: "Can I change my profile information later?",
  //     answer: "Absolutely! You can update your profile details anytime from your account settings."
  //   },
  //   {
  //     question: "What should I do if I forget my password?",
  //     answer: "You can reset your password using the 'Forgot Password' option on the login page."
  //   },
  //   {
  //     question: "How do I report inappropriate behavior?",
  //     answer: "We take safety seriously. Use the report button on profiles or contact our support team directly."
  //   }
  // ];

  const toggleAnswer = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />

      {/* Hero Section */}
      <main
        className="flex-grow flex items-center justify-center bg-black text-white py-12 px-4 bg-cover"
        style={{
          backgroundImage: `url(${Dot})`,
        }}
      >
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6 text-center">
            <motion.h1
              className="text-2xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Join HuLink
            </motion.h1>
            <motion.p
              className="text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Start connecting with your community today!
            </motion.p>
          </div>

          <motion.div
            className="bg-black border-2 border-white p-8 rounded-lg shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {isSuccess ? (
              <motion.div
                className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p>
                  Account created successfully! Please check your email to verify your account.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary ${errors.name ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </motion.div>

                {/* Email */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary ${errors.email ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </motion.div>

                {/* Password */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                  <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary ${errors.password ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                </motion.div>

                {/* Confirm Password */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mb-1">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-primary focus:border-primary ${errors.confirmPassword ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
                </motion.div>

                {/* Terms */}
                <motion.div className="flex items-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <div className="ml-3 text-sm">
                    <label htmlFor="agreeToTerms" className="font-medium text-white">
                      I agree to the{" "}
                      <Link to="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                    {errors.agreeToTerms && (
                      <p className="mt-1 text-sm text-red-600">{errors.agreeToTerms}</p>
                    )}
                  </div>
                </motion.div>

                {/* Submit */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-primary bg-gray-700 hover:bg-gray-500 py-2 text-white px-4 rounded-md hover:bg-primary-dark transition duration-300 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                  >
                    {isSubmitting ? "Creating Account..." : "Submit"}
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </motion.div>
      </main>

      {/* FAQ Section */}
      {/* <section className="bg-black text-white w-full py-12 px-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="border border-gray-700 p-4 rounded-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <button
                  onClick={() => toggleAnswer(index)}
                  className="text-sm text-primary hover:underline"
                >
                  {openIndex === index ? "Hide Answer" : "See Answer"}
                </button>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    className="mt-2 text-white"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {item.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Trynow;
