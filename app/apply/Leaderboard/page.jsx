"use client";

import { useEffect, useState } from "react";
import { ShootingStars } from "@/components/shooting-stars";
import { SparklesCore } from "@/components/sparkles";
import { StarsBackground } from "@/components/stars-background";

export default function Leaderboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      { name: "Alice", points: 120 },
      { name: "Bob", points: 110 },
      { name: "Charlie", points: 95 },
    ]);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a23] overflow-hidden text-white">
      {/* ✅ Galaxy Background Effects */}
      <div className="absolute inset-0 z-0">
        <StarsBackground />
        <ShootingStars />
         <StarsBackground />
        <ShootingStars />
         <StarsBackground />
        <ShootingStars />
         <StarsBackground />
        <ShootingStars />
         <StarsBackground />
        <ShootingStars />
      
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#0a0a23]" />
      </div>

      {/* ✅ Leaderboard Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold text-center mb-12">
          🏆 GSSoC '25 Leaderboard
        </h1>

        <div className="bg-[#111132] bg-opacity-90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/10">
          {data.map((user, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 my-4 rounded-xl bg-[#1f1f3c] hover:bg-[#2a2a4c] transition-all duration-300 shadow"
            >
              <span className="text-xl font-semibold">
                {index + 1}. {user.name}
              </span>
              <span className="text-lg">{user.points} pts</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
