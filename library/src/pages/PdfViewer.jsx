import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { allBooks } from '../data/books';

const PdfViewer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = allBooks.find((b) => b.id === parseInt(id));

  useEffect(() => {
    if (!book?.pdfUrl || book.pdfUrl === "/coming-soon") {
      navigate('/coming-soon');
    }
  }, [book, navigate]);

  if (!book) {
    return <div className="pt-32 text-center text-red-600">Book not found!</div>;
  }

  return (
    <div className="min-h-screen pt-32 px-6">
      <h2 className="text-2xl font-bold text-center mb-4">{book.title}</h2>
      <iframe
        src={book.pdfUrl}
        title={book.title}
        width="100%"
        height="600px"
        className="border rounded"
      />
    </div>
  );
};

export default PdfViewer;
