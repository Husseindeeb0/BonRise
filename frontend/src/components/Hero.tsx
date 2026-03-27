import React from "react";
import { motion } from "framer-motion";
import HeroBackgroundAnimation from "./HeroBackgroundAnimation";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-primary"
    >
      {/* Background SVG Animation - The clear center stage */}
      <HeroBackgroundAnimation />

      {/* Subtle readablity overlay anchored to top and bottom edges */}
      <div className="absolute inset-0 bg-linear-to-b from-primary/60 via-transparent to-primary/60 pointer-events-none z-0"></div>

      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-6 py-24 flex flex-col justify-between items-center text-center">
        {/* TOP: Compact Header / Branding */}
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="flex flex-col items-center"
        >
          <div className="inline-flex items-center px-3 py-1 mb-4 text-[10px] font-black tracking-[0.3em] text-secondary uppercase bg-secondary/5 backdrop-blur-xl border border-secondary/20 rounded-full shadow-lg">
            <span className="flex h-1.5 w-1.5 rounded-full bg-secondary mr-2 animate-pulse"></span>
            Elevating Your Presence
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-white/90">
             Solving Problems with <br />
             <span className="text-secondary">Digital Excellence</span>
          </h1>
        </motion.div>

        {/* BOTTOM: Essential Navigation / CTAs */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <a href="#services" className="btn-secondary px-8 py-3 text-sm font-bold min-w-[180px] shadow-2xl transition-all hover:scale-105 active:scale-95">
            Explore Solutions
          </a>
          <a href="#contact" className="px-8 py-3 text-sm font-bold min-w-[180px] text-white/80 border border-white/10 hover:bg-white/5 rounded-lg transition-all backdrop-blur-sm active:scale-95">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
