import React from "react";
import Button  from "./ui/button";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroCarousel = () => {
  return (
    <div className="mt-[50px] flex flex-col justify-center items-center">
    {/* Centered h3 below the carousel */}
    <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center text-red-700">Empowering Education for a Brighter Future</h3>
  <br/>
  <Carousel autoPlay={true} infiniteLoop showThumbs={false} className="w-[80%] md:w-[60%] shadow-xl">
    <img src="/images/cover4.jpg" className="w-3/5 h-[200px] md:h-[400px]" />
    <img src="/images/cover1.jpeg" className="w-3/5 h-[200px] md:h-[400px]" />
    <img src="/images/cover3.jpeg" className="w-3/5 h-[200px] md:h-[400px]" />
    <img src="/images/cover5.jpeg" className="w-3/5 h-[200px] md:h-[400px]" />
    <img src="/images/cover6.jpeg" className="w-3/5 h-[200px] md:h-[400px]" />
  </Carousel>
  
</div>

  );
};

export default HeroCarousel;
