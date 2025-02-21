import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section: Logo or Site Name */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <Link to="/">
              <h1 className="text-xl font-bold text-red-700">Sunrise Institute</h1>
            </Link>
            <p className="text-sm">Empowering Education for a Brighter Future</p>
          </div>

          {/* Center Section: Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-right">
            <HashLink to="/#faculty" className="hover:text-red-700">Our Faculty</HashLink>
            <HashLink to="/#courses" className="hover:text-red-700">Courses</HashLink>
            <HashLink to="/#result" className="hover:text-red-700">Results</HashLink>
            <HashLink to="/#demo" className="hover:text-red-700">Free Demo</HashLink>
            <HashLink to="/#study" className="hover:text-red-700">Study Material</HashLink>
            <Link to="/about" className="hover:text-red-700">About</Link>
            <Link to="/contact" className="hover:text-red-700">Contact Us</Link>
          </div>
        </div>

        {/* Social Media Section (Aligned right with spacing) */}
        <div className="flex justify-center md:justify-center space-x-6 mt-4 md:mt-10px md:px-8">
          <a href="https://www.facebook.com/SunriseInstitute" className="text-white hover:text-red-700">
            <FaFacebook size={24} />
          </a>
      
          <a href="https://www.instagram.com/sunriseinstitute_nabha/" className="text-white hover:text-red-700">
            <FaInstagram size={24} />
          </a>

          <a href="https://www.youtube.com/@SunriseInstitute" className="text-white hover:text-red-700">
            <FaYoutube size={24} />
          </a>
         
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Sunrise Institute. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
