"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { notFound } from "next/navigation";

// --- MOCK DATA ---
const ALL_ARTICLES = [
  {
    id: "sustainable-denim", // From the featured article href
    title: "The Future of Sustainable Denim: Closed-Loop Water Systems",
    category: "Sustainability",
    date: "July 24, 2026",
    readTime: "8 min read",
    excerpt: "As the global fashion industry rapidly shifts towards true circularity, we explore how our newly implemented closed-loop water systems and ozone washing techniques are fundamentally revolutionizing high-volume raw denim manufacturing.",
    image: "/images/fabric_dyeing.png", 
    content: `
      <p>The apparel manufacturing landscape is undergoing a massive transformation. As brands face increasing pressure to adopt sustainable practices, the spotlight is firmly on denim—one of the most resource-intensive fabrics in the world.</p>
      <h2>The Water Problem in Traditional Denim</h2>
      <p>Historically, producing a single pair of jeans could consume up to 7,000 liters of water. From the initial cotton growth to the final indigo dye and stone-washing processes, the traditional lifecycle of denim is heavily water-dependent. In response to this, Total Apparel has engineered a fundamentally different approach.</p>
      <h2>Enter the Closed-Loop System</h2>
      <p>Our newly implemented closed-loop water system in the dyeing and finishing facilities captures, purifies, and reuses 95% of the water required in production. By utilizing advanced reverse osmosis and biological filtration, the water returning to the system is often cleaner than when it entered.</p>
      <p>Furthermore, traditional stone-washing has been entirely replaced by ozone washing technology. This not only drastically reduces water consumption but also eliminates toxic chemical discharge into local ecosystems.</p>
      <h2>What This Means for Global Brands</h2>
      <p>By partnering with factories that employ these systems, global fashion brands can seamlessly transition their denim lines to be 100% sustainable without sacrificing the authentic vintage wash or heavy-duty feel that consumers demand. The future of denim is here, and it is undeniably circular.</p>
    `
  },
  {
    id: "art-1",
    title: "Navigating Global Logistics: SS26 Freight Updates",
    category: "Supply Chain",
    date: "July 20, 2026",
    readTime: "5 min read",
    image: "/images/global_manufacturing.png", 
    content: `
      <p>Global logistics have faced unprecedented challenges over the past few years, but as we look toward the SS26 season, new patterns and optimization strategies are emerging.</p>
      <h2>Streamlined Freight Routes</h2>
      <p>Total Apparel has successfully integrated an AI-driven logistics forecasting system. This allows our merchandising team to anticipate port congestions weeks in advance and dynamically reroute shipments. By doing so, we've cut average global transit times by 14%.</p>
      <p>Brands relying on our manufacturing infrastructure can now track their container shipments in real-time through our proprietary portal, ensuring exact transparency from the factory floor in Dhaka straight to distribution centers in Europe and North America.</p>
    `
  },
  {
    id: "art-2",
    title: "Material Focus: The Rise of Heavyweight French Terry",
    category: "Fabric Innovation",
    date: "July 15, 2026",
    readTime: "4 min read",
    image: "/images/yarn_to_fabric.png", 
    content: `
      <p>Streetwear's influence on high fashion continues to dictate textile trends. This season, the demand for ultra-heavyweight fabrics—specifically 400gsm+ French Terry—has skyrocketed.</p>
      <p>Our R&D team has developed a unique knitting technique that maximizes loop density on the interior while maintaining an incredibly smooth, print-ready face. This ensures that the garment holds a structural, boxy silhouette without feeling uncomfortably rigid.</p>
    `
  },
  {
    id: "art-3",
    title: "Inside the Facility: New Quality Assurance Protocols",
    category: "Operations",
    date: "July 08, 2026",
    readTime: "6 min read",
    image: "/images/quality_laboratory.png", 
    content: `
      <p>Quality is the cornerstone of premium manufacturing. This month, we have overhauled our Quality Assurance (QA) laboratory to include state-of-the-art automated optical inspection systems.</p>
      <p>These systems scan fabrics for microscopic weaving defects and color discrepancies before the cutting phase even begins. This zero-defect tolerance policy ensures that our client brands receive pristine garments, completely eliminating the costly return loops associated with traditional manufacturing errors.</p>
    `
  },
  {
    id: "art-4",
    title: "Client Spotlight: Scaling a Luxury Streetwear Syndicate",
    category: "Case Study",
    date: "June 28, 2026",
    readTime: "10 min read",
    image: "/images/garment_manufacturing.png", 
    content: `
      <p>When one of Europe's fastest-growing luxury streetwear brands approached us, they were facing a critical bottleneck: their previous manufacturers could not maintain quality consistency as order volumes scaled from 5,000 to 50,000 units.</p>
      <p>Through our dedicated production lines and dedicated merchandising team, we successfully transitioned their entire cut-and-sew operation. Within two seasons, they experienced a 40% reduction in production lead times and a flawless quality record.</p>
    `
  },
  {
    id: "art-5",
    title: "The Golden Hour: Photorealistic Cotton Harvesting",
    category: "Sourcing",
    date: "June 12, 2026",
    readTime: "7 min read",
    image: "/images/cotton_farming_hero.png", 
    content: `
      <p>Sourcing raw materials ethically is just as important as the manufacturing process itself. We sent our documentary team to capture the golden hour at our partner cotton farms.</p>
      <p>These farms utilize regenerative agriculture techniques, meaning they restore soil health and biodiversity rather than depleting it. The resulting cotton fiber is incredibly strong, long-staple, and ready to be spun into the world's finest premium yarns.</p>
    `
  },
  {
    id: "art-6",
    title: "Ultra-Modern Weaving Looms in Action",
    category: "Technology",
    date: "June 05, 2026",
    readTime: "5 min read",
    image: "/images/weaving_loom.png", 
    content: `
      <p>The rhythmic clatter of weaving looms is the heartbeat of any textile operation. We have recently upgraded our facility with the latest air-jet weaving technology.</p>
      <p>Operating at incredibly high speeds, these machines weave flawless selvedge denim, intricate twills, and heavy canvas with robotic precision. This technological leap allows us to offer custom fabric developments with much lower minimum order quantities.</p>
    `
  }
];

export default function NewsArticlePage({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap params using React.use()
  const resolvedParams = use(params);
  const article = ALL_ARTICLES.find(a => a.id === resolvedParams.id);

  if (!article) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-white relative selection:bg-[#C9A227] selection:text-white pb-32">
      
      {/* Article Hero */}
      <div className="relative w-full h-[60vh] lg:h-[80vh] bg-[#0F172A]">
        <Image 
          src={article.image}
          alt={article.title}
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F172A]/50 to-[#0F172A]" />
        
        {/* Navigation & Breadcrumbs */}
        <div className="absolute top-0 left-0 w-full pt-32 px-4 sm:px-6 lg:px-12 z-20">
          <Link href="/news" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors group text-[10px] font-black uppercase tracking-[0.2em]">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-[#C9A227] group-hover:border-[#C9A227] transition-all">
              <ArrowLeft className="w-4 h-4" />
            </div>
            Back to Journal
          </Link>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 w-full px-4 sm:px-6 lg:px-12 pb-16 lg:pb-24 z-20 max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 border border-[#C9A227] px-4 py-1.5 rounded-full text-[#C9A227] text-[10px] font-black tracking-[0.2em] uppercase mb-6 bg-black/30 backdrop-blur-md">
               {article.category}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
               {article.title}
            </h1>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-widest">
                 <Clock className="w-4 h-4 text-[#C9A227]" /> {article.readTime}
              </div>
              <div className="w-1 h-1 rounded-full bg-white/30" />
              <div className="text-white/70 text-xs font-bold uppercase tracking-widest">
                 {article.date}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 relative z-10">
        
        {/* Share Button (Floating) */}
        <div className="hidden lg:flex absolute -left-24 top-32 flex-col gap-4">
          <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#C9A227] hover:border-[#C9A227] transition-all group shadow-sm hover:shadow-md">
            <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg lg:prose-xl max-w-none prose-headings:font-serif prose-headings:italic prose-headings:text-[#1A1A1A] prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-[#C9A227]"
        >
          {article.excerpt && (
            <p className="text-2xl font-light text-[#1A1A1A] mb-12 leading-relaxed border-l-4 border-[#C9A227] pl-6">
              {article.excerpt}
            </p>
          )}
          
          <div dangerouslySetInnerHTML={{ __html: article.content || "<p>Content not available.</p>" }} />
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-20" />

        {/* Next/Prev simple footer */}
        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
           <Link href="/news" className="hover:text-[#1A1A1A] transition-colors">Return to Index</Link>
           <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-[#C9A227] transition-colors">Back to Top ↑</button>
        </div>
      </div>

    </main>
  );
}
