import React from 'react';
import Image from 'next/image';
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Roboto } from 'next/font/google';



const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const Navbar = () => {
  return (
    <div className={`${roboto.className} w-full h-auto  px-2 relative`}
     style={{backgroundColor:'rgba(247, 209, 166,1)'}}>
      <div className="min-w-[1170px] h-full flex flex-col md:flex-row justify-around items-center sm:px-2 md:px-4 lg:px-0 mx-4 gap-4 md:gap-20 py-4 md:py-0">
        {/* Logo */}
  <div className='flex justify-between items-end mx-2 px-2 py-1'>
  <Image 
         src={"/images/logo-bag2.png"}
         width={100}
         height={100}
         alt='Logo'
         className='w-20 transition-transform duration-300 transform hover:scale-110'
         />
        <div className='flex justify-center items-baseline m-auto'>
        <span className="text-[24px] sm:text-[32px] font-bold mb-2 md:mb-0">
        
          SHOP.
        </span><span className='text-[24px] font-semibold '>Stop</span>
        </div>
        </div>
 


        {/* Search Bar and Icons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6 px-4 sm:px-6 lg:px-8">
  {/* Search Input */}
  <div className="flex items-center bg-gray-100 rounded-full overflow-hidden w-full px-2 sm:w-auto">
    
    <input
      type="text"
      placeholder="Search for products..."
      className="bg-gray-100 px-4 py-2 outline-none text-sm w-full sm:w-[250px] lg:w-[300px]"
    />
    <IoSearch className="text-xl sm:text-2xl text-gray-600 " />
  </div>

  {/* Icons */}
  <div className="flex items-center gap-4">
    <FiShoppingCart className="text-xl sm:text-2xl text-black cursor-pointer hover:text-gray-700 transition-all duration-200" />
    <IoPersonCircleSharp className="text-2xl sm:text-3xl text-black cursor-pointer hover:text-gray-700 transition-all duration-200" />
  </div>
</div>

      </div>
      
    </div>
  );
};

export default Navbar;
