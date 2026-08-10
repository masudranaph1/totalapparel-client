'use client';

import { motion } from 'framer-motion';
import { Network, Activity, Focus, Cpu } from 'lucide-react';
import Image from 'next/image';

const innovations = [
  {
    icon: <Activity className="w-5 h-5 text-[#C9A227]" />,
    title: 'Laser Precision Weaving',
    description: 'Autonomous systems interlacing threads with sub-millimeter accuracy.',
  },
  {
    icon: <Cpu className="w-5 h-5 text-[#C9A227]" />,
    title: 'Smart Fabric AI',
    description: 'Digital aesthetics meets real-world structural integrity.',
  },
];

export default function YarnToFabric() {
  return (
    <section id="yarn" className="relative w-full py-12 md:py-20 lg:py-32 bg-[#FAFAFA] overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9A227]/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-sm font-semibold tracking-wider text-[#C9A227] uppercase">
                <span className="w-8 h-px bg-[#C9A227]" />
                <span>Textile Innovation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
                Yarn to <span className="text-[#C9A227]">Fabric</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Experience the futuristic evolution of textile manufacturing. Glowing neon blue and white yarn threads automatically interlace into a complex, high-tech fabric grid driven by laser-guided systems.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {innovations.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                  className="flex flex-col space-y-3 bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 hover:border-[#C9A227]/30 transition-colors"
                >
                  <div className="w-10 h-10 bg-cyan-950 rounded-xl flex items-center justify-center border border-[#C9A227]/50">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A]">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
          </motion.div>

          {/* Right Side: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[550px] lg:h-[700px] w-full rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(8,145,178,0.15)] group"
          >
            <div className="absolute inset-0 bg-black/20 z-10 transition-colors duration-500 group-hover:bg-transparent" />
            <Image
              src="/images/yarn_to_fabric.png"
              alt="Futuristic Textile Innovation"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            
            {/* Holographic Overlay Detail */}
            <div className="absolute top-6 right-6 z-20">
               <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white/90 backdrop-blur-md border border-[#C9A227]/30 p-3 rounded-lg flex items-center space-x-3"
               >
                 <Network className="w-5 h-5 text-[#C9A227] animate-pulse" />
                 <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Neural Grid Active</span>
               </motion.div>
            </div>

            <div className="absolute bottom-6 left-6 z-20">
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white/90 backdrop-blur-md border border-[#C9A227]/30 p-4 rounded-xl flex items-center space-x-4"
               >
                 <div className="w-10 h-10 rounded-full bg-cyan-950 flex items-center justify-center border border-[#C9A227]">
                    <Focus className="w-5 h-5 text-[#C9A227]" />
                 </div>
                 <div>
                   <h4 className="text-sm font-bold text-[#1A1A1A] font-mono">LASER INTERLACING</h4>
                   <p className="text-xs text-gray-500 font-mono mt-1">STATUS: OPTIMAL</p>
                 </div>
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
