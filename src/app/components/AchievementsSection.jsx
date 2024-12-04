"use client";
import React from "react";

const QuoteSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col items-center justify-center">
        <h2 className="text-white text-3xl font-bold text-center mb-4">
          The best thing about a boolean is even if you are wrong, you are only off by a bit.
        </h2>
        <p className="text-[#ADB7BE] text-base text-center">&ndash; Anonymous</p>
      </div>
    </div>
  );
};

export default QuoteSection;
