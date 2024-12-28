"use client";
import { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import Aos from "aos";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { TopSellData } from "../../PoductsDetail/ProductData";
import Link from "next/link"; // Import Link component

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const TopSelling = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with duration
  }, []);

  const handleClick = () => {
    // Reset AOS so animations are re-triggered
    Aos.refresh();
  };

  return (
    <div className={`${poppins.className} bg-gray-50`}>
      <div className="mx-auto w-[90%]">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p
            className="text-3xl font-bold my-4 text-[#f7d1a6] underline uppercase"
            data-aos="fade-right"
          >
            Top Selling Products
          </p>
          <h1 className="text-xl font-semibold text-gray-800" data-aos="fade-left">
            IMPECCABLE CRAFTSMANSHIP
          </h1>
        </div>

        {/* Body Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card Section */}
            {TopSellData.map((data) => (
              <Link key={data.id} href={`/product/${data.id}`}>
                {/* Link wraps the entire card */}
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  onClick={handleClick} // Handle click to trigger animation
                  className="space-y-3 cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:rounded-lg"
                >
                  <Image
                    src={data.img}
                    width={150}
                    height={220}
                    alt={data.title}
                    className="h-[220px] w-[150px] object-cover rounded-md transform transition duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-80"
                  />
                  <div className="p-2">
                    <h3 className="font-semibold text-gray-800 transition duration-300 group-hover:text-white">
                      {data.title}
                    </h3>
                    <p className="text-sm text-gray-600 transition duration-300 group-hover:text-white">
                      {data.color}
                    </p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* View All Button */}
          <div className="flex justify-center py-10">
            <button className="w-[200px] md:w-[274px] text-sm md:text-lg bg-[#f7d1a6] font-medium py-2 px-4 text-white rounded-lg hover:shadow-lg">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSelling;
