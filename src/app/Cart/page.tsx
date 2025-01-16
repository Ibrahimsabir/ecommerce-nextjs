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
  const [showSummary, setShowSummary] = useState(false); // State to toggle cart summary visibility

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

  // Calculate total amount
  const totalAmount = cart.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', '').replace(',', ''));
    return total + price * item.quantity;
  }, 0).toFixed(2); // Round to 2 decimal places

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-600 underline uppercase animate-wobble text-center sm:text-left">
        Your Cart
      </h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {/* Cart Items */}
          <div className="flex flex-col gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-center bg-white p-4 rounded-lg shadow-md"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24">
                  <Image
                    src={item.img || "No Image"}
                    alt={item.title}
                    width={96}
                    height={96}
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800 text-lg sm:text-xl">{item.title}</h3>
                  <p className="text-gray-600">{item.price}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-200 p-2 rounded text-gray-600"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="text-lg">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-gray-200 p-2 rounded text-gray-600"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800 mt-2 sm:mt-0"
                >
                  <AiFillDelete size={24} />
                </button>
              </div>
            ))}
          </div>

          {/* Toggle Button to Show/Hide Cart Summary */}
          <button
            onClick={() => setShowSummary(!showSummary)}
            className="bg-[#f7d1a6] text-white py-2 px-6 shadow-lg rounded-lg hover:bg-[#e3c5a2] duration-300 mt-6 inline-block mx-auto sm:mx-0"
          >
            {showSummary ? "Hide Cart Summary" : "Show Cart Summary"}
          </button>

          {/* Cart Summary Section */}
          {showSummary && (
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs mx-auto mt-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">Cart Summary</h2>
              <div className="space-y-3">
                {cart.map((item) => {
                  const itemTotal = (parseFloat(item.price.replace('$', '').replace(',', '')) * item.quantity).toFixed(2);
                  return (
                    <div key={item.id} className="flex justify-between items-center text-sm">
                      <div className="flex items-center">
                        <div className="w-10 h-10 mr-3">
                          <Image
                            src={item.img || "No Image "}
                            alt={item.title}
                            width={40}
                            height={40}
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-800">{item.title}</h3>
                          <p className="text-gray-600 text-xs">x{item.quantity}</p>
                        </div>
                      </div>
                      <div className="text-gray-800 font-semibold">${itemTotal}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Total Amount Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6 mt-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Total Amount</h2>
            <div className="flex justify-between items-center text-xl">
              <span className="font-medium">Total:</span>
              <span className="text-[#f7d1a6] font-bold">${totalAmount}</span>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/">
              <button className="bg-[#f7d1a6] text-white shadow-lg py-2 px-6 rounded-lg hover:bg-[#e3c5a2] duration-300 w-full sm:w-auto">
                Continue Shopping
              </button>
            </Link>
            <Link href="/checkoutpage">
              <button className="bg-[#f7d1a6] text-white shadow-lg py-2 px-6 rounded-lg hover:bg-[#e3c5a2] duration-300 w-full sm:w-auto">
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
