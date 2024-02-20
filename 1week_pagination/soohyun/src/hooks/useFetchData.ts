import { useQuery } from '@tanstack/react-query';

async function fetchData (page: number, limit: number = 12) {
  const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}`, {
    headers: { 'x-api-key': 'live_CGL7BtiNmm0aAub1mWrrHDEaRfoHNmd7z9OOTJZU8qcccVJ4GvsAAEqRKZOy6eRs' },
    
  });
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

export function useFetchData (page: number) {
  return useQuery({
    queryKey: ['catImages', page],
    queryFn: () => fetchData(page),
  });
};