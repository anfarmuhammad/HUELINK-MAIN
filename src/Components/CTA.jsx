import React, { useState } from "react";
import Header from "./Header";

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
    if (!formData.contribution) newErrors.contribution = "Contribution is required.";
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
          backgroundImage: "url('https://framerusercontent.com/images/mn2zfZoubysqLkaubCf2KzJuyo.png')",
        }}
      >
        <div className="w-full max-w-md">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-white">Contribute to AwaazNet</h1>
            <p className="text-white">Let’s Build the Future Together</p>
          </div>

          <div className="bg-black border-2 border-white p-8 rounded-lg">
            {isSuccess ? (
              <div className="bg-green-100 border border-white-100 text-green-700 px-4 py-3 rounded mb-4">
                <p>Thanks for your contribution! We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md bg-gray-800 focus:ring-primary focus:border-primary ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md bg-gray-800 focus:ring-primary focus:border-primary ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md bg-gray-800 focus:ring-primary focus:border-primary ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                {/* Designation */}
                <div>
                  <label htmlFor="designation" className="block text-sm font-medium text-white mb-1">
                    Designation
                  </label>
                  <input
                    id="designation"
                    name="designation"
                    type="text"
                    value={formData.designation}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-800 focus:ring-primary focus:border-primary"
                  />
                </div>

                {/* Organization */}
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-white mb-1">
                    Organization
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-800 focus:ring-primary focus:border-primary"
                  />
                </div>

                {/* Contribution */}
                <div>
                  <label htmlFor="contribution" className="block text-sm font-medium text-white mb-1">
                    What do you want to contribute?
                  </label>
                  <textarea
                    id="contribution"
                    name="contribution"
                    rows="3"
                    value={formData.contribution}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md bg-gray-800 focus:ring-primary focus:border-primary ${
                      errors.contribution ? "border-red-500" : "border-gray-300"
                    }`}
                  ></textarea>
                  {errors.contribution && <p className="mt-1 text-sm text-red-600">{errors.contribution}</p>}
                </div>

                {/* Portfolio */}
                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium text-white mb-1">
                    Your Portfolio or Social Media Links
                  </label>
                  <input
                    id="portfolio"
                    name="portfolio"
                    type="text"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-800 focus:ring-primary focus:border-primary"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-blue-600 py-2 text-white px-4 rounded-md hover:bg-blue-700 transition duration-300 ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Contribution"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CTA;
