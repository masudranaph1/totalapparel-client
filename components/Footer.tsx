"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronUp, ChevronDown } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white text-gray-800 font-sans border-t border-gray-100 flex flex-col mt-20">
      
      {/* 1. Store Locations Row */}
      <div className="w-full border-b border-gray-100 hidden md:block">
        <div className="max-w-[1400px] mx-auto grid grid-cols-4 divide-x divide-gray-100">
          
          <div className="p-6 xl:p-8 cursor-pointer group">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-bold text-sm text-black group-hover:text-rose-500 transition-colors">New York Store</span>
              <div className="w-5 h-5 bg-rose-500 rounded-full flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-white group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
            <p className="text-[12px] text-gray-500">123 Broadway St, New York, NY 10012</p>
          </div>
          
          <div className="p-6 xl:p-8 cursor-pointer group">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-bold text-sm text-black group-hover:text-rose-500 transition-colors">London Store</span>
              <div className="w-5 h-5 bg-rose-500 rounded-full flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-white group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
            <p className="text-[12px] text-gray-500">Oxford St, London W1D 1BS, UK</p>
          </div>
          
          <div className="p-6 xl:p-8 cursor-pointer group">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-bold text-sm text-black group-hover:text-rose-500 transition-colors">Paris Store</span>
              <div className="w-5 h-5 bg-rose-500 rounded-full flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-white group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
            <p className="text-[12px] text-gray-500">114 Av. des Champs-Élysées, Paris</p>
          </div>
          
          <div className="p-6 xl:p-8 cursor-pointer group">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-bold text-sm text-black group-hover:text-rose-500 transition-colors">Tokyo Store</span>
              <div className="w-5 h-5 bg-rose-500 rounded-full flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-white group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
            <p className="text-[12px] text-gray-500">Shibuya City, Tokyo 150-0043, JP</p>
          </div>
          
        </div>
      </div>

      {/* 2. Marquee Banner */}
      <div className="w-full bg-black py-3 overflow-hidden flex">
        <motion.div 
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {Array(15).fill("URBAN - 10% OFF ON YOUR FIRST ORDER").map((text, i) => (
             <span key={i} className="mx-6 flex items-center text-white text-[11px] font-bold tracking-widest uppercase">
               <span className="w-1.5 h-1.5 rounded-full border border-white mr-3 shrink-0"></span>
               {text}
             </span>
          ))}
        </motion.div>
      </div>

      {/* 3. Main Footer Links */}
      <div className="max-w-[1400px] mx-auto w-full py-16 px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col">
            <Link href="/" className="mb-6">
              <span className="text-3xl font-black tracking-tighter text-black uppercase">URBAN<span className="text-rose-500">.</span></span>
            </Link>
            <p className="text-[13px] text-gray-500 leading-relaxed mb-8 max-w-[250px]">
              Premium streetwear and high-fashion retailer since 2012. We deliver curated collections globally.
            </p>
            
            <div className="flex flex-col gap-4">
              <span className="text-[13px] text-gray-500 font-bold">Follow Us :</span>
              <div className="flex items-center gap-3">
                {/* Twitter / X (Black) */}
                <Link href="#" className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-sm">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                </Link>
                {/* YouTube (Red) */}
                <Link href="#" className="w-8 h-8 bg-[#FF0000] text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors shadow-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </Link>
                {/* Facebook (Blue) */}
                <Link href="#" className="w-8 h-8 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </Link>
                {/* WhatsApp (Green) */}
                <Link href="#" className="w-8 h-8 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors shadow-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                </Link>
                {/* Instagram (Gradient) */}
                <Link href="#" className="w-8 h-8 rounded-full flex items-center justify-center text-white shadow-sm" style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="flex flex-col">
            <h4 className="text-[15px] font-bold text-black mb-6">Let Us Help You</h4>
            <ul className="flex flex-col space-y-3.5">
              {["Account Info", "Your Orders", "Returns Policies", "Shipping Rates", "Refund and Returns", "Privacy Policy", "Terms and Conditions"].map(link => (
                <li key={link}>
                  <Link href="#" className="text-[13px] text-gray-500 hover:text-rose-500 transition-colors font-medium">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Links */}
          <div className="flex flex-col">
            <h4 className="text-[15px] font-bold text-black mb-6">Make Money with Us</h4>
            <ul className="flex flex-col space-y-3.5">
              {["Sell on Urban", "Sell Your Services", "Sell on Business", "Sell Your Apps", "Become an Affiliate", "Sell-Publish with Us"].map(link => (
                <li key={link}>
                  <Link href="#" className="text-[13px] text-gray-500 hover:text-rose-500 transition-colors font-medium">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: App Download & Settings */}
          <div className="flex flex-col">
            <h4 className="text-[15px] font-bold text-black mb-4">Download App on Mobile:</h4>
            <p className="text-[13px] text-gray-500 mb-6 font-medium">15% discount on your first purchase</p>
            
            <div className="flex gap-3 mb-12">
              <button className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-md">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.88 3.5-.8 1.14.07 2.18.51 2.97 1.25-2.61 1.6-2.14 5.48.51 6.57-.61 1.83-1.6 3.65-3.06 5.15zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                <div className="flex flex-col items-start">
                  <span className="text-[8px] opacity-80 uppercase leading-none mb-0.5">Download on the</span>
                  <span className="text-[13px] font-bold leading-none">App Store</span>
                </div>
              </button>
              
              <button className="bg-black text-white px-3 py-1.5 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-md">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3.193 2.502C3.068 2.637 3 2.844 3 3.125v17.75c0 .281.068.488.193.623l.034.032 8.718-8.723v-.128L3.227 2.47l-.034.032zM12.44 13.06l2.138 2.137-1.127 1.127-1.011-3.264zm3.08-3.08-1.516-1.516 1.059-3.418 1.488 1.489-1.031 3.445zM3.442 22.083c.189.201.5.311.902.311.233 0 .487-.047.74-.143l9.957-5.597-2.646-2.645-8.953 8.074zM15.421 8.871l-1.378-1.378L4.086 1.895C3.833 1.799 3.58 1.75 3.346 1.75c-.4 0-.712.11-.902.311l8.953 8.075 4.024-1.265zM16.643 14.282l3.417-1.921c1.258-.707 1.258-1.859 0-2.566l-3.417-1.921-1.222 1.222 1.222 1.222-1.222 1.222 1.222 1.222-1.222 1.222 1.222 1.222z"/></svg>
                <div className="flex flex-col items-start">
                  <span className="text-[8px] opacity-80 uppercase leading-none mb-0.5">Get it on</span>
                  <span className="text-[13px] font-bold leading-none">Google Play</span>
                </div>
              </button>
            </div>

            {/* Settings */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-[13px] font-bold cursor-pointer group">
                <span className="text-black font-bold mr-1">Settings :</span>
                $ USD
                <ChevronDown className="w-3 h-3 text-gray-400 group-hover:text-rose-500" />
              </div>
              <div className="flex items-center gap-2 text-[13px] font-bold cursor-pointer group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://flagcdn.com/w20/us.png" alt="English" className="w-4 h-3 object-cover shadow-sm" />
                English
                <ChevronDown className="w-3 h-3 text-gray-400 group-hover:text-rose-500" />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 4. Bottom Bar */}
      <div className="w-full border-t border-gray-100 bg-[#fbfbfb]">
        <div className="max-w-[1400px] mx-auto py-5 px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 relative">
          
          <p className="text-[12px] text-gray-500">
            Copyright 2026 © <span className="font-bold text-black">URBAN</span> HTML Template.
          </p>

          {/* Colored Payment Icons */}
          <div className="flex items-center gap-2.5">
            {/* Visa */}
            <div className="bg-white border border-gray-200 rounded px-2 py-1 shadow-sm h-7 w-11 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.95 0L9.83 11.66H15.93L17.15 8.24H24.64L25.32 11.66H31.14L24.77 0H14.95ZM18.89 3.53H23.51L22.61 7.21L20.89 7.2L18.89 3.53ZM35.32 0L33.72 11.66H38L39.6 0H35.32ZM7.76 0L5.59 8.24L2.83 1.3C2.56 0.5 2.19 0.17 1.34 0H0L4.76 11.66H10.59L17.58 0H7.76Z" fill="#1434CB"/></svg>
            </div>
            {/* Mastercard */}
            <div className="bg-white border border-gray-200 rounded px-2 py-1 shadow-sm h-7 w-11 flex items-center justify-center relative overflow-hidden">
               <svg viewBox="0 0 36 24" width="22" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#EB001B"/><circle cx="24" cy="12" r="12" fill="#F79E1B"/></svg>
            </div>
            {/* Amex */}
            <div className="bg-white border border-gray-200 rounded px-1.5 py-1 shadow-sm h-7 w-11 flex items-center justify-center bg-[#016FD0]">
               <svg viewBox="0 0 32 32" width="22" height="22" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 12h21v8h-21z"/></svg>
            </div>
            {/* Discover */}
            <div className="bg-white border border-gray-200 rounded px-1 shadow-sm h-7 w-11 flex items-center justify-center">
               <span className="text-[#FF6600] font-black text-[7px] tracking-tighter">DISCOVER</span>
            </div>
            {/* JCB (Bonus) */}
            <div className="bg-white border border-gray-200 rounded px-1 shadow-sm h-7 w-11 flex items-center justify-center">
               <span className="text-blue-700 font-black text-[9px] tracking-tighter">JCB</span>
            </div>
          </div>

          <div className="flex items-center gap-5 text-[12px] text-gray-500 font-medium md:mr-12">
            <Link href="#" className="hover:text-black transition-colors">Refund policy</Link>
            <Link href="#" className="hover:text-black transition-colors">Privacy policy</Link>
            <Link href="#" className="hover:text-black transition-colors">Term & conditions</Link>
          </div>

          {/* Scroll to Top */}
          <button 
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-rose-500 bg-white hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-colors absolute right-4 top-1/2 -translate-y-1/2 shadow-sm"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
          
        </div>
      </div>

    </footer>
  );
}
