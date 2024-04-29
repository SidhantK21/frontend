"use client";
// import React from "react";

export const ButtonsCard = () => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      {/* Animated border effect */}
      <span className="absolute inset-[-1000%] animate-spin_2s_linear_infinite bg-conic-gradient-from_90deg_at_50-percent_50-percent-E2CBFF_0-percent-393BB2_50-percent-E2CBFF_100-percent" />
      
      {/* Button content */}
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        Border Magic
      </span>
    </button>
  );
};
