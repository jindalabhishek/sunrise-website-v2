import React from "react";

const courses = [
  { name: "Mathematics", image: "/images/mathematics.png" },
  { name: "Physics", image: "/images/physics.png" },
  { name: "Chemistry", image: "/images/science.png" },
  { name: "Biology", image: "/images/biology.png" },
  { name: "Aptitude", image: "/images/aptitude.png" },
  { name: "English", image: "/images/english.png" },
  { name: "Social Studies", image: "/images/social.png" },
];

const Courses = () => {
  return (
    <section className="p-6 md:p-10">
      <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center text-red-700">
        Popular Courses
      </h3>
      <p className="font-semibold text-center">Every Subject has a story to tell!</p>

      {/* Responsive Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
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
    </section>
  );
};

export default Courses;
