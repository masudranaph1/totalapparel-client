"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import siteData from "../data/siteData.json";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const isSolid = scrolled || isNavHovered || !isHome;

  return (
    <nav 
      onMouseEnter={() => setIsNavHovered(true)}
      onMouseLeave={() => setIsNavHovered(false)}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isSolid 
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 py-3 shadow-xl" 
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      {/* Background Blur Overlay for Mega Menu */}
      <AnimatePresence>
        {hoveredItem && ["Collections", "Men", "Women", "Kids"].includes(hoveredItem) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-full w-screen h-screen bg-black/40 backdrop-blur-md pointer-events-none z-[-1]"
          />
        )}
      </AnimatePresence>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/total%20apparel.png" 
                alt="Total Apparel" 
                width={140} 
                height={40} 
                className={`transition-all duration-300 object-contain h-7 md:h-8 w-auto ${isSolid ? "" : "brightness-0 invert"}`}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className={`hidden lg:flex items-center space-x-1 rounded-full px-4 py-2 border backdrop-blur-sm transition-colors duration-300 ${isSolid ? "bg-gray-50 border-gray-200" : "bg-white/5 border-white/5"}`}>
            {siteData.navbar.links.map((item) => (
              <div 
                key={item}
                className="relative"
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item === "Collections" ? "/collection" : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-1.5 ${
                    hoveredItem === item
                      ? (isSolid ? "text-black bg-gray-200/50" : "text-white bg-white/10")
                      : item === "Sale" 
                        ? "text-rose-600 hover:text-rose-500"
                        : (isSolid ? "text-gray-600 hover:text-black" : "text-gray-300 hover:text-white")
                  }`}
                >
                  {item}
                  {["Collections", "Men", "Women", "Kids"].includes(item) && (
                    <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${hoveredItem === item ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6"/></svg>
                  )}
                </Link>

                {/* Mega Menu Dropdowns */}
                <AnimatePresence>
                  {hoveredItem === item && ["Collections", "Men", "Women", "Kids"].includes(item) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[1000px] bg-white text-black rounded-xl shadow-2xl border border-gray-200 overflow-hidden cursor-default"
                    >
                      <div className="flex p-8">
                        {/* 4 Columns for links */}
                        <div className="flex-1 grid grid-cols-4 gap-6 pr-8 border-r border-gray-100">
                          {/* Column 1 */}
                          <div>
                            <h3 className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-4 border-b border-gray-100 pb-2">Base Elements</h3>
                            <ul className="space-y-3">
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Title Styles</Link></li>
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Carousels Styles</Link></li>
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Sliders Styles</Link></li>
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Banner Styles</Link></li>
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Button Styles</Link></li>
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Brands Styles</Link></li>
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black flex items-center gap-2">List Styles <span className="bg-blue-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-sm">COMING</span></Link></li>
                            </ul>
                          </div>
                          {/* Column 2 */}
                          <div>
                            <h3 className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-4 border-b border-gray-100 pb-2">Template Elements</h3>
                            <ul className="space-y-3">
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Hotspot Styles</Link></li>
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Countdown Styles</Link></li>
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Instagram Posts</Link></li>
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Product Card Styles</Link></li>
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Categories Card Styles</Link></li>
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Video Styles</Link></li>
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Header Styles</Link></li>
                            </ul>
                          </div>
                          {/* Column 3 */}
                          <div>
                            <h3 className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-4 border-b border-gray-100 pb-2">Template Elements</h3>
                            <ul className="space-y-3">
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Table Styles</Link></li>
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Social Buttons</Link></li>
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Image Gallery</Link></li>
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Team Card Styles</Link></li>
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Accordion Styles</Link></li>
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Portfolio Card Styles</Link></li>
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Blog Card Styles</Link></li>
                            </ul>
                          </div>
                          {/* Column 4 */}
                          <div>
                            <h3 className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-4 border-b border-gray-100 pb-2">E-Commerce</h3>
                            <ul className="space-y-3">
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Recent Products</Link></li>
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Featured Products</Link></li>
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Best Selling Products</Link></li>
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Single Product</Link></li>
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Sale Products</Link></li>
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black">Pricing Styles</Link></li>
                              <li><Link href="#" className="text-xs font-medium text-gray-600 hover:text-black flex items-center gap-2">Order Tracking <span className="bg-blue-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-sm">COMING</span></Link></li>
                            </ul>
                          </div>
                        </div>

                        {/* Featured Promo Card */}
                        <div className="w-[300px] ml-8 bg-[#0a1128] rounded-xl p-6 text-center text-white relative overflow-hidden flex flex-col items-center group shadow-xl">
                          <h4 className="font-bold text-lg mb-1 relative z-10">New Aurora Watch</h4>
                          <p className="text-[10px] text-gray-300 mb-4 relative z-10">Send your idea, appear Unimart.</p>
                          <button className="bg-blue-600 text-white text-xs font-semibold py-2 px-6 rounded-full hover:bg-blue-500 transition-colors relative z-10">View Details</button>
                          
                          {/* Image placeholder for watch */}
                          <div className="mt-8 relative w-full h-32 z-10 group-hover:scale-105 transition-transform duration-500">
                             <Image src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop" fill className="object-contain" alt="Watch" />
                          </div>
                          
                          {/* Decorative glow */}
                          <div className="absolute bottom-0 inset-x-0 h-1/2 bg-blue-500/20 blur-2xl pointer-events-none"></div>
                        </div>
                      </div>
                      
                      {/* Logos Footer */}
                      <div className="bg-white border-t border-gray-100 py-4 px-10 flex justify-between items-center overflow-hidden">
                        <span className="font-black text-xl italic tracking-tighter text-blue-700 flex items-center">AMD</span>
                        <span className="font-bold text-base tracking-widest text-blue-600">QUALCOMM</span>
                        <span className="font-black text-xl text-black">SONY</span>
                        <span className="font-black text-xl italic text-blue-800 tracking-tighter">ASUS</span>
                        <span className="font-bold text-base text-red-600 flex items-center gap-1"><div className="w-4 h-4 bg-red-600 rounded-full blur-[2px]"></div>HUAWEI</span>
                        <span className="font-black text-xl italic text-black tracking-widest">BOSE</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-1 lg:gap-2">
            {[
              { id: 'search', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg> },
              { id: 'account', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
              { id: 'wishlist', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg> },
              { id: 'cart', badge: '0', icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg> }
            ].map((item) => (
              <button
                key={item.id}
                aria-label={item.id}
                className={`relative p-2.5 rounded-full transition-all duration-300 group ${isSolid ? 'text-gray-600 hover:text-black hover:bg-gray-100' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
              >
                {item.icon}
                {item.badge && (
                  <span className="absolute top-1 right-1 bg-rose-500 text-white text-[9px] font-black h-4 w-4 rounded-full flex items-center justify-center scale-100 group-hover:scale-110 transition-transform">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
            
            {/* Mobile Menu Toggle (Hamburger) */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="menu"
              className={`lg:hidden relative p-2.5 rounded-full transition-all duration-300 ${isSolid ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (Unique Premium Redesign) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] lg:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
              className="fixed top-0 right-0 h-[100dvh] w-[85vw] max-w-[360px] bg-white shadow-[0_0_40px_rgba(0,0,0,0.1)] z-[101] lg:hidden flex flex-col overflow-hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 md:p-6 border-b border-gray-100 bg-white">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center">
                  <Image 
                    src="/total%20apparel.png" 
                    alt="Total Apparel" 
                    width={120} 
                    height={32} 
                    className="object-contain h-6 w-auto"
                  />
                </Link>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-500 hover:text-black bg-gray-50 hover:bg-gray-100 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex flex-col overflow-y-auto flex-1 bg-white">
                {siteData.navbar.links.map((item, index) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + (index * 0.05), ease: "easeOut" }}
                  >
                    <Link
                      href={item === "Collections" ? "/collection" : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex justify-between items-center py-4 px-6 border-b border-gray-50 text-[14px] font-bold uppercase tracking-wider transition-colors ${item === 'Sale' ? 'text-rose-600 hover:bg-rose-50' : 'text-gray-900 hover:bg-gray-50'}`}
                    >
                      <span>{item}</span>
                      <svg className="w-4 h-4 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              {/* Drawer Footer */}
              <div className="p-6 bg-gray-50 mt-auto border-t border-gray-100">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-xs font-bold text-gray-500 uppercase cursor-pointer hover:text-black transition-colors">Account</span>
                  <span className="text-gray-300">|</span>
                  <span className="text-xs font-bold text-gray-500 uppercase cursor-pointer hover:text-black transition-colors">Support</span>
                </div>
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em] text-center">Urban E-commerce © 2026</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
