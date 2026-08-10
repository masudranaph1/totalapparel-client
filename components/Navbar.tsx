"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Leaf, Settings2, Grid, Layers, Droplet, Microscope, Scissors, Ship, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";
import MobileMenu from "./ui/MobileMenu";

const FbIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const InstaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/capabilities" },
  { label: "Process", href: "/process" },
  { label: "Products", href: "/products" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const isSolid = scrolled || !isHome;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isSolid 
            ? "bg-white/95 backdrop-blur-2xl border-b border-gray-100 shadow-[0_4px_30px_rgb(0,0,0,0.03)] py-4" 
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center gap-3 font-black text-xl tracking-[0.15em] transition-all duration-500 z-10 hover:opacity-80 ${isSolid ? "text-[#1A1A1A]" : "text-white"}`}
          >
            <Image 
              src="/companylogo.png" 
              alt="Total Apparel Logo" 
              width={48} 
              height={48} 
              className="object-contain"
            />
            TOTAL APPAREL
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-2 z-10" onMouseLeave={() => setHoveredLink(null)}>
            <ul className="flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const isHovered = hoveredLink === link.label;

                return (
                  <li key={link.label} className="relative">
                    <Link
                      href={link.href}
                      onMouseEnter={() => setHoveredLink(link.label)}
                      className={`relative px-4 py-2 text-[11px] font-black tracking-[0.15em] uppercase transition-colors duration-300 z-20 flex items-center justify-center ${
                        isSolid
                          ? isActive || isHovered ? "text-[#C9A227]" : "text-gray-500 hover:text-[#C9A227]"
                          : isActive ? "text-white" : "text-white/70 hover:text-white"
                      }`}
                    >
                      {link.label}
                      
                      {/* Active/Hover Underline Indicator */}
                      {(isActive || isHovered) && (
                        <motion.div 
                          layoutId="nav-indicator"
                          className={`absolute -bottom-1 left-4 right-4 h-[2px] rounded-full z-10 ${isSolid ? "bg-[#C9A227]" : "bg-white"}`}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Link>
                    
                    {/* About Hover Dropdown Menu */}
                    <AnimatePresence>
                      {link.label === "About" && isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-8 w-[800px] bg-white border border-gray-100 shadow-2xl rounded-2xl p-6 flex z-50 text-black before:content-[''] before:absolute before:-top-8 before:left-0 before:w-full before:h-8"
                        >
                          <div className="grid grid-cols-3 gap-8 w-full">
                            {/* Column 1: Featured Image */}
                            <div className="relative rounded-xl overflow-hidden h-full min-h-[300px] group">
                              <Image src="/images/company-story/factory.png" alt="Heritage" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                              <div className="absolute bottom-6 left-6 right-6 text-white">
                                <h4 className="text-xl font-bold mb-2">Our Heritage</h4>
                                <p className="text-xs text-gray-300 leading-relaxed">Pioneering sustainable manufacturing since our inception.</p>
                                <Link href="/about" className="inline-flex items-center gap-2 mt-4 text-xs font-bold uppercase tracking-wider hover:text-[#C9A227] transition-colors">
                                  Discover More <ArrowRight className="w-3 h-3" />
                                </Link>
                              </div>
                            </div>

                            {/* Column 2: Company Links */}
                            <div className="flex flex-col space-y-4 py-2">
                              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C9A227] mb-2 block">Company</span>
                              <Link href="/about" className="text-xs font-bold uppercase tracking-[0.15em] text-gray-600 hover:text-[#C9A227] transition-colors">Who We Are</Link>
                              <Link href="/about#mission" className="text-xs font-bold uppercase tracking-[0.15em] text-gray-600 hover:text-[#C9A227] transition-colors">Mission & Vision</Link>
                              <Link href="/about#ethical" className="text-xs font-bold uppercase tracking-[0.15em] text-gray-600 hover:text-[#C9A227] transition-colors">Ethical Manufacturing</Link>
                              <Link href="/news" className="text-xs font-bold uppercase tracking-[0.15em] text-gray-600 hover:text-[#C9A227] transition-colors">Total Apparel Blog</Link>
                              
                              <div className="pt-8 mt-auto border-t border-gray-50">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4 block">Social Connect</span>
                                <div className="flex items-center gap-3">
                                  <Link href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#1A1A1A] hover:text-white transition-all duration-300">
                                    <FbIcon />
                                  </Link>
                                  <Link href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#1A1A1A] hover:text-white transition-all duration-300">
                                    <InstaIcon />
                                  </Link>
                                </div>
                              </div>
                            </div>

                            {/* Column 3: Our Process Links */}
                            <div className="flex flex-col space-y-3 py-2 pl-6 border-l border-gray-50">
                              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C9A227] mb-2 block">Our Process</span>
                              {[
                                { icon: Leaf, label: "Cotton Farming", href: "/#cotton" },
                                { icon: Settings2, label: "Spinning Mill", href: "/#spinning" },
                                { icon: Grid, label: "Weaving Loom", href: "/#weaving" },
                                { icon: Layers, label: "Yarn to Fabric", href: "/#yarn" },
                                { icon: Droplet, label: "Fabric Dyeing", href: "/#dyeing" },
                                { icon: Microscope, label: "Lab Testing", href: "/#lab" },
                                { icon: Scissors, label: "Garment Mfg", href: "/#garment" },
                                { icon: Ship, label: "Global Shipment", href: "/#global" },
                              ].map((item, i) => (
                                <Link key={i} href={item.href} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.1em] text-gray-500 hover:text-[#1A1A1A] transition-colors group">
                                  <div className="w-6 h-6 rounded-md bg-gray-50 flex items-center justify-center group-hover:bg-[#C9A227] transition-colors">
                                    <item.icon className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors" />
                                  </div>
                                  <span>{item.label}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
            
            <div className={`ml-6 pl-8 border-l transition-colors duration-500 ${isSolid ? "border-gray-200" : "border-white/20"}`}>
              <Button 
                variant={isSolid ? "default" : "outline"} 
                className={!isSolid ? "border-white text-white hover:bg-white hover:text-black rounded-full px-8" : "rounded-full px-8 bg-[#1A1A1A] hover:bg-[#C9A227]"}
                href="/contact"
              >
                Request Quote
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`xl:hidden p-2 transition-colors z-10 ${
              isSolid ? "text-black" : "text-white"
            }`}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        links={navLinks} 
      />
    </>
  );
}
