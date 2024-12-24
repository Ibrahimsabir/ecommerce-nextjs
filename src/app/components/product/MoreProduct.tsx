"use client"
import React from "react";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import Image from "next/image";


const ProductsData = [
  {
    id: 1,
    img: `/images/men-clothing/t-shirts-2 (2).png`,
    title: "Casual Wear",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: `/images/men-clothing/t-shirts-1 (2).png`,
    title: "Printed shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: `/images/men-clothing/t-shirts-1 (4).png`,
    title: "Women shirt",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const MoreProducts = () => {
    const [orderPopup, setOrderPopup] = useState(false);

const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="relative overflow-hidden w-full min-h-[550px] sm:min-h-[650px] bg-gray-50 flex justify-center items-center duration-200">
      <div className="mx-auto w-[90%]">
        {/* Header section */}
        <div className="text-center mb-32 max-w-[600px] mx-auto">
          <p className="text-3xl font-bold my-4 text-[#f7d1a6] underline uppercase" data-aos="fade-up">
            More Products
          </p>
          <h1 className="text-xl font-semibold text-gray-800" data-aos="fade-down">
          Best Products For You
          </h1>

        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <Image
                  src={data.img}
                  width={200}
                  height={200}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreProducts;