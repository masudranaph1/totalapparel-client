"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    id: "bermuda",
    name: "Bermuda",
    image: "/bermuda-showcase.png"
  },
  {
    id: "maglieria",
    name: "Maglieria",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "pantaloni",
    name: "Pantaloni",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop"
  }
];

const imageVariants: Variants = {
  initial: { 
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", 
    scale: 1.1,
    filter: "blur(10px)"
  },
  animate: { 
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", 
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.7, 0, 0.2, 1] } 
  },
  exit: { 
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", 
    scale: 0.95,
    filter: "blur(5px)",
    transition: { duration: 0.8, ease: [0.7, 0, 0.2, 1] } 
  }
};

const CategoryShowcase = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden bg-[#0a0a0a] flex items-center justify-center">
      {/* Background Images with Cinematic Wipe */}
      <AnimatePresence mode="sync">
        <motion.div
          key={activeCategory.id}
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0"
        >
          <Image
            src={activeCategory.image}
            alt={activeCategory.name}
            fill
            className="object-cover object-top opacity-75"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Animated Floating Elements */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute bottom-12 left-12 hidden md:block"
      >
        <span className="text-white/50 text-xs font-bold tracking-[0.3em] uppercase">
          Esplora la collezione
        </span>
        <div className="w-12 h-[1px] bg-white/30 mt-4" />
      </motion.div>

      {/* Navigation Links */}
      <div className="relative z-10 flex flex-wrap justify-center items-center gap-12 md:gap-20 px-4 mt-20">
        {categories.map((category) => (
          <Link
            key={category.id}
            href="#"
            onMouseEnter={() => setActiveCategory(category)}
            className="relative group py-2"
          >
            <span className={`relative z-10 text-2xl md:text-4xl lg:text-[44px] font-medium transition-all duration-500 drop-shadow-2xl tracking-wide ${
              activeCategory.id === category.id
                ? "text-white"
                : "text-white/40 group-hover:text-white/70"
            }`}>
              {category.name}
            </span>

            {/* Unique Animated Underline Indicator */}
            {activeCategory.id === category.id && (
              <motion.div
                layoutId="active-nav-indicator"
                className="absolute -bottom-2 left-0 right-0 h-[2px] bg-white"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            
            {/* Subtle floating dot for active state */}
            {activeCategory.id === category.id && (
              <motion.div
                layoutId="active-dot-indicator"
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white hidden md:block"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryShowcase;
