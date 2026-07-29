"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Sourcing & Sample Development",
    description: "We turn your tech packs and design concepts into reality through precise fabric sourcing, color lab dips, and quick-turnaround sample creation.",
    image: "/process-sourcing.png",
  },
  {
    num: "02",
    title: "Quality & Engineering",
    description: "Our technical team conducts thorough pre-production planning, yarn/fabric testing, and GSM verification to ensure structural integrity before bulk production begins.",
    image: "/process-engineering.png",
  },
  {
    num: "03",
    title: "Bulk Production",
    description: "We manage streamlined manufacturing across state-of-the-art facilities with active production monitoring, ensuring high efficiency and adherence to schedules.",
    image: "/process-production.png",
  },
  {
    num: "04",
    title: "Quality Assurance & Delivery",
    description: "Every order undergoes 100% inline and final quality inspections (AQL standard) before being packed and dispatched for on-time global shipment.",
    image: "/process-quality.png",
  },
];

const ManufacturingProcess = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section 
      ref={containerRef}
      className="w-full bg-brand-bg text-brand-text py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-brand-border"
    >
      <div className="max-w-[1600px] mx-auto">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 md:mb-32"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
            Our End-to-End <br className="hidden md:block" />
            <span className="text-brand-muted">Manufacturing Process</span>
          </h2>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          
          {/* Connecting Lines */}
          {/* Mobile Vertical Line */}
          <div className="absolute left-[39px] top-0 bottom-0 w-[2px] bg-brand-border lg:hidden z-0">
            <motion.div 
              className="w-full bg-brand-accent origin-top"
              style={{ scaleY, height: "100%" }}
            />
          </div>
          
          {/* Desktop Horizontal Line */}
          <div className="hidden lg:block absolute top-[40px] left-0 right-0 h-[2px] bg-brand-border z-0">
            <motion.div 
              className="h-full bg-brand-accent origin-left"
              style={{ scaleX, width: "100%" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col relative"
              >
                
                {/* Number Indicator */}
                <div className="flex items-center mb-8 lg:mb-12">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-brand-bg border-2 border-brand-border group-hover:border-brand-accent rounded-full flex items-center justify-center shrink-0 z-10 shadow-sm transition-colors duration-500"
                  >
                    <span className="text-xl font-bold tracking-tighter text-brand-text group-hover:text-brand-accent transition-colors duration-500">
                      {step.num}
                    </span>
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className="flex-grow flex flex-col pl-24 lg:pl-0">
                  <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden bg-brand-border/30 rounded-sm shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 25vw"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 tracking-tight leading-snug group-hover:text-brand-accent transition-colors duration-500">
                    {step.title}
                  </h3>
                  
                  <p className="text-brand-muted text-sm md:text-base leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ManufacturingProcess;
