import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '@api/api-request';
import type { ApiResponseCinemaListResponse } from '@/../apis/data-contracts';
import { MOVIE_KEY } from '@/shared/query-key/movie';

const getCinemas = async (movieIds: number[]) => {
  const response = await apiRequest<ApiResponseCinemaListResponse>({
    method: 'GET',
    endPoint: '/api/v1/cinemas',
    params: { movieIds },
  });
return response.data?.cinemas;
}

export function useCinemas(movieIds: number[]) {
  return useQuery({
    queryKey: MOVIE_KEY.CINEMAS(movieIds),
    queryFn: () => getCinemas(movieIds),
    enabled: movieIds.length > 0,
  });
}