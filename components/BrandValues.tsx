"use client";

import React from "react";
import { ShieldCheck, Truck, Sparkles, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function BrandValues() {
  const values = [
    {
      icon: <Sparkles className="w-6 h-6 text-black group-hover:text-rose-500 transition-colors" />,
      title: "Premium Blanks",
      desc: "Retail-ready quality with superior heavyweight fabrics."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-black group-hover:text-rose-500 transition-colors" />,
      title: "Quality Assured",
      desc: "Every garment undergoes strict 4-point inspection."
    },
    {
      icon: <Truck className="w-6 h-6 text-black group-hover:text-rose-500 transition-colors" />,
      title: "Fast Global Shipping",
      desc: "Expedited wholesale delivery across 50+ countries."
    },
    {
      icon: <Leaf className="w-6 h-6 text-black group-hover:text-rose-500 transition-colors" />,
      title: "Ethical Production",
      desc: "Sustainable sourcing and fair-trade manufacturing."
    }
  ];

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const brands = [
    { name: "VOGUE", class: "font-black tracking-tighter" },
    { name: "HYPEBEAST", class: "font-serif italic" },
    { name: "COMPLEX", class: "font-black tracking-widest uppercase" },
    { name: "HIGHSNOBIETY", class: "font-mono font-bold" },
    { name: "GQ", class: "font-black text-3xl tracking-tighter" },
  ];

  return (
    <section className="w-full bg-white py-24 border-b border-gray-100 overflow-hidden relative">
      
      {/* Trusted By Brands - Marquee */}
      <div className="mb-24 relative flex flex-col items-center">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-10 text-center">
          Trusted by modern streetwear brands worldwide
        </p>
        
        <div className="relative flex overflow-x-hidden w-full opacity-40 hover:opacity-100 transition-opacity duration-700">
          {/* Gradient Masks for fading edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Content */}
          <motion.div 
            className="flex whitespace-nowrap gap-24 items-center pr-24"
            animate={{ x: [0, -1035] }} // Adjust value based on content width to create infinite loop
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            }}
          >
            {[...brands, ...brands, ...brands].map((brand, idx) => (
              <span key={idx} className={`text-2xl text-black select-none ${brand.class}`}>
                {brand.name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Subtle Background Glows */}
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-rose-50 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gray-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        {/* Values Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
        >
          {values.map((val, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              className="flex flex-col items-center text-center group cursor-default p-10 rounded-3xl bg-white/60 backdrop-blur-md hover:bg-white shadow-[0_5px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-700 ease-out border border-gray-100 hover:border-gray-200 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Card Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rose-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-gray-100 group-hover:scale-110 group-hover:shadow-md transition-all duration-500 group-hover:rotate-3 relative z-10">
                {val.icon}
              </div>
              <h4 className="text-[13px] font-black uppercase tracking-[0.15em] mb-3 text-gray-900 relative z-10">{val.title}</h4>
              <p className="text-xs font-medium text-gray-500 leading-relaxed max-w-[200px] relative z-10">{val.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
