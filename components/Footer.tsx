"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./ui/Button";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-dark text-brand-white font-sans flex flex-col pt-20">
      
      {/* Top CTA Section */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 pb-20 border-b border-brand-border/30 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
            Start Your Next Project
          </h2>
          <p className="text-brand-muted font-light text-lg">
            Partner with us for world-class garment manufacturing.
          </p>
        </div>
        <Button 
          href="/contact" 
          variant="outline"
          className="border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-white h-14 px-8 tracking-wider font-semibold uppercase shrink-0"
        >
          Request a Quote
        </Button>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto w-full py-20 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col lg:pr-12">
            <Link href="/" className="mb-6 block">
              <span className="text-2xl font-bold tracking-widest text-brand-white">TOTAL APPAREL</span>
            </Link>
            <p className="text-brand-muted font-light leading-relaxed mb-8">
              Premium Apparel Sourcing & Garment Manufacturing
            </p>
            
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 border border-brand-border/30 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-brand-white hover:border-brand-accent transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="w-10 h-10 border border-brand-border/30 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-brand-white hover:border-brand-accent transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-8">Company</h4>
            <ul className="flex flex-col space-y-4">
              {["About", "Capabilities", "Process", "Products", "Contact"].map(link => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase()}`} className="text-brand-border font-light hover:text-brand-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div className="flex flex-col">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-8">Capabilities</h4>
            <ul className="flex flex-col space-y-4">
              {["Apparel Sourcing", "Fabric Development", "Merchandising", "Quality Assurance", "Global Logistics"].map(link => (
                <li key={link}>
                  <Link href="/capabilities" className="text-brand-border font-light hover:text-brand-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-8">Contact</h4>
            <ul className="flex flex-col space-y-4">
              <li className="text-brand-border font-light">
                Dhaka, Bangladesh
              </li>
              <li>
                <a href="mailto:id@totaltexbd.com" className="text-brand-border font-light hover:text-brand-white transition-colors">
                  id@totaltexbd.com
                </a>
              </li>
              <li>
                <a href="tel:+8801987360371" className="text-brand-border font-light hover:text-brand-white transition-colors">
                  +880 198 736 0371
                </a>
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-brand-border/20 bg-brand-text">
        <div className="max-w-7xl mx-auto py-8 px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-light text-brand-muted">
            © 2026 TOTAL APPAREL. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-light text-brand-muted">
            <Link href="#" className="hover:text-brand-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
