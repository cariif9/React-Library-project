// src/pages/PdfViewer.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { allBooks } from '../data/books';

const PdfViewer = () => {
  const { id } = useParams();
  const book = allBooks.find((b) => b.id === parseInt(id));

  if (!book || !book.pdfUrl) {
    return <div className="pt-32 text-center text-red-600">PDF not found!</div>;
  }

  return (
    <div className="min-h-screen pt-32 px-6">
      <h2 className="text-center text-2xl font-bold mb-4 text-blue-700">
        {book.title}
      </h2>
      <div className="w-full h-[80vh]">
        <iframe
          src={book.pdfUrl}
          title={book.title}
          className="w-full h-full border rounded-lg shadow"
        />
      </div>
    </div>
  );
};

export default PdfViewer;
