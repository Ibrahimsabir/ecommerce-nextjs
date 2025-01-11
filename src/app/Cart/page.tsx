"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillDelete } from "react-icons/ai";

export interface Product {
  id: number;
  title: string;
  description: string;
  img: string;
  category: string;
  rating: number;
  price: string;
  priceWas: string;
  color: string;
  aosDelay: number;
  quantity: number;
}

const Cart = () => {
  const [cart, setCart] = useState<Product[]>([]); // Use CartItem instead of Product

  // Fetch cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Remove item from cart
  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to localStorage
  };

  // Decrease item quantity in cart
  const decreaseQuantity = (id: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to localStorage
  };

  // Increase item quantity in cart
  const increaseQuantity = (id: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to localStorage
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-[#f7d1a6] underline uppercase">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-6 items-center bg-white p-4 rounded-lg shadow-md">
              <div className="w-20 h-20">
                <Image
                  src={item.img || "/images/default-product.jpg"}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.price}</p>
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-200 p-1 rounded text-gray-600"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-gray-200 p-1 rounded text-gray-600"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-800"
              >
                <AiFillDelete size={24} />
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6 flex justify-between items-center">
        <Link href="/">
          <button className="bg-[#f7d1a6] text-white py-2 px-4 rounded-lg hover:bg-[#e3c5a2] duration-300">
            Continue Shopping
          </button>
        </Link>
        <button className="bg-[#f7d1a6] text-white py-2 px-4 rounded-lg hover:bg-[#e3c5a2] duration-300">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
