"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import siteData from "../data/siteData.json";

export default function HorizontalScroll() {
  const { horizontalScroll } = siteData;
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Moves the horizontal flex container to the left based on scroll progress
  // Adjust the destination percentage based on how many items you have.
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#f8f8f8]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Title */}
        <div className="absolute top-24 left-8 md:left-24 z-10">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-black uppercase">
            {horizontalScroll.title}
          </h2>
          <p className="text-gray-500 mt-2 font-medium tracking-wide">
            {horizontalScroll.subtitle}
          </p>
        </div>

        {/* Scrolling Content */}
        <motion.div style={{ x }} className="flex gap-12 md:gap-24 px-8 md:px-24">
          {horizontalScroll.items.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative flex-shrink-0 w-[70vw] md:w-[400px] h-[50vh] md:h-[600px] cursor-pointer group"
            >
              <div className="w-full h-full relative overflow-hidden bg-gray-200 shadow-2xl transition-shadow duration-500 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-2xl font-bold tracking-tight uppercase">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
