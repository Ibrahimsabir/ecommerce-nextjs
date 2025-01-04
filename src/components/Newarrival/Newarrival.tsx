"use client";
import { useEffect, useState } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import Aos from "aos";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { NewArrivals } from "../productdata/productData";
import Link from "next/link"; // Import Link component


const NewArrival = () => {
  const [visibleProducts, setVisibleProducts] = useState(3); // To manage the number of visible products
  const [noMoreProducts, setNoMoreProducts] = useState(false); // To show "No more products" message

  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with duration
  }, []);

  const handleClick = () => {
    // Reset AOS so animations are re-triggered
    Aos.refresh();
  };

  const handleViewMore = () => {
    // Load next 3 products
    if (visibleProducts + 3 <= NewArrivals.length) {
      setVisibleProducts(visibleProducts + 3);
    } else {
      setNoMoreProducts(true); // Show message if no more products
    }
  };

  return (
    <div className="relative overflow-hidden w-full min-h-[550px] sm:min-h-[650px] py-12 shadow-xl bg-gray-50 flex justify-center items-center">
      <div className="mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-3xl font-bold py-8 text-[#f7d1a6] underline uppercase animate-wobble">
            New Arrivals
          </p>
          <h1 className="text-xl font-semibold text-gray-800" data-aos="fade-left">
            Suits Your Taste
          </h1>
        </div>

        {/* Body Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 place-items-center gap-10">
            {/* Card Section */}
            {NewArrivals.slice(0, visibleProducts).map((data) => (
              <Link key={data.id} href={`/productdetail/${data.id}`}>
                {/* Link wraps the entire card */}
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  onClick={handleClick} // Handle click to trigger animation
                  className="w-[280px] h-[380px] space-y-4 cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:rounded-lg"
                >
                  <Image
                    src={data.img}
                    width={280}
                    height={380}
                    alt={data.title}
                    className="h-[280px] w-[280px] object-cover rounded-xl transform transition duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-80"
                  />
                  <div className="p-3">
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

          {/* No More Products Message */}
          {noMoreProducts && (
            <div className="text-center font-bold mt-10 text-[25px] text-red-600">
              No more products to show
            </div>
          )}

          {/* View More Button */}
          {!noMoreProducts && (
            <div className="flex justify-center py-10">
              <button
                onClick={handleViewMore}
                className="w-[200px] md:w-[274px] text-sm md:text-lg bg-[#f7d1a6] font-medium py-2 px-4 text-white rounded-lg hover:shadow-lg"
              >
                View More Products
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
