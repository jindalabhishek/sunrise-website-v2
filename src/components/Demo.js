import React from "react";
import Button from "./ui/button";
import { Link } from 'react-router-dom';

const Demo = () => {
  return (
    <section className="p-6 md:p-10 mt-10">
      <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center text-red-700">
        Demo Classes
      </h3>
      <p className="font-semibold text-center">Providing Quality Education since 17 Years!</p>

      <div className="bg-white-100 p-6 shadow-md rounded-xl w-full max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section - Text */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/2 text-center md:text-left">
            <h4 className="text-sm md:text-xl font-bold text-red-700">
              Book Your Free Demo Class Today!
            </h4>
            <p className="text-xs md:text-base font-semibold mt-2">The Early Bird catches the Worm.</p>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSeiG7jPlWJ6VFLs201gA8X4B2xl-iusitRhvh7EqVnnVruR3A/viewform?usp=sharing">
              <Button className="mt-4 bg-red-700 text-white text-xs md:text-base px-4 py-2">
                Enroll Now!
              </Button>
            </Link>
          </div>

          {/* Right Section - Image */}
          <div className="flex justify-center md:justify-end w-full md:w-1/2 mt-6 md:mt-0">
            <img 
              src="/images/demo.png" 
              alt="Demo Class" 
              className="w-full max-w-[80%] md:max-w-[50%] object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
