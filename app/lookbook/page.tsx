"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const pageDescription = "A journey that winds through bright landscapes and pristine paths, where time seems to stop to celebrate the essence of our style. The Spring Summer 2026 collection is a tale of dynamism and character: iconic garments that give voice to the spirit of the contemporary rider under the summer sun.";

const lookbooks = [
  {
    id: "look-1",
    lookName: "LOOK 1",
    theme: "Free Time",
    mainImage: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1200&auto=format&fit=crop",
    layout: "left", // sticky image on the left
    products: [
      {
        id: 11,
        name: "100% Cotton T-shirt with Logo - White",
        price: "€27.30",
        originalPrice: "€39.00",
        discount: "-30%",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
        hotspot: { top: "35%", left: "45%" }
      },
      {
        id: 12,
        name: "Western Denim Shirt - Light Blue Denim",
        price: "€104.30",
        originalPrice: "€149.00",
        discount: "-30%",
        tags: ["-30%", "ICONS"],
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=800&auto=format&fit=crop",
        hotspot: { top: "52%", left: "60%" }
      },
      {
        id: 13,
        name: "Stretch Cotton Cargo Shorts - Sand",
        price: "€76.30",
        originalPrice: "€109.00",
        discount: "-30%",
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop", // Reusing sand color
        hotspot: { top: "68%", left: "50%" }
      }
    ]
  },
  {
    id: "look-2",
    lookName: "LOOK 2",
    theme: "Stile Deciso",
    mainImage: "https://images.unsplash.com/photo-1550246140-5119ae4790b8?q=80&w=1200&auto=format&fit=crop", // Man in denim/outdoors
    layout: "right", // sticky image on the right
    dividerImage: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2000&auto=format&fit=crop", // Cabin in forest
    products: [
      {
        id: 21,
        name: "Workwear Jacket in Raw Denim - Dark Blue",
        price: "€153.30",
        originalPrice: "€219.00",
        discount: "-30%",
        tags: ["-30%", "ICONS"],
        image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?q=80&w=800&auto=format&fit=crop",
        hotspot: { top: "35%", left: "65%" }
      },
      {
        id: 22,
        name: "100% Cotton Printed Shirt - Yellow Print",
        price: "€69.30",
        originalPrice: "€99.00",
        discount: "-30%",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop",
        hotspot: { top: "45%", left: "45%" }
      },
      {
        id: 23,
        name: "Gabardine Stretch Chino Shorts - Gold Yellow",
        price: "€62.30",
        originalPrice: "€89.00",
        discount: "-30%",
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop", 
        hotspot: { top: "70%", left: "40%" }
      }
    ]
  }
];

export default function LookbookPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax for the divider images
  const { scrollYProgress } = useScroll();
  const dividerY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <main className="w-full min-h-screen bg-white text-black pt-32 pb-24 selection:bg-brand-accent selection:text-white">
      
      {/* Intro Section */}
      <section className="w-full px-4 sm:px-6 lg:px-12 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-3/5 lg:w-1/2"
          >
            <p className="text-2xl md:text-3xl lg:text-[2rem] font-medium leading-[1.3] tracking-tight">
              {pageDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lookbooks Container */}
      <div ref={containerRef} className="w-full">
        {lookbooks.map((look, index) => (
          <React.Fragment key={look.id}>
            
            {/* Full Width Divider (if present) */}
            {look.dividerImage && (
              <div className="w-full h-[40vh] md:h-[60vh] relative overflow-hidden my-20 md:my-32">
                <motion.div style={{ y: dividerY }} className="absolute inset-0 -top-[20%] h-[140%] w-full">
                  <Image 
                    src={look.dividerImage}
                    alt="Atmospheric Divider"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </motion.div>
              </div>
            )}

            {/* Split Screen Lookbook Area */}
            <section className="w-full px-4 sm:px-6 lg:px-12 pb-24 md:pb-32 pt-10">
              <div className={`max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 relative ${look.layout === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Sticky Editorial Image with Hotspots */}
                <div className="w-full lg:w-1/2 relative h-auto">
                  <div className="lg:sticky lg:top-32 w-full aspect-[3/4] lg:h-[calc(100vh-160px)] lg:aspect-auto overflow-hidden bg-gray-100 rounded-sm group relative">
                    <Image 
                      src={look.mainImage}
                      alt={look.lookName}
                      fill
                      priority={index === 0}
                      className="object-cover"
                    />

                    {/* Hotspots */}
                    {look.products.map((product) => (
                      <div 
                        key={`hotspot-${product.id}`}
                        className="absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer group/hotspot"
                        style={{ top: product.hotspot.top, left: product.hotspot.left }}
                      >
                        <div className="relative flex items-center justify-center w-6 h-6 md:w-8 md:h-8">
                          {/* Pulsing ring */}
                          <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 group-hover/hotspot:animate-ping transition-all"></span>
                          {/* Inner core */}
                          <span className="relative inline-flex rounded-full h-5 w-5 md:h-6 md:w-6 bg-white border border-gray-200 shadow-lg items-center justify-center group-hover/hotspot:scale-110 transition-transform">
                            <svg className="w-3 h-3 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                          </span>
                        </div>
                        
                        {/* Tooltip on hover */}
                        <div className={`absolute top-1/2 -translate-y-1/2 opacity-0 group-hover/hotspot:opacity-100 transition-opacity duration-300 pointer-events-none bg-white px-3 py-2 text-xs font-semibold whitespace-nowrap shadow-xl border border-gray-100 rounded z-20 hidden md:block ${look.layout === 'right' ? 'right-full mr-4' : 'left-full ml-4'}`}>
                          {product.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scrollable Product List */}
                <div className="w-full lg:w-1/2 flex flex-col pt-10 lg:pt-0">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                  >
                    <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">{look.lookName}</h4>
                    <h3 className="text-xl font-medium tracking-wide text-black">{look.theme}</h3>
                  </motion.div>

                  <div className="flex flex-col gap-24 lg:gap-32 w-full max-w-lg mx-auto">
                    {look.products.map((product) => (
                      <motion.div 
                        key={product.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-150px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center group cursor-pointer"
                      >
                        {/* Product Image */}
                        <div className="relative w-full aspect-[4/5] bg-gray-50 mb-6 overflow-hidden">
                          <Image 
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-multiply"
                          />
                        </div>
                        
                        {/* Product Details */}
                        <div className="text-center w-full px-4">
                          <h2 className="text-sm font-medium text-black mb-2 leading-snug">{product.name}</h2>
                          <div className="flex items-center justify-center gap-3 mb-4 text-xs">
                            <span className="font-bold text-black">{product.price}</span>
                            <span className="text-gray-400 line-through">{product.originalPrice}</span>
                          </div>
                          
                          <div className="flex justify-center gap-2">
                            {product.tags ? (
                              product.tags.map(tag => (
                                <span key={tag} className={`text-[9px] font-bold tracking-widest uppercase px-2 py-1 ${tag === '-30%' ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'}`}>
                                  {tag}
                                </span>
                              ))
                            ) : (
                              <span className="text-[9px] font-bold tracking-widest uppercase px-2 py-1 bg-black text-white">
                                {product.discount}
                              </span>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* End of Look Marker (only if it's the last item, or just standard spacing) */}
                  {index === lookbooks.length - 1 && (
                    <div className="w-full flex justify-center mt-32 mb-10">
                       <div className="w-px h-16 bg-gray-200"></div>
                    </div>
                  )}
                </div>
                
              </div>
            </section>
          </React.Fragment>
        ))}
      </div>

    </main>
  );
}
