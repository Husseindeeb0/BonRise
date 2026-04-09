import React from "react";
import { motion } from "framer-motion";

const Loader: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-primary overflow-hidden"
    >
      {/* Background ambient effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-secondary/10 blur-[120px] rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-accent-1/5 blur-[100px] rounded-full animate-pulse"></div>

      <div className="relative flex flex-col items-center">
        {/* Animated Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-12"
        >
          {/* Pulsing rings */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 -m-4 border-2 border-secondary rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0, 0.2],
            }}
            transition={{
              duration: 2,
              delay: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 -m-8 border border-accent-1 rounded-full"
          />

          <img
            src="/logo.png"
            alt="BonRise"
            className="w-48 h-auto brightness-0 invert relative z-10"
          />
        </motion.div>

        {/* Loading Bar */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 w-1/2 bg-linear-to-r from-transparent via-secondary to-transparent"
          />
        </div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-[10px] font-black uppercase tracking-[0.4em] text-white/40"
        >
          Loading<span className="inline-flex w-8 text-left ml-2 animate-bounce">...</span>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
