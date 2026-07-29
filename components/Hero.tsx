"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Cinematic scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen min-h-[800px] overflow-hidden bg-brand-dark flex flex-col justify-center items-center"
    >
      {/* Background Video with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0 w-full h-full"
        style={{ y }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/total apparel.png"
          className="object-cover w-full h-full opacity-90 scale-105"
        >
          <source src="/fashion.mp4" type="video/mp4" />
        </video>
        
        {/* Softer Vignette & Gradients for better video visibility */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90 z-10 pointer-events-none"></div>
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 w-full max-w-[1400px] mx-auto px-6 lg:px-8 flex flex-col items-center text-center mt-20"
      >
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-xl rounded-full px-5 py-2 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse shadow-[0_0_10px_#B8A07A]"></span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">
            Total Apparel Manufacturing
          </span>
        </motion.div>

        {/* Massive US-Style Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="max-w-5xl"
        >
          <h1 className="text-white text-5xl sm:text-7xl lg:text-[7rem] font-medium leading-[0.95] tracking-tighter mb-8 drop-shadow-2xl">
            Engineered <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-brand-accent via-[#EADCB6] to-brand-white text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(184,160,122,0.3)]">For Global Scale.</span>
          </h1>
        </motion.div>

        {/* Sleek Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="text-brand-white/90 text-lg md:text-2xl font-light max-w-2xl mb-12 leading-relaxed tracking-wide drop-shadow-md"
        >
          Connecting the world's leading fashion brands with premium textile engineering and seamless production management.
        </motion.p>

        {/* Refined CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link 
              href="/contact" 
              className="flex items-center justify-center w-full sm:w-auto bg-brand-accent text-white h-14 px-10 text-[13px] font-bold uppercase tracking-widest transition-all rounded-full shadow-[0_0_40px_rgba(184,160,122,0.3)] hover:shadow-[0_0_60px_rgba(184,160,122,0.6)]"
            >
              Start Production
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link 
              href="/capabilities" 
              className="flex items-center justify-center w-full sm:w-auto border border-brand-border/40 bg-transparent text-white hover:bg-brand-bg hover:text-brand-text h-14 px-10 text-[13px] font-bold uppercase tracking-widest transition-colors rounded-full backdrop-blur-sm"
            >
              Explore Capabilities
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-[9px] font-bold text-brand-border uppercase tracking-[0.3em] mb-4">
          Scroll to explore
        </span>
        <motion.div 
          animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-brand-accent to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
