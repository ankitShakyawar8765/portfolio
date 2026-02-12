import { useState } from "react";
import Background from "../component/Background";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Astra from "../assets/Astra.png";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

// Initialize EmailJS only if credentials are available
if (SERVICE_ID && PUBLIC_KEY) {
  emailjs.init(PUBLIC_KEY);
}

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    idea: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "budget" && value && !/^\d+$/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const required = ["name", "email", "service", "idea"];
    const newErrors = {};

    required.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = "Fill this field";
      }
    });

    if (formData.service !== "other" && !formData.budget.trim()) {
      newErrors.budget = "Fill this field";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Check if EmailJS credentials are configured
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      console.error("EmailJS credentials not configured");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...formData,
          form_name: formData.name,
          reply_to: formData.email,
        },
        PUBLIC_KEY
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        service: "",
        budget: "",
        idea: "",
      });

    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen relative bg-black overflow-hidden text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
    >
      <Background />

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-10">

        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={Astra}
            alt="Contact"
            className="w-72 md:w-140 rounded-2xl shadow-lg object-cover"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Right Side Form */}

        <motion.div
          className="w-full md:w-1/2 bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-3xl font-bold mb-6">
            Let's Work Together
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Name */}

            <div className="flex flex-col">
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className={`p-3 rounded-md bg-white/10 border ${
                  errors.name ? "border-red-500" : "border-gray-500"
                } text-white`}
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>

            {/* Email */}

            <div className="flex flex-col">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className={`p-3 rounded-md bg-white/10 border ${
                  errors.email ? "border-red-500" : "border-gray-500"
                } text-white`}
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>

            {/* Service */}

            <div className="flex flex-col">
              <label>Service Needed *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`p-3 rounded-md bg-white/10 border ${
                  errors.service ? "border-red-500" : "border-gray-500"
                } text-white`}
              >
                <option value="" disabled>Something in mind?</option>
                <option value="Web Development" className="text-black">Web Development</option>
                <option value="Mobile Application" className="text-black">Mobile Application</option>
                <option value="other" className="text-black">Others</option>
              </select>
              {errors.service && <p className="text-red-500 text-xs">{errors.service}</p>}
            </div>

            {/* Budget */}

            {formData.service && formData.service !== "other" && (
              <div className="flex flex-col">
                <label>Budget *</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Your Budget"
                  className={`p-3 rounded-md bg-white/10 border ${
                    errors.budget ? "border-red-500" : "border-gray-500"
                  } text-white`}
                />
                {errors.budget && <p className="text-red-500 text-xs">{errors.budget}</p>}
              </div>
            )}

            {/* Idea */}

            <div className="flex flex-col">
              <label>Explain Your Idea *</label>
              <textarea
                rows={5}
                name="idea"
                value={formData.idea}
                onChange={handleChange}
                placeholder="Enter Your Idea"
                className={`p-3 rounded-md bg-white/10 border ${
                  errors.idea ? "border-red-500" : "border-gray-500"
                } text-white`}
              />
              {errors.idea && <p className="text-red-500 text-xs">{errors.idea}</p>}
            </div>

            {/* STATUS MESSAGE */}

            {status && (
              <p
                className={`text-sm ${
                  status === "success"
                    ? "text-green-400"
                    : status === "error"
                    ? "text-red-400"
                    : "text-yellow-400"
                }`}
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                  ? "Message sent successfully ✅"
                  : "Something went wrong ❌"}
              </p>
            )}

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 py-3 rounded-md font-semibold"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>

          </form>
        </motion.div>
      </div>
    </section>
  );
}
