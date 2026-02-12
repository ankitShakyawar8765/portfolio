import {FaJava , FaReact} from 'react-icons/fa';
import {SiNextdotjs, SiTypescript, SiTailwindcss, SiFastapi, SiPython, SiDocker, SiMongodb, SiAngular} from 'react-icons/si';
import {DiNodejsSmall} from 'react-icons/di';
import {motion, useMotionValue} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';


export default function Skills() {

  const skills = [

    { icon: <FaJava size={60} />, name: "Java" },
    { icon: <FaReact size={60} />, name: "React" },
    { icon: <SiNextdotjs  size={60} />, name: "Next.js" },
    { icon: <SiTypescript   size={60}/>, name: "TypeScript" },
    { icon: <SiTailwindcss  size={60} />, name: "Tailwind CSS" },
    { icon: <SiFastapi  size={60} />, name: "FastAPI" },
    { icon: <SiPython   size={60}/>, name: "Python" },
    { icon: <SiDocker  size={60} />, name: "Docker" },
    { icon: <DiNodejsSmall  size={60} />, name: "Node.js" },
    { icon: <SiMongodb  size={60} />, name: "MongoDB" },
    { icon: <SiAngular  size={60} />, name: "Angular" },
  ];
  const repeated = [...skills , ...skills]


  const [dir , setDir] = useState(-1);
  const [active , setActive] = useState(false);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const tuchy = useRef(null);
  const x= useMotionValue(0);


  useEffect(()=> {
    const el = sectionRef.current;
    if(!el) return;

    const io = new IntersectionObserver((
     [entry]) => {
      setActive(entry.isIntersecting && entry.intersectionRatio > 0.1);
     },
     {threshold : [0.1] } 
    )
    io.observe(el);
    return () => io.disconnect( );
  }, [])
  

 useEffect(() => {
  if (!active) return;

  const onWheel = (e) => {
    setDir(e.deltaY > 0 ? -1 : 1);
  };

  const onTouchStart = (e) => {
    touchy.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    if (touchy.current == null) return;
    const delta = e.touches[0].clientX - touchy.current;
    setDir(delta > 0 ? 1 : -1);
    touchy.current = e.touches[0].clientX;
  };

  window.addEventListener("wheel", onWheel, { passive: true });
  window.addEventListener("touchstart", onTouchStart, { passive: true });
  window.addEventListener("touchmove", onTouchMove, { passive: true });

  return () => {
    window.removeEventListener("wheel", onWheel);
    window.removeEventListener("touchstart", onTouchStart);
    window.removeEventListener("touchmove", onTouchMove);
  };
}, [active]);




  useEffect(() => {
    let id;
    let last = performance.now();
    const SPEED = 80;
    
    const tick = (now) => {
      const dt = (now -last)/1000;
      last = now;
      let next = x.get() + SPEED*dir*dt;
      const loop = trackRef.current?.scrollWidth/2 || 0; 

      if(loop){
        if(next <= -loop) next += loop;
        if (next >= 0) next -= loop;
      }
      x.set(next)
        id = requestAnimationFrame(tick)
    }
  
  id = requestAnimationFrame(tick)
  return () => cancelAnimationFrame(id);
  }, [dir ,x]);

  return(
    <section id="skills"

    ref={sectionRef}
     className="h-1/2 w-full pb-8 flex flex-col items-center justify-center relative bg-black text-white overflow-hidden">

      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-1/4 left-0 w-75 h-75 rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse
        '/>

        <div className='absolute bottom-1/4 right-0 w-[300px] h-75 rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px] animate-pulse delay-500
        '/>


      </div>

      <motion.h2 className='text-4xl mt-5 sm: text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] z-10'
      initial={{opacity:0 , y:-30}}
      whileInView={{opacity:1 , y:0}}
      transition={{duration:0.5 , delay:0.1}}
      >
        My Skills
        </motion.h2>

        <motion.p className='mt-2 mb-8 text-white/90 text-base sm:text-lg z-10'
        initial={{opacity:0 , y:-10}}
      whileInView={{opacity:1 , y:0}}
      transition={{duration:0.5 , delay:0.1}}
        >
          Modern Technologies & Tools
        </motion.p>

        <div className='relative w-full overflow-hidden'>
         <motion.div 
         ref={trackRef}
         className='flex gap-10 text-[#1cd8d2]'
         style={{x, whiteSpace: "nowrap" , willChange: "transform"}}
         >

          {repeated.map((s ,i) => (
           <div key={i} className='flex flex-col items-center gap-2 min-w-[120px]'
           aria-label = {s.name}
           title = {s.name}
           >

            <span className='hover:scale-125 transition-transform duration-300'>
              {s.icon}

            </span>
            <p className='text-sm'>
              {s.name}
            </p>
           </div>
          )
        )}

         </motion.div>
        </div>

    </section>
  )
}