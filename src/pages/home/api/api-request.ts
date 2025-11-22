import { apiRequest } from '@api/api-request';
import type { ApiResponseMovieListResponse } from '@/../apis/data-contracts';
import { useQuery } from '@tanstack/react-query';
import { MOVIE_KEY } from '@/shared/query-key/movie';

const getMovies = async () => {
  const response = await apiRequest<ApiResponseMovieListResponse>({
    method: 'GET',
    endPoint: '/api/v1/movies',
  });
  return response;
};

export const getMovieListQuery = () => {
  return useQuery<ApiResponseMovieListResponse>({
    queryKey: MOVIE_KEY.LIST(),
    queryFn: () => getMovies(),
  });
};
