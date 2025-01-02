import React from 'react'
import Link from 'next/link'
import { FaCaretDown } from "react-icons/fa6";


export const Navbarbottom = () => {
  return (
<div className={` min-w-full h-auto  relative bg-[#f5e8da] `} >              {/* Navigation Links */}
                <ul className=" flex flex-col md:flex-row gap-4 md:gap-6 text-sm sm:text-xl items-center justify-center py-4">
                <li className="relative group hover:underline underline-offset-4">
          <Link href="/" className="flex items-center">
            Shop <FaCaretDown className="text-xl sm:text-2xl group-hover:rotate-180 transition-transform duration-300" />
          </Link>
          
          {/* Dropdown Menu */}
          <div className="absolute left-0 hidden group-hover:block mt-2 w-48 bg-white shadow-lg rounded-lg p-4">
            <ul>
              <li><Link href="/option1" className="block py-2">Option 1</Link></li>
              <li><Link href="/option2" className="block py-2">Option 2</Link></li>
              <li><Link href="/option3" className="block py-2">Option 3</Link></li>
              {/* Add more options as needed */}
            </ul>
          </div>
        </li>
        
          <li className="hover:underline underline-offset-4 ">
            <Link href="#topselling">On Sale</Link>
          </li>
          <li className="hover:underline underline-offset-4">
            <Link href="#Newarrival">New Arrival</Link>
          </li>
          <li className="hover:underline underline-offset-4">
            <Link href="/login" target="_blank">Brands</Link>
          </li>
          <li className="hover:underline underline-offset-4">
            <Link href="/login" target="_blank"></Link>
          </li>
        </ul>
    </div>
  )
}
