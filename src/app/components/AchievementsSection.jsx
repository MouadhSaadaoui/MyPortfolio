"use client";
import React from "react";

const QuoteSection = () => {
  return (
    <div className="relative h-64 py-8 px-6 xl:gap-16 sm:py-20 xl:px-20 bg-gradient-to-r from-[#1E1F29] via-[#2A2D3E] to-[#1E1F29] rounded-lg shadow-lg">

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffffff1a] to-transparent opacity-5 rounded-lg pointer-events-none"></div>
      {/* Smaller, more subtle blurred circles */}
      <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-gradient-to-br from-[#ff7eb3] to-[#ff758c] blur-md opacity-50"></div>
      <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-gradient-to-br from-[#89cff0] to-[#69b5e8] blur-md opacity-30"></div>

      {/* Glow Borders */}
      <div className="absolute inset-0 rounded-lg border border-transparent bg-gradient-to-r from-[#ffffff30] to-[#ffffff05] opacity-20 pointer-events-none"></div>

      {/* Quote Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-white text-4xl font-extrabold tracking-tight leading-tight mb-6 transition-transform duration-300 hover:scale-105">
          &quot;The best thing about a boolean is even if you are wrong, you are only off by a bit.&quot;
        </h2>
        <p className="text-[#ADB7BE] text-lg font-medium">&ndash; Anonymous</p>
      </div>

      {/* Subtle Hover Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#33353F] to-[#444654] opacity-0 hover:opacity-20 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
    </div>
  );
};

export default QuoteSection;
