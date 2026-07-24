import React from "react";
import Image from "next/image";
import siteData from "../data/siteData.json";

export default function LuxuryEditorial() {
  const { luxuryEditorial } = siteData;

  return (
    <section className="relative w-full h-screen bg-white">
      {/* Editorial Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={luxuryEditorial.image}
          alt={luxuryEditorial.alt}
          fill
          className="object-cover"
        />
        {/* Subtle overlay for text legibility */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Elegant Typography Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <span className="text-white text-xs uppercase tracking-[0.4em] font-light mb-6">
          {luxuryEditorial.subtitle}
        </span>
        
        <h2 className="text-white text-5xl md:text-8xl font-serif tracking-widest font-light leading-tight">
          {luxuryEditorial.titleLine1} <br /> {luxuryEditorial.titleLine2}
        </h2>

        <div className="mt-12">
          <a
            href={luxuryEditorial.buttonLink}
            className="text-white text-xs uppercase tracking-[0.3em] font-light border-b border-white pb-2 hover:opacity-70 transition-opacity"
          >
            {luxuryEditorial.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
