"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, ShoppingBag } from "lucide-react";

const recommendations = [
  {
    id: 1,
    name: "Knitted Oversized Sweater",
    category: "Winter Essentials",
    price: "$55.00",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: 2,
    name: "Minimalist Linen Shirt",
    category: "Summer Collection",
    price: "$42.00",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=800&auto=format&fit=crop",
    isNew: false,
  },
  {
    id: 3,
    name: "Classic Denim Trousers",
    category: "Everyday Wear",
    price: "$68.00",
    image: "https://images.unsplash.com/photo-1542272604-780c8d52f5ce?q=80&w=800&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: 4,
    name: "Premium Cotton Hoodie",
    category: "Lounge Wear",
    price: "$48.00",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
    isNew: false,
  },
  {
    id: 5,
    name: "Aero-Tech Windbreaker",
    category: "Outerwear",
    price: "$185.00",
    image: "https://images.unsplash.com/photo-1556821835-1d483bb0f1c9?q=80&w=800&auto=format&fit=crop",
    isNew: true,
  }
];

const ProductCard = ({ product, index }: { product: typeof recommendations[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group flex flex-col relative w-full cursor-pointer"
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100 rounded-3xl mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-700 ease-out border border-white/50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 450px"
        />
        
        {/* Soft dark gradient at bottom for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-5 left-5 z-10 flex gap-2">
          {product.isNew && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white/90 backdrop-blur-sm text-black text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg"
            >
              NEW ARRIVAL
            </motion.div>
          )}
        </div>
        
        {/* Wishlist Button */}
        <div className="absolute top-5 right-5 z-10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100">
          <button className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-black hover:text-white hover:bg-rose-500 transition-all duration-300 shadow-xl hover:scale-110">
            <Heart className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Add Button */}
        <div className="absolute inset-x-5 bottom-5 translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20">
          <button className="w-full bg-white/80 backdrop-blur-lg text-black py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-2xl border border-white/50">
            <ShoppingBag className="w-4 h-4 mr-3" />
            Quick Add
          </button>
        </div>
      </div>

      <div className="flex flex-col space-y-2 px-2">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-lg font-black text-black tracking-wide uppercase leading-tight group-hover:text-rose-500 transition-colors duration-300">
            {product.name}
          </h3>
          <span className="text-lg font-bold text-gray-900 shrink-0 bg-gray-100 px-3 py-1 rounded-full">{product.price}</span>
        </div>
        <div className="flex items-center text-[11px] text-gray-500 font-bold uppercase tracking-[0.2em]">
          {product.category}
        </div>
      </div>
    </motion.div>
  );
};

export default function RecommendedForYou() {
  const containerRef = useRef(null);
  
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#f8f9fa] py-24 md:py-32 border-y border-gray-100 relative overflow-hidden" ref={containerRef}>
      
      {/* Background Watermark */}
      <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none select-none z-0 opacity-[0.03]">
        <h2 className="text-[15vw] font-black whitespace-nowrap text-black uppercase tracking-tighter leading-none">
          Curated For You
        </h2>
      </div>

      {/* Decorative Title Area */}
      <div className="w-full px-4 sm:px-6 lg:px-12 mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-16 h-[2px] bg-rose-500"></span>
            <span className="text-rose-500 font-black tracking-[0.4em] uppercase text-xs">Personalized Picks</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase leading-[0.9]">
            Curated<br/>For You<span className="text-rose-500">.</span>
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="pb-2 flex flex-col items-start md:items-end"
        >
          <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed max-w-md md:text-right mb-8">
            Discover fresh looks and modern outfits that define your unique style. Swipe to explore premium selections tailored just for you.
          </p>
          <div className="flex items-center justify-between w-full md:w-auto gap-8">
            <Link 
              href="/collection" 
              className="group flex items-center text-xs font-black uppercase tracking-[0.2em] text-black hover:text-rose-500 transition-colors"
            >
              View All Selections
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center ml-4 group-hover:bg-rose-500 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Product Grid */}
      <div className="w-full relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8 pb-16">
          {recommendations.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
