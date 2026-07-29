"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "./Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, links }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Cinematic full-screen drop down
  const menuVariants: any = {
    closed: {
      y: "-100%",
      transition: {
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
        duration: 0.8,
        staggerChildren: 0.04,
        staggerDirection: -1,
        when: "afterChildren"
      },
    },
    open: {
      y: 0,
      transition: {
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
        duration: 0.8,
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  // Luxury text reveal from bottom (masked)
  const linkVariants: any = {
    closed: { y: "150%", rotate: 5, opacity: 0 },
    open: { 
      y: 0, 
      rotate: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const footerVariants: any = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 w-full h-[100dvh] bg-zinc-950 z-[100] flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-6 md:p-8">
            <span className="font-black text-white tracking-[0.2em] text-xs">TOTAL APPAREL</span>
            <button
              onClick={onClose}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900 text-white hover:bg-white hover:text-black transition-all duration-500 group"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
            </button>
          </div>

          {/* Huge Cinematic Links */}
          <div className="flex-1 overflow-y-auto px-6 md:px-12 flex flex-col justify-center">
            <div className="flex flex-col gap-2 sm:gap-4 mt-auto mb-auto">
              {links.map((link) => (
                <div key={link.label} className="overflow-hidden py-1">
                  <motion.div variants={linkVariants}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="group relative inline-flex items-center text-4xl sm:text-5xl font-medium text-zinc-500 hover:text-white transition-colors duration-500 tracking-tighter"
                    >
                      <span className="relative z-10">{link.label}</span>
                      {/* Subtle hover dash */}
                      <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-brand-accent opacity-0 group-hover:opacity-100 group-hover:-left-6 transition-all duration-300 hidden sm:block" />
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Contact / CTA */}
          <motion.div 
            variants={footerVariants}
            className="p-6 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-zinc-900"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[9px] font-black tracking-[0.2em] text-zinc-600 uppercase">Say Hello</span>
              <a href="mailto:id@totaltexbd.com" className="text-white text-xl sm:text-2xl font-light hover:text-brand-accent transition-colors">
                id@totaltexbd.com
              </a>
            </div>

            <Button 
              className="w-full md:w-auto h-14 px-10 bg-transparent border border-zinc-700 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-xs tracking-[0.2em] font-black uppercase rounded-full" 
              onClick={onClose} 
              href="/contact"
            >
              Request a Quote
            </Button>
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
