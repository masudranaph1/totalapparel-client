"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Play, Pause, ShieldCheck, Globe, Truck, Award, Star, Zap } from "lucide-react";
import { Button } from "./ui/Button";

const VideoShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="w-full bg-brand-bg text-brand-text py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-brand-border overflow-hidden relative">
      {/* Background animated elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[50%] aspect-square rounded-full bg-gradient-to-tr from-brand-border/10 to-transparent blur-3xl"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] aspect-square rounded-full bg-gradient-to-bl from-brand-border/10 to-transparent blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center z-10">
        
        {/* Header section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mb-12 md:mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-medium tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-text to-brand-muted">
            Experience Our Quality & Precision
          </motion.h2>
          <motion.p variants={itemVariants} className="text-brand-muted text-lg md:text-xl font-light leading-relaxed">
            Take a look inside our manufacturing ecosystem—from raw yarn sourcing to final quality inspection.
          </motion.p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          style={{ y, opacity }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-video rounded-3xl overflow-hidden group cursor-pointer shadow-2xl bg-brand-border/30 mb-20 md:mb-32 border border-brand-border ring-1 ring-white/10"
          onClick={togglePlay}
        >
          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            playsInline
            loop
            muted
            poster="/video-showcase-poster.png"
          >
            <source src="/fashion.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay when paused */}
          <div 
            className={`absolute inset-0 bg-black/40 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px] ${
              isPlaying ? "opacity-0 group-hover:opacity-30 group-hover:backdrop-blur-sm" : "opacity-100"
            }`}
          >
            {/* Play/Pause Button */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`w-20 h-20 md:w-28 md:h-28 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${isPlaying ? 'scale-90 opacity-0 group-hover:opacity-100' : 'scale-100 opacity-100 hover:bg-white/20'}`}
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 md:w-12 md:h-12 text-white ml-0 drop-shadow-md" />
              ) : (
                <Play className="w-8 h-8 md:w-12 md:h-12 text-white ml-2 drop-shadow-md" />
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Trust Area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full flex flex-col items-center border-t border-brand-border pt-20 mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 w-full max-w-6xl">
            
            {/* Buyer Feature */}
            <motion.div variants={itemVariants} className="flex flex-col items-center group">
              <h4 className="text-sm tracking-[0.2em] uppercase text-brand-muted mb-8 font-semibold flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500" /> Trusted By Buyers
              </h4>
              <div className="flex gap-6 items-center">
                {[1, 2, 3].map((i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-brand-border/50 to-transparent border border-brand-border rounded-xl shadow-sm flex items-center justify-center transition-colors hover:border-brand-dark/30 hover:bg-brand-border/80"
                  >
                    <Award className="w-8 h-8 text-brand-muted group-hover:text-brand-dark transition-colors" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Compliance Feature */}
            <motion.div variants={itemVariants} className="flex flex-col items-center group">
              <h4 className="text-sm tracking-[0.2em] uppercase text-brand-muted mb-8 font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Global Compliance
              </h4>
              <div className="flex gap-6 items-center">
                {[1, 2, 3].map((i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-tr from-brand-border/50 to-transparent border border-brand-border rounded-full shadow-sm flex items-center justify-center transition-colors hover:border-brand-dark/30 hover:bg-brand-border/80"
                  >
                    <Globe className="w-8 h-8 text-brand-muted group-hover:text-brand-dark transition-colors" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Partner Feature */}
            <motion.div variants={itemVariants} className="flex flex-col items-center group">
              <h4 className="text-sm tracking-[0.2em] uppercase text-brand-muted mb-8 font-semibold flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-500" /> Supply Chain Partners
              </h4>
              <div className="flex gap-6 items-center">
                {[1, 2].map((i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 5, scale: 1.05 }}
                    className="w-24 h-16 md:w-32 md:h-20 bg-gradient-to-r from-brand-border/50 to-transparent border border-brand-border rounded-xl shadow-sm flex items-center justify-center transition-colors hover:border-brand-dark/30 hover:bg-brand-border/80"
                  >
                    <Truck className="w-8 h-8 text-brand-muted group-hover:text-brand-dark transition-colors" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          <motion.div 
            className="absolute inset-0 bg-brand-dark blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <Button 
            href="/capabilities" 
            variant="outline"
            className="relative border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-brand-bg h-14 md:h-16 px-10 md:px-12 tracking-wide font-semibold text-lg overflow-hidden transition-all duration-500 shadow-md hover:shadow-xl"
          >
            Explore Our Manufacturing Process
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default VideoShowcase;
