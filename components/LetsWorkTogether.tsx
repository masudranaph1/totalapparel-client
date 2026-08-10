'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Building2 } from 'lucide-react';
import Image from 'next/image';

export default function LetsWorkTogether() {
  return (
    <section className="relative w-full py-12 md:py-20 lg:py-32 bg-white overflow-hidden">
      {/* Premium background styling */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-50 via-white to-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#0F172A] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
          
          {/* Decorative geometric background inside the dark card */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A227]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Side: Contact Form & Info */}
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-4"
              >
                <div className="inline-flex items-center space-x-2 text-sm font-semibold tracking-wider text-[#C9A227] uppercase">
                  <span className="w-8 h-px bg-[#C9A227]" />
                  <span>Business Inquiry</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  Let's Work <br /> Together
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md pt-2">
                  Partner with a world-class manufacturing facility. Whether you have a new tech pack or a large-scale production inquiry, our team is ready to deliver excellence.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-12 space-y-6"
              >
                <div className="flex items-center space-x-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                    <Mail className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email Us</p>
                    <a href="mailto:inquiry@globalapparel.com" className="text-lg font-semibold hover:text-white transition-colors">inquiry@globalapparel.com</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                    <Building2 className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Global Headquarters</p>
                    <p className="text-lg font-semibold">New York • London • Dhaka</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12"
              >
                <button className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-[#1A1A1A] rounded-xl overflow-hidden transition-all duration-300 hover:bg-[#C9A227] hover:shadow-[0_8px_30px_rgba(201,162,39,0.3)] hover:-translate-y-1">
                  <span className="relative flex items-center gap-2">
                    Send an Inquiry
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              </motion.div>
            </div>

            {/* Right Side: Image */}
            <div className="relative h-[400px] lg:h-auto hidden lg:block">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute inset-0 rounded-l-3xl overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-black/10 z-10" />
                <Image
                  src="/images/lets_work_together.png"
                  alt="Business professionals shaking hands"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
