import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BookCategoryDropdown = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");

 const categories = [
  { id: "Diini", label: "Diini" },
  { id: "Programming", label: "Programming" },
  { id: "Sheekoyin", label: "Sheekoyin" },
];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    localStorage.setItem("selectedCategory", category); 
    navigate(`/category/${category}`);
  };

  useEffect(() => {
    const savedCategory = localStorage.getItem("selectedCategory");
    if (savedCategory) {
      setSelectedCategory(savedCategory); 
    }
  }, []);

  return (
    <div className="relative inline-block text-left">
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        {selectedCategory || "Select Category"}
      </button>

      <div className="absolute z-50 mt-2 w-60 rounded-md shadow-lg bg-white dark:bg-gray-700">
        <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
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
    </div>
  );
};

export default BookCategoryDropdown;
