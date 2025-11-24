import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { type MoviePoster } from '@constants/movies';
import { useGetMovieListQuery } from '@/pages/home/api/use-api-request';
import type { MovieSummaryResponse } from 'apis/data-contracts';
import { mappingMoviePosters } from '@/shared/utils/mapping-movie';

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
    //TODO: 영화 상세 페이지로 이동
    navigate(`/movie/${selectedMovieId}`);
  };

  return {
    selectedMovie,
    items,
    handleClickItem,
    handleClickCard,
  };
}
