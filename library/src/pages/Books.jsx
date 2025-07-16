import React from 'react';
import { Link } from 'react-router-dom';
import { allBooks } from '../data/books';

const Books = ({ searchQuery = "" }) => {
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
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-32 px-4 sm:px-6 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-800 dark:text-white">
        Halkaan Baad Ka Helysaa
      </h2>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <article
              key={book.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transform hover:scale-[1.03] transition duration-300"
            >
              <Link to={`/book/${book.id}/read`} aria-label={`Read ${book.title}`}>
                <img
                  src={book.image}
                  alt={`Cover of ${book.title}`}
                  className="w-full h-48 object-cover rounded-t-xl"
                  loading="lazy"
                />
              </Link>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 truncate" title={book.title}>
                  {book.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed line-clamp-4">
                  {book.desc}
                </p>
                <Link
                  to={`/book/${book.id}/read`}
                  className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Read Now
                </Link>
              </div>
            </article>
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-10 text-lg">
            No books found.
          </p>
        )}
      </section>
    </main>
  );
};

export default Books;
