"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shirt, ShieldCheck, Truck, Leaf } from "lucide-react";

const features = [
  {
    icon: Shirt,
    title: "Premium Blanks",
    description: "Retail-ready quality with superior heavyweight fabrics.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "Every garment undergoes strict 4-point inspection.",
  },
  {
    icon: Truck,
    title: "Fast Global Shipping",
    description: "Expedited wholesale delivery across 50+ countries.",
  },
  {
    icon: Leaf,
    title: "Ethical Production",
    description: "Sustainable sourcing and fair-trade manufacturing.",
  },
];

export default function TrustBanner() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full bg-white border-t border-gray-100 py-16 lg:py-20 overflow-hidden font-sans">
      <div className="max-w-[1600px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-black tracking-[0.2em] uppercase text-gray-400">
            Trusted by modern streetwear brands worldwide
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-neutral-50 flex items-center justify-center mb-6 group-hover:bg-rose-500 transition-colors duration-500 shadow-sm">
                  <Icon className="w-8 h-8 text-gray-900 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-rose-500 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[260px]">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
