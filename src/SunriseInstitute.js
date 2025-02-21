import React from "react";
import Button from './components/ui/button';
import './global.css';

const SunriseInstitute = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-black shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-red-700">Sunrise Institute</h1>
        <div>
          <Button variant="outline" className="mr-2 text-red-700 border-red-700">Courses</Button>
          <Button variant="outline" className="mr-2 text-red-700 border-red-700">Study Materials</Button>
          <Button className="bg-red-700 text-white">Login</Button>
        </div>
      </nav>
      
      {/* Hero Section */}
      <header className="text-center py-20 bg-gradient-to-r from-red-700 to-black text-white">
        <h2 className="text-4xl font-bold mb-4">Begin the Year with Our Early Admission Advantage!</h2>
        <p className="text-lg mb-6">Enroll in our courses for Classes 7-10 and excel in your studies!</p>
        <Button size="lg" className="bg-white text-red-700">Fill the Form</Button>
      </header>
      
      {/* Popular Courses */}
      <section className="p-10">
        <h3 className="text-2xl font-semibold mb-6 text-center text-red-700">Popular Courses</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-100 p-6 shadow-md rounded-xl text-center">
            <img src="/images/math.jpg" alt="Mathematics" className="w-full h-32 object-cover rounded-md mb-4" />
            <Button variant="outline" className="text-red-700 border-red-700">Mathematics</Button>
          </div>
          <div className="bg-gray-100 p-6 shadow-md rounded-xl text-center">
            <img src="/images/science.jpg" alt="Science" className="w-full h-32 object-cover rounded-md mb-4" />
            <Button variant="outline" className="text-red-700 border-red-700">Science</Button>
          </div>
          <div className="bg-gray-100 p-6 shadow-md rounded-xl text-center">
            <img src="/images/english.jpg" alt="English" className="w-full h-32 object-cover rounded-md mb-4" />
            <Button variant="outline" className="text-red-700 border-red-700">English</Button>
          </div>
          <div className="bg-gray-100 p-6 shadow-md rounded-xl text-center">
            <img src="/images/social-studies.jpg" alt="Social Studies" className="w-full h-32 object-cover rounded-md mb-4" />
            <Button variant="outline" className="text-red-700 border-red-700">Social Studies</Button>
          </div>
        </div>
      </section>
      
      {/* Courses Section */}
      <section className="p-10">
        <h3 className="text-2xl font-semibold mb-6 text-center text-red-700">Explore Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 shadow-md rounded-xl text-center">
            <h4 className="text-xl font-bold">Mathematics</h4>
            <p className="text-gray-600">Classes 7-10</p>
            <Button className="mt-4 bg-red-700 text-white">Explore Courses</Button>
          </div>
          <div className="bg-gray-100 p-6 shadow-md rounded-xl text-center">
            <h4 className="text-xl font-bold">Science</h4>
            <p className="text-gray-600">Classes 7-10</p>
            <Button className="mt-4 bg-red-700 text-white">Explore Courses</Button>
          </div>
          <div className="bg-gray-100 p-6 shadow-md rounded-xl text-center">
            <h4 className="text-xl font-bold">English & Social Studies</h4>
            <p className="text-gray-600">Classes 7-10</p>
            <Button className="mt-4 bg-red-700 text-white">Explore Courses</Button>
          </div>
        </div>
      </section>
      
      {/* Free Demo Session */}
      <section className="p-10 text-center">
        <h3 className="text-2xl font-semibold mb-6 text-red-700">Book your <span className="text-black font-bold">Free Demo</span> Session</h3>
        <Button size="lg" className="bg-red-700 text-white">Book a Demo</Button>
      </section>
    </div>
  );
};

export default SunriseInstitute;
