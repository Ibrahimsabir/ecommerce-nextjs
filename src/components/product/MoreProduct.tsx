"use client";
import { useState } from "react";
import { ProductsData } from "../productdata/productData";
import ProductList from "../Card/Productlist"; // Import the ProductList component

const MoreProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(3);

  const handleViewMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 3);
  };

  return (
    <div id="MoreProducts" className="overflow-hidden w-full min-h-[550px] sm:min-h-[650px] py-12 shadow-xl bg-gray-50 flex justify-center items-center">
      <div className="mx-auto w-full">
        <div className="text-center mb-32 max-w-[600px] mx-auto">
          <p className="text-3xl font-bold my-4 text-[#f7d1a6] underline uppercase animate-pulse">
            More Products
          </p>
          <h1 className="text-xl font-semibold text-gray-800">Best Products For You</h1>
        </div>

        {/* Body section with responsive grid layout */}
        <div className=" mx-auto my-48">
          {/* Pass the sliced array of ProductsData to ProductList */}
          <ProductList products={ProductsData.slice(0, visibleProducts)} />
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
