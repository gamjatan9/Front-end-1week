import React, { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from 'react';
import { useFetchData } from '../hooks/useFetchData';

// 이미지 데이터 타입
interface Image {
  id: string;
  url: string;
}

// context에 전달될 값
interface ImagesContextType {
  images: Image[];
  isLoading: boolean;
  error: Error | null;
  currentPage: number; 
  setCurrentPage: Dispatch<SetStateAction<number>>; 
  totalPages: number; 
}

const ImagesContext = createContext<ImagesContextType | null>(null);


export const ImagesProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState(1); //초기값
  const totalPages = 20; 
  const { data: images, isLoading, error } = useFetchData(currentPage);

  return (
    <ImagesContext.Provider value={{ images, isLoading, error, currentPage, setCurrentPage, totalPages }}>
      {children}
    </ImagesContext.Provider>
  );
};

export const useImages = (): ImagesContextType => {
  const context = useContext(ImagesContext);
  if (context === null) {
    throw new Error('error: useImages');
  }
  return context;
};
