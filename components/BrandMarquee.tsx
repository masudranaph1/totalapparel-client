"use client";

import React from "react";
import { motion } from "framer-motion";

const brands = [
  { name: "Nike", url: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
  { name: "Adidas", url: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
  { name: "Puma", url: "https://upload.wikimedia.org/wikipedia/commons/8/88/Puma_Logo.svg" },
  { name: "Rolex", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Rolex_logo.svg" },
  { name: "Supreme", url: "https://upload.wikimedia.org/wikipedia/commons/2/28/Supreme_Logo.svg" },
  { name: "Levi's", url: "https://upload.wikimedia.org/wikipedia/commons/0/09/Levis_logo.svg" },
  { name: "H&M", url: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" },
  { name: "Prada", url: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Prada-Logo.svg" },
  { name: "Gucci", url: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Gucci_logo.svg" },
  { name: "Zara", url: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg" },
];

// Duplicate the brands array to create a seamless infinite loop
const duplicatedBrands = [...brands, ...brands, ...brands];

export default function BrandMarquee() {
  return (
    <section className="w-full bg-white border-b border-gray-100 overflow-hidden py-2 md:py-3">
      <div className="relative flex max-w-full overflow-hidden flex-nowrap group">
        
        {/* Left and Right Fade Overlays for a smooth entrance/exit effect */}
        <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex items-center gap-10 md:gap-14 whitespace-nowrap px-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            ease: "linear",
            duration: 30, // Adjust speed here
            repeat: Infinity,
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center shrink-0"
              title={brand.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.url}
                alt={brand.name}
                className="w-6 h-6 md:w-7 md:h-7 object-contain filter grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
