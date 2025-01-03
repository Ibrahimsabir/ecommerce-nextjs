"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface AddToCartButtonProps {
  product: {
    id: string;
    title: string;
    price: string;
    img: string;
  };
  onAddToCart: (product: AddToCartButtonProps["product"]) => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
    toast.success(`${product.title} added to cart!`, {
      position: "top-center",
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-auto text-sm md:text-lg bg-[#f7d1a6] font-medium py-1 px-2 text-white rounded-lg hover:shadow-lg"
    >
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
