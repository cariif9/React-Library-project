import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PdfViewer from './pages/PdfViewer';
import ScrollToTop from './Component/ScrollToTop'
import CategoryPage from './pages/CategoryPage';
import Navbar from "./Component/Navbar";
import Books from "./pages/Books";
import Home from "./pages/Home";

import Footer from "./Component/Footer";

function App() {

  //Dark mode And Saerch
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.className = theme === "dark" ? "dark" : "";
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <Router>
      <ScrollToTop />
      <Navbar

        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/books" element={<Books searchQuery={searchQuery} />} />
        <Route path="/book/:id/read" element={<PdfViewer />} />
        <Route path="/category/:categoryId" element={<CategoryPage searchQuery={searchQuery} />}
        />      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
