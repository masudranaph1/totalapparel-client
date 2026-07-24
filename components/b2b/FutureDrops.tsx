"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Users } from "lucide-react";

const DROPS = [
  {
    id: 1,
    title: "Project: AERO Windbreaker",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800&auto=format&fit=crop",
    funded: 85,
    goal: 500,
    currentOrders: 425,
    endTime: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 60 * 60 * 14).getTime(), // 2 days 14 hours
    currentPrice: 18,
    nextTierPrice: 22,
  },
  {
    id: 2,
    title: "Project: HEAVY Knit Sweater",
    image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=800&auto=format&fit=crop",
    funded: 45,
    goal: 1000,
    currentOrders: 450,
    endTime: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5 + 1000 * 60 * 45).getTime(), // 5 days 45 mins
    currentPrice: 35,
    nextTierPrice: 45,
  }
];

export default function FutureDrops() {
  const [now, setNow] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line
    setNow(Date.now());
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimeLeft = (endTime: number) => {
    const diff = endTime - now;
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0, text: "ENDED" };
    
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    
    return { d, h, m, s, text: "" };
  };

  return (
    <section className="w-full bg-white py-32 text-black relative overflow-hidden">
      {/* Background Abstract Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rose-50 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-rose-500"></span>
              <span className="text-rose-500 font-bold uppercase tracking-[0.2em] text-xs">Crowdfunding Engine</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter flex items-center gap-4">
              Future Drops<span className="text-rose-500">.</span>
            </h2>
            <p className="text-gray-500 max-w-xl font-medium mt-6 leading-relaxed">
              Private B2B Crowdfunding. Pre-order unreleased blanks at early-bird pricing. Production strictly begins once the Minimum Production Unit (MPU) goal is reached.
            </p>
          </div>
          <button className="group relative px-8 py-4 bg-white border border-gray-200 shadow-sm rounded-full overflow-hidden hover:border-black transition-colors">
            <div className="absolute inset-0 w-0 bg-black transition-all duration-500 ease-out group-hover:w-full"></div>
            <span className="relative z-10 text-xs font-black uppercase tracking-[0.15em] text-black group-hover:text-white transition-colors">
              View All Projects
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {DROPS.map((drop) => {
            const time = formatTimeLeft(drop.endTime);
            return (
              <div key={drop.id} className="group relative rounded-[2rem] overflow-hidden bg-white/80 backdrop-blur-xl border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col">
                
                {/* Image Section */}
                <div className="relative h-96 w-full overflow-hidden bg-gray-50">
                  <Image
                    src={drop.image}
                    alt={drop.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Status Badges */}
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <div className="bg-white/90 backdrop-blur-md text-black text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
                      {drop.funded >= 100 ? "Goal Reached" : "Funding Now"}
                    </div>
                  </div>

                  {/* Countdown Timer */}
                  <div className="absolute top-6 right-6 flex gap-2">
                    {[
                      { label: "D", val: time.d },
                      { label: "H", val: time.h },
                      { label: "M", val: time.m },
                      { label: "S", val: time.s }
                    ].map((unit, i) => (
                      <div key={i} className="flex flex-col items-center bg-white/90 backdrop-blur-md border border-gray-100 shadow-sm rounded-lg p-2 min-w-[50px]">
                        <span className="text-lg font-black text-rose-500 tabular-nums">{unit.val.toString().padStart(2, '0')}</span>
                        <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">{unit.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-grow flex flex-col bg-white">
                  <h3 className="text-2xl font-black mb-8 tracking-tight text-gray-900 group-hover:text-rose-500 transition-colors">{drop.title}</h3>

                  {/* Progress Bar Container */}
                  <div className="mb-8 p-6 bg-gray-50 border border-gray-100 rounded-2xl">
                    <div className="flex justify-between items-end mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black text-black">{drop.funded}%</span>
                        <span className="text-[10px] text-rose-500 font-black uppercase tracking-[0.2em]">Funded</span>
                      </div>
                      <span className="text-xs text-gray-500 font-medium tracking-wider flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <strong className="text-black font-black">{drop.currentOrders}</strong> / {drop.goal} MPU
                      </span>
                    </div>
                    {/* Glowing Bar */}
                    <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-rose-600 to-rose-400 relative transition-all duration-1000 ease-out"
                        style={{ width: `${drop.funded}%` }}
                      >
                        <div className="absolute inset-0 bg-white/30 w-full animate-[shimmer_2s_infinite]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Pricing Matrix */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm group-hover:border-rose-100 transition-colors">
                      <p className="text-[10px] text-rose-500 font-black uppercase tracking-[0.15em] mb-2">Early Bird Tier</p>
                      <p className="text-3xl font-black text-black">${drop.currentPrice.toFixed(2)} <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">/ unit</span></p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                      <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.15em] mb-2">Next Tier Price</p>
                      <p className="text-xl font-bold text-gray-400 line-through decoration-rose-500/30">${drop.nextTierPrice.toFixed(2)}</p>
                    </div>
                  </div>

                  <button className="w-full mt-auto relative overflow-hidden bg-black text-white py-4 rounded-xl font-black uppercase tracking-[0.15em] hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-2 group/btn">
                    <div className="absolute inset-0 bg-rose-500 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      Back This Project
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
