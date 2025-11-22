import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MOVIES } from '@constants/movies';
import { useGetMovieListQuery } from '@/pages/home/api/use-api-request';
import type { MovieSummaryResponse } from 'apis/data-contracts';

export type Item = {
  id: number;
  image: string;
};

export function useMovie() {
  const navigate = useNavigate();
  const { data: movieList, isPending, isError } = useGetMovieListQuery();
  const [selectedMovieId, setSelectedMovieId] = useState<number>(1);
  const selectedMovie: MovieSummaryResponse | undefined =
    movieList?.data?.movies?.find(item => item.id === selectedMovieId);

  const items: Item[] = Object.values(MOVIES).map(movie => ({
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
  return {
    selectedMovie,
    items,
    handleClickItem,
    handleClickCard,
    isPending,
    isError,
  };
}
