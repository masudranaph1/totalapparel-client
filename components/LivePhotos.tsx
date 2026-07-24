"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import siteData from "../data/siteData.json";

export default function LivePhotos() {
  const { livePhotos } = siteData;
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate opacities for the sequence based on scroll position
  // We have 4 images.
  // 0.0 - 0.25: Image 1 is visible, others 0
  // 0.25 - 0.50: Image 2 is visible
  // 0.50 - 0.75: Image 3 is visible
  // 0.75 - 1.0: Image 4 is visible

  const op1 = useTransform(scrollYProgress, [0, 0.25, 0.251], [1, 1, 0]);
  const op2 = useTransform(scrollYProgress, [0.25, 0.251, 0.5, 0.501], [0, 1, 1, 0]);
  const op3 = useTransform(scrollYProgress, [0.5, 0.501, 0.75, 0.751], [0, 1, 1, 0]);
  const op4 = useTransform(scrollYProgress, [0.75, 0.751, 1], [0, 1, 1]);

  const opacities = [op1, op2, op3, op4];

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* The Live Photo Sequence Container */}
        <div className="relative w-full h-full max-w-5xl max-h-[80vh]">
          {livePhotos.sequence.map((src, index) => (
            <motion.div
              key={index}
              style={{ opacity: opacities[index] }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={src}
                alt={`Live Photo Frame ${index + 1}`}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          ))}
        </div>

        {/* Floating Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="text-white text-5xl md:text-8xl font-black tracking-tighter mix-blend-difference"
          >
            {livePhotos.title}
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
