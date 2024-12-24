"use client"
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import Aos from 'aos';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const ProductsData = [
  {
    id: 1,
    img: "/images/women-watches/watch-2-(2).jpg",
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: "/images/women-watches/watch-3-(2).jpg",
    title: "Women Western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: "/images/men-watches/watch-2-(2).jpg",
    title: "Watches",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: "/images/men-clothing/denim-bottom (2).png",
    title: "Denim Bottom",
    rating: 4.4,
    color: "Blue",
    aosDelay: "600",
  },
  {
    id: 5,
    img: "/images/men-clothing/t-shirts-2 (3).png",
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

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
          <p className="text-3xl font-bold my-4 text-[#f7d1a6] underline uppercase" data-aos="fade-right">
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
            {ProductsData.map((data) => (
              <div
                key={data.id}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                onClick={handleClick} // Handle click to trigger animation
                className="space-y-3 cursor-pointer"
              >
                <Image
                  src={data.img}
                  width={100}
                  height={100}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
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
