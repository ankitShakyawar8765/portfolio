import { useEffect, useMemo, useState } from "react";
import Background from "../component/Background";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import avator from "../assets/avator.png";





const socials = [
  {Icon : FaXTwitter , label : "X" , href:"https://x.com/Guddu_shakyawar"},
  {Icon : FaLinkedin , label : "LinkedIn" , href:"https://www.linkedin.com/in/ankit-babu-guddu-b936a3326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
  {Icon : FaGithub , label : "GitHub" , href:"G"},
]


const glowVariants = {
  initial: {
    scale: 1,
    y: 0,
    filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
  },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 6px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: {
    scale: 0.95,
    y: 0,
    transition: { duration: 0.08 },
  },
};





export default function Home() {
  const roles = useMemo(
    () => [
      "Web Developer",
      "MERN Stack Developer",
      "Frontend Developer",
      "React Developer",
      "Software Developer",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(() => {
      // Typing
      if (!deleting && subIndex < current.length) {
        setSubIndex((v) => v + 1);
      }
      // Pause after typing
      else if (!deleting && subIndex === current.length) {
        setTimeout(() => setDeleting(true), 1200);
      }
      // Deleting
      else if (deleting && subIndex > 0) {
        setSubIndex((v) => v - 1);
      }
      // Move to next word
      else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((p) => (p + 1) % roles.length);
      }
    }, deleting ? 40 : 70);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section
      id="home"
      className="w-full h-screen relative bg-black overflow-hidden"
    >
      <Background />

      {/* Gradient Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left */}
        <div
          className="
            absolute top-0 left-0
            -translate-x-1/3 -translate-y-1/3
            w-[70vw] sm:w-[55vw] md:w-[40vw]
            h-[70vw] sm:h-[55vw] md:h-[40vw]
            max-w-[500px] max-h-[500px]
            rounded-full
            bg-linear-to-br from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
            opacity-30 sm:opacity-20 md:opacity-10
            blur-[110px] sm:blur-[140px] md:blur-[160px]
            animate-pulse
          "
        />

        {/* Bottom Right */}
        <div
          className="
            absolute bottom-0 right-0
            translate-x-1/3 translate-y-1/3
            w-[70vw] sm:w-[55vw] md:w-[40vw]
            h-[70vw] sm:h-[55vw] md:h-[40vw]
            max-w-500px max-h-500px
            rounded-full
            bg-linear-to-tl from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
            opacity-30 sm:opacity-20 md:opacity-10
            blur-[110px] sm:blur-[140px] md:blur-[160px]
            animate-pulse delay-500
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center h-full text-center lg:text-left">
          <div className="max-w-48rem mx-auto lg:mx-0">
            <motion.div
              className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
             
              <span> {roles[index].substring(0, subIndex)}</span>
               <span className="inline-block w-2px ml-1 bg-white animate-pulse align-middle" style={{height:"1em"}}></span>


            </motion.div>

            <motion.h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-liner-to-r from-[#1fd4ce] via-[#066950] to-[#4f498f] drop-shadow-lg"
            initial={{opacity:0 , y:40}}
            animate={{opacity:1 , y:0}}
            transition={{duration:1}}
            >
            Hello, I'm 
            <br />
            <span className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:whitespace-nowrap">
              Ankit Babu
            </span>
            </motion.h1>
            <motion.p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
           initial={{opacity:0 , y:40}}
            animate={{opacity:1 , y:0}}
            transition={{ delay:0.4 , duration:0.8}}
            >
              I turn complex ideas into seamless, high-impact web experience- building modern, scalable, and lighting-fast application that make a different.
            </motion.p>

           <motion.div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{ delay:0.8 , duration:0.8}}
>
  <a href="#projects"
    className="px-6 py-3 rounded-full font-medium text-lg text-white bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 transition-all text-center"
  >
    View my work
  </a>

  <a href=""
    download
    className="px-6 py-3 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all"
  >
    My Resume
  </a>
</motion.div>

           <div className="mt-10 flex gap-5 text-2xl md:text-3xl justify-center lg:justify-start">
  {socials.map(({ Icon, href, label }) => (
    <motion.a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      variants={glowVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      className="text-gray-300 hover:text-white"
    >
      <Icon />
    </motion.a>
  ))}
</div>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div
          className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            right: "10px" , width : "min(22w , 410px)" , height : "min(40vw , 760px)" , borderRadius : "50%",
            filter : "blur(38px)" , opacity: 0.32 ,
            background : "conic-gradient(from 0deg , #1cd8d2 , #00bf8f , #302b63 , #1cd8d2)"
          }}
          />
          <motion.img src={avator} alt="ankit"
          className="absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none"
          style={{
          right : "-30px" , width : "min(45vw , 780px)" , maxHeight : "90vh"
         }}
         initial={{opacity:0 , y: 40 , scale: 0.98}}
         animate={{opacity:1 , y:0 , scale: 1}}
         transition={{delay: 0.2 , duration:0.8}}
          />
        </div>





      </div>
    </section>
  );
} 