import React from 'react';
import styled from 'styled-components';
import { useImages } from '../context/ImagesContext';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const ImageContainer = styled.div`
  margin-bottom: 10px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 170px;
  border-radius: 15px;
`;

const Images = () => {
  const { images, isLoading, error } = useImages();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <GridContainer>
      {images?.map((image) => (
        <ImageContainer key={image.id}>
          <StyledImage src={image.url} alt="Cat" />
        </ImageContainer>
      ))}
    </GridContainer>
  );
};

export default Images;
