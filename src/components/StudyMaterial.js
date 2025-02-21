import React from "react";
import Button from "./ui/button";
import { Link } from 'react-router-dom';

const courses = [
  { name: "Sample Papers", image: "/images/samples.png" },
  { name: "Subject Modules", image: "/images/modules.png" },
  { name: "Practice Tests", image: "/images/practice.png" },
  { name: "Assignments", image: "/images/assignments.png" },
];

const StudyMaterial = () => {
  return (
    <section className="p-6 md:p-10">
      <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center text-red-700">
        Study Material
      </h3>
      <p className="font-semibold text-center">Handpicked by our Expert Faculty!</p>

      {/* Responsive Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-gray p-6 shadow-md rounded-xl text-center">
            <img 
              src={course.image} 
              alt={course.name} 
              className="m-auto w-full max-w-[75%] md:max-w-full h-40 object-cover rounded-md mb-4"
            />
            <h4 className="whitespace-pre-line text-lg md:text-base font-semibold text-red-700">
              {course.name}
            </h4>
          </div>
        ))}
      </div>

      {/* Centered Access Now Button */}
      <div className="flex justify-center mt-6">
        <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfhWGEGMK3Jluw5JU7zHwqqq47UhLgbNhMVR81iHUaeID9dQw/viewform?usp=sharing">
          <Button className="bg-red-700 text-white text-sm md:text-base px-6 py-3 md:px-8 md:py-4 rounded-lg">
            Access Now for Free!
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default StudyMaterial;
