"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Shirt, Tag, CircleDollarSign } from "lucide-react";
import Image from "next/image";

type PrintZone = "None" | "Chest" | "Sleeve" | "Neck Label";

const ZONE_PRICING = {
  "None": 0,
  "Chest": 2.50,
  "Sleeve": 1.50,
  "Neck Label": 1.00
};

export default function MockupEngine() {
  const [logoUploaded, setLogoUploaded] = useState(false);
  const [activeZone, setActiveZone] = useState<PrintZone>("None");
  const [basePrice] = useState(15.00);

  // Removed unused handleDragEnd

  const currentPrice = basePrice + ZONE_PRICING[activeZone];

  return (
    <section className="w-full bg-white py-24 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 flex justify-center items-center gap-4">
            <Shirt className="w-10 h-10 text-rose-500" />
            White-Label Mockup Engine
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Upload your transparent PNG logo and assign it to a print zone. Instantly preview your custom blank activewear and see real-time wholesale price adjustments based on print complexity.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Mockup Area */}
          <div className="w-full lg:w-3/5 bg-gray-100 rounded-3xl p-8 relative flex items-center justify-center min-h-[500px] border border-gray-200 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop"
              alt="Blank T-Shirt"
              width={600}
              height={600}
              className="object-contain drop-shadow-xl"
            />
            
            {/* Zones Overlays */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              
              {/* Chest Zone */}
              <button 
                onClick={() => { if(logoUploaded) setActiveZone("Chest") }}
                className={`absolute top-[35%] left-1/2 -translate-x-1/2 w-32 h-24 border-2 border-dashed rounded-lg flex items-center justify-center transition-all pointer-events-auto ${activeZone === 'Chest' ? 'border-rose-500 bg-rose-500/10 z-20' : 'border-gray-400 hover:border-gray-600 bg-black/5 z-10'}`}
              >
                {activeZone === "Chest" && logoUploaded ? (
                  <motion.div layoutId="logo" className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">LOGO</motion.div>
                ) : (
                  <span className="text-xs font-bold text-gray-500 uppercase">Chest</span>
                )}
              </button>

              {/* Sleeve Zone */}
              <button 
                onClick={() => { if(logoUploaded) setActiveZone("Sleeve") }}
                className={`absolute top-[40%] right-[25%] w-16 h-20 border-2 border-dashed rounded-lg flex items-center justify-center transition-all pointer-events-auto rotate-12 ${activeZone === 'Sleeve' ? 'border-rose-500 bg-rose-500/10 z-20' : 'border-gray-400 hover:border-gray-600 bg-black/5 z-10'}`}
              >
                {activeZone === "Sleeve" && logoUploaded ? (
                  <motion.div layoutId="logo" className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-lg">LOGO</motion.div>
                ) : (
                  <span className="text-[10px] font-bold text-gray-500 uppercase -rotate-12">Sleeve</span>
                )}
              </button>

              {/* Neck Label Zone */}
              <button 
                onClick={() => { if(logoUploaded) setActiveZone("Neck Label") }}
                className={`absolute top-[22%] left-1/2 -translate-x-1/2 w-16 h-10 border-2 border-dashed rounded-lg flex items-center justify-center transition-all pointer-events-auto ${activeZone === 'Neck Label' ? 'border-rose-500 bg-rose-500/10 z-20' : 'border-gray-400 hover:border-gray-600 bg-black/5 z-10'}`}
              >
                {activeZone === "Neck Label" && logoUploaded ? (
                  <motion.div layoutId="logo" className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-[8px] font-bold shadow-lg">LGO</motion.div>
                ) : (
                  <span className="text-[10px] font-bold text-gray-500 uppercase text-center leading-none">Neck<br/>Label</span>
                )}
              </button>
            </div>
          </div>

          {/* Controls Sidebar */}
          <div className="w-full lg:w-2/5 flex flex-col gap-6">
            
            {/* Upload Area */}
            <div className="bg-white border-2 border-dashed border-gray-300 rounded-3xl p-8 text-center transition-colors hover:border-gray-400">
              {!logoUploaded ? (
                <>
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Upload PNG Logo</h3>
                  <p className="text-gray-500 text-sm mb-6">Transparent background, max 5MB.</p>
                  <button 
                    onClick={() => setLogoUploaded(true)}
                    className="bg-black text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors"
                  >
                    Simulate Upload
                  </button>
                </>
              ) : (
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-white font-bold shadow-xl mb-4">
                    LOGO
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-green-600 flex items-center gap-2">
                    <CircleDollarSign className="w-5 h-5" /> Logo Ready
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">Click a zone on the shirt to place your design.</p>
                  <button 
                    onClick={() => { setLogoUploaded(false); setActiveZone("None"); }}
                    className="text-red-500 text-sm font-bold underline"
                  >
                    Remove Logo
                  </button>
                </div>
              )}
            </div>

            {/* Pricing Breakdown */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 flex-1">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Tag className="w-5 h-5" /> Wholesale Pricing
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-gray-600">
                  <span>Base Blank (Heavyweight Tee)</span>
                  <span className="font-mono">${basePrice.toFixed(2)}</span>
                </div>
                
                <div className={`flex justify-between items-center transition-colors ${activeZone !== 'None' ? 'text-black font-bold' : 'text-gray-400'}`}>
                  <span>Print Application ({activeZone})</span>
                  <span className="font-mono">+${ZONE_PRICING[activeZone].toFixed(2)}</span>
                </div>
                
                <div className="h-px bg-gray-200 w-full my-4"></div>
                
                <div className="flex justify-between items-end">
                  <span className="text-lg font-bold uppercase tracking-wider">Final Unit Price</span>
                  <span className="text-4xl font-black text-rose-500 font-mono">${currentPrice.toFixed(2)}</span>
                </div>
              </div>

              <button 
                disabled={activeZone === "None"}
                className={`w-full py-4 rounded-full font-bold uppercase tracking-wide transition-all ${
                  activeZone !== "None" 
                    ? 'bg-rose-500 text-white hover:bg-rose-600 shadow-lg hover:shadow-rose-500/25' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Save Customization
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
