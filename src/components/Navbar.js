import React, { useState } from "react";
import Button from "./ui/button";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing hamburger and close icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="p-4 flex justify-between items-center shadow-md">
            <img src="/images/logo3.png" className="h-[50px] ml-0 md:ml-[20px]"/>
      {/* Hamburger Icon for Small Screens */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <FaTimes className="text-red-700 text-2xl" />
          ) : (
            <FaBars className="text-red-700 text-2xl" />
          )}
        </button>
      </div>

      {/* Navbar Links */}
      <ul
        className={`flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 ${
          isMenuOpen ? "block" : "hidden md:flex"
        }`}
      >
        <li>
          <a
            href="#courses"
            className="font-semibold inline-block py-2 px-4 text-red-700 border-2 border-transparent rounded-md hover:border-red-700 hover:bg-red-700 hover:text-white focus:outline-none transition-all"
          >
            Courses
          </a>
        </li>
        <li>
          <a
            href="#study"
            className="font-semibold inline-block py-2 px-4 text-red-700 border-2 border-transparent rounded-md hover:border-red-700 hover:bg-red-700 hover:text-white focus:outline-none transition-all"
          >
            Study Material
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="font-semibold inline-block py-2 px-4 text-red-700 border-2 border-transparent rounded-md hover:border-red-700 hover:bg-red-700 hover:text-white focus:outline-none transition-all"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="font-semibold inline-block py-2 px-4 text-red-700 border-2 border-transparent rounded-md hover:border-red-700 hover:bg-red-700 hover:text-white focus:outline-none transition-all"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
