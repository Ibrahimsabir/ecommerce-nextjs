"use client";
import Link from "next/link";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"; // For accessing query params
import { ProductsData } from "@/components/productdata/productData";
import { AiOutlineStar, AiFillStar, AiOutlineHeart } from "react-icons/ai";

export interface Product {
  id: string;
  title: string;
  description: string;
  img: string;
  category: string;
  rating: number;
  price: string;
  priceWas: string;
  color: string;
  aosDelay: number;
}

const ProductDetail = ({ params } : { params: { id: string } }) => {
  const [product, setProduct] = useState<Product | null>(null);
  
  const { id } = params // Assuming id is passed in the URL
  console.log("ID from useRouter:", id);

  useEffect(() => {
    // Find the product by id
    if (id) {
      const product = ProductsData.find((item) => item.id === params.id);
      setProduct(product || null);
    }
  }, [id]);

  const addtocarthandler = () => {
    toast.success("Item added to cart!", {
      position: "top-center",
    });
  };

  return (
    <section className="text-gray-600 shadow-lg body-font overflow-hidden">
      <Toaster />
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-row">
        <div className="w-[444px] h-[530px] rounded overflow-hidden">
            <Link href="/">
              <div className="group relative">
                <Image
                  src={`/${product?.img}`} // Main image
                  width={500}
                  height={500}
                  alt="Large Image"
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                />
              </div>
            </Link>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product ? product.title : "Loading..."}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                {Array(Math.floor(product?.rating || 0))
                  .fill("")
                  .map((_, idx) => (
                    <AiFillStar
                      key={idx}
                      className="w-4 h-4 text-yellow-400"
                    />
                  ))}
                {Array(5 - Math.floor(product?.rating || 0))
                  .fill("")
                  .map((_, idx) => (
                    <AiOutlineStar
                      key={idx}
                      className="w-4 h-4 text-yellow-400"
                    />
                  ))}
              </span>
            </div>
            <p className="leading-relaxed">{product?.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                {/* Render colors dynamically */}
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
              </div>
            </div>
            <div className="flex gap-2">
              <span className="title-font font-medium text-2xl text-gray-900">
                {product?.price || "0.00"}
              </span>
              <button
                onClick={addtocarthandler}
                className="w-auto text-sm md:text-lg bg-[#f7d1a6] font-medium py-1 px-2 text-white rounded-lg hover:shadow-lg"
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
