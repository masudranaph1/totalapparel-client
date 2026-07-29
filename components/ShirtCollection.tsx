"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: 1,
    name: "T-Shirt Basic - Pure White",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
    price: "€45,00",
    originalPrice: "€60,00",
    badges: ["-25%", "ESSENTIAL"]
  },
  {
    id: 2,
    name: "Camicia Casual - Deep Denim",
    image: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?q=80&w=800&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop",
    price: "€104,30",
    originalPrice: "€149,00",
    badges: ["-30%", "ICONS"]
  },
  {
    id: 3,
    name: "Camicia 100% lino - Sky Blue",
    image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=800&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?q=80&w=800&auto=format&fit=crop",
    price: "€97,30",
    originalPrice: "€139,00",
    badges: ["-30%", "PREMIUM"]
  },
  {
    id: 4,
    name: "T-Shirt Urban - Minimal Black",
    image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=800&auto=format&fit=crop",
    hoverImage: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
    price: "€55,00",
    originalPrice: "€75,00",
    badges: ["-26%", "NEW"]
  }
];

const ShirtCollection = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="w-full bg-black py-24 md:py-32 overflow-hidden border-t border-zinc-900">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-zinc-500 mb-6">
              Featured Manufacturing
            </h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-tight leading-[1.1]">
              T-Shirt e Camicie:<br/>lo stile di tutti i giorni
            </h2>
            <p className="text-lg text-zinc-400 max-w-xl font-light leading-relaxed">
              Dal comfort del cotone alla leggerezza del lino. Scopri la nostra selezione di t-shirt essenziali e camicie dal taglio contemporaneo, pensate per accompagnarti in ogni momento della giornata.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <Link 
              href="#"
              className="inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-white hover:text-zinc-400 transition-colors group"
            >
              <span>Camicie Lifestyle</span>
              <span className="w-12 h-[1px] bg-white group-hover:bg-zinc-400 transition-colors"></span>
              <span>Scoprile Tutte</span>
            </Link>
          </motion.div>
        </div>

        {/* Cinematic Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="group relative flex flex-col cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[3/4] bg-zinc-900 overflow-hidden rounded-sm mb-6">
                
                {/* Badges Floating Top */}
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                  {product.badges.map((badge, i) => (
                    <span 
                      key={i}
                      className={`text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 backdrop-blur-md ${
                        badge.includes("%") 
                          ? "bg-white text-black" 
                          : "bg-black/50 text-white border border-white/20"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Front Image */}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={`object-cover object-center transition-all duration-1000 ${
                    hoveredProduct === product.id ? "opacity-0 scale-105" : "opacity-70 scale-100"
                  }`}
                />
                
                {/* Back Image (Hover) */}
                <Image
                  src={product.hoverImage}
                  alt={`${product.name} back view`}
                  fill
                  className={`object-cover object-center transition-all duration-1000 ${
                    hoveredProduct === product.id ? "opacity-70 scale-100" : "opacity-0 scale-105"
                  }`}
                />
                
                <div className="absolute inset-0 bg-black/20 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                <h3 className="text-sm font-medium text-white tracking-wide mb-3">
                  {product.name}
                </h3>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-white">{product.price}</span>
                  <span className="text-xs font-light text-zinc-500 line-through">{product.originalPrice}</span>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ShirtCollection;
