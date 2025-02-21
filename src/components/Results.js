import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Results = () => {
  return (
    <div className="mt-10">
      <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center text-red-700">
        Results
      </h3>

      <section className="p-4 md:p-10 flex items-center justify-center">
        <Carousel 
          showThumbs={false} 
          useKeyboardArrows={true} 
          autoPlay={true} 
          infiniteLoop
          className="w-full max-w-[90%] md:max-w-[70%]"
        >
          <div className="flex items-center justify-center">
            <img
              src="/images/results3.jpeg"
              alt="Result 1"
              className="object-contain w-full h-auto max-h-[300px] rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/images/results4.jpeg"
              alt="Result 2"
              className="object-contain w-full h-auto max-h-[300px] rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/images/results5.jpeg"
              alt="Result 3"
              className="object-cover w-full h-auto max-h-[300px] rounded-lg"
            />
          </div>
        </Carousel>
      </section>
    </div>
  );
};

export default Results;
