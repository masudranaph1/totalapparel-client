"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Package, Scissors, Droplet, CheckCircle, Factory, Leaf } from "lucide-react";

const processSteps = [
  {
    id: "01",
    title: "Raw Material Sourcing",
    description: "We source the finest organic yarns and premium raw materials globally. Every batch undergoes strict compliance and quality checks before entering our facility.",
    icon: <Leaf className="w-8 h-8 md:w-10 md:h-10 text-[#C9A227]" />,
    image: "/process-sourcing.png",
    color: "bg-[#F9F8F6]"
  },
  {
    id: "02",
    title: "Fabric Development",
    description: "Our state-of-the-art automated machinery transforms raw yarn into luxurious fabrics, ensuring consistent density and impeccable texture.",
    icon: <Factory className="w-8 h-8 md:w-10 md:h-10 text-[#C9A227]" />,
    image: "/fabric-development.png",
    color: "bg-[#F3F0EA]"
  },
  {
    id: "03",
    title: "Dyeing & Production",
    description: "We utilize eco-friendly, closed-loop dyeing processes to achieve rich, lasting colors while minimizing our environmental footprint.",
    icon: <Droplet className="w-8 h-8 md:w-10 md:h-10 text-[#C9A227]" />,
    image: "/process-production.png",
    color: "bg-[#EAE6DF]"
  },
  {
    id: "04",
    title: "Cutting & Engineering",
    description: "Precision laser cutting meets masterful hand-sewing. Our artisans meticulously assemble each garment for a flawless fit.",
    icon: <Scissors className="w-8 h-8 md:w-10 md:h-10 text-[#C9A227]" />,
    image: "/process-engineering.png",
    color: "bg-[#E1DDD4]"
  },
  {
    id: "05",
    title: "Quality Assurance",
    description: "Every item undergoes a rigorous 5-point inspection process. We check for seam integrity, color consistency, and dimensional stability.",
    icon: <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-[#C9A227]" />,
    image: "/process-quality.png",
    color: "bg-[#D8D3C9]"
  },
  {
    id: "06",
    title: "Packaging & Logistics",
    description: "Products are carefully pressed, folded, and packed in sustainable materials before being shipped via our global logistics network.",
    icon: <Package className="w-8 h-8 md:w-10 md:h-10 text-[#C9A227]" />,
    image: "/export-logistics.png",
    color: "bg-[#CECBBE]"
  }
];

const Card = ({ step, i }: { step: typeof processSteps[0], i: number }) => {
  const isEven = i % 2 === 0;

  return (
    <div className="h-screen flex flex-col justify-center sticky top-0" style={{ paddingTop: `calc(5vh + ${i * 20}px)` }}>
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px", once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full max-w-7xl mx-auto rounded-3xl ${step.color} shadow-[0_-15px_40px_-15px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} relative border border-white/60 h-[80vh] md:h-[70vh] transform-gpu`}
      >
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative z-10">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100">
              {step.icon}
            </div>
            <span className="text-5xl md:text-7xl font-bold text-[#C9A227]/30 tracking-tighter">{step.id}</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-[#1A1A1A]">
            {step.title}
          </h3>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-md">
            {step.description}
          </p>
        </div>
        
        <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden group">
          <motion.div 
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <div className="absolute inset-0 bg-black/5 z-10 transition-colors duration-500 group-hover:bg-transparent" />
            <Image 
              src={step.image}
              alt={step.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          {/* Subtle gradient overlay to blend image with card */}
          <div className={`absolute inset-0 ${isEven ? 'bg-gradient-to-t md:bg-gradient-to-l' : 'bg-gradient-to-t md:bg-gradient-to-r'} from-transparent to-black/5 z-20 pointer-events-none`} />
        </div>
      </motion.div>
    </div>
  )
}

export default function ProcessPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  return (
    <main className="bg-[#FAFAFA] text-[#1A1A1A] relative selection:bg-[#C9A227] selection:text-white">
      
      {/* Top Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#C9A227] origin-left z-[100]"
        style={{ scaleX: smoothProgress }}
      />
      
      {/* Cinematic Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-white">
        {/* Ambient Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-15 mix-blend-luminosity">
            <source src="/fashion.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-[#FAFAFA]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto z-10 px-4"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            className="inline-flex items-center space-x-2 text-sm font-semibold tracking-wider text-[#C9A227] uppercase mb-8 bg-white/60 backdrop-blur-md px-6 py-2 rounded-full border border-gray-200 shadow-sm"
          >
            <span className="w-6 h-px bg-[#C9A227]" />
            <span>Our Ecosystem</span>
            <span className="w-6 h-px bg-[#C9A227]" />
          </motion.div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-medium tracking-tighter mb-8 text-[#1A1A1A] leading-[0.9]">
            The Anatomy of <br className="hidden md:block"/> <span className="italic font-serif text-[#C9A227] pr-4">Precision</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-4xl mx-auto">
            Discover how we are working with global buyers and maintaining the start-to-end process. We seamlessly execute complex orders through meticulous engineering. From the Tech Pack to Shipment, we define world-class manufacturing.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-4 z-10"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#C9A227] font-bold">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 text-[#C9A227] animate-bounce" />
        </motion.div>
      </section>

      {/* Stacking Cards Section */}
      <section ref={containerRef} className="px-4 sm:px-6 lg:px-8 pb-[20vh] relative bg-[#FAFAFA] w-full">
        <div className="w-full flex flex-col">
          {processSteps.map((step, i) => (
            <Card key={step.id} step={step} i={i} />
          ))}
        </div>
      </section>

      {/* Footer CTA - PREMIUM LUXURY */}
      <section className="relative w-full py-40 bg-[#0F172A] text-white px-4 text-center overflow-hidden">
        
        {/* Glow */}
        <motion.div 
          animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9A227]/10 rounded-full blur-[120px] pointer-events-none z-0"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center relative z-10"
        >
          <h4 className="text-sm font-bold tracking-[0.3em] text-[#C9A227] mb-6 uppercase">Ready to Build</h4>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-10 text-white">
            Let's Engineer Something <br /> <span className="italic font-serif text-[#C9A227]">Together.</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with us to bring your brand's vision to life through our world-class manufacturing infrastructure.
          </p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact" 
            className="inline-flex items-center justify-center h-16 px-12 font-bold tracking-[0.2em] uppercase text-sm bg-[#C9A227] text-white rounded-full hover:bg-white hover:text-[#0F172A] hover:shadow-[0_0_40px_rgba(201,162,39,0.4)] transition-all duration-500 shadow-2xl"
          >
            Start a Conversation
          </motion.a>
        </motion.div>
      </section>
      
    </main>
  );
}
