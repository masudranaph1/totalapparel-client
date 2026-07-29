"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, animate, Variants } from "framer-motion";
import Image from "next/image";

interface CountUpProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
}

const CountUp = ({ from, to, duration = 2, suffix = "" }: CountUpProps) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(value).toString() + suffix;
          }
        },
      });

      return () => controls.stop();
    }
  }, [from, to, duration, suffix, isInView]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
};

const stats = [
  {
    num: "01",
    title: <CountUp from={0} to={100} suffix="%" />,
    subtitle: "Quality Inspected",
    description: "AQL Standard",
    bgImage: "/process-quality.png",
    gridClass: "md:col-span-2 md:row-span-2 h-[450px] md:h-[620px]"
  },
  {
    num: "02",
    title: "Full-Spectrum",
    subtitle: "Sourcing",
    description: "Knit • Woven • Denim • Sweaters",
    bgImage: "/process-sourcing.png",
    gridClass: "md:col-span-2 md:row-span-1 h-[350px] md:h-[300px]"
  },
  {
    num: "03",
    title: "End-to-End",
    subtitle: "Supply Chain",
    description: "From Concept to Export",
    bgImage: "/export-logistics.png",
    gridClass: "md:col-span-1 md:row-span-1 h-[350px] md:h-[300px]"
  },
  {
    num: "04",
    title: "Global",
    subtitle: "Production",
    description: "Bangladesh-Based Execution",
    bgImage: "/process-production.png",
    gridClass: "md:col-span-1 md:row-span-1 h-[350px] md:h-[300px]"
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

const TrustStatistics = () => {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-brand-bg text-brand-text border-t border-brand-border">
      {/* Background Image with Light Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/industrial-factory-bg.png"
          alt="Industrial Factory Background"
          fill
          className="object-cover opacity-[0.03] grayscale"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-bg/95 to-brand-bg"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
            Built Around Precision.<br />
            <span className="text-brand-muted">Delivered With Confidence.</span>
          </h2>
        </motion.div>

        {/* Asymmetrical Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`group relative flex flex-col bg-brand-border/30 border border-brand-border overflow-hidden rounded-sm cursor-pointer ${stat.gridClass}`}
            >
              {/* Background Image (Fully visible and colorful) */}
              <Image 
                src={stat.bgImage} 
                alt={stat.subtitle} 
                fill 
                className="object-cover opacity-100 scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-out"
              />
              
              {/* Clean White Gradient for text readability at the bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/80 to-transparent opacity-100 transition-opacity duration-700"></div>

              {/* Top-left number badge */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20 flex items-center gap-4">
                <span className="text-sm font-semibold tracking-[0.2em] text-brand-text bg-brand-bg/80 backdrop-blur-md px-4 py-2 rounded-sm shadow-sm border border-brand-border">
                  {stat.num}
                </span>
              </div>

              {/* Content Box at the bottom */}
              <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8 mt-auto">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className={`font-medium tracking-tight mb-2 text-brand-text ${index === 0 ? 'text-5xl lg:text-7xl' : 'text-3xl lg:text-4xl'}`}>
                    {stat.title}
                  </h3>
                  <h4 className={`font-medium mb-3 text-brand-text ${index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                    {stat.subtitle}
                  </h4>
                  <p className="text-xs font-bold text-brand-accent tracking-[0.15em] uppercase">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustStatistics;
