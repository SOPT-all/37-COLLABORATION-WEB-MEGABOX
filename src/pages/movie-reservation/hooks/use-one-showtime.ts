import { useQuery } from "@tanstack/react-query";
import { apiRequest } from '@api/api-request';
import type { ApiResponseShowtimeBeforeReservationResponse } from '@/../apis/data-contracts';
import { MOVIE_KEY } from '@/shared/query-key/movie';

const getOneShowtime = async (showtimeId: number) => {
  const response = await apiRequest<ApiResponseShowtimeBeforeReservationResponse>({
    method: 'GET',
    endPoint: `/api/v1/showtimes/${showtimeId}`,
  });
  return response.data;
}

export function useOneShowtime(showtimeId: number) {
  return useQuery({
    queryKey: MOVIE_KEY.SHOWTIME(showtimeId),
    queryFn: () => getOneShowtime(showtimeId),
  });
}