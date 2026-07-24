"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    id: 1,
    title: "Technical Outerwear",
    subtitle: "Engineered for extreme conditions. Crafted for the urban landscape.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1920&auto=format&fit=crop",
    link: "/collection",
  },
  {
    id: 2,
    title: "Urban Utility",
    subtitle: "Seamless transition from city streets to wild terrains.",
    image: "https://images.unsplash.com/photo-1520975954732-57dd22299614?q=80&w=1920&auto=format&fit=crop",
    link: "/collection",
  },
  {
    id: 3,
    title: "Expedition Series",
    subtitle: "Built to last a lifetime. Designed to make an impact.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1920&auto=format&fit=crop",
    link: "/collection",
  },
];

export default function FeaturedCollection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      // 3 items means each takes ~0.33 of the scroll progress
      if (latest < 0.33) setActiveIndex(0);
      else if (latest < 0.66) setActiveIndex(1);
      else setActiveIndex(2);
    });
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-black">
      {/* Sticky Background Image Container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-zinc-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={collections[activeIndex].image}
              alt={collections[activeIndex].title}
              fill
              className="object-cover opacity-70 mix-blend-luminosity"
              priority
            />
            {/* Cinematic dark gradients for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
          </motion.div>
        </AnimatePresence>

        {/* Static Section Header */}
        <div className="absolute top-32 left-6 md:left-20 z-20">
          <h3 className="text-rose-500 font-black tracking-[0.3em] uppercase text-xs md:text-sm mb-4 flex items-center">
            <span className="w-12 h-[2px] bg-rose-500 mr-4"></span>
            Masterpiece Selection
          </h3>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase drop-shadow-2xl">
            The Urban <br /> Edit.
          </h2>
        </div>
      </div>

      {/* Scrollable Overlay Cards */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full z-10 pointer-events-none">
        {collections.map((collection) => (
          <div key={collection.id} className="h-screen flex flex-col justify-center px-6 md:px-20 pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-20%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-neutral-900/60 backdrop-blur-xl p-10 md:p-14 border-l-[6px] border-rose-500 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative overflow-hidden group"
            >
              {/* Background glow effect on card */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <span className="text-white/10 text-8xl md:text-9xl font-black absolute -top-10 -right-4 -z-10 tracking-tighter">
                0{collection.id}
              </span>
              
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6 relative z-10 uppercase">
                {collection.title}
              </h2>
              <p className="text-gray-300 text-sm md:text-sm mb-12 leading-loose font-medium tracking-[0.1em] relative z-10 uppercase max-w-sm">
                {collection.subtitle}
              </p>

              <Link
                href={collection.link}
                className="relative z-10 inline-flex items-center justify-center px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-white overflow-hidden bg-rose-600 rounded hover:bg-white hover:text-black transition-all duration-300 shadow-2xl"
              >
                <span>Discover Details</span>
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
