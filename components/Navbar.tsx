"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";
import MobileMenu from "./ui/MobileMenu";

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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  // Always be solid on non-home pages, or if scrolled on home
  const isSolid = scrolled || !isHome;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[0.16,1,0.3,1] ${
          isSolid ? "py-4 pointer-events-none" : "py-8"
        }`}
      >
        <div className={`mx-auto px-4 sm:px-6 transition-all duration-700 ease-[0.16,1,0.3,1] ${
          isSolid 
            ? "max-w-6xl pointer-events-auto" 
            : "max-w-[1600px] w-full"
        }`}>
          <motion.div 
            layout
            className={`flex items-center justify-between transition-all duration-700 ease-[0.16,1,0.3,1] ${
              isSolid 
                ? "bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full px-6 md:px-8 py-2 md:py-3" 
                : "bg-transparent border-transparent px-0 py-0"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              className={`font-black text-xl tracking-[0.15em] transition-colors duration-500 z-10 flex-shrink-0 ${
                isSolid ? "text-black" : "text-white"
              }`}
            >
              TOTAL APPAREL
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 z-10" onMouseLeave={() => setHoveredLink(null)}>
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  const isHovered = hoveredLink === link.label;
                  const showPill = isSolid && (isHovered || (isActive && !hoveredLink));

                  return (
                    <li key={link.label} className="relative">
                      <Link
                        href={link.href}
                        onMouseEnter={() => setHoveredLink(link.label)}
                        className={`relative px-5 py-2.5 text-[11px] font-black tracking-[0.15em] uppercase transition-colors duration-300 z-20 flex items-center justify-center ${
                          isSolid
                            ? showPill ? "text-white" : "text-gray-500 hover:text-black"
                            : isActive ? "text-white" : "text-white/70 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                      
                      {/* Animated Pill for Hover/Active in Solid Mode */}
                      {showPill && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-black rounded-full z-10"
                          transition={{ type: "spring", stiffness: 500, damping: 35 }}
                        />
                      )}
                      
                      {/* Simple underline for transparent mode */}
                      {!isSolid && isActive && (
                        <motion.div 
                          layoutId="nav-underline"
                          className="absolute bottom-1 left-4 right-4 h-[2px] bg-white rounded-full z-10"
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
              
              <div className={`ml-4 pl-6 border-l transition-colors duration-500 ${isSolid ? "border-gray-200" : "border-white/20"}`}>
                <Button 
                  variant={isSolid ? "default" : "outline"} 
                  className={!isSolid ? "border-white text-white hover:bg-white hover:text-black px-8" : "rounded-full px-8"}
                  href="/contact"
                >
                  Request a Quote
                </Button>
              </div>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden p-2 transition-colors z-10 ${
                isSolid ? "text-black" : "text-white"
              }`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </motion.div>
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
