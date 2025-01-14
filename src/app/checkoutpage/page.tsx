"use client";
import React, { useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "creditCard",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process the checkout (call to an API, etc.)
    console.log("Order submitted", formData);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 underline text-gray-600 animate-pulse text-center sm:text-left">
        Checkout
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">
        {/* Name Field */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Field */}
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Address Field */}
        <div>
          <label className="block text-sm font-medium text-gray-600">Shipping Address</label>
          <textarea
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Payment Method Field */}
        <div>
  <label className="block text-sm font-medium text-gray-600">Payment Method</label>
  <div className="space-y-4 mt-2">
    <div className="flex items-center">
      <input
        type="radio"
        id="cod"
        name="paymentMethod"
        value="cod"
        checked={formData.paymentMethod === "cod"}
        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
        className="h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500"
      />
      <label htmlFor="cod" className="ml-2 text-sm font-medium text-gray-600">Cash On Delivery</label>
    </div>

    <div className="flex items-center">
      <input
        type="radio"
        id="creditCard"
        name="paymentMethod"
        value="creditCard"
        checked={formData.paymentMethod === "creditCard"}
        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
        className="h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500"
      />
      <label htmlFor="creditCard" className="ml-2 text-sm font-medium text-gray-600">Credit Card</label>
    </div>

    <div className="flex items-center">
      <input
        type="radio"
        id="paypal"
        name="paymentMethod"
        value="paypal"
        checked={formData.paymentMethod === "paypal"}
        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
        className="h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500"
      />
      <label htmlFor="paypal" className="ml-2 text-sm font-medium text-gray-600">PayPal</label>
    </div>
  </div>
</div>


        {/* Submit Button */}
        <div className="flex justify-center sm:justify-start">
          <button
            type="submit"
            className="bg-[#f7d1a6] text-white py-3 px-6 rounded-lg hover:bg-[#e3c5a2] duration-300 shadow-md"
          >
            Complete Checkout
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
