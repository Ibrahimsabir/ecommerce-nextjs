import React from 'react'
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin, FaSquareFacebook, FaYoutube } from "react-icons/fa6";

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const Footer = () => {
  return (
    <footer className={`${poppins.className} text-gray-600 body-font`}>
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <Link href={""}
      className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
       <Image 
           src="/images/logo-bag2.png"
           width={40}
           height={40}
           alt="Logo"
           className="object-contain sm:mr-10 sm:mb-0 mb-4"
      
      />
        <span className="ml-3 text-xl">Shop .Stop</span>
      </Link>
      <p className="mt-2 text-sm text-gray-500">
        Air plant banjo lyft occupy retro adaptogen indego
      </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <Link href={""}
            className="text-gray-600 hover:text-gray-800">First Link</Link>
          </li>
          <li>
            <Link href={""}
            className="text-gray-600 hover:text-gray-800">Second Link</Link>
          </li>
          <li>
            <Link href={""}
            className="text-gray-600 hover:text-gray-800">Third Link</Link>
          </li>
          <li>
            <Link href={""}
            className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <Link href={""}
            className="text-gray-600 hover:text-gray-800">First Link</Link>
          </li>
          <li>
            <Link href={""}
            className="text-gray-600 hover:text-gray-800">Second Link</Link>
          </li>
          <li>
            <Link href={""}
            className="text-gray-600 hover:text-gray-800">Third Link</Link>
          </li>
          <li>
            <Link href={""} 
            className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <Link href={""}
            className="text-gray-600 hover:text-gray-800">First Link</Link>
          </li>
          <li>
            <Link href={""}
             className="text-gray-600 hover:text-gray-800">Second Link</Link>
          </li>
          <li>
            <Link href={""}
            className="text-gray-600 hover:text-gray-800">Third Link</Link>
          </li>
          <li>
            <Link href={""}
            className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <Link href={""}
            className="text-gray-600 hover:text-gray-800">First Link</Link>
          </li>
          <li>
            <Link href={""}
            className="text-gray-600 hover:text-gray-800">Second Link</Link>
          </li>
          <li>
            <Link href={""}
            className="text-gray-600 hover:text-gray-800">Third Link</Link>
          </li>
          <li>
            <Link href={""}
            className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex items-center justify-center flex-wrap flex-col sm:flex-row">
      <Image 
           src="/images/logo-bag2.png"
           width={50}
           height={50}
           alt="Logo"
           className="object-contain sm:mr-10 sm:mb-0 mb-4"
      
      />
      <p className="text-gray-500 text-sm text-center sm:text-left">
        © 2020 Stop .Shop —
        <Link
          href="https://twitter.com/knyttneve"
          rel="noopener noreferrer"
          className="text-gray-600 ml-1"
          target="_blank"
        >
          @knyttneve
        </Link>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
      <Link
            href={"#"}
            className="ml-3 text-blue-700 bg-white border-2 text-xl transition-transform duration-300 hover:scale-110"
          >
            <FaTwitter />
          </Link>
        <Link
            href={"https://www.linkedin.com/in/sualeha-khan-70b7972a9/"}
            className="ml-3 text-blue-600 text-xl bg-white transition-transform duration-300 hover:scale-110"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
        <Link
            href={"#"}
            className="ml-3 text-red-500 bg-white text-xl transition-transform duration-300 hover:scale-110"
          >
            <FaYoutube />
          </Link>
        <Link
            href={"#"}
            className="ml-3 text-blue-600 bg-white text-xl transition-transform duration-300 hover:scale-110"
          >
            <FaSquareFacebook />
          </Link>
      </span>
    </div>
  </div>
</footer>

  )
}
