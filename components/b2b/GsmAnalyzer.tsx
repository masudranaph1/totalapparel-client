"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function GsmAnalyzer() {
  const [gsm, setGsm] = useState(250);

  // Calculate dynamic properties based on GSM
  const thicknessScale = 0.95 + (gsm - 180) * (0.1 / 220); 
  const shadowOpacity = 0.1 + (gsm - 180) * (0.4 / 220); 
  const shadowBlur = 10 + (gsm - 180) * (20 / 220);
  const shadowY = 10 + (gsm - 180) * (15 / 220);
  
  // Fabric texture mapping
  const getTextureUrl = (gsmVal: number) => {
    if (gsmVal < 220) return "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=500&auto=format&fit=crop";
    if (gsmVal < 320) return "https://images.unsplash.com/photo-1596755490422-0d179658e228?q=80&w=500&auto=format&fit=crop";
    return "https://images.unsplash.com/photo-1601056586073-774403fa80e8?q=80&w=500&auto=format&fit=crop";
  };

  return (
    <section className="w-full bg-white py-24 md:py-32 text-black border-t border-gray-100 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rose-50 rounded-full blur-[120px] opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] opacity-60 translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div>
            <h3 className="text-rose-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 flex items-center">
              <span className="w-6 h-[2px] bg-rose-500 mr-3"></span>
              Fabric Intelligence
            </h3>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black uppercase">
              GSM Analyzer.
            </h2>
          </div>
          <p className="text-gray-500 max-w-md font-medium text-sm leading-relaxed">
            Interact with our 2.5D visualizer to see how fabric weight affects drape, thickness, and texture in real-time.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Garment Visualizer */}
          <div className="w-full lg:w-[55%] relative bg-neutral-100/50 backdrop-blur-xl rounded-[2rem] aspect-square lg:aspect-auto flex items-center justify-center p-8 lg:p-12 border border-white shadow-[inset_0_2px_20px_rgba(255,255,255,1)]">
            <div className="absolute inset-0 rounded-[2rem] opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            
            {/* Display GSM Badge */}
            <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-white/40 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-black">Live Preview</span>
            </div>

            <div 
              className="relative w-full h-full transition-all duration-700 ease-out flex items-center justify-center"
              style={{
                transform: `scale(${thicknessScale})`,
                filter: `drop-shadow(0px ${shadowY}px ${shadowBlur}px rgba(0,0,0,${shadowOpacity}))`
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop"
                alt="Hoodie Mockup"
                fill
                className="object-contain mix-blend-multiply p-4"
              />
            </div>
          </div>

          {/* Controls & Texture */}
          <div className="w-full lg:w-[45%] flex flex-col gap-6">
            
            {/* Slider Panel */}
            <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] border border-white shadow-xl shadow-gray-200/50 flex-1 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-100 to-transparent opacity-50 rounded-bl-full pointer-events-none"></div>
              
              <div className="flex justify-between items-end mb-10">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900 mb-1">Fabric Weight</h3>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Adjust The GSM Slider</p>
                </div>
                <div className="text-5xl font-black text-rose-500 tracking-tighter">
                  {gsm} <span className="text-xl text-gray-400 font-bold tracking-normal">GSM</span>
                </div>
              </div>
              
              <div className="relative w-full py-4 group">
                <input 
                  type="range" 
                  min="180" 
                  max="400" 
                  step="10"
                  value={gsm}
                  onChange={(e) => setGsm(Number(e.target.value))}
                  className="w-full h-3 bg-gray-100 rounded-full appearance-none cursor-pointer outline-none relative z-10 
                             [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 
                             [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-white
                             [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg
                             [&::-moz-range-thumb]:w-8 [&::-moz-range-thumb]:h-8 [&::-moz-range-thumb]:bg-black 
                             [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:rounded-full
                             [&::-moz-range-thumb]:shadow-lg transition-all"
                  style={{
                    background: `linear-gradient(to right, #000 0%, #000 ${((gsm - 180) / 220) * 100}%, #f3f4f6 ${((gsm - 180) / 220) * 100}%, #f3f4f6 100%)`
                  }}
                />
              </div>
              
              <div className="flex justify-between mt-4 text-[10px] text-gray-400 font-bold uppercase tracking-[0.15em]">
                <span className="flex flex-col items-start gap-1">
                  <span className="w-1 h-2 bg-gray-300 rounded-full"></span>
                  180 (Light)
                </span>
                <span className="flex flex-col items-center gap-1">
                  <span className="w-1 h-3 bg-gray-300 rounded-full"></span>
                  280 (Standard)
                </span>
                <span className="flex flex-col items-end gap-1">
                  <span className="w-1 h-4 bg-gray-300 rounded-full"></span>
                  400 (Heavy)
                </span>
              </div>
            </div>

            {/* Macro Zoom Texture */}
            <div className="bg-black text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-gray-900 to-gray-800 z-0"></div>
              
              <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-center">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex-shrink-0 group-hover:border-rose-500/50 transition-colors duration-500">
                  <Image
                    src={getTextureUrl(gsm)}
                    alt="Fabric Texture"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Inner shadow for spherical feel */}
                  <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] pointer-events-none rounded-full"></div>
                </div>
                
                <div className="text-center sm:text-left">
                  <h4 className="text-xs text-gray-400 font-bold uppercase tracking-[0.2em] mb-2">Macro Texture</h4>
                  <p className="text-white/90 text-sm font-medium leading-relaxed">
                    {gsm < 220 ? "Lightweight, breathable mesh perfect for activewear and summer collections. Highly drapable." : 
                     gsm < 320 ? "Standard mid-weight french terry. Balanced structure, ideal for everyday streetwear." : 
                     "Heavyweight premium fleece. Exceptional warmth, stiff drape, and luxury substantial feel."}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
