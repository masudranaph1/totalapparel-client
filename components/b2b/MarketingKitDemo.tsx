"use client";

import React, { useState } from "react";
import { Download, FileText, CheckCircle } from "lucide-react";

export default function MarketingKitDemo() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      // Call our API route to generate the ZIP
      const response = await fetch('/api/marketing-kit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ skus: ['FW24-HD-BLK', 'FW24-HD-GRY'] })
      });

      if (!response.ok) throw new Error("Failed to generate marketing kit");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `retailer-marketing-kit-${new Date().toISOString().split('T')[0]}.zip`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
      
      setIsDone(true);
      setTimeout(() => setIsDone(false), 3000);
    } catch (error) {
      console.error(error);
      alert("Failed to download marketing kit. See console.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="w-full bg-gray-50 py-24 text-black border-y border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center p-4 bg-indigo-100 rounded-full mb-8 text-indigo-600 shadow-inner">
          <FileText className="w-8 h-8" />
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
          Retailer Marketing Kit
        </h2>
        <p className="text-gray-500 font-medium text-lg mb-12 max-w-2xl mx-auto">
          We don&apos;t just sell you blanks. We give you the tools to sell them. Download an auto-generated ZIP containing Shopify CSV import sheets, AI-written meta descriptions, and social media captions specifically for your order.
        </p>

        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm max-w-lg mx-auto">
          <p className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-6">Test the Generator</p>
          
          <button 
            onClick={handleDownload}
            disabled={isGenerating || isDone}
            className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold uppercase tracking-wide transition-all ${
              isDone ? 'bg-green-500 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-[0_10px_20px_rgba(79,70,229,0.2)] hover:shadow-[0_15px_30px_rgba(79,70,229,0.3)]'
            } disabled:opacity-75 disabled:cursor-not-allowed`}
          >
            {isGenerating ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating Assets...
              </span>
            ) : isDone ? (
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Downloaded
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Download className="w-5 h-5" /> Download Marketing Kit .ZIP
              </span>
            )}
          </button>
          
          <p className="text-xs text-gray-400 mt-4 font-medium tracking-wide">
            Includes: product_import.csv, ai_descriptions.txt, social_captions.txt
          </p>
        </div>
      </div>
    </section>
  );
}
