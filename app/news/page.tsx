"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Clock, ChevronRight } from "lucide-react";

// --- MOCK DATA USING LOCAL PROJECT IMAGES ---
const featuredArticle = {
  id: "feat-1",
  title: "The Future of Sustainable Denim: Closed-Loop Water Systems",
  category: "Sustainability",
  date: "July 24, 2026",
  readTime: "8 min read",
  excerpt: "As the global fashion industry rapidly shifts towards true circularity, we explore how our newly implemented closed-loop water systems and ozone washing techniques are fundamentally revolutionizing high-volume raw denim manufacturing.",
  image: "/images/fabric_dyeing.png", 
  href: "/news/sustainable-denim"
};

const articles = [
  {
    id: "art-1",
    title: "Navigating Global Logistics: SS26 Freight Updates",
    category: "Supply Chain",
    date: "July 20, 2026",
    readTime: "5 min read",
    image: "/images/global_manufacturing.png", 
  },
  {
    id: "art-2",
    title: "Material Focus: The Rise of Heavyweight French Terry",
    category: "Fabric Innovation",
    date: "July 15, 2026",
    readTime: "4 min read",
    image: "/images/yarn_to_fabric.png", 
  },
  {
    id: "art-3",
    title: "Inside the Facility: New Quality Assurance Protocols",
    category: "Operations",
    date: "July 08, 2026",
    readTime: "6 min read",
    image: "/images/quality_laboratory.png", 
  },
  {
    id: "art-4",
    title: "Client Spotlight: Scaling a Luxury Streetwear Syndicate",
    category: "Case Study",
    date: "June 28, 2026",
    readTime: "10 min read",
    image: "/images/garment_manufacturing.png", 
  },
  {
    id: "art-5",
    title: "The Golden Hour: Photorealistic Cotton Harvesting",
    category: "Sourcing",
    date: "June 12, 2026",
    readTime: "7 min read",
    image: "/images/cotton_farming_hero.png", 
  },
  {
    id: "art-6",
    title: "Ultra-Modern Weaving Looms in Action",
    category: "Technology",
    date: "June 05, 2026",
    readTime: "5 min read",
    image: "/images/weaving_loom.png", 
  }
];

export default function NewsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="w-full min-h-screen bg-[#FAFAFA] relative selection:bg-[#C9A227] selection:text-white pb-32 overflow-hidden" ref={containerRef}>
      
      {/* Background Cinematic Marquee */}
      <div className="absolute top-32 lg:top-20 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03] z-0">
         <motion.div 
           className="flex whitespace-nowrap text-[8rem] lg:text-[15rem] font-black uppercase"
           animate={{ x: ["0%", "-50%"] }}
           transition={{ duration: 60, ease: "linear", repeat: Infinity }}
         >
            <span>TOTAL APPAREL JOURNAL • LATEST INSIGHTS • MANUFACTURING EXCELLENCE • </span>
            <span>TOTAL APPAREL JOURNAL • LATEST INSIGHTS • MANUFACTURING EXCELLENCE • </span>
         </motion.div>
      </div>

      {/* Featured Article Hero Section */}
      <div className="pt-32 lg:pt-48 px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto relative z-10">
         <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
               <motion.div 
                  initial={{ opacity: 0, y: 30 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.8, ease: "easeOut" }}
               >
                 <div className="inline-flex items-center gap-2 border border-[#C9A227] px-4 py-1.5 rounded-full text-[#C9A227] text-[10px] font-black tracking-[0.2em] uppercase mb-8 shadow-sm">
                   <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
                   Featured • {featuredArticle.category}
                 </div>
                 
                 <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight mb-8">
                   The Future of <br className="hidden md:block" />
                   <span className="text-[#C9A227] italic font-serif">Sustainable</span> Denim
                 </h1>
                 
                 <p className="text-gray-600 text-lg lg:text-xl mb-10 max-w-xl leading-relaxed">
                   {featuredArticle.excerpt}
                 </p>
                 
                 <div className="flex items-center gap-6 mb-10">
                    <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
                       <Clock className="w-4 h-4" /> {featuredArticle.readTime}
                    </div>
                    <div className="w-1 h-1 rounded-full bg-gray-300" />
                    <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                       {featuredArticle.date}
                    </div>
                 </div>

                 <Link href={featuredArticle.href} className="group inline-flex items-center gap-4 text-white bg-[#1A1A1A] hover:bg-[#C9A227] px-8 py-5 rounded-full text-xs font-black tracking-[0.15em] uppercase transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                   Read Full Story
                   <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                     <ArrowUpRight className="w-4 h-4" />
                   </div>
                 </Link>
               </motion.div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95, rotate: 2 }} 
                 animate={{ opacity: 1, scale: 1, rotate: 0 }} 
                 transition={{ duration: 1, ease: "easeOut" }}
                 className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-square rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl group border-[8px] border-white"
               >
                 <Image 
                   src={featuredArticle.image} 
                   alt="Featured" 
                   fill 
                   className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                   priority 
                 />
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
               </motion.div>
            </div>

         </div>
      </div>

      {/* Latest News Grid */}
      <div className="mt-32 md:mt-48 px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto relative z-10">
         
         {/* Section Header */}
         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-gray-200 pb-8 gap-6">
           <div>
             <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">Latest Stories</h2>
             <p className="text-gray-500 mt-2 text-sm md:text-base">Insights and updates from the factory floor to global shipping.</p>
           </div>
           <Link href="#" className="group flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.15em] text-[#C9A227] hover:text-[#1A1A1A] transition-colors bg-white px-6 py-3 rounded-full border border-gray-100 shadow-sm hover:shadow-md">
             View All Articles
             <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </Link>
         </div>
         
         {/* Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
           {articles.map((article, idx) => (
              <Link key={article.id} href={`/news/${article.id}`} className="group block">
                 <motion.div 
                   initial={{ opacity: 0, y: 40 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-50px" }}
                   transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                   className="flex flex-col h-full"
                 >
                   <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                      <Image 
                        src={article.image} 
                        alt={article.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
                      
                      {/* Floating Category Badge */}
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-[#1A1A1A] shadow-md transform group-hover:-translate-y-1 transition-transform duration-300">
                         {article.category}
                      </div>
                   </div>
                   
                   <div className="flex flex-col flex-1 px-2">
                     <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">
                        <span>{article.date}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                        <span className="flex items-center gap-1.5 text-[#1A1A1A]"><Clock className="w-3 h-3"/> {article.readTime}</span>
                     </div>
                     
                     <h3 className="text-2xl font-bold text-[#1A1A1A] leading-[1.3] group-hover:text-[#C9A227] transition-colors mb-4">
                        {article.title}
                     </h3>
                     
                     <div className="mt-auto inline-flex items-center gap-2 text-[#1A1A1A] text-[10px] font-black uppercase tracking-[0.2em]">
                        Read Article
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#C9A227] transition-all" />
                     </div>
                   </div>
                 </motion.div>
              </Link>
           ))}
         </div>

         {/* Load More Button */}
         <div className="w-full flex justify-center mt-24">
            <button className="px-12 py-5 bg-white border border-gray-200 text-[#1A1A1A] text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-1">
              Load More Insights
            </button>
         </div>

      </div>
      
    </main>
  );
}
