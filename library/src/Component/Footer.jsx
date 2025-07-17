import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Digital Book Logo Design.png";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white shadow-md"
      role="contentinfo"
    >
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-2">
       
        <Link
          to="/"
          className="flex items-center space-x-2 hover:text-yellow-300 transition">
          <img
            src={logo}
            className="h-8 w-8 rounded-full"
            alt="Library Logo"
          />
          <span className="text-base font-medium">SomaliLibrary</span>
        </Link>

        {/* Copyright */}
        <small className="text-xs text-gray-200">
          © 2025 SomaliLibrary. All Rights Reserved.
        </small>

        
        <div className="flex space-x-4">
          
          <Link
            to="/" 
            className="text-gray-300 hover:text-yellow-300 text-sm transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
