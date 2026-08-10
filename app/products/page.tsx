"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ProductGrid from "@/components/ProductGrid";

export default function ProductsPage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <main className="w-full min-h-screen bg-[#FAFAFA] relative selection:bg-[#C9A227] selection:text-white">
      
      {/* Cinematic Parallax Hero */}
      <section className="relative h-[65vh] md:h-[75vh] w-full flex items-center justify-center overflow-hidden bg-[#0F172A]">
        
        {/* Parallax Background */}
        <motion.div style={{ y }} className="absolute inset-0 z-0 w-full h-[120%] -top-[10%]">
          <Image 
            src="/merchandising.png"
            alt="Product Catalog"
            fill
            className="object-cover object-center opacity-60 mix-blend-luminosity"
            priority
          />
          {/* Gradient Overlays for luxury feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/90 via-[#0F172A]/60 to-[#0F172A]" />
        </motion.div>
        
        {/* Hero Content */}
        <motion.div 
          style={{ opacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-20"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
            className="mb-8 px-8 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[10px] tracking-[0.4em] uppercase font-bold text-[#C9A227] shadow-lg"
          >
            Complete Catalog
          </motion.div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight text-white mb-6 drop-shadow-2xl">
            Our <span className="italic font-serif text-[#C9A227]">Products.</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-2xl font-light max-w-2xl mx-auto tracking-wide">
            Explore our comprehensive range of meticulously crafted garments and premium accessories.
          </p>
        </motion.div>
      </section>

      {/* Main Product Grid Container */}
      {/* The -mt-20 creates a beautiful overlapping effect with the hero section */}
      <section className="relative z-20 -mt-20 md:-mt-32 max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-8 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-white rounded-t-3xl md:rounded-[40px] shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100"
        >
          {/* We import the powerful ProductGrid component which already handles filtering, search, and display */}
          <ProductGrid />
        </motion.div>
      </section>

      {/* Ambient decorative elements */}
      <div className="fixed top-1/4 -left-64 w-[500px] h-[500px] bg-[#C9A227]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 -right-64 w-[500px] h-[500px] bg-[#0F172A]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

    </main>
  );
}
