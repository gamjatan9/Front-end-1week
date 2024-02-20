import React from 'react';
import { useImages } from '../context/ImagesContext';

function Pagination() {
  const { currentPage, setCurrentPage, totalPages } = useImages();

  return (
    <div>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          disabled={currentPage === index + 1}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
