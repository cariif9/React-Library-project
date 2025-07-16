import React from 'react';
import { Link } from 'react-router-dom';
import { allBooks } from '../data/books';

const Books = ({ searchQuery = "" }) => {
  // Filter books based on title or description
  const filteredBooks = allBooks.filter((book) => {
    const title = book.title || "";
    const desc = book.desc || "";
    const query = searchQuery.toLowerCase();

    return (
      title.toLowerCase().includes(query) ||
      desc.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-32 px-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-800 dark:text-white">
        Halkaan Baad Ka Helysaa
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transform hover:scale-[1.02] transition duration-300"
            >
              <Link to={`/book/${book.id}/read`}>
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              </Link>
              <div className="p-5">
                <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {book.title}
                </h5>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                  {book.desc}
                </p>
                <Link
                  to={`/book/${book.id}/read`}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition"
                >
                  Read Now
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-10">
            No books found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Books;
