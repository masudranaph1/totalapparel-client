"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const onSellingProducts = [
  {
    id: 1,
    name: "Armani Veni Vidi Vici",
    description: "Fendi began life in 1925 as a fu...",
    price: 17.99,
    originalPrice: 20.00,
    image: "https://images.unsplash.com/photo-1596755094514-f87e32f6b717?q=80&w=400&auto=format&fit=crop", // placeholder
  },
  {
    id: 2,
    name: "Adidas Shoes Black",
    description: "Men Black top shoes gown",
    price: 45.00,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=400&auto=format&fit=crop", // shoe
  },
  {
    id: 3,
    name: "Gucci Carlton UK",
    description: "Knitted midi A-line dress, has a...",
    price: 14.99,
    originalPrice: 19.99,
    image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?q=80&w=400&auto=format&fit=crop", // woman dress
  },
  {
    id: 4,
    name: "Scuba Stand Collar Topper",
    description: "Zara provides only the highest-...",
    price: 12.00,
    originalPrice: 16.00,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop", // jacket
  },
  {
    id: 5,
    name: "Regular Fit Crew-neck T-s...",
    description: "Self-striped knitted midi A-line...",
    price: 12.30,
    originalPrice: 16.30,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400&auto=format&fit=crop", // t-shirt
  },
  {
    id: 6,
    name: "Hermes Carlton London",
    description: "Off-White self-striped knitted ...",
    price: 15.00,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=400&auto=format&fit=crop", // sweater
  },
  {
    id: 7,
    name: "Wayfarer Sunglasses",
    description: "Our optical engineers develope...",
    price: 20.00,
    originalPrice: 25.00,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=400&auto=format&fit=crop", // sunglasses
  },
  {
    id: 8,
    name: "Armani Wide-Leg Trousers",
    description: "Monochrome elegance. Made ...",
    price: 60.00,
    originalPrice: 80.00,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=400&auto=format&fit=crop", // trousers
  },
  {
    id: 9,
    name: "REDQ Steel Watch",
    description: "The Black Bay celebrates 60 ye...",
    price: 80.00,
    originalPrice: 120.00,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=400&auto=format&fit=crop", // watch
  },
];

export default function OnSellingProducts() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            On Selling Products
          </h2>
          <Link href="/collection" className="text-[12px] font-semibold text-gray-500 hover:text-black transition-colors">
            See All Product
          </Link>
        </div>

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Left Promo Banner */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-1 relative h-[400px] lg:h-auto rounded-[4px] overflow-hidden bg-gradient-to-br from-amber-600 to-orange-800 flex flex-col justify-end p-8 group cursor-pointer"
          >
            {/* Background Image overlaid on Orange */}
            <div className="absolute inset-0 mix-blend-overlay opacity-90 transition-transform duration-1000 group-hover:scale-105">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                alt="Promo Model"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>
            
            {/* Dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Promo Text */}
            <div className="relative z-10 flex flex-col items-start">
              <h3 className="text-white text-xl font-bold italic tracking-wider uppercase mb-2 drop-shadow-md">
                SALE OFFER!
              </h3>
              <div className="border-[3px] border-white px-6 py-2 mb-3">
                <span className="text-white text-4xl font-black drop-shadow-md">50%</span>
              </div>
              <p className="text-white text-[10px] font-bold tracking-widest uppercase">
                LIMITED TIME VALID
              </p>
            </div>
          </motion.div>

          {/* Right Product Grid (3x3) */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {onSellingProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-row bg-white rounded-[4px] overflow-hidden group cursor-pointer border border-transparent hover:border-gray-100 hover:shadow-sm transition-all"
              >
                {/* Left side Image (Light Gray Box) */}
                <div className="w-[120px] h-[120px] bg-[#f7f8fa] shrink-0 p-3 relative flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center mix-blend-multiply transition-transform duration-500 group-hover:scale-110 p-2"
                    sizes="120px"
                  />
                </div>
                
                {/* Right side Info */}
                <div className="flex flex-col justify-center px-4 py-2 w-full overflow-hidden">
                  <h4 className="text-[13px] font-bold text-gray-900 truncate group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-[11px] text-gray-500 truncate mb-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center gap-2 mt-auto">
                    <span className="text-[14px] font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-[11px] font-medium text-gray-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
