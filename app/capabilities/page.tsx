"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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
    <main className="w-full min-h-screen bg-white text-[#1A1A1A] overflow-hidden">
      
      {/* HERO SECTION - LUXURY DOCUMENTARY STYLE */}
      <section className="relative w-full min-h-[85vh] pt-40 pb-20 px-4 sm:px-6 lg:px-12 bg-white flex flex-col justify-center overflow-hidden border-b border-gray-100">
        
        {/* Background Ambient Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A227]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-100 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-[1600px] mx-auto w-full flex flex-col lg:flex-row justify-between gap-16 relative z-10">
          
          {/* Left Title */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <div className="inline-flex items-center space-x-2 text-sm font-semibold tracking-wider text-[#C9A227] uppercase mb-8">
              <span className="w-8 h-px bg-[#C9A227]" />
              <span>Core Competencies</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-medium tracking-tighter leading-[0.9] text-[#1A1A1A]">
              Technical<br/>
              <span className="italic font-serif text-[#C9A227]">Expertise.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-500 font-light tracking-wide mt-8 max-w-lg leading-relaxed">
              Seamless execution across the entire manufacturing ecosystem, engineered for the world's leading brands.
            </p>
          </motion.div>
          
          {/* Right Interactive List */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center mt-10 lg:mt-0">
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.4 } }
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
                      hidden: { opacity: 0, x: 20 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
                    }}
                    className="group flex items-center justify-between border-b border-gray-200 py-6 md:py-8 cursor-pointer relative overflow-hidden"
                  >
                    {/* Animated Underline */}
                    <div className="absolute bottom-0 left-0 h-[2px] bg-[#C9A227] w-0 group-hover:w-full transition-all duration-700 ease-[0.16,1,0.3,1] z-20" />
                    
                    {/* Subtle ambient glow behind the item on hover */}
                    <div className="absolute inset-0 bg-[#C9A227]/5 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-0" />
                    
                    <div className="flex items-center gap-4 md:gap-8 relative z-10">
                      <span className="text-sm md:text-base font-mono tracking-widest text-[#C9A227]">
                        {num}
                      </span>
                      <span className="text-2xl md:text-3xl font-medium tracking-tight text-gray-400 group-hover:text-[#1A1A1A] group-hover:translate-x-4 transition-all duration-500">
                        {title}
                      </span>
                    </div>

                    <div className="relative z-10 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#C9A227] group-hover:bg-[#C9A227] transition-colors duration-500 flex-shrink-0">
                       <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-all duration-500 -rotate-45 group-hover:rotate-0" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </section>

      {/* SECTION 1: Merchandising */}
      <section className="relative w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col space-y-6 order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-[#1A1A1A]">
              Streamlined Sourcing & <br /> Professional Merchandising
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              We handle every phase of the merchandising cycle to give you complete peace of mind. From transparent cost negotiation and bill-of-materials (BOM) management to material procurement and daily line tracking, our expert merchandisers keep your order on schedule and within budget.
            </p>
            
            <div className="flex flex-col space-y-4 pt-4">
              {['Transparent Cost Negotiation', 'BOM Management', 'Daily Line Tracking'].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-sm font-medium text-[#1A1A1A]">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A227]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative group order-1 lg:order-2"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[2rem] bg-gray-200 shadow-2xl">
              <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-500 group-hover:bg-transparent" />
              <Image 
                src="/merchandising.png" 
                alt="Professional Merchandising" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Floating Glass Stat */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-md border border-white/50 p-6 rounded-2xl shadow-xl z-20 hidden md:block"
            >
              <div className="text-3xl font-bold text-[#C9A227]">100%</div>
              <div className="text-sm font-medium text-gray-600 mt-1">Timeline Compliance</div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 2: Fabric Development */}
      <section className="relative w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
          
          {/* Overlapping Images */}
          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute top-0 left-0 w-[70%] h-[70%] rounded-[2rem] overflow-hidden shadow-2xl z-10 group"
            >
              <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-500 group-hover:bg-transparent" />
              <Image src="/process-sourcing.png" alt="Lab Dips" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 30vw" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="absolute bottom-0 right-0 w-[65%] h-[60%] rounded-[2rem] overflow-hidden shadow-2xl z-20 border-8 border-white group"
            >
              <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-500 group-hover:bg-transparent" />
              <Image src="/process-engineering.png" alt="GSM Control" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 30vw" />
            </motion.div>
          </div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-[#1A1A1A]">
              Technical Fabric <br /> Development
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-4">
              Our textile engineering background enables us to innovate and execute complex fabric requirements across Knit, Woven, and Sweater categories. We don't just source fabrics; we engineer them to exact specifications.
            </p>
            
            <div className="flex flex-col space-y-6">
              {[
                { title: 'Fabric Customization', desc: 'Precise yarn blending for optimal feel.' },
                { title: 'GSM & Shrinkage Control', desc: 'Ensuring structural integrity post-wash.' },
                { title: 'Lab Dips & Strike-Offs', desc: 'Perfect color matching under spectrophotometers.' }
              ].map((feature, i) => (
                <div key={i} className="flex flex-col p-5 bg-[#FAFAFA] rounded-2xl border border-gray-100 hover:border-[#C9A227]/30 transition-colors">
                  <h4 className="text-lg font-bold text-[#1A1A1A]">{feature.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* SECTION 3: Quality & Shipping */}
      <section className="relative w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-[#1A1A1A]">
              Rigorous Quality Assurance & Global Logistics
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                We provide absolute certainty regarding quality inspection. Our production mirrors the approved PP samples perfectly. Quality is integrated into every workflow stage with strict inline and final audits.
              </p>
              <p className="font-medium text-[#1A1A1A] mt-4">
                Proactive Communication is our standard. If an anomaly is detected, we resolve it immediately through collaborative engineering to ensure flawless goods.
              </p>
              <p className="mt-4">
                Our logistics team navigates all export documentation, customs compliance, and freight forwarding to ensure smooth, hassle-free delivery to any destination port globally.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col gap-6"
          >
            <div className="relative w-full aspect-video overflow-hidden rounded-[2rem] bg-gray-200 shadow-xl group">
              <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-500 group-hover:bg-transparent" />
              <Image src="/process-quality.png" alt="Quality Inspection" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="relative w-full aspect-video overflow-hidden rounded-[2rem] bg-gray-200 shadow-xl group">
              <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-500 group-hover:bg-transparent" />
              <Image src="/export-logistics.png" alt="Export Logistics" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* FINAL CTA - PREMIUM LUXURY */}
      <section className="relative w-full py-32 bg-[#0F172A] text-white px-4 text-center overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A227]/10 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto flex flex-col items-center relative z-10"
        >
          <h4 className="text-sm font-bold tracking-[0.3em] text-[#C9A227] mb-6 uppercase">Ready to Source?</h4>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10 text-white">
            Let's Discuss Your Next <br /> Manufacturing Project
          </h2>
          <Button 
            href="/contact" 
            className="h-16 px-12 text-sm font-bold tracking-[0.2em] bg-[#C9A227] text-white hover:bg-white hover:text-[#0F172A] hover:shadow-[0_0_40px_rgba(201,162,39,0.4)] transition-all duration-500 uppercase rounded-full"
          >
            Start a Conversation
          </Button>
        </motion.div>
      </section>

    </main>
  );
}
