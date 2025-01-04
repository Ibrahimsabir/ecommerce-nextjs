import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  description: string;
  img: string;
  category: string;
  rating: number;
  price: string;
  priceWas?: string; // Optional field
  color: string;
  aosDelay?: number; // Optional field
  showOrderButton?: boolean; // Optional field
}

interface ProductCardProps {
  product: Product; // The prop will now be a single product
  showOrderButton?: boolean; // Optional button visibility
}

const ProductCard: React.FC<ProductCardProps> = ({ product, showOrderButton = true }) => {
  return (
    <div
      key={product.id}
      className="rounded-2xl bg-white hover:bg-black/80 hover:text-white relative shadow-xl duration-300 group w-[300px] h-[300px] flex flex-col justify-between"
      data-aos="fade-up"
      data-aos-delay={product.aosDelay}
    >
      <div className="h-[200px] flex justify-center items-center">
        <Image
          src={product.img}
          alt={product.title}
          width={140}
          height={220}
          className="max-w-[140px] block mx-auto rounded-lg transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
        />
      </div>
      <div className="p-4 text-center flex flex-col justify-between flex-grow">
        <h1 className="text-xl font-bold">{product.title}</h1>
        <p className="text-gray-500 group-hover:text-white text-sm line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-center gap-1">
          <FaStar className="text-yellow-400" />
          <span>{product.rating}</span>
        </div>
        {/* Show order button if needed */}
        {showOrderButton && (
          <Link href={`/productdetail/${product.id}`}>
            <button className="bg-primary hover:scale-105 text-gray-700 border-2 border-[#f7d1a6] py-1 px-4 rounded-full my-2 group-hover:bg-white group-hover:text-[#f7d1a6]">
              View Details
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
