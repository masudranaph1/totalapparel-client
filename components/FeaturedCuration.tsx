"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const FeaturedCuration = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // Unique reveal animations
  const imageCover: Variants = {
    hidden: { y: "0%" },
    visible: { 
      y: "100%", 
      transition: { duration: 1.2, ease: [0.7, 0, 0.1, 1] } 
    }
  };

  const imageScale: Variants = {
    hidden: { scale: 1.3 },
    visible: { 
      scale: 1, 
      transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const textSlideUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section ref={containerRef} className="w-full bg-brand-bg py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        {/* Header Block */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mx-auto text-center mb-24 md:mb-32"
        >
          <motion.h2 variants={textSlideUp} className="text-3xl md:text-4xl lg:text-[40px] font-bold text-brand-text leading-tight mb-6 tracking-tight">
            Advanced Manufacturing & Apparel Engineering
          </motion.h2>
          <motion.p variants={textSlideUp} className="text-[14px] text-brand-text font-semibold mb-3">
            Scale your brand with our state-of-the-art production facilities.
          </motion.p>
          <motion.p variants={textSlideUp} className="text-[14px] text-brand-muted mb-3 leading-relaxed">
            Engineered for precision: innovative fabrics, seamless construction, and scalable execution designed to meet global retail demands.
          </motion.p>
          <motion.p variants={textSlideUp} className="text-[14px] text-brand-text font-bold uppercase tracking-widest mt-6">
            End-To-End Sourcing
          </motion.p>
        </motion.div>

        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 mb-32 md:mb-48">
          
          {/* Left Large Column */}
          <div className="w-full md:w-7/12 flex flex-col group relative">
            <motion.div style={{ y: y1 }} className="w-full relative z-10">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-150px" }}
                className="w-full aspect-[4/5] relative mb-8 overflow-hidden bg-brand-border/30"
              >
                {/* Reveal Overlay Cover */}
                <motion.div variants={imageCover} className="absolute inset-0 bg-brand-bg z-20 origin-top" />
                
                {/* Image */}
                <motion.div variants={imageScale} className="w-full h-full relative">
                  <Image 
                    src="/process-engineering.png" 
                    alt="Outerwear Manufacturing" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                  />
                </motion.div>
              </motion.div>

              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.h3 variants={textSlideUp} className="text-2xl md:text-3xl font-bold text-brand-text mb-3 tracking-tight">Precision Outerwear</motion.h3>
                <motion.p variants={textSlideUp} className="text-[14px] text-brand-muted mb-8 font-medium">From classic woven silhouettes to bold technical garments.</motion.p>
                <motion.div variants={textSlideUp}>
                  <button className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-text border-b-2 border-brand-text pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors flex items-center gap-2">
                    EXPLORE OUTERWEAR <span className="text-xl leading-none font-light">→</span>
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Small Column */}
          <div className="w-full md:w-5/12 flex flex-col group mt-10 md:mt-32 relative z-20">
            <motion.div style={{ y: y2 }} className="w-full">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-150px" }}
                className="w-full aspect-[3/4] relative mb-8 overflow-hidden bg-brand-border/30 shadow-2xl"
              >
                {/* Reveal Overlay Cover */}
                <motion.div variants={imageCover} className="absolute inset-0 bg-brand-bg z-20 origin-top" />
                
                <motion.div variants={imageScale} className="w-full h-full relative">
                  <Image 
                    src="/process-production.png" 
                    alt="Denim Production" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                  />
                </motion.div>
              </motion.div>

              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="bg-brand-white p-8 -mt-16 relative z-30 shadow-xl ml-4"
              >
                <motion.h3 variants={textSlideUp} className="text-[22px] font-bold text-brand-text mb-3 leading-tight tracking-tight">Technical Denim</motion.h3>
                <motion.p variants={textSlideUp} className="text-[14px] text-brand-muted mb-6 font-medium leading-relaxed">Sustainable washing processes and robust construction for all seasons.</motion.p>
                <motion.div variants={textSlideUp}>
                  <button className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-text border-b-2 border-brand-text pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors flex items-center gap-2">
                    DISCOVER DENIM <span className="text-xl leading-none font-light">→</span>
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          
        </div>

        {/* Row 2 - Video and Description */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 relative z-10">
          
          {/* Left Media (Auto-playing Video) */}
          <div className="w-full md:w-1/2 group">
            <motion.div 
              style={{ y: y3 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-150px" }}
              className="w-full aspect-[4/3] relative overflow-hidden bg-brand-border/30 shadow-2xl"
            >
              {/* Reveal Overlay Cover */}
              <motion.div variants={imageCover} className="absolute inset-0 bg-brand-bg z-20 origin-top" />

              <motion.div variants={imageScale} className="w-full h-full relative">
                <video 
                  src="/fashion.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out filter grayscale contrast-125"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Text */}
          <div className="w-full md:w-1/2 md:pr-12">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h3 variants={textSlideUp} className="text-[26px] md:text-[32px] lg:text-[40px] font-medium text-brand-text leading-[1.2] tracking-tight mb-8">
                Driven by Industrial Precision and Scale.
              </motion.h3>
              <motion.p variants={textSlideUp} className="text-base text-brand-muted leading-relaxed">
                Total Apparel combines expert textile engineering, authentic craftsmanship, and state-of-the-art machinery, delivering consistent quality and reliable global execution for your brand.
              </motion.p>
            </motion.div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default FeaturedCuration;
