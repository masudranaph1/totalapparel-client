'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Settings, Repeat, Layers } from 'lucide-react';
import Image from 'next/image';

const processes = [
  {
    icon: <Settings className="w-5 h-5 text-gray-700" />,
    title: 'High-Speed Precision',
    description: 'Advanced spindles working flawlessly to draw fine yarn.',
  },
  {
    icon: <Repeat className="w-5 h-5 text-gray-700" />,
    title: 'Continuous Twist',
    description: 'Ensuring absolute tensile strength in every thread.',
  },
  {
    icon: <Layers className="w-5 h-5 text-gray-700" />,
    title: 'Texture & Consistency',
    description: 'Cinematic quality control at a microscopic level.',
  },
];

export default function SpinningMill() {
  return (
    <section id="spinning" className="relative w-full py-12 md:py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-sm font-semibold tracking-wider text-gray-500 uppercase">
                <span className="w-8 h-px bg-gray-500" />
                <span>Textile Manufacturing</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
                Modern Spinning <br /> Technology
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Experience the cinematic precision of our modern spinning mills. We transform raw white cotton fibers into fine, exceptionally strong yarn threads using high-speed spindles and cutting-edge mechanical technology.
              </p>
            </div>

            <div className="flex flex-col space-y-6 pt-4">
              {processes.map((process, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                    {process.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A1A1A]">{process.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mt-1">
                      {process.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-[#1A1A1A] rounded-2xl overflow-hidden transition-all duration-300 hover:bg-[#C9A227] hover:shadow-xl hover:shadow-[#C9A227]/30 hover:-translate-y-1">
                <span className="relative flex items-center gap-2">
                  View Production Plant
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right Side: Image Marquee */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[600px] w-full overflow-hidden group order-1 lg:order-2 flex items-center"
          >
            {/* Edge fade gradients for seamless look */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

            <motion.div
              className="flex h-full w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
            >
              {[
                "/images/spinning_mill_yarn.png",
                "/images/precision_spinning.png",
                "/images/yarn_to_fabric.png",
                "/images/weaving_loom.png",
                "/images/spinning_mill_yarn.png",
                "/images/precision_spinning.png",
                "/images/yarn_to_fabric.png",
                "/images/weaving_loom.png",
              ].map((src, idx) => (
                <div key={idx} className="relative w-[280px] lg:w-[320px] h-[90%] my-auto shrink-0 px-3">
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-black/10 z-10 transition-colors duration-500 hover:bg-transparent" />
                    <Image
                      src={src}
                      alt={`Spinning Process ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-1000 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Floating Info Box */}
            <div className="absolute bottom-8 left-8 z-30 pointer-events-none hidden lg:block">
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white/90 backdrop-blur-md border border-white/50 p-6 rounded-2xl text-[#1A1A1A] shadow-2xl max-w-[280px]"
               >
                 <h4 className="text-lg font-bold mb-1">Automated Precision</h4>
                 <p className="text-xs text-gray-600">Continuous state-of-the-art spinning and drawing process ensuring flawless yarn consistency.</p>
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
