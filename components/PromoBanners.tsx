"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PromoBanners() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  // Text staggering variants for scroll reveal
  const textContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Continuous subtle movement ("nara chara") made ultra-smooth
  const floatImage = {
    animate: {
      scale: [1, 1.04, 1],
      transition: { duration: 20, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const floatText = {
    animate: {
      y: [0, -3, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <section className="w-full bg-white py-12 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-[1fr_1fr_auto] gap-4 md:gap-6 min-h-[800px]"
        >
          
          {/* Block 1: Flat 40% OFF */}
          <motion.div 
            variants={itemVariants}
            className="group relative overflow-hidden bg-[#e5dfd4] rounded-sm md:col-span-4 md:col-start-1 md:row-span-1 md:row-start-1 flex flex-col justify-center min-h-[300px]"
          >
            <motion.div variants={floatImage} animate="animate" className="absolute inset-0 z-0">
              <Image 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" 
                alt="Women Fashion" 
                fill 
                className="object-cover object-right transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#e5dfd4] via-[#e5dfd4]/80 to-transparent"></div>
            </motion.div>
            
            <div className="relative z-10 p-8 flex flex-col items-start h-full justify-center">
              <span className="text-[10px] font-bold tracking-widest text-[#8a7b63] uppercase mb-4">
                Shop & Save
              </span>
              <motion.div variants={floatText} animate="animate">
                <motion.h2 
                  variants={textContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-black italic tracking-tighter text-[#786348] leading-[1.1] uppercase"
                >
                  <motion.span variants={textItem} className="block motion-safe:group-hover:-translate-y-1 transition-transform duration-500 delay-75">Flat</motion.span>
                  <motion.span variants={textItem} className="block motion-safe:group-hover:-translate-y-1 transition-transform duration-500 delay-100">40% Off</motion.span>
                  <motion.span variants={textItem} className="block motion-safe:group-hover:-translate-y-1 transition-transform duration-500 delay-150">Everything</motion.span>
                </motion.h2>
              </motion.div>
            </div>
          </motion.div>

          {/* Block 2: Street Inspiration */}
          <motion.div 
            variants={itemVariants}
            className="group relative overflow-hidden bg-[#a6a1a7] rounded-sm md:col-span-4 md:col-start-1 md:row-span-1 md:row-start-2 flex flex-col justify-center min-h-[300px]"
          >
            <motion.div variants={floatImage} animate="animate" className="absolute inset-0 z-0">
              <Image 
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop" 
                alt="Men Fashion" 
                fill 
                className="object-cover object-left transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[#a6a1a7] via-[#a6a1a7]/80 to-transparent"></div>
            </motion.div>

            <div className="relative z-10 p-8 flex flex-col items-end text-right h-full justify-center">
              <span className="text-[10px] font-bold tracking-widest text-white uppercase mb-4">
                New Arrivals
              </span>
              <motion.div variants={floatText} animate="animate">
                <motion.h2 
                  variants={textContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-black italic tracking-tighter text-white leading-[1.1] uppercase"
                >
                  <motion.span variants={textItem} className="block motion-safe:group-hover:-translate-x-1 transition-transform duration-500 delay-75">Street</motion.span>
                  <motion.span variants={textItem} className="block motion-safe:group-hover:-translate-x-1 transition-transform duration-500 delay-100">Inspiration</motion.span>
                </motion.h2>
              </motion.div>
            </div>
          </motion.div>

          {/* Block 3: Smart Style (Skateboarder) */}
          <motion.div 
            variants={itemVariants}
            className="group relative overflow-hidden bg-[#111] rounded-sm md:col-span-4 md:col-start-5 md:row-span-2 md:row-start-1 flex flex-col min-h-[600px] cursor-pointer"
          >
            <motion.div variants={floatImage} animate="animate" className="absolute inset-0 z-0">
              <Image 
                src="https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?q=80&w=800&auto=format&fit=crop" 
                alt="Skateboarder" 
                fill 
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500"></div>
            </motion.div>

            <div className="relative z-10 p-10 flex flex-col items-center justify-end h-full text-center">
              <span className="text-[10px] font-bold tracking-[0.3em] text-white uppercase mb-4">
                Weekly Edit
              </span>
              <motion.div variants={floatText} animate="animate" className="w-full flex flex-col items-center">
                <motion.div 
                  variants={textContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-black px-6 py-1.5 mb-8 overflow-hidden inline-block"
                >
                  <motion.h2 
                    variants={textItem}
                    className="text-3xl md:text-4xl font-black italic tracking-tighter text-white uppercase motion-safe:group-hover:scale-105 transition-transform duration-500"
                  >
                    Smart Style
                  </motion.h2>
                </motion.div>
              </motion.div>
              <Link href="#" className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-white uppercase border border-white/40 px-8 py-3.5 hover:bg-white hover:text-black transition-colors duration-300">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Explore Now
              </Link>
            </div>
          </motion.div>

          {/* Block 4: Free Shipping Banner */}
          <motion.div 
            variants={itemVariants}
            className="group relative overflow-hidden bg-white rounded-sm md:col-span-8 md:col-start-1 md:row-span-1 md:row-start-3 border-[3px] border-black p-1 min-h-[140px] shadow-sm"
          >
            <div className="absolute inset-0 border border-black/10 -rotate-1 scale-[1.01] pointer-events-none"></div>
            
            <motion.div 
              variants={textContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 w-full h-full p-4"
            >
              <motion.div variants={floatText} animate="animate" className="text-center sm:text-right">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black italic tracking-tighter text-red-500 uppercase leading-[0.9]">
                  <motion.span variants={textItem} className="block">Free Shipping</motion.span>
                  <motion.span variants={textItem} className="block">Worldwide</motion.span>
                </h2>
              </motion.div>
              
              <div className="hidden sm:block w-[3px] h-16 bg-dotted-pattern border-l-4 border-dotted border-black"></div>
              
              <motion.div variants={floatText} animate="animate" className="flex flex-col gap-2 font-black italic text-red-500 uppercase tracking-wider text-sm sm:text-base">
                <motion.div variants={textItem} className="relative w-fit">
                  <span className="absolute inset-0 bg-[#fef08a] -skew-x-12 -z-10 group-hover:scale-x-110 transition-transform origin-left"></span>
                  On Orders $100+
                </motion.div>
                <motion.div variants={textItem} className="relative w-fit">
                  <span className="absolute inset-0 bg-[#fef08a] -skew-x-12 -z-10 group-hover:scale-x-110 transition-transform origin-left delay-75"></span>
                  Extra 15% Off On Every Item Over $200
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Block 5: Top Brands */}
          <motion.div 
            variants={itemVariants}
            className="group relative overflow-hidden bg-[#e4dfd7] rounded-sm md:col-span-4 md:col-start-9 md:row-span-3 md:row-start-1 flex flex-col items-center pt-20 cursor-pointer min-h-[600px]"
          >
            <div className="relative z-10 flex flex-col items-center text-center px-6">
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">
                Our Offers
              </span>
              <motion.div variants={floatText} animate="animate">
                <motion.h2 
                  variants={textContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl lg:text-5xl font-black italic tracking-tighter text-[#2a3042] uppercase mb-10 motion-safe:group-hover:-translate-y-2 transition-transform duration-500"
                >
                  <motion.span variants={textItem} className="block">Top Brands</motion.span>
                </motion.h2>
              </motion.div>
              <Link href="#" className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-black uppercase border border-black px-8 py-3.5 hover:bg-black hover:text-white transition-colors duration-300">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Shop Now
              </Link>
            </div>

            <motion.div variants={floatImage} animate="animate" className="absolute inset-x-0 bottom-0 h-2/3 z-0">
              <Image 
                src="https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=800&auto=format&fit=crop" 
                alt="Graffiti Hoodie" 
                fill 
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
              />
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
