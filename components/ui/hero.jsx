
// export default HeroSection
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#eef5fc] via-[#f9fafb] to-[#e4ecf7] w-full overflow-hidden min-h-screen flex items-center px-6 pb-30 pt-30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-20">
        
 
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Take Charge of Your <span className="text-blue-600">Financial Future</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Analyze, track, and grow your finances with real-time AI-powered insights. Simple. Secure. Smart.
          </p>
          <Link href="/main/dashboard" passHref>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </Link>
        </div>


        <div
          className="flex-1 relative w-full max-w-2xl h-[350px] md:h-[400px] flex justify-center items-center"
          style={{
            transform: `translateY(${offsetY * 0.25}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <Image
            src="/unii.png"
            alt="AI Dashboard"
            width={480}
            height={300}
            className="rounded-3xl shadow-2xl border border-gray-200"
            priority
          />

         
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
