import { useEffect, useMemo, useRef, useState } from "react";
import img1 from "../assets/img1.JPG";
import img2 from "../assets/img2.JPG";
import img3 from "../assets/img3.JPG";
import photo1 from "../assets/img1.JPG";
import photo2 from "../assets/photo2.PNG";
import photo3 from "../assets/photo3.png";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";

/* ---------- MOBILE HOOK ---------- */
const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mql = window.matchMedia(query);
    const handler = (e) => setIsMobile(e.matches);

    setIsMobile(mql.matches);
    mql.addEventListener("change", handler);

    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return isMobile;
};

/* ---------- PROJECTS ---------- */
export default function Projects() {
  const isMobile = useIsMobile();
  const scenRef = useRef(null);

  const projects = useMemo(
    () => [
      {
        title: "nk studio",
        link: "https://www.nk.studio/",
        bgColor: "#0d4d3d",
        image: isMobile ? photo1 : img1,
      },
      {
        title: "Gamily",
        link: "https://gamilyapp.com/",
        bgColor: "#3884d3",
        image: isMobile ? photo2 : img2,
      },
      {
        title: "Hungry Tiger",
        link: "https://www.eathungrytiger.com/",
        bgColor: "#dc9317",
        image: isMobile ? photo3 : img3,
      },
    ],
    [isMobile]
  );

  const { scrollYProgress } = useScroll({
    target: scenRef,
    offset: ["start start", "end end"],
  });

  const thresholds = projects.map((_, i) => (i + 1) / projects.length);
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = thresholds.findIndex((t) => v <= t);
    setActiveIndex(idx === -1 ? thresholds.length - 1 : idx);
  });

  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      ref={scenRef}
      className="relative text-white"
      style={{
        height: `${100 * projects.length}vh`,
        backgroundColor: activeProject.bgColor,
        transition: "background-color 400ms ease",
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        <h2
          className={`text-3xl font-semibold z-10 text-center ${
            isMobile ? "mt-1" : "mt-5"
          }`}
        >
          My Work
        </h2>

        <div
          className={`relative w-full flex-1 flex items-center justify-center ${
            isMobile ? "-mt-4" : ""
          }`}
        >
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                activeIndex === idx
                  ? "opacity-100 z-20"
                  : "opacity-0 z-0 sm:z-10"
              }`}
              style={{ width: "85%", maxWidth: "1200px" }}
            >
             <AnimatePresence mode="wait">
  {activeIndex === idx && (
    <motion.h3
      key={project.title}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`block text-center text-[clamp(1.4rem,4vw,3rem)] text-white/95 sm:absolute sm:-top-20 sm:left-[35%] lg:left-[-5%] italic font-semibold ${
        isMobile ? "-mt-24" : ""
      }`}
    >
      {project.title}
    </motion.h3>
  )}
</AnimatePresence>


            
              <div
                className={`relative w-full overflow-hidden bg-black/20 shadow-2xl
                md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] ${
                  isMobile ? "mb-6 rounded-lg" : "mb-10 sm:mb-12 rounded-xl"
                }
                h-[85vh] sm:h-[80vh] lg:h-[76vh]`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover drop-shadow-xl md:drop-shadow-2xl"
                  loading="lazy"
                />

                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg , rgba(0,0,0,0.12) 0% , rgba(0,0,0,0) 40%)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
       {/* VIEW PROJECT BUTTON – LOWER IN VIEWPORT */}
<div  className="absolute inset-x-0 flex justify-center bottom-12 sm:bottom-6 z-50">

  <a
  href={activeProject?.link}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-3 font-semibold rounded-lg 
             bg-white text-black hover:bg-gray-200 transition-all
             relative z-50 pointer-events-auto"
  aria-label={`View ${activeProject?.title}`}
>
  View Project
</a>

</div>

      </div>
    </section>
  );
}
