"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Apparel Manufacturing",
    description: "High-volume production of Knit, Woven, and Outerwear categories crafted to exact client specifications.",
    image: "/apparel-manufacturing.png",
    link: "/capabilities/manufacturing",
  },
  {
    num: "02",
    title: "Fabric Development & Sourcing",
    description: "Specialized sourcing of innovative yarns, customized fabrics, and precise GSM weights.",
    image: "/fabric-development.png",
    link: "/capabilities/fabric-sourcing",
  },
  {
    num: "03",
    title: "Merchandising & Supply Chain",
    description: "End-to-end project management from design transfer to final export logistics.",
    image: "/merchandising.png",
    link: "/capabilities/merchandising",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

const ManufacturingSolutions = () => {
  return (
    <section className="w-full bg-brand-bg text-brand-text py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-brand-border pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
              Complete Apparel Manufacturing Solutions
            </h2>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="group flex flex-col">
              
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden mb-8 bg-brand-border/30">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-semibold tracking-widest text-brand-accent">
                    {service.num}
                  </span>
                  <div className="h-px w-12 bg-brand-border"></div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-medium mb-4 tracking-tight group-hover:text-brand-accent transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-brand-muted text-base lg:text-lg font-light leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Explore Link */}
                <div className="mt-auto pt-4 border-t border-brand-border">
                  <Link 
                    href={service.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest hover:text-brand-accent transition-colors duration-300"
                  >
                    Explore Capability
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ManufacturingSolutions;
