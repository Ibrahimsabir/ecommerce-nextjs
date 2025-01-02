import React from "react";
import  Hero  from "../components/Hero/Hero";
import TopSelling from "../components/topselling/Topsell";
import AOS from "aos";
import "aos/dist/aos.css";
import Products from "../components/product/MoreProduct";
import Banner from "../components/banner/Banner";
import Subscribe from "../components/Subscribe/Subscribe";
import Testimonials from "@/components/Testimonials/testimonials";
import NewArrival from "@/components/Newarrival/Newarrival";



export default function HomePage() {
  
  return (
    <div >
    <Hero/>
    <TopSelling />
    <NewArrival/>
    <Products/>
    <Testimonials/>
    <Banner/>
    <Subscribe/>

    </div>
  );
}
