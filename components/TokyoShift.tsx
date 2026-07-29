"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const TokyoShift = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="w-full bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          
          {/* Left Column: Image */}
          <div className="w-full md:w-1/2">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageVariants}
              className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden"
            >
              <Image 
                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1200&auto=format&fit=crop" 
                alt="Tokyo Shift Capsule Collection" 
                fill 
                className="object-cover object-center hover:scale-105 transition-transform duration-[2s] ease-out"
              />
            </motion.div>
          </div>

          {/* Right Column: Text */}
          <div className="w-full md:w-1/2 md:pr-12 lg:pr-24">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-[32px] md:text-[40px] lg:text-[48px] font-medium text-gray-900 leading-[1.1] tracking-tight mb-8"
              >
                MCS1987 | Built for now: <br className="hidden md:block" />
                Tokyo shift
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-[15px] md:text-base text-gray-800 leading-relaxed mb-12"
              >
                L'eredità del brand incontra l'energia dinamica di Tokyo. Scopri una Capsule Collection in edizione limitata che ridefinisce i canoni dell'utility wear maschile attraverso vestibilità rilassate, layering ricercati e tessuti selezionati.
              </motion.p>
              
              <motion.div variants={itemVariants}>
                <Link 
                  href="#" 
                  className="inline-block text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-900 border-b-[1.5px] border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
                >
                  SCOPRI LA CAPSULE
                </Link>
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TokyoShift;
