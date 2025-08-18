import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import Dot from "../assets/images/Dot.png"

const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    designation: "",
    organization: "",
    contribution: "",
    portfolio: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.contribution)
      newErrors.contribution = "Contribution is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        designation: "",
        organization: "",
        contribution: "",
        portfolio: "",
      });
      setErrors({});
    }, 1500);
  };

  return (
    <div>
      <Header />
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
          {/* Heading */}
          <div className="mb-6 text-center">
            <motion.h1
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Contribute to AwaazNet
            </motion.h1>
            <motion.p
              className="text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Let’s Build the Future Together
            </motion.p>
          </div>

          {/* Form Card */}
          <motion.div
            className="bg-black border-2 border-white p-8 rounded-lg shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <AnimatePresence>
              {isSuccess ? (
                <motion.div
                  key="success"
                  className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p>
                    Thanks for your contribution! We'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.15 } },
                  }}
                >
                  {/* Input Animations */}
                  {[
                    { id: "name", label: "Full Name", type: "text", required: true },
                    { id: "phone", label: "Phone Number", type: "tel", required: true },
                    { id: "email", label: "Email Address", type: "email", required: true },
                    { id: "designation", label: "Designation", type: "text" },
                    { id: "organization", label: "Organization", type: "text" },
                  ].map((field, i) => (
                    <motion.div
                      key={field.id}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <label
                        htmlFor={field.id}
                        className="block text-sm font-medium text-white mb-1"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        value={formData[field.id]}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md  focus:ring-primary focus:border-primary ${
                          errors[field.id] ? "border-red-500" : "border-gray-300"
                        }`}
                      />
                      {errors[field.id] && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors[field.id]}
                        </p>
                      )}
                    </motion.div>
                  ))}

                  {/* Contribution */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <label
                      htmlFor="contribution"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      What do you want to contribute?
                    </label>
                    <textarea
                      id="contribution"
                      name="contribution"
                      rows="3"
                      value={formData.contribution}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md  focus:ring-primary focus:border-primary ${
                        errors.contribution
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    ></textarea>
                    {errors.contribution && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.contribution}
                      </p>
                    )}
                  </motion.div>

                  {/* Portfolio */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <label
                      htmlFor="portfolio"
                      className="block text-sm font-medium text-white mb-1"
                    >
                      Your Portfolio or Social Media Links
                    </label>
                    <input
                      id="portfolio"
                      name="portfolio"
                      type="text"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md  focus:ring-primary focus:border-primary"
                    />
                  </motion.div>

                  {/* Submit */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gray-700 py-2 text-white px-4 rounded-md hover:bg-gray-500 transition duration-300 ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Contribution"}
                    </button>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </main>
      <Footer/>
    </div>
  );
};

export default CTA;
