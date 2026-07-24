"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Plus, Minus, Box } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomPackBuilder() {
  const [sizes, setSizes] = useState({
    S: 10,
    M: 20,
    L: 15,
    XL: 5,
  });

  const total = sizes.S + sizes.M + sizes.L + sizes.XL;
  const TARGET_TOTAL = 50;
  const isBalanced = total === TARGET_TOTAL;
  const isOver = total > TARGET_TOTAL;

  const handleUpdate = (size: keyof typeof sizes, delta: number) => {
    setSizes(prev => ({
      ...prev,
      [size]: Math.max(0, prev[size] + delta)
    }));
  };

  return (
    <section className="w-full bg-white py-32 border-b border-gray-100 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-rose-50 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-50"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-20 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-rose-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 flex items-center gap-4">
            <span className="w-6 h-[2px] bg-rose-500"></span>
            Carton Logistics
            <span className="w-6 h-[2px] bg-rose-500"></span>
          </h3>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-black flex items-center gap-4">
            Custom Pack Builder<span className="text-rose-500">.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl font-medium text-lg">
            Ditch rigid size ratios. Custom-allocate your sizes to perfectly fill a standard {TARGET_TOTAL}-piece shipping carton based on your customer demographics.
          </p>
        </motion.div>

        {/* Builder Interface */}
        <motion.div 
          className="bg-white/80 backdrop-blur-2xl rounded-[3rem] p-8 md:p-16 shadow-[0_20px_80px_rgba(0,0,0,0.06)] border border-gray-100 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Glowing Border when balanced */}
          <div className={`absolute inset-0 rounded-[3rem] border-2 transition-colors duration-1000 pointer-events-none ${isBalanced ? 'border-rose-400/50 shadow-[0_0_50px_rgba(244,63,94,0.15)]' : 'border-transparent'}`}></div>

          {/* Status Bar */}
          <div className="mb-16 relative z-10">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h3 className="text-2xl font-black text-gray-900 tracking-tight">Carton Capacity</h3>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Allocate exactly {TARGET_TOTAL} pieces</p>
              </div>
              <div className="text-right">
                <span className={`text-6xl font-black transition-colors duration-500 ${isBalanced ? 'text-rose-500' : isOver ? 'text-red-500' : 'text-gray-900'}`}>
                  {total}
                </span>
                <span className="text-gray-300 font-black text-2xl"> / {TARGET_TOTAL}</span>
              </div>
            </div>
            
            <div className="w-full h-6 bg-gray-100 rounded-full overflow-hidden flex shadow-inner relative">
              <div className="absolute inset-0 bg-white/40 w-full animate-[shimmer_2s_infinite] pointer-events-none z-10"></div>
              {['S', 'M', 'L', 'XL'].map((size, idx) => {
                const count = sizes[size as keyof typeof sizes];
                const width = `${(count / Math.max(total, TARGET_TOTAL)) * 100}%`;
                const colors = ['bg-rose-300', 'bg-rose-400', 'bg-rose-500', 'bg-rose-600'];
                return (
                  <motion.div 
                    key={size}
                    initial={{ width: 0 }}
                    animate={{ width }}
                    transition={{ type: "spring", stiffness: 50, damping: 15 }}
                    className={`${colors[idx]} relative group`}
                    title={`${size}: ${count}`}
                  >
                    {/* Size Tooltip inside bar */}
                    {count > 3 && (
                      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-white mix-blend-overlay">
                        {size}
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Validation Message */}
            <div className="mt-8 flex items-center justify-center min-h-[30px] overflow-hidden">
              <AnimatePresence mode="wait">
                {isBalanced ? (
                  <motion.div 
                    key="balanced"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                    className="flex items-center text-rose-500 font-black uppercase tracking-widest text-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 mr-3" />
                    Carton perfectly balanced and ready for shipping!
                  </motion.div>
                ) : isOver ? (
                  <motion.div 
                    key="over"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                    className="flex items-center text-red-500 font-bold uppercase tracking-widest text-sm"
                  >
                    <AlertCircle className="w-5 h-5 mr-3" />
                    Over capacity. Please remove {total - TARGET_TOTAL} pieces.
                  </motion.div>
                ) : (
                  <motion.div 
                    key="under"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                    className="flex items-center text-gray-500 font-bold uppercase tracking-widest text-sm"
                  >
                    <AlertCircle className="w-5 h-5 mr-3" />
                    Add {TARGET_TOTAL - total} more pieces to fill the carton.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
            {(Object.keys(sizes) as Array<keyof typeof sizes>).map((size) => (
              <div key={size} className="bg-white p-8 rounded-3xl flex flex-col items-center justify-center border border-gray-100 shadow-[0_5px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl font-black mb-2 text-gray-900">{size}</div>
                <div className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-8">Size</div>
                
                <div className="flex items-center gap-5 bg-gray-50/50 rounded-full p-2 border border-gray-100">
                  <button 
                    onClick={() => handleUpdate(size, -1)}
                    disabled={sizes[size] === 0}
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-white hover:bg-gray-100 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 shadow-sm transition-all text-black"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="w-8 text-center font-black text-2xl text-gray-900">{sizes[size]}</span>
                  <button 
                    onClick={() => handleUpdate(size, 1)}
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-white hover:bg-gray-100 hover:scale-110 active:scale-95 shadow-sm transition-all text-black"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center relative z-10">
            <button 
              disabled={!isBalanced}
              className={`px-14 py-6 rounded-2xl font-black uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden relative group ${
                isBalanced 
                  ? 'bg-black text-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1' 
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              {isBalanced && (
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              )}
              <span className="relative z-10 flex items-center gap-3">
                <Box className="w-5 h-5" />
                Add Carton to Quote
              </span>
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
