import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Digital Book Logo Design.png";

const Navbar = ({ searchQuery, setSearchQuery, toggleTheme, theme }) => {
  const navigate = useNavigate();
  const [categoryOpen, setCategoryOpen] = useState(false);
  const categories = ["Sheekoyin", "Diini", "Programming"];
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCategoryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
    setCategoryOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white fixed top-0 left-0 right-0 z-50 shadow-md font-sans">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-4 flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logo}
            alt="Library Logo"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
          />
          <span className="text-xl md:text-2xl font-bold tracking-wide">SomaliLibrary</span>
        </Link>

        <ul className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 mt-4 md:mt-0 text-base md:text-lg">
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
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="hover:text-yellow-300 font-medium flex items-center focus:outline-none"
              aria-haspopup="true"
              aria-expanded={categoryOpen}
              aria-controls="category-menu"
            >
              Categories
              <svg
                className={`ml-1 w-4 h-4 fill-current transition-transform duration-300 ${
                  categoryOpen ? "transform rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.25 7.5l4.5 4.5 4.5-4.5H5.25z" />
              </svg>
            </button>

            {categoryOpen && (
              <ul
                id="category-menu"
                className="absolute bg-white text-black rounded-md shadow-lg mt-2 space-y-1 w-40 z-50"
                role="menu"
              >
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => handleCategoryClick(cat)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                      role="menuitem"
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="mt-2 md:mt-0">
            <input
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 p-2 text-gray-900 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              aria-label="Search books"
            />
          </li>

          <li className="mt-2 md:mt-0">
            <button
              onClick={toggleTheme}
              className="px-3 py-1 bg-white text-black rounded-md hover:bg-blue-300 transition"
              aria-label="Toggle dark/light mode"
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
