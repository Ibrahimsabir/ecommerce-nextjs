"use client";
import { useState } from "react";
import { ProductsData } from "../PoductsDetail/ProductData"; // Import product data
import ProductCard from "../Card/Card"; // Import the reusable ProductCard

const MoreProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(3);

  const handleViewMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 3);
  };

  return (
    <div className="relative overflow-hidden w-full min-h-[550px] sm:min-h-[650px] bg-gray-50 flex justify-center items-center">
      <div className="mx-auto w-[90%]">
        <div className="text-center mb-32 max-w-[600px] mx-auto">
          <p className="text-3xl font-bold my-4 text-[#f7d1a6] underline uppercase">
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
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoreProducts;
