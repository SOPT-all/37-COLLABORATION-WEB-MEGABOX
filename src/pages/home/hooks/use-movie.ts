import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { mock } from '@/pages/home/mock';
import { MOVIES } from '@constants/movies';

export function useMovie() {
  const navigate = useNavigate();
  const [selectedMovieId, setSelectedMovieId] = useState<number>(1);
  const selectedMovie = mock.find(item => item.id === selectedMovieId);
  const item = Object.values(MOVIES).map(movie => ({
    id: movie.id,
    image: movie.image,
  }));
  const handleClickItem = (id: number) => {
    setSelectedMovieId(id);
  };

  const handleClickCard = () => {
    //TODO: 영화 상세 페이지로 이동
    navigate(`/movie/${selectedMovieId}`);
  };
  return { selectedMovie, item, handleClickItem, handleClickCard };
}
