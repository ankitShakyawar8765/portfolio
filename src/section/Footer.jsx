import React from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaCoffee,
  FaCode,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaArrowUp,
  FaMapMarkerAlt,
  FaPhone,
  FaRocket
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
    { name: "Education", href: "#education" },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/ankit-babu-guddu-b936a3326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn",
      gradient: "from-[#0077b5] to-[#00a0dc]"
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/amit9950",
      label: "GitHub",
      gradient: "from-[#333] to-[#6e5494]"
    },
    {
      icon: <FaTwitter />,
      url: "https://x.com/Guddu_shakyawar",
      label: "Twitter",
      gradient: "from-[#1da1f2] to-[#1a91da]"
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/guddu_shakyawar?igsh=MXN4Z2pzM253cTVjdw==",
      label: "Instagram",
      gradient: "from-[#E4405F] to-[#C13584]"
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:laptopacer36652@gmail.com",
      label: "Email",
      gradient: "from-[#1cd8d2] to-[#00bf8f]"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Main gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #0a0a0f 0%, #0f172a 50%, #0a0a0f 100%)',
          }}
        />

        {/* Animated gradient mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(28, 216, 210, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(0, 191, 143, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(48, 43, 99, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 60% 20%, rgba(48, 43, 99, 0.1) 0%, transparent 50%)
              `,
              filter: 'blur(60px)',
            }}
          />
        </div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: i % 3 === 0 ? '#1cd8d2' : i % 3 === 1 ? '#00bf8f' : '#302b63',
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.03) 50px, rgba(255,255,255,0.03) 51px),
              repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.03) 50px, rgba(255,255,255,0.03) 51px)
            `,
          }} />
        </div>

        {/* Bottom glow effect */}
        <motion.div
          className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-[80vw] h-64 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0, 191, 143, 0.2) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        {/* Top section with logo and tagline */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            {/* Animated logo */}
            <motion.div
              className="relative"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #1cd8d2, #00bf8f, #302b63)',
                  boxShadow: '0 0 40px rgba(0, 191, 143, 0.3)',
                }}
              >
                <FaCode className="text-2xl" />
              </div>
              {/* Logo glow */}
              <div className="absolute -inset-4 rounded-full bg-linear-to-r from-[#1cd8d2] to-[#302b63] opacity-30 blur-xl" />
            </motion.div>

            <div className="text-left">
              <h2 className="text-3xl font-semibold bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(to right, #1cd8d2, #00bf8f)',
                }}
              >
                Ankit Babu
              </h2>
              <p className="text-gray-400">Full Stack Developer & Junior Penetration Tester</p>
            </div>
          </div>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Transforming ideas into exceptional digital experiences through code and creativity.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="w-2 h-6 rounded-full bg-linear-to-b from-[#1cd8d2] to-[#00bf8f]" />
              Get In Touch
            </h3>

            <div className="space-y-4">
              <a
                href="https://www.google.com/maps/place/Jalaun,+Uttar+Pradesh+285123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center 
    bg-linear-to-br from-[#1cd8d2]/20 to-[#00bf8f]/20 
    group-hover:from-[#1cd8d2]/30 group-hover:to-[#00bf8f]/30 transition-all">

                  <FaMapMarkerAlt className="text-[#00bf8f] text-lg" />
                </div>

                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="font-medium group-hover:text-[#00bf8f] transition-colors">
                    Jalaun, Uttar Pradesh, India
                  </p>
                </div>
              </a>

              <a
                href="mailto:ankitbabu@example.com?subject=Contact from Portfolio&body=Hello Ankit,"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center 
    bg-linear-to-br from-[#1cd8d2]/20 to-[#00bf8f]/20 
    group-hover:from-[#1cd8d2]/30 group-hover:to-[#00bf8f]/30 transition-all">

                  <FaEnvelope className="text-[#00bf8f] text-lg" />
                </div>

                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium group-hover:text-[#00bf8f] transition-colors">
                    ankitbabu@example.com
                  </p>
                </div>
              </a>


              <a
                href="tel:+91 8650711958"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center 
    bg-linear-to-br from-[#1cd8d2]/20 to-[#00bf8f]/20 
    group-hover:from-[#1cd8d2]/30 group-hover:to-[#00bf8f]/30 transition-all">

                  <FaPhone className="text-[#00bf8f] text-lg" />
                </div>

                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-medium group-hover:text-[#00bf8f] transition-colors">
                    +91 8650711958
                  </p>
                </div>
              </a>

            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="w-2 h-6 rounded-full bg-linear-to-b from-[#00bf8f] to-[#302b63]" />
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="group p-3 rounded-lg hover:bg-white/5 transition-all"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-[#1cd8d2] to-[#00bf8f] group-hover:scale-125 transition-transform" />
                    <span className="text-gray-300 group-hover:text-white group-hover:font-medium transition-all">
                      {link.name}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="w-2 h-6 rounded-full bg-linear-to-b from-[#302b63] to-[#1cd8d2]" />
              Expertise
            </h3>

            <div className="space-y-3">
              {[
                "Web Development",
                "Frontend Architecture",
                "React & Next.js",
                "UI/UX Design",
                "API Development",
                "Performance Tuning",
                "Security Testing",
                "Cloud Deployment",
                "Junior Penetration Tester",
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <FaRocket className="text-xs text-[#00bf8f] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-gray-400 text-sm group-hover:text-gray-300">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="w-2 h-6 rounded-full bg-linear-to-b from-[#1cd8d2] to-[#302b63]" />
              Connect With Me
            </h3>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${social.gradient} p-0.5`}>
                    <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center group-hover:bg-transparent transition-all duration-300">
                      <span className="text-lg">{social.icon}</span>
                    </div>
                  </div>
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Newsletter */}
            <div
              className="p-4 rounded-xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(28, 216, 210, 0.1), rgba(0, 191, 143, 0.05))",
                border: "1px solid rgba(0, 191, 143, 0.25)",
              }}
            >
              <p className="text-sm text-gray-300 mb-4">
                Subscribe for latest projects and tech insights
              </p>

              <a
                href="https://youtube.com/@polytechnicacademy99?si=0jpjHiXgOsuM8gZU"
                target="_blank"
                rel="noopener noreferrer"
                className="
      inline-flex items-center gap-2
      px-5 py-2.5
      rounded-lg
      bg-[#ff0000]
      text-white text-sm font-semibold
      border border-red-500
      shadow-[0_6px_16px_rgba(255,0,0,0.55)]
      hover:shadow-[0_10px_28px_rgba(255,0,0,0.8)]
      hover:bg-[#e60000]
      transition-all duration-300
    "
              >
                ▶ Subscribe on YouTube
              </a>
            </div>

          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px w-full mb-8"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(0, 191, 143, 0.3), transparent)',
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="text-gray-400 text-sm">
              © {currentYear} <span className="text-[#00bf8f] font-medium">Ankit Babu</span>. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
              <FaHeart className="text-red-500" />
              <span>Crafted with passion in India</span>
              <FaCoffee className="text-amber-600 ml-2" />
            </p>
          </motion.div>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((link, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-gray-500 hover:text-[#00bf8f] transition-colors relative group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#1cd8d2] to-[#00bf8f] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="group relative"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <div className="w-14 h-14 rounded-full bg-linear-to-br from-[#1cd8d2] to-[#302b63] p-0.5">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-transparent transition-all duration-300">
                <FaArrowUp className="text-lg group-hover:animate-bounce" />
              </div>
            </div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Back to top
            </div>
          </motion.button>
        </div>

        {/* Tech stack */}
        <motion.div
          className="text-center mt-8 pt-6 border-t border-gray-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-xs text-gray-500">
            Built with React • Tailwind CSS • Framer Motion • Vite
            <span className="mx-2">•</span>
            Hosted on Vercel
            <span className="mx-2">•</span>
            <span className="text-[#00bf8f]">Always Learning, Always Building</span>
          </p>
          <p className="mt-4 font-bold  text-white/80 font-sans"> If you want to contact me then either come to the message section and message me or else download my resume and mail it to me. I have not made my Gmail public due to security reasons....</p>
        </motion.div>
      </div>
      {/* Floating navigation dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        {['home', 'about', 'projects', 'contact', 'education'].map((section, index) => (
          <motion.a
            key={section}
            href={`#${section}`}
            className="block w-3 h-3 rounded-full my-4 opacity-50 hover:opacity-100 transition-opacity relative group"
            whileHover={{ scale: 1.5 }}
            style={{
              background: `hsl(${index * 90}, 100%, 50%)`,
            }}
          >
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {section.toUpperCase()}
            </div>
          </motion.a>
        ))}
      </div>


    </footer>
  );
}