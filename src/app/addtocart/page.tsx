"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "2",
      title: "Graphic T-Shirt",
      description: "Trendy graphic t-shirt with cool designs for casual wear.",
      img: "/images/men-clothing/t-shirts-2 (2).png",
      category: "T-Shirts",
      rating: 4.7,
      price: 18.49, // Changed to a number
      priceWas: "", // New Arrival
      color: "Black",
      quantity: 1, // Added quantity
      aosDelay: 200,
    },
    {
      id: "13",
      title: "Leather Belt",
      description: "High-quality leather belt for a sophisticated look.",
      img: "/images/accessories/leather-belt1.jpg",
      category: "Accessories",
      rating: 4.6,
      price: 29.99, // Changed to a number
      priceWas: 39.99,
      color: "Brown",
      quantity: 1, // Added quantity
      aosDelay: 1300,
    },
  ]);
  
  const handleRemove = (id:string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={` p-8 bg-[] min-h-screen`}>
      <h1 className="text-2xl font-bold mb-6 text-center">Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white shadow-lg p-4 rounded-lg"
            >
              {/* Product Image */}
              <Link href={`/productdetail/id`}>
              <Image
                src={item.img}
                alt={item.title}
                width={80}
                height={80}
                className="rounded-lg"
              />
              </Link>
              {/* Product Details */}
              <div className="flex-1 px-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600">${`${(item.price * item.quantity).toFixed(2)}`}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <button
                    className="px-1 py-1 border border-[#f7d1a6] rounded-md bg-[#f7d1a6] text-white hover:bg-white hover:text-[#f7d1a6] disabled:cursor-pointe"
                    onClick={() =>
                      handleQuantityChange(item.id, Math.max(item.quantity - 1, 1))
                    }
                  >
                  <MinusIcon className="w-4 h-4"/>
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="px-1 py-1 border-2 border-[#f7d1a6] rounded-md bg-[#f7d1a6] text-white hover:bg-white hover:text-[#f7d1a6] disabled:cursor-pointer"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    <PlusIcon className="w-4 h-4"/>
                  </button>
                </div>
              </div>
              {/* Remove Button */}
              <button
                className="text-red-500 font-bold flex gap-2"
                onClick={() => handleRemove(item.id)}
              >
                Remove
                <TrashIcon className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          ))}
          {/* Total Price */}
          <div className="text-right font-bold text-lg">
            Total: ${totalPrice.toFixed(2)}
          </div>
          {/* Checkout Button */}
          <div className="text-center">
            <Link href="/checkout">
              <button className="bg-[#f7d1a6] text-white px-6 py-3 rounded-lg hover:shadow-lg">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
