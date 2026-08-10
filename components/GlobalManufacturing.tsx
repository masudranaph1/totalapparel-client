'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe, FileText, CheckCircle, Ship } from 'lucide-react';
import Image from 'next/image';

const timeline = [
  {
    icon: <FileText className="w-5 h-5 text-[#C9A227]" />,
    title: '1. Tech Pack & Sample',
    description: 'Translating buyer designs into exact physical prototypes.',
  },
  {
    icon: <Globe className="w-5 h-5 text-[#C9A227]" />,
    title: '2. Mass Production',
    description: 'Scaling approved samples across our global manufacturing hubs.',
  },
  {
    icon: <CheckCircle className="w-5 h-5 text-[#C9A227]" />,
    title: '3. Final QC',
    description: 'Comprehensive pre-shipment quality assurance checks.',
  },
  {
    icon: <Ship className="w-5 h-5 text-[#C9A227]" />,
    title: '4. Worldwide Delivery',
    description: 'Efficient logistics network delivering goods to any port.',
  }
];

export default function GlobalManufacturing() {
  return (
    <section id="global" className="relative w-full py-12 md:py-20 lg:py-32 bg-[#FAFAFA] overflow-hidden">
      {/* Cinematic dark background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#C9A227]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#C9A227]/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-sm font-semibold tracking-wider text-[#C9A227] uppercase">
                <span className="w-8 h-px bg-[#C9A227]" />
                <span>End-to-End Supply Chain</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
                Global Manufacturing <br /> Process
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                From the initial tech pack to final worldwide delivery, we manage the entire lifecycle. Our interconnected global logistics network ensures transparency, speed, and uncompromising quality at every single touchpoint.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {timeline.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                  className="flex flex-col space-y-3 bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 hover:border-[#C9A227]/30 transition-colors"
                >
                  <div className="w-10 h-10 bg-[#FFFDF5] rounded-xl flex items-center justify-center border border-[#C9A227]/50">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A]">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-[#1A1A1A] rounded-2xl overflow-hidden transition-all duration-300 hover:bg-[#C9A227] hover:shadow-xl hover:shadow-[#C9A227]/30 hover:-translate-y-1">
                <span className="relative flex items-center gap-2">
                  Track Our Logistics
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[650px] w-full rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(79,70,229,0.15)] group"
          >
            <div className="absolute inset-0 bg-black/20 z-10 transition-colors duration-500 group-hover:bg-transparent" />
            <Image
              src="/images/global_manufacturing.png"
              alt="Global manufacturing logistics network and cargo ship"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            {/* Holographic Overlay Badge */}
            <div className="absolute top-6 left-6 z-20">
               <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white/90 backdrop-blur-md border border-[#C9A227]/30 p-3 rounded-lg flex items-center space-x-3"
               >
                 <Globe className="w-5 h-5 text-[#C9A227] animate-spin-slow" />
                 <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Global Sync Active</span>
               </motion.div>
            </div>

            <div className="absolute bottom-6 right-6 z-20">
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white/90 backdrop-blur-md border border-[#C9A227]/30 p-4 rounded-xl flex items-center space-x-4"
               >
                 <div className="w-10 h-10 rounded-full bg-[#FFFDF5] flex items-center justify-center border border-[#C9A227]">
                    <Ship className="w-5 h-5 text-[#C9A227]" />
                 </div>
                 <div>
                   <h4 className="text-sm font-bold text-[#1A1A1A] font-mono">WORLDWIDE DELIVERY</h4>
                   <p className="text-xs text-gray-500 font-mono mt-1">STATUS: EN ROUTE</p>
                 </div>
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}} />
    </section>
  );
}
