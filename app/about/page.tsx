"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import ManufacturingProcess from "@/components/ManufacturingProcess";

export default function AboutPage() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-start bg-white">
      
      {/* SECTION 1: HERO */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black text-white">
        {/* Background */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/about-hero.png"
            alt="Textile yarn knitting machine"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h4 className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-gray-300 mb-6">
              Excellence in Global Apparel Manufacturing
            </h4>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-tight mb-8">
              The TOTAL APPAREL Story
            </h1>
            <p className="text-lg md:text-xl font-light text-gray-200 leading-relaxed max-w-2xl">
              Operating from the heart of the global textile hub in Dhaka, Bangladesh, TOTAL APPAREL bridges the gap between creative fashion design and technical garment manufacturing. We bring together a specialized team of textile engineers and merchandising experts dedicated to supplying world-class Ready-Made Garments (RMG) to the international market. Our mission is to empower global fashion brands and retailers with seamless manufacturing solutions, transparent operations, and superior product execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: PRECISION, TRANSPARENCY */}
      <section className="w-full py-24 md:py-32 bg-white text-black px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 leading-snug">
              Precision, Transparency, and Timely Delivery
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
              At TOTAL APPAREL, we believe that exceptional garments begin with meticulous planning and technical precision. We go beyond traditional manufacturing by providing expert fabric selection, accurate GSM control, competitive costing, and dependable production timelines.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
              Our commitment to quality ensures that every shipment meets rigorous international standards, protecting your brand reputation at every step.
            </p>
          </motion.div>

          {/* Image Collage */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6 relative"
          >
            <div className="flex flex-col gap-4 md:gap-6 pt-12">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm bg-gray-100">
                <Image src="/process-engineering.png" alt="Fabric GSM testing" fill className="object-cover" />
              </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm bg-gray-100">
                <Image src="/process-sourcing.png" alt="Lab dip matching" fill className="object-cover" />
              </div>
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm bg-gray-100">
                <Image src="/process-quality.png" alt="Textile inspection" fill className="object-cover" />
              </div>
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* SECTION 3: MANUFACTURING PROCESS */}
      <div className="w-full bg-[#f8f8f8]">
        <ManufacturingProcess />
      </div>

      {/* SECTION 4: EXPERTISE & PARTNERS */}
      <section className="w-full py-24 md:py-32 bg-zinc-950 text-white px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Images */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm mb-8 z-10">
              <Image src="/professional-team.png" alt="Professional team image" fill className="object-cover" />
            </div>
            <div className="relative w-3/4 aspect-video overflow-hidden rounded-sm -mt-24 ml-auto border-4 border-zinc-950 z-20">
              <Image src="/merchandising.png" alt="Merchandising team in action" fill className="object-cover" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 leading-snug">
              Driven by Expertise, Trusted by Global Partners
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Our team consists of seasoned textile engineers, merchandising specialists, and quality control experts with decades of combined industry experience. We collaborate closely with international fashion brands, buying houses, and independent labels, acting as their reliable on-the-ground execution partner in Bangladesh.
            </p>
          </motion.div>
          
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full py-32 bg-white text-black px-4 text-center border-t border-gray-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
            Let's Build Your Next Collection
          </h2>
          <Button 
            href="/contact" 
            className="h-16 px-10 text-base font-semibold tracking-widest bg-black text-white hover:bg-gray-900"
          >
            WORK WITH OUR TEAM
          </Button>
        </motion.div>
      </section>

    </main>
  );
}
