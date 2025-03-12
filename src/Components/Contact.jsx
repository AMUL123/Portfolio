import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaGoogle } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("❌ Please fill in all fields!");
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("❌ Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-950 text-white py-20 px-6" id="contact">
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-yellow-400"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-700"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full p-3 bg-gray-700 rounded-md outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 hover:ring hover:ring-yellow-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/80 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full p-3 bg-gray-700 rounded-md outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 hover:ring hover:ring-yellow-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message..."
                  rows="5"
                  className="w-full p-3 bg-gray-700 rounded-md outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 hover:ring hover:ring-yellow-300"
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3 rounded-md font-bold transition duration-300 ${
                  loading ? "bg-gray-600 cursor-not-allowed" : "bg-yellow-400 hover:bg-yellow-300 text-black"
                }`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-700 text-center"
          >
            <h3 className="text-2xl font-semibold mb-6">Connect with Me</h3>
            <p className="text-white/80 mb-6">
              I'm open to collaborations and discussions. Reach out to me on these platforms:
            </p>

            <div className="flex justify-center space-x-6">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="https://github.com/AMUL123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 text-3xl hover:text-yellow-300 transition"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2, rotate: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="https://www.linkedin.com/in/priyanshu-kumar-66028b229/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 text-3xl hover:text-yellow-300 transition"
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="mailto:amul12345amul1mail@example.com"
                className="text-yellow-400 text-3xl hover:text-yellow-300 transition"
              >
                <FaEnvelope />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2, rotate: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=amul12345amul1mail@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 text-3xl hover:text-yellow-300 transition"
              >
                <FaGoogle />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </section>
  );
};

export default Contact;
