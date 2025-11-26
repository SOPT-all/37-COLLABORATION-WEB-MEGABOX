import { useState } from 'react';
import type { Date } from '@pages/movie-reservation/types/date';
import { useCinemas } from '@pages/movie-reservation/hooks/index';

interface useSelectionProps {
  initialSelectedMovie: number;
  initialSelectedDate: Date;
}

export function useSelection({
  initialSelectedMovie,
  initialSelectedDate
}: useSelectionProps) {
  const [selectedMovieIds, setSelectedMovieIds] = useState<number[]>([initialSelectedMovie]);

  const [selectedDate, setSelectedDate] = useState<Date>(initialSelectedDate);
  const [selectedTimeId, setSelectedTimeId] = useState<number | null>(null);

  const { data: selectedCinemas = [] } = useCinemas(selectedMovieIds);

  const handleClickMovie = (id: number) => {
    if (id === initialSelectedMovie) return;

    setSelectedMovieIds(prev => {
      if (prev.includes(id) && prev.length === 1) return prev;
      return prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id];
    });
  };

  const handleClickDate = (date: Date) => {
    setSelectedDate(date);
  };

  const handleClickTime = (id: number) => {
    setSelectedTimeId(prev => (prev === id ? null : id));
  };

  return {
    selectedMovieIds,
    selectedCinemas,
    selectedDate,
    selectedTimeId,
    handleClickMovie,
    handleClickDate,
    handleClickTime,
  };
}
