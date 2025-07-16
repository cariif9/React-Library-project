import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); 
  };

  return (
    <input
      type="text"
      placeholder="Search books..."
      value={query}
      onChange={handleChange}
      className="block w-full md:w-64 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-100 focus:ring-white focus:border-white mb-8 mx-auto"
    />
  );
};

export default SearchBar;
