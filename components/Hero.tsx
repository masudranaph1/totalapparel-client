"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const MEDIA = [
  { type: 'video', src: '/fashion.mp4' },
  { type: 'video', src: '/turtle.webm' }, // Sea turtle
  { type: 'video', src: '/whale.webm' }  // Blue whale
];

const Hero = () => {
  const [currentMedia, setCurrentMedia] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMedia((prev) => (prev + 1) % MEDIA.length);
    }, 6000); // Change media every 6 seconds
    
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-zinc-900">
      {/* Background Media */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden">
        {MEDIA.map((media, index) => (
          media.type === 'video' ? (
            <video
              key={media.src}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className={`absolute inset-0 object-cover w-full h-full transition-all duration-[2000ms] ease-in-out ${
                index === currentMedia ? "opacity-100" : "opacity-0"
              }`}
            >
              <source src={media.src} />
            </video>
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={media.src}
              src={media.src}
              alt="Cinematic Fashion Background"
              className={`absolute inset-0 object-cover w-full h-full origin-center transition-all duration-[8000ms] ease-out ${
                index === currentMedia ? "opacity-100 scale-110" : "opacity-0 scale-100"
              }`}
            />
          )
        ))}
        {/* Dark overlay so text is legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80 z-10 pointer-events-none"></div>
      </div>

      {/* Decorative Left Pattern */}
      <div className="absolute left-0 top-0 bottom-0 w-64 z-10 pointer-events-none opacity-50">
        <svg viewBox="0 0 200 800" fill="none" className="h-full w-full">
          <path
            d="M -50 100 Q 50 100 50 200 Q 50 300 -50 300 M 50 200 Q 150 200 150 300 Q 150 400 50 400 M -50 300 Q 50 300 50 400 Q 50 500 -50 500 M 50 400 Q 150 400 150 500 Q 150 600 50 600 M -50 500 Q 50 500 50 600 Q 50 700 -50 700"
            stroke="#e84e24"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      {/* Decorative Right Pattern */}
      <div className="absolute right-0 top-0 bottom-0 w-64 z-10 pointer-events-none opacity-50">
        <svg viewBox="0 0 200 800" fill="none" className="h-full w-full">
          <path
            d="M 250 100 Q 150 100 150 200 Q 150 300 250 300 M 150 200 Q 50 200 50 300 Q 50 400 150 400 M 250 300 Q 150 300 150 400 Q 150 500 250 500 M 150 400 Q 50 400 50 500 Q 50 600 150 600 M 250 500 Q 150 500 150 600 Q 150 700 250 700"
            stroke="#e84e24"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full h-full max-w-4xl mx-auto mt-10">
        
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light mb-2 uppercase drop-shadow-md">
          REDEFINING MODERN
        </h1>
        <h1 className="text-[#e84e24] text-5xl md:text-7xl lg:text-8xl font-black mb-8 uppercase drop-shadow-lg">
          STREETWEAR
        </h1>
        
        <p className="text-white text-sm md:text-lg font-normal max-w-2xl mx-auto mb-10 drop-shadow-md">
          The ultimate B2B wholesale platform for enterprise clients and custom drops.
        </p>
        
        <Link 
          href="/collection" 
          className="bg-[#e84e24] text-white hover:bg-[#d0421e] text-sm md:text-base font-bold uppercase tracking-wider px-10 py-4 rounded transition-colors shadow-lg"
        >
          EXPLORE COLLECTION
        </Link>
      </div>
    </div>
  );
};

export default Hero;
