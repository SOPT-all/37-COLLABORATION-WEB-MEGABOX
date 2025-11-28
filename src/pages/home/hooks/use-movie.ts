import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { type MoviePoster } from '@constants/movies';
import { useGetMovieListQuery } from '@/pages/home/api/use-api-request';
import type { MovieSummaryResponse } from 'apis/data-contracts';
import { mappingMoviePosters } from '@/shared/utils/mapping-movie';
import { ROUTES } from '@router/constant/routes';

export function useMovie() {
  const navigate = useNavigate();
  const { data: movieList } = useGetMovieListQuery();
  const [selectedMovieId, setSelectedMovieId] = useState<number>(1);
  const selectedMovie: MovieSummaryResponse | undefined =
    movieList?.data?.movies?.find(item => item.id === selectedMovieId);

  const items: MoviePoster[] = mappingMoviePosters();

  const handleClickItem = (id: number) => {
    setSelectedMovieId(id);
  };

  const handleClickCard = () => {
    navigate(ROUTES.MOVIE_RESERVATION, {
      state: { movieId: selectedMovieId },
    });
  };

  return {
    selectedMovie,
    items,
    handleClickItem,
    handleClickCard,
  };
}
