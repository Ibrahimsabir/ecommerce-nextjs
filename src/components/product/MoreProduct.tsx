"use client";
import { useState } from "react";
import { ProductsData } from "../productdata/productData";
import ProductCard from "../Card/Card"; // Import the reusable ProductCard
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const MoreProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(3);

  const handleViewMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 3);
  };

  return (
    <div className={`${poppins.className} relative overflow-hidden w-full min-h-[550px] sm:min-h-[650px] py-12 shadow-lg bg-gray-50 flex justify-center items-center`}>
      <div className="mx-auto w-full">
        <div className="text-center mb-32 max-w-[600px] mx-auto">
          <p className="text-3xl font-bold my-4 text-[#f7d1a6] underline uppercase animate-pulse">
            More Products
          </p>
          <h1 className="text-xl font-semibold text-gray-800">Best Products For You</h1>
        </div>

        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 gap-y-24 place-items-center">
          {ProductsData.slice(0, visibleProducts).map((data) => (
            <ProductCard key={data.id} ProductsData={data} showOrderButton={true} />
          ))}
        </div>

        {/* "View More" Button */}
        {visibleProducts < ProductsData.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleViewMore}
              className="bg-[#f7d1a6] text-white py-2 px-4 rounded-lg hover:bg-[#e3c5a2] duration-300"
            >
              View All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoreProducts;
