"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#0a0a0a] text-white pt-20 pb-6 border-t border-white/10">
      
      {/* Colorful Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-[#C9A227]/30 to-purple-900/40 blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[40vw] h-[40vw] rounded-full bg-gradient-to-bl from-blue-900/30 to-[#C9A227]/20 blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-24">
        
        {/* Top Massive CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8 border-b border-white/10 pb-10 mb-10 relative text-center lg:text-left">
          <div className="max-w-3xl w-full">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] mb-4">
              Let's Build <br className="hidden sm:block" />
              <span className="text-[#C9A227] italic font-serif text-5xl md:text-6xl lg:text-7xl">Together.</span>
            </h2>
            <p className="text-sm md:text-base text-gray-300 font-light max-w-xl mx-auto lg:mx-0">
              Partner with the industry's finest. We engineer apparel solutions that define global brands.
            </p>
          </div>
          <Link href="/contact" className="w-full lg:w-auto group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full overflow-hidden shrink-0 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(201,162,39,0.3)] transition-shadow duration-500">
            <span className="absolute inset-0 w-0 bg-[#C9A227] group-hover:w-full transition-all duration-700 ease-out" />
            <span className="relative text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-500">
              Start Project
            </span>
          </Link>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-6 lg:gap-8 pb-12 relative text-center sm:text-left">
          
          <div className="col-span-2 md:col-span-4 lg:col-span-5 flex flex-col items-center sm:items-start justify-between">
            <div>
              <Link href="/" className="inline-block mb-6">
                <span className="text-2xl font-black tracking-[0.2em] uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  TOTAL APPAREL
                </span>
              </Link>
              <p className="text-gray-300 max-w-sm text-sm font-light leading-relaxed mb-6 mx-auto sm:mx-0">
                Premium Apparel Sourcing & Garment Manufacturing. Based in Dhaka, Bangladesh. Delivering globally.
              </p>
              <a href="mailto:id@totaltexbd.com" className="text-lg text-white hover:text-[#C9A227] transition-colors border-b border-[#C9A227]/30 pb-1">
                id@totaltexbd.com
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-[#C9A227] mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              {["About Us", "Our Process", "Sustainability", "News", "Contact"].map(link => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(/ /g, '-')}`} className="text-xs text-gray-400 hover:text-white sm:hover:translate-x-2 transition-all inline-block font-medium">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-[#C9A227] mb-6">Capabilities</h4>
            <ul className="flex flex-col gap-3">
              {["Fabric Development", "Garment Manufacturing", "Quality Control", "Global Logistics", "Merchandising"].map(link => (
                <li key={link}>
                  <Link href="/capabilities" className="text-xs text-gray-400 hover:text-white sm:hover:translate-x-2 transition-all inline-block font-medium">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1 lg:col-span-2 pt-6 sm:pt-0">
            <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-[#C9A227] mb-6">Socials</h4>
            <ul className="flex flex-row justify-center sm:flex-col gap-6 sm:gap-3">
              {["LinkedIn", "Instagram", "Facebook", "Twitter"].map(link => (
                <li key={link}>
                  <a href="#" className="text-xs text-gray-400 hover:text-[#C9A227] transition-colors inline-block font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="relative border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-6 overflow-hidden">
          <p className="text-[9px] text-gray-500 font-bold tracking-[0.2em] uppercase text-center md:text-left">
            &copy; {new Date().getFullYear()} TOTAL APPAREL BD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4 sm:gap-6 text-[9px] text-gray-500 font-bold tracking-[0.2em] uppercase">
            <Link href="/privacy" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
            <Link href="/terms" className="hover:text-white transition-colors">TERMS OF SERVICE</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
