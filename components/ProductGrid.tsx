"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ['All Categories', 'Socks', 'Headwear', 'Accessories', 'Workwear', 'Home Textile', 'Childrens Clothing', 'Womens Clothing', 'Mens Clothing'];
const SUB_CATEGORIES = ['All', 'Hoodie & Sweatshirts', 'Jacket & Vest', 'Jeans', 'Pants & Trousers', 'Shirts', 'Shorts', 'Sleepwear'];

const productsData = [
  {
    id: 1,
    name: "Aero-Tech Windbreaker",
    price: "$185.00",
    category: "Mens Clothing",
    subCategory: "Jacket & Vest",
    imgPrimary: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1556821835-1d483bb0f1c9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Cargo Utility Pant",
    price: "$120.00",
    category: "Mens Clothing",
    subCategory: "Pants & Trousers",
    imgPrimary: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1624378441864-6dea1e8ebcbd?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Element Running Shell",
    price: "$145.00",
    category: "Mens Clothing",
    subCategory: "Jacket & Vest",
    imgPrimary: "https://images.unsplash.com/photo-1578681994506-b8f463449011?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1578681994506-b8f463449011?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Stealth Runner Vest",
    price: "$95.00",
    category: "Mens Clothing",
    subCategory: "Jacket & Vest",
    imgPrimary: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Heavyweight Boxy Tee",
    price: "$45.00",
    category: "Mens Clothing",
    subCategory: "Shirts",
    imgPrimary: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Oversized Denim Jacket",
    price: "$220.00",
    category: "Womens Clothing",
    subCategory: "Jacket & Vest",
    imgPrimary: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0eb?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "French Terry Hoodie",
    price: "$110.00",
    category: "Mens Clothing",
    subCategory: "Hoodie & Sweatshirts",
    imgPrimary: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1556821835-1d483bb0f1c9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Urban Track Pants",
    price: "$85.00",
    category: "Mens Clothing",
    subCategory: "Pants & Trousers",
    imgPrimary: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Knit Beanie",
    price: "$35.00",
    category: "Accessories",
    subCategory: "Headwear",
    imgPrimary: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Tactical Crossbody Bag",
    price: "$125.00",
    category: "Accessories",
    subCategory: "All",
    imgPrimary: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 11,
    name: "Performance Shorts",
    price: "$65.00",
    category: "Mens Clothing",
    subCategory: "Shorts",
    imgPrimary: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 12,
    name: "Puffer Down Vest",
    price: "$195.00",
    category: "Mens Clothing",
    subCategory: "Jacket & Vest",
    imgPrimary: "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1544441892-799da3347efc?q=80&w=800&auto=format&fit=crop",
  },
];

const ProductCard = ({ product, index }: { product: any; index: number }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col cursor-pointer"
    >
      {/* Image Area */}
      <div className="relative aspect-[4/5] w-full bg-[#f3f4f6] mb-4 overflow-hidden rounded-[4px]">
        <div className="absolute inset-0 p-6 flex items-center justify-center">
          <Image
            src={product.imgPrimary}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        
        {/* Badges Top Left */}
        <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
           {product.id % 3 === 0 && (
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
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </button>
          <button className="w-8 h-8 bg-white rounded shadow-sm flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-50 transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </button>
          <button className="w-8 h-8 bg-white rounded shadow-sm flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-50 transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></svg>
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-1">
             <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#facc15]"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <span className="text-[11px] font-bold text-gray-700">4.5</span>
          </div>
        </div>
        
        <h3 className="text-[13px] font-bold text-gray-900 mb-1 truncate group-hover:text-black transition-colors">
          {product.name}
        </h3>
        
        <p className="text-[11px] text-gray-500 mb-2 truncate">
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

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [activeSubCategory, setActiveSubCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isSubCategoryOpen, setIsSubCategoryOpen] = useState(true);

  // Filtering logic
  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      const matchCategory = activeCategory === "All Categories" || p.category === activeCategory;
      const matchSub = activeSubCategory === "All" || p.subCategory === activeSubCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSub && matchSearch;
    });
  }, [activeCategory, activeSubCategory, searchQuery]);

  const handleClearAll = () => {
    setActiveCategory("All Categories");
    setActiveSubCategory("All");
    setSearchQuery("");
  };

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Info Bar */}
        <div className="w-full bg-green-50 text-green-700 text-[10px] md:text-xs font-bold px-4 py-3 rounded-md mb-8 flex items-center shadow-sm">
           <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
           Performance Optimized: Filtering system is now active and reactive
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT SIDEBAR */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/4 xl:w-1/5 flex-shrink-0 flex flex-col space-y-8 bg-white border border-gray-100 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-fit lg:sticky lg:top-28 z-10"
          >
            <div className="flex justify-between items-center border-b border-gray-100 pb-4">
              <h3 className="font-black text-sm uppercase tracking-widest flex items-center text-black">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></svg>
                Filters
              </h3>
              <span onClick={handleClearAll} className="text-[10px] uppercase tracking-widest text-rose-500 font-bold cursor-pointer hover:text-rose-600 transition-colors bg-rose-50 px-2 py-1 rounded-md">Clear all</span>
            </div>

            {/* Search */}
            <div>
               <p className="text-[10px] font-black text-gray-400 mb-3 uppercase tracking-widest">Search Products</p>
               <div className="relative group">
                 <input 
                   type="text" 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   placeholder="Search by name or code" 
                   className="w-full text-sm font-medium border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-black focus:ring-1 focus:ring-black transition-all bg-gray-50 focus:bg-white placeholder-gray-400" 
                 />
                 <svg className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
               </div>
            </div>

            {/* Categories */}
            <div>
               <p 
                 className="text-xs font-black text-black mb-4 uppercase tracking-widest flex justify-between cursor-pointer group"
                 onClick={() => setIsCategoryOpen(!isCategoryOpen)}
               >
                 Categories 
                 <span className={`text-gray-300 group-hover:text-black transition-transform duration-300 ${isCategoryOpen ? 'rotate-180' : ''}`}>^</span>
               </p>
               <AnimatePresence>
                 {isCategoryOpen && (
                   <motion.div 
                     initial={{ height: 0, opacity: 0 }} 
                     animate={{ height: "auto", opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     className="space-y-3 overflow-hidden"
                   >
                     {CATEGORIES.map((cat) => {
                       const isActive = activeCategory === cat;
                       return (
                         <motion.label 
                           key={cat} 
                           onClick={() => { setActiveCategory(cat); setActiveSubCategory("All"); }}
                           className="flex items-center space-x-3 cursor-pointer group"
                         >
                           <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${isActive ? 'border-black bg-black scale-110' : 'border-gray-200 bg-gray-50 group-hover:border-gray-400'}`}>
                             {isActive && <div className="w-2 h-2 rounded-full bg-white" />}
                           </div>
                           <span className={`text-sm tracking-wide transition-colors ${isActive ? 'font-black text-black' : 'font-medium text-gray-500 group-hover:text-black'}`}>{cat}</span>
                         </motion.label>
                       );
                     })}
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>

            {/* Sub Categories */}
            <div>
               <p 
                 className="text-xs font-black text-black mb-4 uppercase tracking-widest flex justify-between cursor-pointer group"
                 onClick={() => setIsSubCategoryOpen(!isSubCategoryOpen)}
               >
                 Sub Categories ({SUB_CATEGORIES.length}) 
                 <span className={`text-gray-300 group-hover:text-black transition-transform duration-300 ${isSubCategoryOpen ? 'rotate-180' : ''}`}>^</span>
               </p>
               <AnimatePresence>
                 {isSubCategoryOpen && (
                   <motion.div 
                     initial={{ height: 0, opacity: 0 }} 
                     animate={{ height: "auto", opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     className="space-y-3 max-h-56 overflow-y-auto pr-2 custom-scrollbar overflow-hidden"
                   >
                     {SUB_CATEGORIES.map((sub) => {
                       const isActive = activeSubCategory === sub;
                       return (
                         <motion.label 
                           key={sub} 
                           onClick={() => setActiveSubCategory(sub)}
                           className="flex items-center space-x-3 cursor-pointer group"
                         >
                           <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-300 ${isActive ? 'border-black bg-black scale-110' : 'border-gray-200 bg-gray-50 group-hover:border-gray-400'}`}>
                              {isActive && <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                           </div>
                           <span className={`text-sm tracking-wide transition-colors ${isActive ? 'font-black text-black' : 'font-medium text-gray-500 group-hover:text-black'}`}>{sub}</span>
                         </motion.label>
                       );
                     })}
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>

            {/* Accordions */}
            <div className="border-t border-gray-100 pt-5 flex justify-between cursor-pointer group">
              <span className="text-xs font-black text-black uppercase tracking-widest">Sizes (29)</span>
              <span className="text-gray-300 group-hover:text-black transition-colors">v</span>
            </div>
            <div className="border-t border-gray-100 pt-5 flex justify-between cursor-pointer group">
              <span className="text-xs font-black text-black uppercase tracking-widest">Colors (49)</span>
              <span className="text-gray-300 group-hover:text-black transition-colors">v</span>
            </div>
          </motion.div>

          {/* RIGHT MAIN CONTENT */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="w-full lg:w-3/4 xl:w-4/5 flex flex-col"
          >
            {/* Header / Top Bar */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 space-y-6 md:space-y-0 pb-6 border-b border-gray-100">
               <div>
                 <motion.h2 layoutId="page-title" className="text-3xl md:text-5xl font-black tracking-tighter text-black mb-3">
                   {activeCategory === 'All Categories' ? 'The Collection.' : `${activeCategory}.`}
                 </motion.h2>
                 <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">
                   Showing 1 to {filteredProducts.length} of {filteredProducts.length} products • Page 1 of 1
                 </p>
                 <div className="flex flex-wrap gap-2 mt-5 h-8">
                   <AnimatePresence>
                     {(activeCategory !== 'All Categories' || activeSubCategory !== 'All' || searchQuery) && (
                       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-wrap gap-2">
                         {activeCategory !== 'All Categories' && (
                           <motion.span 
                             initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                             onClick={() => setActiveCategory('All Categories')}
                             className="bg-black text-white text-[10px] font-black px-4 py-2 rounded-full flex items-center tracking-widest shadow-md hover:bg-gray-800 cursor-pointer transition-colors"
                           >
                              CATEGORY: {activeCategory.toUpperCase()} <span className="ml-3 font-bold text-gray-400 hover:text-white">✕</span>
                           </motion.span>
                         )}
                         {activeSubCategory !== 'All' && (
                           <motion.span 
                             initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                             onClick={() => setActiveSubCategory('All')}
                             className="bg-black text-white text-[10px] font-black px-4 py-2 rounded-full flex items-center tracking-widest shadow-md hover:bg-gray-800 cursor-pointer transition-colors"
                           >
                              SUB: {activeSubCategory.toUpperCase()} <span className="ml-3 font-bold text-gray-400 hover:text-white">✕</span>
                           </motion.span>
                         )}
                         <motion.span 
                           initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                           onClick={handleClearAll}
                           className="text-[10px] text-gray-400 font-black px-3 py-2 cursor-pointer hover:text-rose-500 uppercase tracking-widest transition-colors flex items-center"
                         >
                            Clear All
                         </motion.span>
                       </motion.div>
                     )}
                   </AnimatePresence>
                 </div>
               </div>
               
               <div className="flex items-center space-x-3">
                 <div className="relative group">
                   <select 
                     value={activeCategory}
                     onChange={(e) => { setActiveCategory(e.target.value); setActiveSubCategory("All"); }}
                     className="appearance-none text-xs border border-gray-200 rounded-xl px-4 py-2.5 pr-8 outline-none font-bold text-gray-700 cursor-pointer bg-white hover:border-black transition-colors uppercase tracking-wider shadow-sm"
                   >
                     {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                   </select>
                   <svg className="w-3 h-3 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m6 9 6 6 6-6"/></svg>
                 </div>
                 
                 <div className="relative group hidden sm:block">
                   <select 
                     value={activeSubCategory}
                     onChange={(e) => setActiveSubCategory(e.target.value)}
                     className="appearance-none text-xs border border-gray-200 rounded-xl px-4 py-2.5 pr-8 outline-none font-bold text-gray-700 cursor-pointer bg-white hover:border-black transition-colors uppercase tracking-wider shadow-sm"
                   >
                     {SUB_CATEGORIES.map(s => <option key={s} value={s}>{s}</option>)}
                   </select>
                   <svg className="w-3 h-3 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m6 9 6 6 6-6"/></svg>
                 </div>
                 
                 <div className="relative group">
                   <select className="appearance-none text-xs border border-gray-200 rounded-xl px-4 py-2.5 pr-8 outline-none font-bold text-gray-700 cursor-pointer bg-white hover:border-black transition-colors uppercase tracking-wider shadow-sm">
                     <option>Newest First</option>
                     <option>Price: Low to High</option>
                     <option>Price: High to Low</option>
                   </select>
                   <svg className="w-3 h-3 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m6 9 6 6 6-6"/></svg>
                 </div>
                 
                 <div className="flex bg-gray-100 rounded-xl p-1 ml-2 shadow-inner border border-gray-200">
                   <button className="bg-white shadow p-1.5 rounded-lg text-black transition-transform hover:scale-105"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></button>
                   <button className="p-1.5 rounded-lg text-gray-400 hover:text-black transition-colors hover:bg-gray-200/50"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="5" width="18" height="2" rx="1"/><rect x="3" y="11" width="18" height="2" rx="1"/><rect x="3" y="17" width="18" height="2" rx="1"/></svg></button>
                 </div>
               </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1 min-h-[500px]">
              <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-12 sm:gap-y-16">
                <AnimatePresence>
                  {filteredProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                  
                  {filteredProducts.length === 0 && (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      exit={{ opacity: 0 }}
                      className="col-span-full py-20 text-center flex flex-col items-center justify-center"
                    >
                      <svg className="w-16 h-16 text-gray-200 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                      <h3 className="text-xl font-bold text-gray-400">No products found</h3>
                      <p className="text-gray-400 mt-2">Try adjusting your filters or search query.</p>
                      <button onClick={handleClearAll} className="mt-6 px-6 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-gray-800 transition-colors">Clear Filters</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
