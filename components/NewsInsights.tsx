"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const newsItems = [
  {
    id: 1,
    category: "Institutional",
    date: "March 6, 2026",
    title: "Total Apparel featured in Global Textile Manufacturing 2026",
    image: "/process-engineering.png",
    link: "#"
  },
  {
    id: 2,
    category: "Trade Fairs and Events",
    date: "March 6, 2026",
    title: "Total Apparel was present at FIMEC 2026.",
    image: "/professional-team.png",
    link: "#"
  },
  {
    id: 3,
    category: "Quality and Sustainability",
    date: "December 3, 2025",
    title: "ISO 9001:2015 — Solidity, Reliability and Excellence at Total Apparel",
    image: "/export-logistics.png",
    link: "#"
  }
];

const NewsInsights = () => {
  return (
    <section className="w-full bg-brand-bg py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-end gap-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-medium text-brand-text tracking-tight">
              News & Insights
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="#"
              className="inline-block border border-brand-border text-brand-text text-[11px] font-bold uppercase tracking-[0.15em] px-8 py-3 hover:bg-brand-dark hover:text-brand-bg hover:border-brand-dark transition-colors"
            >
              SEE MORE NEWS
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {newsItems.map((item, index) => (
            <motion.article 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-6 bg-brand-border/30 rounded-sm">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-wider mb-3">
                <span className="text-brand-accent">{item.category}</span>
                <span className="w-1 h-1 rounded-full bg-brand-border"></span>
                <span className="text-brand-muted">{item.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-medium text-brand-text mb-6 leading-tight group-hover:text-brand-accent transition-colors">
                {item.title}
              </h3>

              {/* Button */}
              <div className="mt-auto">
                <Link 
                  href={item.link}
                  className="inline-block bg-brand-accent text-brand-white text-[12px] font-bold uppercase tracking-wider px-6 py-2.5 rounded-sm hover:opacity-90 transition-colors shadow-sm"
                >
                  Read more
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewsInsights;
