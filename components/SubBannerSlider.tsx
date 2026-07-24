"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1600&auto=format&fit=crop",
    align: "left", // Text alignment
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1600&auto=format&fit=crop",
    align: "center",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop",
    align: "right",
  }
];

export default function SubBannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white py-12 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Banner Container */}
        <div className="relative w-full h-[200px] md:h-[280px] rounded-2xl overflow-hidden bg-gray-100 shadow-sm group">
          
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slides[currentIndex].image}
                alt="End of Season Sale"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1400px) 100vw, 1400px"
                priority={currentIndex === 0}
              />
              
              {/* Optional Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
            </motion.div>
          </AnimatePresence>

          {/* Static Text Overlay (Matches user image exactly) */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center pointer-events-none">
            <div className="bg-black text-white px-2 py-0.5 text-[10px] md:text-[11px] font-bold uppercase tracking-widest mb-1 border-2 border-black">
              END OF SEASON
            </div>
            
            <h2 className="text-black text-6xl md:text-[100px] font-black leading-none tracking-tighter mb-1 md:mb-0">
              SALE
            </h2>
            
            <div className="flex items-center gap-2">
              <span className="flex flex-col text-[10px] md:text-xs font-black leading-none uppercase text-right">
                <span>Up</span>
                <span>To</span>
              </span>
              <h3 className="text-black text-4xl md:text-[50px] font-black leading-none tracking-tighter">
                70% OFF<span className="text-2xl md:text-3xl align-top">*</span>
              </h3>
            </div>
            
            <p className="text-black text-[8px] md:text-[9px] font-bold mt-2 md:mt-3 tracking-widest uppercase">
              *EXCLUDES SELECTED LINES
            </p>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-black scale-125" : "bg-black/30 hover:bg-black/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
