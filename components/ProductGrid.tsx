"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ['All Categories', 'Socks', 'Headwear', 'Accessories', 'Workwear', 'Home Textile', 'Childrens Clothing', 'Womens Clothing', 'Mens Clothing'];
const SUB_CATEGORIES = ['All', 'Hoodie & Sweatshirts', 'Jacket & Vest', 'Jeans', 'Pants & Trousers', 'Shirts', 'Shorts', 'Sleepwear'];

const productsData = [
  {
    id: 1,
    name: "Heavyweight 400gsm Hoodie Blank",
    price: "Est. $22.50 / unit",
    category: "Mens Clothing",
    subCategory: "Hoodie & Sweatshirts",
    imgPrimary: "https://images.unsplash.com/photo-1572495641004-28421ae52e52?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1572495641004-28421ae52e52?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Premium Organic Cotton Tee",
    price: "Est. $8.50 / unit",
    category: "Mens Clothing",
    subCategory: "Shirts",
    imgPrimary: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Technical Wind Shell Jacket",
    price: "Est. $35.00 / unit",
    category: "Mens Clothing",
    subCategory: "Jacket & Vest",
    imgPrimary: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Selvedge Denim Jacket Wholesale",
    price: "Est. $45.00 / unit",
    category: "Womens Clothing",
    subCategory: "Jacket & Vest",
    imgPrimary: "https://images.unsplash.com/photo-1584865288642-42078afe6942?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Custom Utility Cargo Pants",
    price: "Est. $28.00 / unit",
    category: "Mens Clothing",
    subCategory: "Pants & Trousers",
    imgPrimary: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1539533018408-ea2bf8f4ccea?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Minimalist Trench Coat",
    price: "Est. $65.00 / unit",
    category: "Mens Clothing",
    subCategory: "Jacket & Vest",
    imgPrimary: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Knit Oversized Sweater Blank",
    price: "Est. $32.00 / unit",
    category: "Womens Clothing",
    subCategory: "Shirts",
    imgPrimary: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Premium Vegan Leather Tote",
    price: "Est. $40.00 / unit",
    category: "Accessories",
    subCategory: "All",
    imgPrimary: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Classic Dad Hat Customizable",
    price: "Est. $4.50 / unit",
    category: "Accessories",
    subCategory: "Headwear",
    imgPrimary: "https://images.unsplash.com/photo-1533827432537-70133748f5c8?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1533827432537-70133748f5c8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Performance Running Shorts",
    price: "Est. $14.50 / unit",
    category: "Mens Clothing",
    subCategory: "Shorts",
    imgPrimary: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 11,
    name: "Tactical Vest Gilet",
    price: "Est. $38.00 / unit",
    category: "Mens Clothing",
    subCategory: "Jacket & Vest",
    imgPrimary: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 12,
    name: "Wool Blend Tailored Trousers",
    price: "Est. $42.00 / unit",
    category: "Mens Clothing",
    subCategory: "Pants & Trousers",
    imgPrimary: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
    imgSecondary: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
  }
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
            <span className="bg-[#0F172A] text-[#C9A227] text-[9px] font-bold tracking-[0.1em] px-2.5 py-1 rounded-sm shadow-sm w-fit uppercase">
              New Arrival
            </span>
           )}
        </div>

        {/* Tooltip on Hover */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
          <div className="bg-white/95 backdrop-blur-md text-[#1A1A1A] border border-gray-100 text-[12px] font-bold px-4 py-2 rounded-lg shadow-xl whitespace-nowrap">
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
      <div className="flex flex-col px-1">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-1">
             <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#C9A227]"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
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
  const [isColorOpen, setIsColorOpen] = useState(true);
  const [activeColor, setActiveColor] = useState("All");

  const colorsList = [
    { name: 'Signature Gold', hex: '#C9A227' },
    { name: 'Obsidian Black', hex: '#0F172A' },
    { name: 'Pure White', hex: '#FFFFFF' },
    { name: 'Midnight Navy', hex: '#1e3a8a' },
    { name: 'Steel Gray', hex: '#9ca3af' },
  ];

  // Pagination / Scroll state
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Extend data to demonstrate pagination
  const extendedProductsData = useMemo(() => {
    return [...productsData, ...productsData.map(p => ({ ...p, id: p.id + 100, name: p.name + " (Variant)" }))];
  }, []);

  // Filtering logic
  const filteredProducts = useMemo(() => {
    return extendedProductsData.filter((p) => {
      const matchCategory = activeCategory === "All Categories" || p.category === activeCategory;
      const matchSub = activeSubCategory === "All" || p.subCategory === activeSubCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSub && matchSearch;
    });
  }, [activeCategory, activeSubCategory, searchQuery]);

  const handleClearAll = () => {
    setActiveCategory("All Categories");
    setActiveSubCategory("All");
    setActiveColor("All");
    setSearchQuery("");
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12 relative rounded-t-[40px] z-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 relative items-start">
          
          {/* UNIQUE LEFT SIDEBAR */}
          <motion.aside 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[260px] xl:w-[300px] flex-shrink-0 flex flex-col space-y-12 lg:sticky lg:top-32 z-30"
          >
            <div className="flex justify-between items-end border-b border-gray-200 pb-4">
              <h3 className="font-medium text-lg text-black tracking-wide">
                Refine Selection
              </h3>
              {(activeCategory !== 'All Categories' || activeSubCategory !== 'All' || searchQuery) && (
                <motion.span 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  onClick={handleClearAll} 
                  className="text-[11px] uppercase tracking-widest text-gray-500 hover:text-black font-semibold cursor-pointer transition-colors"
                >
                  Reset
                </motion.span>
              )}
            </div>

            {/* Search - Minimalist */}
            <div className="relative group overflow-hidden rounded-none border-b border-gray-200">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search catalog..." 
                className="w-full text-sm font-light px-0 py-3 outline-none transition-all bg-transparent focus:bg-transparent placeholder-gray-400 text-black" 
              />
              <svg className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              
              {/* Animated underline */}
              <div className="absolute bottom-0 left-0 h-[1px] bg-black w-0 group-focus-within:w-full transition-all duration-500 ease-out" />
            </div>

            {/* Categories - Editorial Style */}
            <div className="flex flex-col space-y-4">
               <p 
                 className="text-xs font-semibold text-black uppercase tracking-[0.2em] flex justify-between cursor-pointer group"
                 onClick={() => setIsCategoryOpen(!isCategoryOpen)}
               >
                 Categories 
                 <motion.span animate={{ rotate: isCategoryOpen ? 180 : 0 }} className="text-gray-400">▼</motion.span>
               </p>
               <AnimatePresence>
                 {isCategoryOpen && (
                   <motion.div 
                     initial={{ height: 0, opacity: 0 }} 
                     animate={{ height: "auto", opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     className="space-y-4 overflow-hidden pt-2"
                   >
                     {CATEGORIES.map((cat) => {
                       const isActive = activeCategory === cat;
                       return (
                         <div 
                           key={cat} 
                           onClick={() => { setActiveCategory(cat); setActiveSubCategory("All"); }}
                           className="flex items-center cursor-pointer group relative"
                         >
                           {isActive && (
                             <motion.div layoutId="activeCategoryDot" className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                           )}
                           <span className={`text-sm transition-all duration-300 ${isActive ? 'font-medium text-black translate-x-1' : 'font-light text-gray-500 group-hover:text-black'}`}>
                             {cat}
                           </span>
                         </div>
                       );
                     })}
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>

            {/* Sub Categories - Pill Design */}
            <div className="flex flex-col space-y-4">
               <p 
                 className="text-xs font-semibold text-black uppercase tracking-[0.2em] flex justify-between cursor-pointer group"
                 onClick={() => setIsSubCategoryOpen(!isSubCategoryOpen)}
               >
                 Sub-categories 
                 <motion.span animate={{ rotate: isSubCategoryOpen ? 180 : 0 }} className="text-gray-400">▼</motion.span>
               </p>
               <AnimatePresence>
                 {isSubCategoryOpen && (
                   <motion.div 
                     initial={{ height: 0, opacity: 0 }} 
                     animate={{ height: "auto", opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     className="flex flex-wrap gap-2 overflow-hidden pt-2"
                   >
                     {SUB_CATEGORIES.map((sub) => {
                       const isActive = activeSubCategory === sub;
                       return (
                         <div 
                           key={sub} 
                           onClick={() => setActiveSubCategory(sub)}
                           className={`cursor-pointer px-4 py-2 rounded-full border text-[11px] uppercase tracking-wider transition-all duration-300 ${
                             isActive 
                              ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-md scale-105' 
                              : 'bg-white text-gray-500 border-gray-200 hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
                           }`}
                         >
                           {sub}
                         </div>
                       );
                     })}
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>

            {/* Decorative Accordions */}
            <div className="border-t border-gray-200 pt-6 flex justify-between cursor-pointer group">
              <span className="text-[11px] font-semibold text-gray-400 group-hover:text-black uppercase tracking-[0.2em] transition-colors">Sizes (29)</span>
              <span className="text-gray-300 group-hover:text-black transition-colors">+</span>
            </div>
            
            {/* Colors - Premium Swatch Design */}
            <div className="border-t border-gray-200 pt-6 flex flex-col space-y-4">
              <p 
                 className="text-[11px] font-semibold text-gray-400 group-hover:text-black uppercase tracking-[0.2em] flex justify-between cursor-pointer group transition-colors"
                 onClick={() => setIsColorOpen(!isColorOpen)}
               >
                 Colors (49)
                 <motion.span animate={{ rotate: isColorOpen ? 180 : 0 }} className="text-gray-300 group-hover:text-black">▼</motion.span>
               </p>
               <AnimatePresence>
                 {isColorOpen && (
                   <motion.div 
                     initial={{ height: 0, opacity: 0 }} 
                     animate={{ height: "auto", opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     className="flex flex-wrap gap-3 overflow-hidden pt-2"
                   >
                     {colorsList.map((color) => {
                       const isActive = activeColor === color.name;
                       return (
                         <div 
                           key={color.name}
                           title={color.name}
                           onClick={() => setActiveColor(color.name)}
                           className={`relative w-8 h-8 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 ${
                             isActive ? 'scale-110 shadow-md ring-2 ring-[#C9A227] ring-offset-2' : 'hover:scale-110 hover:shadow-sm'
                           }`}
                           style={{ 
                             backgroundColor: color.hex,
                             border: color.name === 'Pure White' ? '1px solid #e5e7eb' : 'none'
                           }}
                         >
                           {isActive && (
                             <motion.div 
                               initial={{ scale: 0 }} animate={{ scale: 1 }}
                               className={`w-2 h-2 rounded-full ${color.name === 'Pure White' ? 'bg-[#1A1A1A]' : 'bg-white'}`}
                             />
                           )}
                         </div>
                       );
                     })}
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>
          </motion.aside>

          {/* RIGHT MAIN CONTENT */}
          <motion.main 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="w-full lg:w-[calc(100%-260px)] xl:w-[calc(100%-300px)] flex flex-col"
          >
            {/* Header / Top Bar */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 space-y-6 md:space-y-0">
               <div className="flex flex-col items-start relative">
                 <motion.h2 layoutId="page-title" className="text-5xl md:text-7xl font-serif italic tracking-tight text-black mb-2">
                   {activeCategory === 'All Categories' ? 'Collection' : activeCategory}
                 </motion.h2>
                 
                 {/* Count Badge */}
                 <div className="absolute -top-4 -right-8 w-10 h-10 bg-[#FAFAFA] rounded-full flex items-center justify-center text-sm font-bold text-[#C9A227] shadow-sm border border-gray-100">
                    {filteredProducts.length}
                 </div>
                 
                 <p className="text-[11px] text-gray-400 font-medium uppercase tracking-[0.2em] mt-4">
                   Showing results for your selection
                 </p>
               </div>
               
               <div className="flex items-center space-x-6 border-b border-gray-200 pb-2">
                 <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Sort By</span>
                 <div className="relative group cursor-pointer">
                   <select className="appearance-none text-sm font-medium text-black bg-transparent pr-6 cursor-pointer outline-none">
                     <option>Newest Arrivals</option>
                     <option>Price: Low to High</option>
                     <option>Price: High to Low</option>
                   </select>
                   <svg className="w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                 </div>
               </div>
            </div>

            {/* Active Filters Bar */}
            <div className="flex flex-wrap gap-3 mb-10 min-h-[32px]">
              <AnimatePresence>
                {(activeCategory !== 'All Categories' || activeSubCategory !== 'All' || activeColor !== 'All' || searchQuery) && (
                  <>
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-[10px] uppercase tracking-widest text-gray-400 font-bold self-center mr-2">Active Filters:</motion.span>
                    {activeCategory !== 'All Categories' && (
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
                        onClick={() => setActiveCategory('All Categories')}
                        className="bg-gray-100 text-black text-[10px] font-bold px-4 py-2 rounded-full flex items-center tracking-[0.1em] cursor-pointer hover:bg-gray-200 transition-colors"
                      >
                         {activeCategory} <span className="ml-2 font-black">×</span>
                      </motion.div>
                    )}
                    {activeSubCategory !== 'All' && (
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
                        onClick={() => setActiveSubCategory('All')}
                        className="bg-gray-100 text-black text-[10px] font-bold px-4 py-2 rounded-full flex items-center tracking-[0.1em] cursor-pointer hover:bg-gray-200 transition-colors"
                      >
                         {activeSubCategory} <span className="ml-2 font-black">×</span>
                      </motion.div>
                    )}
                    {activeColor !== 'All' && (
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
                        onClick={() => setActiveColor('All')}
                        className="bg-gray-100 text-black text-[10px] font-bold px-4 py-2 rounded-full flex items-center tracking-[0.1em] cursor-pointer hover:bg-gray-200 transition-colors"
                      >
                         Color: {activeColor} <span className="ml-2 font-black">×</span>
                      </motion.div>
                    )}
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Animated Product Grid */}
            <div className="flex-1 min-h-[600px] relative">
              <motion.div 
                layout 
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16"
              >
                <AnimatePresence mode="popLayout">
                  {filteredProducts.slice(0, visibleCount).map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                  
                  {filteredProducts.length === 0 && (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, scale: 0.9 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="col-span-full py-32 text-center flex flex-col items-center justify-center bg-gray-50 rounded-2xl"
                    >
                      <span className="text-4xl mb-4 opacity-50">📭</span>
                      <h3 className="text-2xl font-serif italic text-black mb-2">No matching pieces found</h3>
                      <p className="text-gray-500 font-light max-w-md mx-auto">We couldn't find any products matching your current filters. Try adjusting your search criteria.</p>
                      <button onClick={handleClearAll} className="mt-8 px-10 py-4 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-[#C9A227] hover:shadow-[0_0_40px_rgba(201,162,39,0.4)] transition-all duration-500 shadow-xl">
                        Reset Collection
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Next Page / Load More System */}
              {visibleCount < filteredProducts.length && (
                <div className="w-full flex justify-center mt-20">
                  <button 
                    onClick={() => {
                      setIsLoadingMore(true);
                      setTimeout(() => {
                        setVisibleCount(prev => prev + 8);
                        setIsLoadingMore(false);
                      }, 600);
                    }}
                    disabled={isLoadingMore}
                    className="group relative px-12 py-5 bg-[#1A1A1A] text-white text-[12px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-[#C9A227] hover:shadow-[0_0_40px_rgba(201,162,39,0.4)] transition-all duration-500 overflow-hidden shadow-2xl"
                  >
                     <div className="absolute inset-0 w-0 bg-white group-hover:w-full transition-all duration-500 ease-out z-0 opacity-10" />
                     <div className="relative z-10 flex items-center gap-3">
                       {isLoadingMore ? (
                         <>
                           <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                           <span>Loading Next Page...</span>
                         </>
                       ) : (
                         <>
                           Load Next Page
                           <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                         </>
                       )}
                     </div>
                  </button>
                </div>
              )}
            </div>
          </motion.main>
        </div>
      </div>
    </section>
  );
}
