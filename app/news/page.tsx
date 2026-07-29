"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

// --- MOCK DATA ---
const featuredArticle = {
  id: "feat-1",
  title: "The Future of Sustainable Denim: Closed-Loop Water Systems",
  category: "Sustainability",
  date: "July 24, 2026",
  readTime: "8 min read",
  excerpt: "As the global fashion industry rapidly shifts towards true circularity, we explore how our newly implemented closed-loop water systems and ozone washing techniques are fundamentally revolutionizing high-volume raw denim manufacturing.",
  image: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=2000&auto=format&fit=crop", // Denim fabric/factory vibe
  href: "/news/sustainable-denim"
};

const articles = [
  {
    id: "art-1",
    title: "Navigating Global Logistics: SS26 Freight Updates",
    category: "Supply Chain",
    date: "July 20, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1200&auto=format&fit=crop", // Shipping containers
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2", // Wide horizontal card
    aspect: "aspect-[2/1] md:aspect-[2.5/1]"
  },
  {
    id: "art-2",
    title: "Material Focus: The Rise of 400gsm Heavyweight French Terry",
    category: "Fabric Innovation",
    date: "July 15, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop", // Fabric close up
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1", // Square card
    aspect: "aspect-square"
  },
  {
    id: "art-3",
    title: "Inside the Facility: New Quality Assurance Protocols",
    category: "Operations",
    date: "July 08, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop", // Machinery/Factory
    colSpan: "col-span-1 md:col-span-1 lg:col-span-1", // Square card
    aspect: "aspect-square"
  },
  {
    id: "art-4",
    title: "Client Spotlight: Scaling a Luxury Streetwear Syndicate",
    category: "Case Study",
    date: "June 28, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?q=80&w=1200&auto=format&fit=crop", // Streetwear model
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2", // Wide card
    aspect: "aspect-[2/1] md:aspect-[2.5/1]"
  }
];

export default function NewsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <main className="w-full min-h-screen bg-white relative selection:bg-brand-accent selection:text-white pb-32">
      
      {/* Cinematic Dark Hero Header */}
      <div className="relative w-full h-[60vh] md:h-[70vh] bg-zinc-950 overflow-hidden flex items-end pb-20 rounded-b-[3rem] md:rounded-b-[5rem] z-10">
        <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 origin-top opacity-60">
           {/* Abstract dark architectural image or pattern for the header background */}
           <Image 
             src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
             alt="Factory Architecture"
             fill
             className="object-cover mix-blend-overlay grayscale"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
        </motion.div>
        
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12">
          <div className="max-w-[1600px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h4 className="text-brand-accent text-xs font-black tracking-[0.3em] uppercase mb-4">Editorial</h4>
              <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-medium tracking-tighter text-white leading-[0.9]">
                News & <span className="italic font-serif text-brand-accent">Insights.</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-12 -mt-16 md:-mt-32">
        <div className="max-w-[1600px] mx-auto flex flex-col gap-8 md:gap-12">
          
          {/* Featured Article (Massive Card) */}
          <Link href={featuredArticle.href} className="group block w-full">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-square md:aspect-[2.5/1] bg-zinc-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image 
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 lg:p-16 flex flex-col justify-end">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="bg-brand-accent text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                    {featuredArticle.category}
                  </span>
                  <div className="flex items-center gap-2 text-white/70 text-xs font-medium tracking-wide">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredArticle.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredArticle.date}</span>
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight mb-4 max-w-4xl">
                  {featuredArticle.title}
                </h2>
                
                <p className="text-white/70 text-base md:text-lg font-light max-w-3xl hidden md:block mb-8 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                
                <div className="flex items-center gap-3 text-white text-xs font-black uppercase tracking-[0.2em] group/btn">
                  Read Article
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-brand-accent transition-colors duration-300">
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Bento Grid for Secondary Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-10">
            {articles.map((article, idx) => (
              <Link 
                key={article.id} 
                href={`/news/${article.id}`}
                className={`group block w-full ${article.colSpan}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col h-full"
                >
                  <div className={`relative w-full ${article.aspect} bg-gray-100 rounded-[2rem] overflow-hidden mb-6`}>
                    <Image 
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    
                    {/* Floating Category Tag */}
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur-md text-black text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col flex-1 px-2">
                    <div className="flex items-center gap-2 text-gray-400 text-xs font-medium tracking-wide mb-3">
                      <span>{article.date}</span>
                      <span className="mx-1">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-black mb-4 leading-[1.2] group-hover:text-brand-accent transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    <div className="mt-auto flex items-center gap-2 text-black text-[10px] font-black uppercase tracking-[0.2em]">
                      <span className="relative">
                        Read Story
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300 ease-out" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="w-full flex justify-center mt-20">
             <button className="px-10 py-4 bg-white border border-gray-200 text-black text-[11px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-black hover:text-white transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1">
               Load More Insights
             </button>
          </div>

        </div>
      </div>
      
    </main>
  );
}
