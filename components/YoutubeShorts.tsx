"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, VolumeX, Settings, Captions, Maximize } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

// We use a 100% reliable placeholder video URL because remote CDNs often block hotlinking (403 errors).
const SHORTS = [
  {
    id: 1,
    title: "Summer Collection '24 Lookbook",
    channel: "Urban Official",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 2,
    title: "How to style oversized tees",
    channel: "Urban Official",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 3,
    title: "Behind the scenes: Custom Dyeing",
    channel: "Urban Official",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 4,
    title: "New Arrivals: Premium Blanks",
    channel: "Urban Official",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  }
];

const ShortCard = ({ short, index }: { short: typeof SHORTS[0], index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Force play on mount to handle strict browser autoplay policies
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay was prevented by browser:", error);
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-lg group cursor-pointer"
      onClick={togglePlay}
    >
      {/* 100% Reliable HTML5 Video Player */}
      <video
        ref={videoRef}
        src={short.videoUrl}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Top Gradient Overlay */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none"></div>
      
      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>

      {/* Top UI Controls */}
      <div className="absolute top-4 inset-x-4 flex justify-between items-start pointer-events-none z-10">
        {/* Channel Info */}
        <div className="flex gap-2 items-center">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
            <Image src={short.avatar} alt="Channel" width={32} height={32} className="object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-xs font-bold leading-tight line-clamp-1 drop-shadow-md">{short.title}</span>
            <span className="text-white/80 text-[10px] font-medium drop-shadow-md">{short.channel}</span>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex gap-2 text-white/90">
          <VolumeX className="w-4 h-4 drop-shadow-md" />
          <Captions className="w-4 h-4 drop-shadow-md" />
          <Settings className="w-4 h-4 drop-shadow-md" />
        </div>
      </div>

      {/* Center Play/Pause Indicator */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm transition-all duration-300">
          <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center text-white backdrop-blur-md border border-white/10">
            <Play className="w-8 h-8 ml-1" />
          </div>
        </div>
      )}

      {/* Bottom UI Controls */}
      <div className="absolute bottom-4 inset-x-4 pointer-events-none z-10">
        {/* Fake Progress Bar */}
        <div className="w-full h-1 bg-white/30 rounded-full mb-3 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-red-600 rounded-full"></div>
        </div>

        <div className="flex justify-between items-center">
          {/* YouTube Logo Fake */}
          <div className="flex items-center gap-1.5 opacity-90">
            <div className="bg-white text-red-600 rounded-[4px] px-1 py-0.5">
              <Play className="w-3 h-3 fill-current" />
            </div>
            <span className="text-white font-bold tracking-tighter text-sm drop-shadow-md">YouTube</span>
          </div>

          <Maximize className="w-4 h-4 text-white drop-shadow-md" />
        </div>
      </div>
    </motion.div>
  );
};

export default function YoutubeShorts() {
  return (
    <section className="w-full bg-neutral-50 py-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black flex items-center justify-center gap-3">
            <span className="font-bold">We are on</span> Youtube Shorts
          </h2>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {SHORTS.map((short, idx) => (
            <ShortCard key={short.id} short={short} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
