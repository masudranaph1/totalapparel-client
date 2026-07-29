"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  UploadCloud, 
  X, 
  CheckCircle2,
  AlertCircle
} from "lucide-react";

const services = [
  "Full Package Manufacturing",
  "Fabric Sourcing",
  "Merchandising",
  "Sampling",
  "Quality Control",
  "Logistics",
  "Other"
];

const productCategories = [
  "T-Shirts",
  "Hoodies",
  "Sweatshirts",
  "Knitwear",
  "Woven",
  "Outerwear",
  "Denim",
  "Sweaters",
  "Other"
];

// Staggered Text Component for Hero
const StaggeredTitle = ({ text }: { text: string }) => {
  return (
    <span className="inline-flex overflow-hidden">
      {text.split("").map((char, idx) => (
        <motion.span
          key={idx}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2 + (idx * 0.04), 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
};

export default function ContactPage() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  
  // File upload state
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Basic form state
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    country: "",
    service: "",
    category: "",
    quantity: "",
    deliveryDate: "",
    details: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <main className="w-full min-h-screen bg-brand-bg relative selection:bg-brand-accent selection:text-white overflow-hidden">
      
      {/* Cinematic Dark Background Layer with Parallax */}
      <motion.div style={{ y: yBg }} className="absolute top-0 left-0 w-full h-[75vh] bg-zinc-950 -z-20 origin-top" />
      
      {/* Dynamic Ambient Animated Glows */}
      <motion.div 
        animate={{ scale: [1, 1.2, 0.9, 1], opacity: [0.1, 0.25, 0.15, 0.1], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-[600px] h-[600px] bg-brand-accent/20 rounded-full blur-[120px] pointer-events-none -z-10"
      />
      <motion.div 
        animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.2, 0.1], x: [0, -100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-[150px] pointer-events-none -z-10"
      />

      {/* Hero Section */}
      <section className="relative w-full pt-48 pb-24 px-4 sm:px-6 lg:px-12 text-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.1 }}
            className="mb-10 px-8 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-[10px] tracking-[0.4em] uppercase font-black text-brand-accent shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            Start Your Production
          </motion.div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[11rem] font-medium tracking-tighter mb-8 leading-[0.85] flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <StaggeredTitle text="Let's" />
            <motion.span 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="italic font-serif text-brand-accent"
            >
              Connect.
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-2xl font-light text-zinc-400 max-w-3xl mx-auto leading-relaxed mt-4"
          >
            From raw materials to final delivery, tell us what you need. Our team is ready to engineer the perfect manufacturing solution.
          </motion.p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="w-full pb-32 px-4 sm:px-6 lg:px-12 relative z-10 -mt-10">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-12 xl:gap-20">
          
          {/* LEFT: Contact Cards (Staggered Entry & Hover Tilt) */}
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.8 } }
            }}
            initial="hidden"
            animate="show"
            className="w-full lg:w-1/3 flex flex-col gap-6"
          >
             {/* Card 1: Headquarters */}
             <motion.div variants={{ hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="group p-8 md:p-10 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-[2.5rem] hover:border-brand-accent/50 hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all duration-500 relative overflow-hidden -translate-y-2 hover:-translate-y-4">
               <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
               <div className="relative z-10 flex flex-col items-start">
                 <div className="w-14 h-14 bg-zinc-950 rounded-full flex items-center justify-center border border-zinc-800 mb-8 text-brand-accent group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent transition-all duration-500 shadow-xl">
                    <MapPin className="w-6 h-6" />
                 </div>
                 <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-3 group-hover:text-zinc-400 transition-colors">Headquarters</h4>
                 <p className="text-3xl font-serif italic text-white tracking-wide">Dhaka, Bangladesh</p>
               </div>
             </motion.div>

             {/* Card 2: Email */}
             <motion.div variants={{ hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="group p-8 md:p-10 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-[2.5rem] hover:border-brand-accent/50 hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all duration-500 relative overflow-hidden -translate-y-1 hover:-translate-y-3">
               <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
               <div className="relative z-10 flex flex-col items-start">
                 <div className="w-14 h-14 bg-zinc-950 rounded-full flex items-center justify-center border border-zinc-800 mb-8 text-brand-accent group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent transition-all duration-500 shadow-xl">
                    <Mail className="w-6 h-6" />
                 </div>
                 <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-3 group-hover:text-zinc-400 transition-colors">Direct Email</h4>
                 <a href="mailto:id@totaltexbd.com" className="text-2xl font-light text-white tracking-wide hover:text-brand-accent transition-colors relative inline-block">
                   id@totaltexbd.com
                   <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-accent group-hover:w-full transition-all duration-500" />
                 </a>
               </div>
             </motion.div>

             {/* Card 3: Phone */}
             <motion.div variants={{ hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }} className="group p-8 md:p-10 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-[2.5rem] hover:border-brand-accent/50 hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all duration-500 relative overflow-hidden flex-1 hover:-translate-y-2">
               <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />
               <div className="relative z-10 flex flex-col items-start">
                 <div className="w-14 h-14 bg-zinc-950 rounded-full flex items-center justify-center border border-zinc-800 mb-8 text-brand-accent group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent transition-all duration-500 shadow-xl">
                    <Phone className="w-6 h-6" />
                 </div>
                 <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 mb-3 group-hover:text-zinc-400 transition-colors">Phone / WhatsApp</h4>
                 <p className="text-2xl font-light text-white tracking-wide">+880 198 736 0371</p>
                 
                 <div className="mt-8 flex items-center gap-3">
                   <Clock className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                   <p className="text-sm font-medium text-zinc-400 tracking-wide group-hover:text-zinc-300 transition-colors">Mon–Sat • 9AM–6PM</p>
                 </div>
               </div>
             </motion.div>
          </motion.div>

          {/* RIGHT: The Request Form (Glassmorphism & Floating Labels) */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-2/3"
          >
            <div className="bg-white/95 backdrop-blur-3xl p-8 md:p-12 lg:p-16 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] relative overflow-hidden border border-white">
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-32"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-32 h-32 bg-green-50 rounded-full flex items-center justify-center mb-10 shadow-inner"
                    >
                      <CheckCircle2 className="w-16 h-16 text-green-500" />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-serif italic text-black mb-6">Inquiry Received</h2>
                    <p className="text-gray-500 text-lg md:text-xl max-w-md mx-auto mb-12 font-light leading-relaxed">
                      Thank you for reaching out. Our elite merchandising team is reviewing your requirements and will contact you shortly.
                    </p>
                    <button onClick={() => setIsSuccess(false)} className="px-10 py-4 bg-black text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-brand-accent transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                      Submit Another Request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="border-b border-gray-100 pb-8 mb-4">
                      <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-black mb-3">Project Details</h3>
                      <p className="text-base font-light text-gray-500">Please provide as much detail as possible to help us assist you.</p>
                    </div>

                    {/* Floating Label Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                      <div className="relative group pt-4">
                        <input 
                          required
                          type="text" 
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="peer w-full h-12 bg-transparent border-b border-gray-200 focus:border-black outline-none transition-colors text-black font-medium placeholder-transparent"
                          placeholder="Full Name"
                        />
                        <label className="absolute left-0 top-1/2 -translate-y-1/2 text-[11px] font-black tracking-[0.2em] uppercase text-gray-400 peer-focus:top-0 peer-focus:text-black peer-focus:text-[9px] peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-black peer-[&:not(:placeholder-shown)]:text-[9px] transition-all duration-300 pointer-events-none">
                          Full Name
                        </label>
                        <div className="absolute bottom-0 left-0 h-[2px] bg-black w-0 group-focus-within:w-full transition-all duration-500" />
                      </div>
                      
                      <div className="relative group pt-4">
                        <input 
                          required
                          type="text" 
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="peer w-full h-12 bg-transparent border-b border-gray-200 focus:border-black outline-none transition-colors text-black font-medium placeholder-transparent"
                          placeholder="Company"
                        />
                        <label className="absolute left-0 top-1/2 -translate-y-1/2 text-[11px] font-black tracking-[0.2em] uppercase text-gray-400 peer-focus:top-0 peer-focus:text-black peer-focus:text-[9px] peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-black peer-[&:not(:placeholder-shown)]:text-[9px] transition-all duration-300 pointer-events-none">
                          Company / Brand Name
                        </label>
                        <div className="absolute bottom-0 left-0 h-[2px] bg-black w-0 group-focus-within:w-full transition-all duration-500" />
                      </div>
                      
                      <div className="relative group pt-4">
                        <input 
                          required
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="peer w-full h-12 bg-transparent border-b border-gray-200 focus:border-black outline-none transition-colors text-black font-medium placeholder-transparent"
                          placeholder="Email"
                        />
                        <label className="absolute left-0 top-1/2 -translate-y-1/2 text-[11px] font-black tracking-[0.2em] uppercase text-gray-400 peer-focus:top-0 peer-focus:text-black peer-focus:text-[9px] peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-black peer-[&:not(:placeholder-shown)]:text-[9px] transition-all duration-300 pointer-events-none">
                          Business Email
                        </label>
                        <div className="absolute bottom-0 left-0 h-[2px] bg-black w-0 group-focus-within:w-full transition-all duration-500" />
                      </div>
                      
                      <div className="relative group pt-4">
                        <input 
                          required
                          type="text" 
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="peer w-full h-12 bg-transparent border-b border-gray-200 focus:border-black outline-none transition-colors text-black font-medium placeholder-transparent"
                          placeholder="Country"
                        />
                        <label className="absolute left-0 top-1/2 -translate-y-1/2 text-[11px] font-black tracking-[0.2em] uppercase text-gray-400 peer-focus:top-0 peer-focus:text-black peer-focus:text-[9px] peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-black peer-[&:not(:placeholder-shown)]:text-[9px] transition-all duration-300 pointer-events-none">
                          Country
                        </label>
                        <div className="absolute bottom-0 left-0 h-[2px] bg-black w-0 group-focus-within:w-full transition-all duration-500" />
                      </div>
                    </div>

                    {/* Service & Product Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mt-4">
                      <div className="relative group pt-4">
                        <select 
                          required
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className={`peer appearance-none w-full h-12 bg-transparent border-b border-gray-200 focus:border-black outline-none transition-colors font-medium pr-8 ${formData.service ? 'text-black' : 'text-transparent'}`}
                        >
                          <option value="" disabled className="text-gray-400">Select a service</option>
                          {services.map(s => <option key={s} value={s} className="text-black">{s}</option>)}
                        </select>
                        <label className={`absolute left-0 transition-all duration-300 pointer-events-none text-black font-black tracking-[0.2em] uppercase ${formData.service || 'peer-focus:top-0 peer-focus:text-[9px]'} ${formData.service ? 'top-0 text-[9px]' : 'top-1/2 -translate-y-1/2 text-[11px] text-gray-400'}`}>
                          Service Needed
                        </label>
                        <svg className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-black transition-transform group-focus-within:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                        <div className="absolute bottom-0 left-0 h-[2px] bg-black w-0 group-focus-within:w-full transition-all duration-500" />
                      </div>

                      <div className="relative group pt-4">
                        <select 
                          required
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className={`peer appearance-none w-full h-12 bg-transparent border-b border-gray-200 focus:border-black outline-none transition-colors font-medium pr-8 ${formData.category ? 'text-black' : 'text-transparent'}`}
                        >
                          <option value="" disabled className="text-gray-400">Select a category</option>
                          {productCategories.map(c => <option key={c} value={c} className="text-black">{c}</option>)}
                        </select>
                        <label className={`absolute left-0 transition-all duration-300 pointer-events-none text-black font-black tracking-[0.2em] uppercase ${formData.category || 'peer-focus:top-0 peer-focus:text-[9px]'} ${formData.category ? 'top-0 text-[9px]' : 'top-1/2 -translate-y-1/2 text-[11px] text-gray-400'}`}>
                          Product Category
                        </label>
                        <svg className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-black transition-transform group-focus-within:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                        <div className="absolute bottom-0 left-0 h-[2px] bg-black w-0 group-focus-within:w-full transition-all duration-500" />
                      </div>
                      
                      <div className="relative group pt-4">
                        <input 
                          required
                          type="number"
                          min="1"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleInputChange}
                          className="peer w-full h-12 bg-transparent border-b border-gray-200 focus:border-black outline-none transition-colors text-black font-medium placeholder-transparent"
                          placeholder="Quantity"
                        />
                        <label className="absolute left-0 top-1/2 -translate-y-1/2 text-[11px] font-black tracking-[0.2em] uppercase text-gray-400 peer-focus:top-0 peer-focus:text-black peer-focus:text-[9px] peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-black peer-[&:not(:placeholder-shown)]:text-[9px] transition-all duration-300 pointer-events-none">
                          Estimated Order Qty
                        </label>
                        <div className="absolute bottom-0 left-0 h-[2px] bg-black w-0 group-focus-within:w-full transition-all duration-500" />
                      </div>
                      
                      <div className="relative group pt-4">
                        <input 
                          required
                          type="date"
                          name="deliveryDate"
                          value={formData.deliveryDate}
                          onChange={handleInputChange}
                          className={`peer w-full h-12 bg-transparent border-b border-gray-200 focus:border-black outline-none transition-colors text-black font-medium ${formData.deliveryDate ? '' : 'text-transparent'}`}
                        />
                        <label className={`absolute left-0 transition-all duration-300 pointer-events-none text-black font-black tracking-[0.2em] uppercase ${formData.deliveryDate || 'peer-focus:top-0 peer-focus:text-[9px]'} ${formData.deliveryDate ? 'top-0 text-[9px]' : 'top-1/2 -translate-y-1/2 text-[11px] text-gray-400'}`}>
                          Target Delivery
                        </label>
                        <div className="absolute bottom-0 left-0 h-[2px] bg-black w-0 group-focus-within:w-full transition-all duration-500" />
                      </div>
                    </div>

                    {/* Details Textarea with Floating Label */}
                    <div className="relative group pt-6 mt-4">
                      <textarea 
                        required
                        name="details"
                        value={formData.details}
                        onChange={handleInputChange}
                        rows={4}
                        className="peer w-full p-5 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:bg-white focus:border-black transition-all resize-none text-black font-medium placeholder-transparent"
                        placeholder="Details"
                      />
                      <label className="absolute left-5 top-10 -translate-y-1/2 text-[11px] font-black tracking-[0.2em] uppercase text-gray-400 peer-focus:top-2 peer-focus:text-black peer-focus:text-[9px] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-black peer-[&:not(:placeholder-shown)]:text-[9px] transition-all duration-300 pointer-events-none bg-white px-2">
                        Project Specifications
                      </label>
                    </div>

                    {/* Luxury File Upload */}
                    <div className="flex flex-col gap-4 mt-2">
                      <label className="text-[10px] font-black tracking-[0.2em] uppercase text-black ml-2">
                        Tech Pack / Attachments
                      </label>
                      <div 
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`w-full border-2 border-dashed rounded-[2rem] p-12 flex flex-col items-center justify-center transition-all duration-500 cursor-pointer ${
                          isDragging ? "border-brand-accent bg-brand-accent/5 scale-[1.02]" : "border-gray-200 hover:border-black bg-gray-50/50 hover:bg-white"
                        }`}
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-500 shadow-sm ${isDragging ? 'bg-brand-accent text-white scale-110 shadow-lg' : 'bg-white border border-gray-100 text-gray-400'}`}>
                           <UploadCloud className="w-7 h-7" />
                        </div>
                        <p className="text-sm font-black tracking-wide text-black mb-2 uppercase">Click to upload or drag & drop</p>
                        <p className="text-xs text-gray-400 font-medium">PDF, AI, PNG, JPG (max. 50MB)</p>
                        <input 
                          type="file" 
                          multiple 
                          className="hidden" 
                          ref={fileInputRef}
                          onChange={handleFileSelect}
                        />
                      </div>
                      
                      {/* Uploaded Files List */}
                      <AnimatePresence>
                        {files.length > 0 && (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex flex-col gap-3 overflow-hidden mt-4">
                            {files.map((file, idx) => (
                              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} key={idx} className="flex items-center justify-between p-5 bg-white border border-gray-200 shadow-sm rounded-2xl">
                                <span className="text-xs font-bold text-black truncate mr-4 tracking-wide">{file.name}</span>
                                <button 
                                  type="button" 
                                  onClick={(e) => { e.stopPropagation(); removeFile(idx); }}
                                  className="text-gray-400 hover:text-rose-500 p-2 rounded-full hover:bg-rose-50 transition-colors"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Error State */}
                    {isError && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 p-5 bg-red-50 text-red-600 rounded-2xl border border-red-100">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <p className="text-xs font-bold uppercase tracking-wide">Error submitting form. Please try again.</p>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="group relative w-full h-16 mt-8 overflow-hidden rounded-full bg-black text-white disabled:opacity-70 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                    >
                      <div className="absolute inset-0 w-0 bg-brand-accent group-hover:w-full transition-all duration-700 ease-[0.16,1,0.3,1] z-0" />
                      <div className="relative z-10 flex items-center justify-center gap-3 w-full h-full text-[11px] font-black uppercase tracking-[0.3em]">
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>SUBMITTING...</span>
                          </>
                        ) : (
                          <>
                            SEND INQUIRY
                          </>
                        )}
                      </div>
                    </button>

                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          
        </div>
      </section>

    </main>
  );
}
