import React from 'react';
import Image from 'next/image';
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonCircleSharp } from "react-icons/io5";
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className={`w-full h-auto shadow-md px-4 md:px-8 lg:px-16 relative`} style={{ backgroundColor: 'rgba(247, 209, 166, 1)' }}>
      <div className="w-full h-full flex flex-col sm:flex-row justify-between items-center py-4 md:py-6">

        {/* Logo */}
        <div className="flex justify-between items-center w-full sm:w-auto">
          <Image 
            src="/images/logo-bag2.png"
            width={100}
            height={100}
            alt="Logo"
            className="w-20 transition-transform duration-300 transform hover:scale-110"
          />
          <div className="flex justify-center items-baseline ml-4 sm:ml-8">
            <span className="text-[24px] sm:text-[32px] font-bold mb-2 md:mb-0">SHOP.</span>
            <span className="text-[24px] font-semibold">Stop</span>
          </div>
        </div>

        {/* Search Bar and Icons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full sm:w-auto mt-4 sm:mt-0 px-4 sm:px-6 lg:px-8">

          {/* Search Input */}
          <div className="flex items-center bg-gray-100 rounded-full w-full sm:w-[250px] lg:w-[300px] px-4 py-2 sm:py-3">
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-gray-100 px-4 py-2 outline-none text-sm w-full"
            />
            <IoSearch className="text-xl sm:text-2xl text-gray-600" />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 sm:gap-8">
            <Link href="/Cart">
              <FiShoppingCart className="text-xl sm:text-2xl text-black cursor-pointer hover:text-gray-700 transition-all duration-200" />
            </Link>
            <IoPersonCircleSharp className="text-2xl sm:text-3xl text-black cursor-pointer hover:text-gray-700 transition-all duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
