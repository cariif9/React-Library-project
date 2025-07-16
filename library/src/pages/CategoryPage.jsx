import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { allBooks } from '../data/books';

const CategoryPage = ({ searchQuery = "" }) => {
  const { categoryId } = useParams();

  const filteredBooks = allBooks.filter(book => {
    const title = book.title || "";
    const desc = book.desc || "";
    const category = book.category || "";
    const query = searchQuery.toLowerCase();
    return (
      category.toLowerCase() === categoryId.toLowerCase() &&
      (title.toLowerCase().includes(query) || desc.toLowerCase().includes(query))
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-32 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-800 dark:text-white mb-10">
        Category: {categoryId}
      </h2>

      {filteredBooks.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-300">
          No books found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredBooks.map(book => (
            <div key={book.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4">
              <Link to={`/book/${book.id}/read`}>
                <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {book.title}
                </h3>
              </Link>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{book.desc}</p>
              <Link
                to={`/book/${book.id}/read`}
                className="inline-block px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white text-sm rounded-lg transition"
              >
                Read Now
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
