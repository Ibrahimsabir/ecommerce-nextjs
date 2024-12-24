import React from "react";
import  Hero  from "./components/Hero/Hero";
import TopSelling from "./components/Hero/topselling/Topsell";
import AOS from "aos";
import "aos/dist/aos.css";
import Products from "./components/product/MoreProduct";
import Banner from "./components/banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";

export default function HomePage() {
  
  return (
    <div >
    <Hero/>
    <TopSelling/>
    <Products/>
    <Banner/>
    <Subscribe/>
    </div>
  );
}
