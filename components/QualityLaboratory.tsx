'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Microscope, Ruler, Pipette } from 'lucide-react';
import Image from 'next/image';

const tests = [
  {
    icon: <Ruler className="w-5 h-5 text-teal-600" />,
    title: 'GSM & Shrinkage',
    description: 'Precise measurement of fabric weight and dimensional stability.',
  },
  {
    icon: <Pipette className="w-5 h-5 text-teal-600" />,
    title: 'Color Fastness',
    description: 'Rigorous testing against washing, rubbing, and light exposure.',
  },
  {
    icon: <Microscope className="w-5 h-5 text-teal-600" />,
    title: 'Tensile Strength',
    description: 'Microscopic and mechanical analysis of yarn durability.',
  },
];

export default function QualityLaboratory() {
  return (
    <section id="lab" className="relative w-full py-12 md:py-20 lg:py-32 bg-[#F0FDF4] overflow-hidden">
      {/* Subtle clinical background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-teal-100/50 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-[#FFFDF5]/50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl group"
          >
            <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-500 group-hover:bg-transparent" />
            <Image
              src="/images/quality_laboratory.png"
              alt="High-tech textile quality control laboratory"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            {/* Clinical Overlay Badge */}
            <div className="absolute bottom-6 right-6 z-20">
               <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white/95 backdrop-blur-md border border-teal-100 p-5 rounded-2xl flex items-center space-x-4 shadow-xl"
               >
                 <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center shrink-0 border border-teal-100">
                    <ShieldCheck className="w-6 h-6 text-teal-600" />
                 </div>
                 <div>
                   <h4 className="text-lg font-bold text-[#0F172A]">ISO Certified Lab</h4>
                   <p className="text-xs text-gray-500">Every fabric batch passes strict QC</p>
                 </div>
               </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-sm font-semibold tracking-wider text-teal-600 uppercase">
                <span className="w-8 h-px bg-teal-600" />
                <span>Uncompromising Standards</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight">
                Quality <br /> Laboratory
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Before any fabric moves to production, it must pass our state-of-the-art laboratory testing. From GSM verification to advanced shrinkage and color fastness analysis, our scientists ensure perfect consistency.
              </p>
            </div>

            <div className="grid gap-6 pt-4">
              {tests.map((test, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                  className="flex items-start space-x-4 bg-white p-5 rounded-2xl shadow-sm border border-teal-50 hover:border-teal-200 transition-colors"
                >
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
                    {test.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A]">{test.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mt-1">
                      {test.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-[#1A1A1A] rounded-2xl overflow-hidden transition-all duration-300 hover:bg-[#C9A227] hover:shadow-xl hover:shadow-[#C9A227]/30 hover:-translate-y-1">
                <span className="relative flex items-center gap-2">
                  Explore QC Parameters
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
