// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import toast, { Toaster } from "react-hot-toast";
// import React, { useState, useEffect } from "react";
// import { ProductsData } from "@/components/productdata/productData";

// export interface Product {
//   id: string;
//   title: string;
//   description: string;
//   img: string;
//   category: string;
//   rating: number;
//   price: string;
//   priceWas: string;
//   color: string;
//   aosDelay: number;
// }
// const [cartItems,setCartItems]=useState([]);
// const [quantity,setQuantity]=useState(0)
// const handleAddToCart = (product:Product) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((item) => item.id === product.id);
//       if (existingItem) {
//         // Update quantity if product already exists in cart
//         return prevItems.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       // Add new product to cart
//       return [...prevItems, { ...product, quantity: 1 }];
//     });
//   };
  