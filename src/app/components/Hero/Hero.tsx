"use client"
import React from "react";
import Image from "next/image";
import { useEffect } from 'react';
import Aos from 'aos';


const Hero = () => {
  useEffect(() => {
      Aos.init({ duration: 3000 }); // Initialize AOS with duration
    }, []);
  
    const handleClick = () => {
      // Reset AOS so animations are re-triggered
      Aos.refresh();
    };
  return (
    <div className="relative overflow-hidden w-full min-h-[550px] sm:min-h-[650px] bg-gray-50 flex justify-center items-center duration-200">

    {/* Background pattern */}
    <div className="h-[700px] w-[700px] bg-[#f7d1a6] absolute top-10 right-0 transform -translate-y-1/2 rounded-3xl rotate-45 -z-9"></div>
  
    {/* Hero section */}
    <div className="w-full h-auto container absolute flex flex-col sm:flex-row justify-between items-center pb-8 sm:pb-0">
      {/* Left side content */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-start gap-7 px-4 md:px-12 text-center md:text-left">
        <h1 className="font-bold text-3xl md:text-5xl leading-[1.2]">
          IMPECCABLE CRAFTSMANSHIP
        </h1>
        <p className="text-base md:text-lg text-gray-700">
          An example of intricate workmanship and detail, elegant watches and long and short chains form a part of our desirable collection.
        </p>
        <button className="w-[200px] md:w-[274px] text-sm md:text-lg bg-[#f7d1a6] font-medium py-2 px-4 text-white rounded-lg hover:shadow-lg">
          Explore Now
        </button>
      </div>
  
      {/* Right side image */}
      <div className="w-full sm:w-1/2 justify-end items-center px-4 md:px-12 text-center md:text-left">
        <Image
          src="/images/women.png" // Ensure this path is correct
          width={1500} // Increased width to 1200px for a larger image
          height={1500} // Increased height to 1200px for a larger image
          alt="Shopping"
          className="w-[80%] sm:w-[90%] md:w-[100%] object-contain"
          data-aos="fade-left" // Responsive size
        />
      </div>
    </div>
  </div>
  
  );
};

export default Hero;
