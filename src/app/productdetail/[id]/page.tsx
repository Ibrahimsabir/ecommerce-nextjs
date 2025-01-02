"use client";
import ProductDetailGrid from "@/components/productinfo/productgrid";
import toast, { Toaster } from 'react-hot-toast';
import React from "react";
import { ProductsData } from "@/components/productdata/productData";
import { AiOutlineStar, AiFillStar, AiOutlineHeart } from "react-icons/ai"; // Importing icons

interface Product {
  id: string; // Unique identifier for the product
  title: string; // Name of the product
  description?: string; // Optional description
  price: number; // Price of the product
  img: string; // Optional image URL
  quantity?: number; // Optional quantity (if applicable for cart)
}

interface Props {
  product: Product | null;
}
const ProductDetail = () => {
  const addtocarthandler = () => {
    toast.success('Item added to cart!', {
      position: 'top-center',
    });
  };
  
  async function Data(params:Product) {
    // const ProductRequired = await fetch{`${}`}
    
  }

  return (
    <section className="text-gray-600 shadow-lg body-font overflow-hidden">
      <Toaster />
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-row">
          <ProductDetailGrid />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              The Catcher in the Rye
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                {Array(4)
                  .fill("")
                  .map((_, idx) => (
                    <AiFillStar
                      key={idx}
                      className="w-4 h-4 text-yellow-400"
                    />
                  ))}
                <AiOutlineStar className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-600 ml-3"></span>
              </span>
            </div>
            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY...
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">{}</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="title-font font-medium text-2xl text-gray-900">
                $58.00
              </span>
              <button
                onClick={addtocarthandler}
                className="w-auto text-sm md:text-lg bg-[#f7d1a6] font-medium py-1 px-4 text-white rounded-lg hover:shadow-lg"
              >
                Add To Cart
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <AiOutlineHeart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
