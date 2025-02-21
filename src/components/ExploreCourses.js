import React from "react";
import Button  from "./ui/button";

const courses = [
  { name: "Nurture", image: "/images/faculty2.jpeg", category:"Classes 7-8",
    facultyName: "Garima Jindal (M.Sc.)", 
    experience: "Experience - 10 Years",
    points: 
      [
      "Regular Classroom Discussions",
      "Individual Doubt Classes",
      "Objective & Subjective Tests",
      "Previous Year CBSE Board Assignments",
      "Student Analysis & Performance Report"
      ]},
  { name: "Foundation", image: "/images/faculty1.jpeg", category:"Classes 9-10 (Mathematics)", 
    facultyName: "Er. Anurag Jindal (M.Tech.)",
    experience: "Experience - 17 Years",
    points: 
      [
      "IQUEST Study Material",
      "Practice Questions for NTSE & Olympiads",
      "Objective & Subjective Tests",
      "Previous Year CBSE Board Assignments",
      "Student Analysis & Performance Report"
      ]},
];

const ExploreCourses = () => {
  return (
    <section className="p-6 md:p-10 mt-10">
  <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center text-red-700">
    Explore Our Batches
  </h3>
  <p className="font-semibold text-center mb-4">Dedicated Faculty for Each Course!</p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {courses.map((course, index) => (
      <div key={index} className="bg-white-100 p-4 md:p-6 shadow-md rounded-xl">
        {/* Content Container */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Left Section - Course Details */}
          <div className="md:w-1/2 w-full text-left">
            <p className="font-semibold text-red-700">
              {course.category}
            </p>
            <br/>
            <ul className="list-disc pl-5 text-blue-500 space-y-2">
              {course.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Right Section - Image & Faculty Details */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end">
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-auto md:w-[80%] md:h-[40%] object-cover rounded-md mb-2"
            />
            <h4 className="text-sm text-red-700">{course.facultyName}</h4>
            <h4 className="text-sm text-red-700">{course.experience}</h4>
          </div>
        </div>

        {/* Course Name */}
        <h4 className="whitespace-pre-line text-lg md:text-xl font-semibold mt-4 text-center text-red-700">
          {course.name}
        </h4>
      </div>
    ))}
  </div>
</section>
  );
};

export default ExploreCourses;
