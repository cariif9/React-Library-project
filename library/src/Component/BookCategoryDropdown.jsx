import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const BookCategoryDropdown = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const categories = [
    { id: "Diini", label: "Diini" },
    { id: "Programming", label: "Programming" },
    { id: "Sheekoyin", label: "Sheekoyin" },
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    localStorage.setItem("selectedCategory", category);
    setOpen(false);
    navigate(`/category/${category}`);
  };

  useEffect(() => {
    const savedCategory = localStorage.getItem("selectedCategory");
    if (savedCategory) {
      setSelectedCategory(savedCategory);
    }
  }, []);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative inline-block text-left w-full sm:w-auto"
      ref={dropdownRef}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full sm:w-60 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 inline-flex items-center justify-between"
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {selectedCategory || "Select Category"}
        <svg
          className={`ml-2 w-4 h-4 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.25 7.5l4.5 4.5 4.5-4.5H5.25z" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-full sm:w-60 rounded-md shadow-lg bg-white dark:bg-gray-700">
          <ul className="p-2 space-y-1 text-sm text-gray-700 dark:text-gray-200 max-h-48 overflow-auto">
            {categories.map((cat) => (
              <li
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className="cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-sm"
              >
                {cat.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookCategoryDropdown;
