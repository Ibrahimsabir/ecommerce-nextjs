"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image"; // Next.js Image component
import Aos from 'aos'; // AOS for animations
import 'aos/dist/aos.css'; // AOS styles
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ['latin'],
});

const Hero = () => {
  const [currentDiv, setCurrentDiv] = useState(0);

  // Array to hold dynamic content, images, and animations for each div
  const contentData = [
    {
      title: "IMPECCABLE CRAFTSMANSHIP",
      description: "An example of intricate workmanship and detail, elegant watches and long and short chains form a part of our desirable collection.",
      buttonText: "Explore Now",
      imageSrc: "/images/women.png", // Dynamic image for first div
      titleAnimation: "fade-up", // Animation for title
      descAnimation: "fade-left", // Animation for description
      buttonAnimation: "zoom-in", // Animation for button
      imageAnimation: "fade-left", // Animation for image
    },
    {
      title: "ELEGANT DESIGNS",
      description: "Discover a timeless collection of intricate craftsmanship, where each piece tells a unique story.",
      buttonText: "Shop Now",
      imageSrc: "/images/sale.png", // Dynamic image for second div
      titleAnimation: "fade-down", // Animation for title
      descAnimation: "fade-right", // Animation for description
      buttonAnimation: "fade-up", // Animation for button
      imageAnimation: "fade-right", // Animation for image
    },
    {
      title: "ARTISANAL BEAUTY",
      description: "Each item is crafted with passion, a blend of tradition and modern flair to create iconic designs.",
      buttonText: "View Collection",
      imageSrc: "/images/shopping.png", // Dynamic image for third div
      titleAnimation: "zoom-in", // Animation for title
      descAnimation: "fade-left", // Animation for description
      buttonAnimation: "flip-left", // Animation for button
      imageAnimation: "zoom-out", // Animation for image
    },
  ];

  // useEffect hook for interval to switch divs and images
  useEffect(() => {
    Aos.init({ duration: 3000 }); // Initialize AOS with 2 seconds duration

    // Set an interval to switch between divs and images every 2 seconds
    const interval = setInterval(() => {
      setCurrentDiv(prev => (prev + 1) % 3); // Cycle through 0, 1, 2
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${poppins.className} relative overflow-hidden w-full min-h-[550px] shadow-md sm:min-h-[650px] bg-gray-50 flex justify-center items-center duration-200`}>
      {/* Background pattern */}
     {/* Background pattern */}
<div className="h-[700px] w-[700px] bg-[#f7d1a6] absolute -top-10 right-0 transform -translate-y-1/2 rounded-full rotate-45 -z-9"></div>

      {/* Hero section */}
      <div className="w-full h-auto container absolute flex flex-col sm:flex-row justify-between items-center pb-8 sm:pb-0">
        {/* Left side content (Text) */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center items-start gap-7 px-4 md:px-12 text-center md:text-left" data-aos={contentData[currentDiv].titleAnimation}>
          <h1 className="font-bold text-3xl md:text-5xl leading-[1.2]">
            {contentData[currentDiv].title}
          </h1>
          <p className="text-base md:text-lg text-gray-700" data-aos={contentData[currentDiv].descAnimation}>
            {contentData[currentDiv].description}
          </p>
          <button className="w-[200px] md:w-[274px] text-sm md:text-lg bg-[#f7d1a6] font-medium py-2 px-4 text-white rounded-lg hover:shadow-lg" data-aos={contentData[currentDiv].buttonAnimation}>
            {contentData[currentDiv].buttonText}
          </button>
        </div>

        {/* Right side Image */}
        <div className="w-full sm:w-1/2 justify-end items-center px-4 md:px-12 text-center md:text-left">
          <Image
            src={contentData[currentDiv].imageSrc} // Dynamically select image based on currentDiv state
            width={1500}
            height={1500}
            alt="Dynamic Image"
            className="w-[80%] sm:w-[90%] md:w-[100%] object-contain"
            data-aos={contentData[currentDiv].imageAnimation} // Apply dynamic animation for image
          />
        </div>
      </div>
      <div className="h-[300px] w-[300px] bg-[#e4c16a] absolute -bottom-[-5%] -left-[5%] transform translate-y-1/2 rounded-full -z-9"></div>

    </div>
  );
};

export default Hero;
