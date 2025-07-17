import React from 'react';
import { Link } from 'react-router-dom';
import comingSoonImg from '../assets/coming-soon.png'
const ComingSoon = () => {
  return (
    <div className="pt-32 px-4 text-center min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      
        <img
        src={comingSoonImg}
        alt="Coming Soon"
        className="mx-auto mb-6 w-40 h-40 object-contain"
      />
      <h4 className="text-4xl font-bold mb-4">🚧 Coming Soon 🚧</h4>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        This book is not yet available. We're working on it!
      </p>

      <Link
        to="/"
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ComingSoon;
