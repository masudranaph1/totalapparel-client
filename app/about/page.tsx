"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import ManufacturingProcess from "@/components/ManufacturingProcess";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-start bg-white text-[#1A1A1A] overflow-hidden">
      
      {/* SECTION 1: HERO - BRIGHT THEME */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-white text-[#1A1A1A]">
        {/* Background */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/our-story-cover.png"
            alt="Premium Factory Manufacturing"
            fill
            className="object-cover"
            priority
          />
          {/* Bright gradient overlays to ensure text readability while keeping the image vibrant */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent w-full md:w-3/4"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent h-full"></div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 text-sm font-semibold tracking-wider text-[#C9A227] uppercase mb-6 bg-white/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-gray-100 shadow-sm">
              <span className="w-6 h-px bg-[#C9A227]" />
              <span>Global Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.9] mb-8 text-[#1A1A1A]">
              The TOTAL APPAREL <br/> 
              <span className="italic font-serif text-[#C9A227]">Story.</span>
            </h1>
            
            <p className="text-lg md:text-xl font-light text-gray-700 leading-relaxed max-w-2xl bg-white/40 backdrop-blur-md p-4 rounded-xl shadow-sm border border-white/50 -ml-4">
              Operating from the heart of the global textile hub in Dhaka, Bangladesh, TOTAL APPAREL bridges the gap between creative fashion design and technical garment manufacturing. We bring together a specialized team of textile engineers and merchandising experts dedicated to supplying world-class Ready-Made Garments (RMG) to the international market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: MISSION, PRECISION, TRANSPARENCY */}
      <section id="mission" className="relative w-full py-24 md:py-32 bg-[#FAFAFA] text-[#1A1A1A] px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-snug">
              Precision, Transparency, <br /> and Timely Delivery
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                At TOTAL APPAREL, we believe that exceptional garments begin with meticulous planning and technical precision. We go beyond traditional manufacturing by providing expert fabric selection—including premium cottons, specialized activewear blends, and eco-friendly organics. 
              </p>
              <p className="font-medium text-[#1A1A1A] mt-4">
                Our extensive product range covers T-Shirts, Hoodies, Sweatshirts, Knitwear, Woven, Outerwear, Denim, and Sweaters. We are relentlessly committed to executing the perfect product.
              </p>
              <p className="mt-4">
                Our commitment to quality ensures that every shipment meets rigorous international standards, protecting your brand reputation at every step.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-8">
              {['Premium Fabrics', 'Eco-Friendly Options', 'Rigorous QC', 'Global Shipping'].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-sm font-medium text-[#1A1A1A]">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A227]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Collage */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6 relative"
          >
            <div className="flex flex-col gap-4 md:gap-6 pt-12 relative group">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] bg-gray-200 shadow-xl border-4 border-white z-10">
                <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-500 group-hover:bg-transparent" />
                <Image src="/process-engineering.png" alt="Fabric GSM testing" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-6 group">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] bg-gray-200 shadow-xl border-4 border-white">
                <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-500 group-hover:bg-transparent" />
                <Image src="/process-sourcing.png" alt="Lab dip matching" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[2rem] bg-gray-200 shadow-xl border-4 border-white">
                <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-500 group-hover:bg-transparent" />
                <Image src="/process-quality.png" alt="Textile inspection" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* SECTION 3: MANUFACTURING PROCESS */}
      <div className="w-full bg-white border-y border-gray-100">
        <ManufacturingProcess />
      </div>

      {/* SECTION 4: ETHICAL MANUFACTURING, EXPERTISE & PARTNERS */}
      <section id="ethical" className="w-full py-24 md:py-32 bg-[#FAFAFA] text-[#1A1A1A] px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Images */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[2rem] mb-8 shadow-2xl z-10 group">
              <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-500 group-hover:bg-transparent" />
              <Image src="/professional-team.png" alt="Professional team image" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="relative w-3/4 aspect-video overflow-hidden rounded-[2rem] -mt-24 ml-auto border-8 border-[#FAFAFA] shadow-2xl z-20 group">
              <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-500 group-hover:bg-transparent" />
              <Image src="/merchandising.png" alt="Merchandising team in action" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-[#1A1A1A]">
              Driven by Expertise, Trusted by Global Partners
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              Our team consists of seasoned textile engineers, merchandising specialists, and quality control experts with decades of combined industry experience. 
            </p>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              We collaborate closely with international fashion brands, buying houses, and independent labels, acting as their highly reliable, on-the-ground execution partner in Bangladesh. Your design, perfectly engineered.
            </p>
          </motion.div>
          
        </div>
      </section>

      {/* FINAL CTA - PREMIUM LUXURY */}
      <section className="relative w-full py-40 bg-[#0F172A] text-white px-4 text-center overflow-hidden">
        
        {/* Glow */}
        <motion.div 
          animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9A227]/10 rounded-full blur-[120px] pointer-events-none z-0"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center relative z-10"
        >
          <h4 className="text-sm font-bold tracking-[0.3em] text-[#C9A227] mb-6 uppercase">Ready to Source?</h4>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-10 text-white">
            Let's Build Your Next <br /> <span className="italic font-serif text-[#C9A227]">Collection.</span>
          </h2>
          <Button 
            href="/contact" 
            className="h-16 px-12 font-bold tracking-[0.2em] uppercase text-sm bg-[#C9A227] text-white rounded-full hover:bg-white hover:text-[#0F172A] hover:shadow-[0_0_40px_rgba(201,162,39,0.4)] transition-all duration-500 shadow-2xl"
          >
            Work With Our Team
          </Button>
        </motion.div>
      </section>

    </main>
  );
}
