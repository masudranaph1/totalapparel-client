'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { label: 'Years Experience', value: '15+' },
  { label: 'Global Clients', value: '500+' },
  { label: 'Export Countries', value: '50+' },
  { label: 'On-Time Delivery', value: '99%' },
];

const trustBadges = [
  'Years of Experience',
  'Global Clients',
  'Quality Assured',
];

export default function CompanyStory() {
  return (
    <section className="relative w-full py-12 md:py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-50 via-white to-white" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#C9A227]/5 rounded-full blur-3xl" />
        {/* Abstract thin connecting lines */}
        <svg className="absolute w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 100 C 200 100, 300 400, 800 300 S 1200 600, 1600 500" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M300 -50 C 400 200, 100 500, 600 700" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
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
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
                Our Story
              </h2>
              <p className="text-xl md:text-2xl text-[#C9A227] font-serif italic">
                Excellence in Global Apparel Manufacturing
              </p>
            </div>

            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="leading-relaxed">
                Since our inception, we have been driven by a singular vision: to redefine <strong className="text-[#1A1A1A] font-semibold">global apparel manufacturing</strong> through uncompromising quality and sustainable innovation. What began as a boutique operation has evolved into a world-class production powerhouse.
              </p>
              <p className="leading-relaxed mt-4">
                Our facilities blend <strong className="text-[#1A1A1A] font-semibold">artisanal craftsmanship</strong> with <strong className="text-[#1A1A1A] font-semibold">cutting-edge technology</strong>, ensuring every garment meets the exacting standards of the world's most prestigious fashion brands. We don't just manufacture clothes; we engineer excellence.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              {trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-sm font-medium text-[#1A1A1A] bg-gray-50 px-5 py-2.5 rounded-full border border-gray-100 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-[#1A1A1A] rounded-2xl overflow-hidden transition-all duration-300 hover:bg-[#C9A227] hover:shadow-xl hover:shadow-[#C9A227]/30 hover:-translate-y-1">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right Side: Image Collage & Stats */}
          <div className="relative h-[550px] lg:h-[700px] w-full">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-3 gap-4 lg:gap-6">
              {/* Main Large Image */}
              <motion.div 
                className="col-span-2 row-span-2 relative rounded-[20px] overflow-hidden shadow-2xl group"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
              >
                <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-500 hover:bg-transparent" />
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }} 
                  transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/images/company-story/factory.png"
                    alt="Modern Apparel Factory"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </motion.div>
              </motion.div>

              {/* Bottom Left Image */}
              <motion.div 
                className="relative rounded-[20px] overflow-hidden shadow-xl group"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, delay: 1, ease: "easeInOut", repeat: Infinity }}
              >
                <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-500 hover:bg-transparent" />
                <motion.div 
                  animate={{ scale: [1, 1.15, 1] }} 
                  transition={{ duration: 20, delay: 2, ease: "linear", repeat: Infinity }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/images/company-story/inspection.png"
                    alt="Quality Inspection"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </motion.div>
              </motion.div>

              {/* Bottom Right Image */}
              <motion.div 
                className="relative rounded-[20px] overflow-hidden shadow-xl group"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 8, delay: 2.5, ease: "easeInOut", repeat: Infinity }}
              >
                <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-500 hover:bg-transparent" />
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }} 
                  transition={{ duration: 22, delay: 5, ease: "linear", repeat: Infinity }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/images/company-story/cutting.png"
                    alt="Fabric Cutting"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Floating Glassmorphism Stat Cards */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-8 -left-4 lg:-left-12 bg-white/80 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-6 py-4 rounded-[20px] z-20 flex flex-col items-center justify-center"
            >
              <div className="text-3xl font-bold text-[#0F172A]">{stats[0].value}</div>
              <div className="text-sm font-medium text-gray-600 mt-1">{stats[0].label}</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute top-1/2 -right-4 lg:-right-8 -translate-y-1/2 bg-white/80 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-6 py-4 rounded-[20px] z-20 flex flex-col items-center justify-center"
            >
              <div className="text-3xl font-bold text-[#C9A227]">{stats[1].value}</div>
              <div className="text-sm font-medium text-gray-600 mt-1">{stats[1].label}</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#0F172A]/90 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.15)] px-6 py-4 rounded-[20px] z-20 flex flex-col items-center justify-center"
            >
              <div className="text-3xl font-bold text-white">{stats[3].value}</div>
              <div className="text-sm font-medium text-gray-300 mt-1">{stats[3].label}</div>
            </motion.div>

          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}} />
    </section>
  );
}
