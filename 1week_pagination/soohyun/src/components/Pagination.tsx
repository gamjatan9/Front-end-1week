import React from 'react';
import { useImages } from '../context/ImagesContext';
import styled from 'styled-components';

const PagesNum = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Pagination() {
  const { currentPage, setCurrentPage, totalPages } = useImages();

  return (
    <PagesNum>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          disabled={currentPage === index + 1}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </PagesNum>
  );
}

export default Pagination;
