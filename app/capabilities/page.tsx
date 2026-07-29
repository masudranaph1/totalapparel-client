"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const categories = [
  "01 Apparel Sourcing",
  "02 Professional Merchandising",
  "03 Fabric Development",
  "04 Technical & Textile Engineering",
  "05 Quality Assurance",
  "06 Global Logistics & Shipping"
];

export default function CapabilitiesPage() {
  return (
    <main className="w-full min-h-screen bg-white text-black overflow-hidden">
      
      {/* HERO SECTION - REDESIGNED TO LIGHT THEME */}
      <section className="relative w-full min-h-[90vh] pt-40 pb-20 px-4 sm:px-6 lg:px-12 bg-[#F9F9F6] text-black flex flex-col justify-center overflow-hidden">
        
        {/* Background Ambient Animation */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none"
        />

        <div className="max-w-[1600px] mx-auto w-full flex flex-col lg:flex-row justify-between gap-16 relative z-10">
          
          {/* Left Title */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <div className="overflow-hidden mb-6">
               <motion.h1 
                 initial={{ y: "100%" }}
                 animate={{ y: 0 }}
                 transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-tighter leading-[0.9]"
               >
                 Technical<br/>
                 <span className="italic font-serif text-brand-accent">Expertise.</span>
               </motion.h1>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-xl md:text-3xl text-gray-500 font-light tracking-wide mt-4 max-w-lg leading-snug"
            >
              Seamless Execution across the entire manufacturing ecosystem.
            </motion.p>
          </motion.div>
          
          {/* Right Interactive List */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center mt-10 lg:mt-0">
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.6 } }
              }}
              initial="hidden"
              animate="show"
              className="flex flex-col border-t border-gray-200"
            >
              {categories.map((cat, idx) => {
                const num = cat.substring(0, 2);
                const title = cat.substring(3);
                return (
                  <motion.div 
                    key={idx} 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="group flex items-center justify-between border-b border-gray-200 py-6 md:py-8 cursor-pointer relative overflow-hidden"
                  >
                    {/* Animated Underline */}
                    <div className="absolute bottom-0 left-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-700 ease-[0.16,1,0.3,1] z-20" />
                    
                    {/* Subtle ambient glow behind the item on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-0 transition-all duration-1000 pointer-events-none z-0" />
                    
                    <div className="flex items-center gap-4 md:gap-6 relative z-10">
                      <span className="text-sm md:text-base font-mono tracking-widest text-brand-accent/60 group-hover:text-brand-accent transition-colors duration-300">
                        {num}
                      </span>
                      <span className="text-2xl md:text-4xl font-light tracking-wide text-gray-400 group-hover:text-black group-hover:translate-x-4 transition-all duration-500">
                        {title}
                      </span>
                    </div>

                    <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-black group-hover:bg-black transition-colors duration-500 flex-shrink-0">
                       <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white transition-all duration-500 -rotate-45 group-hover:rotate-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </section>

      {/* SECTION 1: Merchandising */}
      <section className="w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 leading-snug">
              Streamlined Sourcing and Professional Merchandising
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
              We handle every phase of the merchandising cycle to give you complete peace of mind. From transparent cost negotiation and bill-of-materials (BOM) management to material procurement and daily line tracking, our expert merchandisers keep your order on schedule and within budget.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm bg-gray-100 shadow-xl">
              <Image 
                src="/merchandising.png" 
                alt="Professional Merchandising" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Fabric Development */}
      <section className="w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 grid grid-cols-2 gap-4"
          >
            <div className="relative w-full aspect-square overflow-hidden rounded-sm bg-gray-200 group">
              <Image src="/process-sourcing.png" alt="Lab Dips" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="relative w-full aspect-square overflow-hidden rounded-sm bg-gray-200 group">
              <Image src="/process-engineering.png" alt="GSM Control" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 leading-snug">
              Technical Fabric Development & Quality Assurance
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light mb-10">
              Our textile engineering background enables us to innovate and execute complex fabric requirements across Knit, Woven, and Sweater categories.
            </p>
            
            <ul className="flex flex-col gap-4">
              {['Fabric Customization', 'GSM & Shrinkage Control', 'Lab Dips & Strike-Offs'].map((feature, i) => (
                <li key={i} className="flex items-center gap-4 text-lg font-medium text-black">
                  <div className="w-8 h-[1px] bg-black"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
          
        </div>
      </section>

      {/* SECTION 3: Quality & Shipping */}
      <section className="w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 leading-snug">
              Rigorous Quality Assurance & Global Shipping
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light mb-6">
              Quality is built into every stage of our workflow. We enforce strict inline inspections during cutting, sewing, and finishing, topped with a comprehensive final audit.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              Our logistics team handles all export documentation, customs compliance, and freight forwarding to ensure smooth, hassle-free delivery to your destination port.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col gap-6"
          >
            <div className="relative w-full aspect-video overflow-hidden rounded-sm bg-gray-100 group">
              <Image src="/process-quality.png" alt="Quality Inspection" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative w-full aspect-video overflow-hidden rounded-sm bg-gray-100 group">
              <Image src="/export-logistics.png" alt="Export Logistics" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full py-32 bg-black text-white px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <h4 className="text-sm font-mono tracking-widest text-zinc-500 mb-6 uppercase">Have a Product in Mind?</h4>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
            Let's Discuss Your Requirements
          </h2>
          <Button 
            href="/contact" 
            variant="outline"
            className="h-16 px-10 text-base font-semibold tracking-widest border-white text-white hover:bg-white hover:text-black uppercase"
          >
            Contact Us
          </Button>
        </motion.div>
      </section>

    </main>
  );
}
