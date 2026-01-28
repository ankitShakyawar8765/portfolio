import {motion} from "framer-motion"

import s1 from "../assets/s1.jpeg.jpeg"
import a2 from "../assets/a2.jpeg.jpeg"
import g1 from "../assets/g1.jpeg.jpeg"
import k1 from "../assets/k1.jpeg.jpeg"



const testimonials = [
  {
    name: "Som Sharma",
    role: "Software Engineer at HCL Technologies",
    review:
      "I am a Python developer who writes clean and efficient code. I enjoy solving problems using Python and continuously learning new technologies. 🚀",
    image: s1,
  },

  {
    name: "Amit Kumar",
    role: "Cyber Security+Mern Stack at PixelWorks",
    review:
      "I am a Cyber Security learner and MERN Stack Developer who builds secure full-stack web applications using modern technologies.",
    image: a2,
  },

  {
    name: "Gopal Prajapati",
    role: "Tech Manager at CodeEmpire",
    review:
      "I am a MERN Stack Developer who creates fast and modern full-stack web applications.",
    image: g1,
  },

  {
    name: "Karan Verma",
    role: "CTO at Innovate Labs",
    review:
      "I am a creative Frontend Developer skilled in building responsive, modern, and user-friendly web interfaces using HTML, CSS, JavaScript, and React. I focus on delivering smooth user experiences with clean and efficient code.",
    image: k1,
  },

];

export default function Testimonials(){
  return(
    <section id="testimonials" className="relative min-h-screen bg-black text-white flex flex-col items-center justify-between px-6 py-20">
<motion.h2 className="text-4xl font-bold mb-16"
initial={{opacity: 0 , y: -50}}
animate={{opacity:1 , y:0}}
transition={{duration: 0.6}}
>
What My Friends Say
</motion.h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl w-full">
  {testimonials.map((t,i) => (
    <motion.div
    key={t.name +1}
    initial={{opacity:0 , y:50}}
    whileInView={{opacity: 1 , y:0}}
    transition={{duration: 0.5 , delay : i*0.2}}
    viewport={{once:true}}
    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:-rotate-360 
    ">

<img src={t.image} alt={t.name} className="w-20 h-20 rounded-full border-2 border-white/40 mb-4 object-cover"
loading="lazy"
/>

<p className="text-gray-200 italic mb-4">
  {t.review}
</p>

<h3 className="text-lg font-semibold">
  {t.name}
</h3>

<p className="text-sm text-gray-400">
  {t.role}
</p>
    </motion.div>
  ))}

</div>
    </section>
  )
}