"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ShoppingBag, Heart, ArrowLeftRight, Star } from "lucide-react";

const bestSellers = [
  {
    id: 1,
    name: "Heavyweight Boxy Tee",
    category: "Premium Blanks",
    price: "$18.00",
    moq: "50 pcs",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    colors: 5,
  },
  {
    id: 2,
    name: "French Terry Pullover",
    category: "Hoodies & Sweats",
    price: "$28.50",
    moq: "30 pcs",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
    colors: 3,
  },
  {
    id: 3,
    name: "Technical Cargo Pant",
    category: "Urban Utility",
    price: "$35.00",
    moq: "40 pcs",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop",
    colors: 2,
  },
  {
    id: 4,
    name: "Oversized Denim Jacket",
    category: "Outerwear",
    price: "$45.00",
    moq: "20 pcs",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=800&auto=format&fit=crop",
    colors: 1,
  },
];

const ProductCard = ({ product, index }: { product: typeof bestSellers[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col group cursor-pointer w-full"
    >
      
      {/* Image Area */}
      <div className="relative aspect-[4/5] w-full bg-[#f3f4f6] mb-4 overflow-hidden rounded-[4px]">
        <div className="absolute inset-0 p-6 flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        
        {/* Badges Top Left */}
        <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
          <span className="bg-[#222222] text-white text-[9px] font-semibold px-2 py-0.5 rounded-[2px] shadow-sm w-fit uppercase">
            MOQ {product.moq}
          </span>
          <span className="bg-[#b3709b] text-white text-[9px] font-semibold px-2 py-0.5 rounded-[2px] shadow-sm w-fit uppercase">
            {product.colors} Colors
          </span>
        </div>

        {/* Tooltip on Hover */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
          <div className="bg-[#2a2a2a] text-white text-[12px] font-medium px-4 py-2 rounded shadow-lg whitespace-nowrap">
            {product.name}
          </div>
        </div>

        {/* Action Buttons Right */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 z-10">
          <button className="w-8 h-8 bg-white rounded shadow-sm flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-50 transition-colors">
            <ShoppingBag className="w-3.5 h-3.5" />
          </button>
          <button className="w-8 h-8 bg-white rounded shadow-sm flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-50 transition-colors">
            <Heart className="w-3.5 h-3.5" />
          </button>
          <button className="w-8 h-8 bg-white rounded shadow-sm flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-50 transition-colors">
            <ArrowLeftRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-[#facc15] text-[#facc15]" />
            <span className="text-[11px] font-bold text-gray-700">4.5</span>
          </div>
        </div>
        
        <h3 className="text-[13px] font-bold text-gray-900 mb-1 truncate">
          <Link href="#" className="hover:text-black transition-colors">
            {product.name}
          </Link>
        </h3>
        
        <p className="text-[11px] text-gray-500 mb-2 truncate uppercase tracking-widest">
          {product.category}
        </p>
        
        <div className="flex items-center gap-2">
          <span className="text-[14px] font-bold text-gray-900">
            {product.price}
          </span>
        </div>
      </div>
      
    </motion.div>
  );
};

export default function BestSelling() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-full bg-white py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-100 relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-8 md:space-y-0" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-rose-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 flex items-center">
              <span className="w-8 h-[2px] bg-rose-500 mr-4"></span>
              Trending Now
            </h3>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black uppercase">
              Best Sellers<span className="text-rose-500">.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <Link 
              href="/collection" 
              className="group relative flex items-center text-sm font-black uppercase tracking-[0.2em] text-black hover:text-rose-500 transition-colors py-2"
            >
              Shop All Bestsellers
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-rose-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-12 sm:gap-y-16">
          {bestSellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
