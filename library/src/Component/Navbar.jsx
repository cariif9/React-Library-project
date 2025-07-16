import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Digital Book Logo Design.png";

const Navbar = ({ searchQuery, setSearchQuery, toggleTheme, theme }) => {
  const navigate = useNavigate();
  const [categoryOpen, setCategoryOpen] = useState(false);

  const categories = ["Sheekoyin", "Diini", "Programming"];

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
    setCategoryOpen(false);  
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white fixed top-0 left-0 right-0 z-50 shadow-md font-sans">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between">
        {/*Here is the */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logo}
            alt="Library Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <span className="text-2xl font-bold tracking-wide">SomaliLibrary</span>
        </Link>

     
        {/* Menu */}
        <ul className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 mt-4 md:mt-0 text-lg">
          
          <li>
            <Link to="/" className="hover:text-yellow-300 font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Books" className="hover:text-yellow-300 font-medium">
              Books
            </Link>
          </li>
          <li className="relative">
            {/* Dropdown toggle */}
            <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="hover:text-yellow-300 font-medium flex items-center focus:outline-none"
              aria-haspopup="true"
              aria-expanded={categoryOpen}
            >
              Categories
              <svg
                className="ml-1 w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.25 7.5l4.5 4.5 4.5-4.5H5.25z" />
              </svg>
            </button>

            {/* Dropdown menu */}
            {categoryOpen && (
              <ul
                className="absolute bg-white text-black rounded-md shadow-lg mt-2 space-y-2 w-40 z-50"
              >
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => handleCategoryClick(cat)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      {cat}
                    </button>
                  </li>
                ))}
                
              </ul>
            )}
          </li>
             {/* Search and Theme */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="hidden md:block w-64 p-2 text-gray-900 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
          />

        </div>

          <button
                  onClick={toggleTheme}
                  className="px-3 py-1 bg-white text-black rounded-md hover:bg-blue-300 transition"
                  aria-label="Toggle dark/light mode"
                >
                  {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
