import React from "react";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 mt-20 lg:mt-0">
      <div className="w-full max-w-[420px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col p-8 relative">
        {/* Company Logo */}
        <div className="flex justify-center mb-8">
          <Image 
            src="/total%20apparel.png" 
            alt="Total Apparel" 
            width={160} 
            height={48} 
            className="object-contain h-10 w-auto"
          />
        </div>

        <h2 className="text-2xl font-bold text-black mb-1">Sign In</h2>
        <p className="text-gray-500 text-sm mb-6">Sign in or create an account</p>

        <button className="w-full bg-[#1A1A1A] hover:bg-[#C9A227] hover:shadow-[0_0_20px_rgba(201,162,39,0.3)] hover:-translate-y-0.5 text-white font-semibold py-3.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mb-6">
          Continue
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-gray-200 flex-1"></div>
          <span className="text-gray-400 text-sm">or</span>
          <div className="h-px bg-gray-200 flex-1"></div>
        </div>

        <div className="relative mb-5 group">
          <span className="absolute left-4 top-2 text-[10px] text-gray-500 font-medium">Email</span>
          <input 
            type="email" 
            placeholder="example@gmail.com"
            className="w-full border border-gray-300 rounded-xl pt-5 pb-2 px-4 text-black font-medium focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all placeholder:text-transparent focus:placeholder:text-gray-300"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1A1A1A] hover:bg-[#C9A227] text-white p-2 rounded-lg transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>

        <label className="flex items-start gap-3 cursor-pointer mb-6">
          <div className="relative flex items-center justify-center mt-0.5">
            <input type="checkbox" className="peer sr-only" />
            <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-black peer-checked:border-black transition-colors flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
          </div>
          <span className="text-sm text-black font-medium leading-relaxed">Send me emails with news and offers</span>
        </label>

        <p className="text-xs text-gray-500 text-center leading-relaxed mt-2">
          By continuing, you agree to our <a href="#" className="underline hover:text-black transition-colors">Terms and Conditions of Service</a>
        </p>
      </div>
    </div>
  );
}
