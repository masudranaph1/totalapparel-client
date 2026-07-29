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
    icon: <Leaf className="w-8 h-8 md:w-10 md:h-10 text-brand-dark" />,
    image: "/process-sourcing.png",
    color: "bg-[#F9F8F6]"
  },
  {
    id: "02",
    title: "Fabric Development",
    description: "Our state-of-the-art automated machinery transforms raw yarn into luxurious fabrics, ensuring consistent density and impeccable texture.",
    icon: <Factory className="w-8 h-8 md:w-10 md:h-10 text-brand-dark" />,
    image: "/fabric-development.png",
    color: "bg-[#F3F0EA]"
  },
  {
    id: "03",
    title: "Dyeing & Production",
    description: "We utilize eco-friendly, closed-loop dyeing processes to achieve rich, lasting colors while minimizing our environmental footprint.",
    icon: <Droplet className="w-8 h-8 md:w-10 md:h-10 text-brand-dark" />,
    image: "/process-production.png",
    color: "bg-[#EAE6DF]"
  },
  {
    id: "04",
    title: "Cutting & Engineering",
    description: "Precision laser cutting meets masterful hand-sewing. Our artisans meticulously assemble each garment for a flawless fit.",
    icon: <Scissors className="w-8 h-8 md:w-10 md:h-10 text-brand-dark" />,
    image: "/process-engineering.png",
    color: "bg-[#E1DDD4]"
  },
  {
    id: "05",
    title: "Quality Assurance",
    description: "Every item undergoes a rigorous 5-point inspection process. We check for seam integrity, color consistency, and dimensional stability.",
    icon: <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-brand-dark" />,
    image: "/process-quality.png",
    color: "bg-[#D8D3C9]"
  },
  {
    id: "06",
    title: "Packaging & Logistics",
    description: "Products are carefully pressed, folded, and packed in sustainable materials before being shipped via our global logistics network.",
    icon: <Package className="w-8 h-8 md:w-10 md:h-10 text-brand-dark" />,
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
        className={`w-full max-w-7xl mx-auto rounded-3xl ${step.color} shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} relative border border-white/50 h-[80vh] md:h-[70vh] transform-gpu`}
      >
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative z-10">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm">
              {step.icon}
            </div>
            <span className="text-5xl md:text-7xl font-bold text-brand-text/10 tracking-tighter">{step.id}</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-brand-dark">
            {step.title}
          </h3>
          <p className="text-lg md:text-xl text-brand-muted font-light leading-relaxed max-w-md">
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
            <Image 
              src={step.image}
              alt={step.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          {/* Subtle gradient overlay to blend image with card */}
          <div className={`absolute inset-0 ${isEven ? 'bg-gradient-to-t md:bg-gradient-to-l' : 'bg-gradient-to-t md:bg-gradient-to-r'} from-transparent to-black/5`} />
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
    <main className="bg-brand-bg text-brand-text relative selection:bg-brand-accent selection:text-white">
      
      {/* Top Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-brand-accent origin-left z-[100]"
        style={{ scaleX: smoothProgress }}
      />
      
      {/* Cinematic Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Ambient Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20 mix-blend-multiply">
            <source src="/fashion.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/80 via-brand-bg/60 to-brand-bg" />
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
            className="inline-block mb-8 px-6 py-2 rounded-full border border-brand-border bg-white/40 backdrop-blur-md text-sm tracking-[0.2em] uppercase font-semibold text-brand-dark shadow-sm"
          >
            Our Ecosystem
          </motion.div>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-medium tracking-tight mb-8">
            The Anatomy of <br className="hidden md:block"/> <span className="italic font-serif text-brand-accent pr-4">Precision</span>
          </h1>
          <p className="text-xl md:text-3xl text-brand-muted font-light leading-relaxed max-w-3xl mx-auto">
            From raw thread to the final fold, discover the art and science woven into every stage of our production process.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 flex flex-col items-center gap-4 z-10"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-brand-muted font-semibold">Scroll to explore</span>
          <ArrowDown className="w-6 h-6 text-brand-accent animate-bounce" />
        </motion.div>
      </section>

      {/* Stacking Cards Section */}
      <section ref={containerRef} className="px-4 sm:px-6 lg:px-8 pb-[20vh] relative bg-brand-bg w-full">
        <div className="w-full flex flex-col">
          {processSteps.map((step, i) => (
            <Card key={step.id} step={step} i={i} />
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-40 bg-brand-dark text-brand-bg relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <h2 className="text-5xl md:text-8xl font-medium tracking-tight mb-8">
            Ready to Build <br/> <span className="italic font-serif text-brand-accent pr-4">Together?</span>
          </h2>
          <p className="text-brand-bg/70 text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto">
            Partner with us to bring your brand's vision to life through our world-class manufacturing infrastructure.
          </p>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact" 
            className="inline-flex items-center justify-center h-16 md:h-20 px-10 md:px-14 font-semibold tracking-widest uppercase text-sm md:text-lg bg-brand-bg text-brand-dark rounded-full hover:bg-brand-accent hover:text-white transition-colors duration-300 shadow-2xl"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Ambient background for footer */}
        <motion.div 
          animate={{ 
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[100vw] aspect-square bg-brand-accent/20 rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div 
          animate={{ 
            rotate: [360, 270, 180, 90, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/4 w-[80vw] aspect-square bg-white/5 rounded-full blur-[100px] pointer-events-none"
        />
      </section>
      
    </main>
  );
}
