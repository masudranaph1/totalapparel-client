"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingBag, Heart, ArrowLeftRight } from "lucide-react";

// Mock data based on the provided image
const products = [
  {
    id: 1,
    name: "Armani Veni Vidi Vici",
    description: "Fendi began life in 1925 as a fur and ...",
    price: 17.99,
    originalPrice: 20.00,
    rating: 4.5,
    outOfStock: false,
    discount: "10% OFF",
    newArrival: true,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=600&auto=format&fit=crop", // Using a shirt image as placeholder
  },
  {
    id: 2,
    name: "H&M Global Desi",
    description: "Blue solid woven regular top, curved...",
    price: 30.00,
    originalPrice: 40.00,
    rating: 4.5,
    outOfStock: false,
    discount: "25% OFF",
    newArrival: false,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop", // Backpack placeholder
  },
  {
    id: 3,
    name: "Zara Solly White Shirt",
    description: "For a chic and smart look, don this w...",
    price: 25.00,
    originalPrice: 32.00,
    rating: 4.5,
    outOfStock: true,
    discount: "22% OFF",
    newArrival: true,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop", // Woman holding something placeholder
  },
  {
    id: 4,
    name: "Hermes Carlton London",
    description: "Off-White self-striped knitted midi A-...",
    price: 15.00,
    originalPrice: null,
    rating: 4.5,
    outOfStock: false,
    discount: null,
    newArrival: false,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop", // Black backpack placeholder
  },
  {
    id: 5,
    name: "Scuba Stand Collar Topper Jacket",
    description: "Zara provides only the highest-qualit...",
    price: 12.00,
    originalPrice: 15.00,
    rating: 4.5,
    outOfStock: false,
    discount: "20% OFF",
    newArrival: false,
    image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?q=80&w=600&auto=format&fit=crop", // Woman in white shirt placeholder
  },
  {
    id: 6,
    name: "Armani Wide-Leg Trousers",
    description: "Monochrome elegance. Made with a...",
    price: 60.00,
    originalPrice: 80.00,
    rating: 4.5,
    outOfStock: true,
    discount: "25% OFF",
    newArrival: true,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop", // Shoe placeholder
  },
  {
    id: 7,
    name: "Short Sleeve Shirts For Men",
    description: "From casual days out to parties, din...",
    price: 12.99,
    originalPrice: 18.99,
    rating: 4.5,
    outOfStock: false,
    discount: "32% OFF",
    newArrival: false,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop", // Green shoe placeholder
  },
  {
    id: 8,
    name: "Blazer And A Neck Scarf",
    description: "blue short sleeve basic midi dress fe...",
    price: 13.00,
    originalPrice: 22.00,
    rating: 4.5,
    outOfStock: false,
    discount: "40% OFF",
    newArrival: true,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=600&auto=format&fit=crop", // Man in hoodie placeholder
  }
];

export default function NewArrivals() {
  const [activeTab, setActiveTab] = useState("All Collection");

  const tabs = ["All Collection", "Mens Collection", "Womens Collection", "Kids Collection"];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <h2 className="text-2xl md:text-[22px] font-bold text-gray-900 mb-6">
          New Arrivals
        </h2>

        {/* Tabs */}
        <div className="w-full border-b border-gray-200 mb-10 flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-[13px] font-medium transition-colors relative ${
                activeTab === tab 
                  ? "text-black" 
                  : "text-gray-400 hover:text-black"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black"></div>
              )}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col group cursor-pointer">
              
              {/* Image Area */}
              <div className="relative aspect-[4/5] w-full bg-[#f3f4f6] mb-4 overflow-hidden rounded-[4px]">
                {/* 
                   We use 'object-contain' or 'object-cover' with padding to replicate the image setup. 
                   Using object-cover to make the images fill nicely, 
                   but added p-8 to simulate the inner spacing of the gray box in the design.
                */}
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
                  {product.discount && (
                    <span className="bg-[#222222] text-white text-[9px] font-semibold px-2 py-0.5 rounded-[2px] shadow-sm w-fit">
                      {product.discount}
                    </span>
                  )}
                  {product.newArrival && (
                    <span className="bg-[#b3709b] text-white text-[9px] font-semibold px-2 py-0.5 rounded-[2px] shadow-sm w-fit">
                      New Arrival
                    </span>
                  )}
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
                    <span className="text-[11px] font-bold text-gray-700">{product.rating}</span>
                  </div>
                  {product.outOfStock && (
                    <span className="text-[10px] font-bold text-red-500">Out of stock</span>
                  )}
                </div>
                
                <h3 className="text-[13px] font-bold text-gray-900 mb-1 truncate">
                  <Link href="#" className="hover:text-black transition-colors">
                    {product.name}
                  </Link>
                </h3>
                
                <p className="text-[11px] text-gray-500 mb-2 truncate">
                  {product.description}
                </p>
                
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-[12px] font-medium text-gray-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
