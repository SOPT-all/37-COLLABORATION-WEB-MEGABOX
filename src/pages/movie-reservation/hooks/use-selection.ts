import { useState } from 'react';
import { mockCinema } from '@pages/movie-reservation/mock';

export function useSelection() {
  const [selectedMovieIds, setSelectedMovieIds] = useState<number[]>([1]);
  const [selectedDateId, setSelectedDateId] = useState<number>(0);
  const [selectedTimeId, setSelectedTimeId] = useState<number | null>(null);

  const selectedCinemas = Array.from(
    new Set(selectedMovieIds.flatMap(id => mockCinema[id]?.cinemas || []))
  );

  const handleClickMovie = (id: number) => {
    setSelectedMovieIds(prev => {
      if (prev.includes(id) && prev.length === 1) return prev;
      return prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id];
    });
  };

  const handleClickDate = (id: number) => {
    setSelectedDateId(id);
  };

  const handleClickTime = (id: number) => {
    setSelectedTimeId(prev => (prev === id ? null : id));
  };

  return {
    selectedMovieIds,
    selectedCinemas,
    selectedDateId,
    selectedTimeId,
    handleClickMovie,
    handleClickDate,
    handleClickTime,
  };
}
