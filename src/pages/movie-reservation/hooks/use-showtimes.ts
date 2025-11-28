import axios from 'axios';
import { useQuery, type QueryClient } from '@tanstack/react-query';
import { type ShowtimeReadRequest } from 'apis/data-contracts';
import { showtimesKey } from '@pages/movie-reservation/utils/showtimes-key';

async function getShowtimes(params: ShowtimeReadRequest) {
  const { movieIds, date, timeSlot } = params;

  const response = await axios.get(
    'https://sopt37mega.kro.kr/api/v1/showtimes',
    {
      params: {
        movieIds,
        date,
        timeSlot,
      },
      paramsSerializer: {
        indexes: null,
      },
    }
  );

  return response.data.data?.cinemas;
}

/**
 * 상영정보 조회 API
 * @param movieIds 선택된 영화들
 * @param date 선택된 날짜
 * @param timeSlot 선택된 시간대
 * @returns 조건에 해당하는 상영정보 배열
 */
export function useShowtimes(params: ShowtimeReadRequest) {
  return useQuery({
    queryKey: showtimesKey(params),
    queryFn: () => getShowtimes(params),
    enabled: params.movieIds && params.movieIds.length > 0,
    staleTime: 1000 * 60,
  });
}

export async function prefetchShowtimes(queryClient: QueryClient, params: ShowtimeReadRequest) {
  if (!params.movieIds?.length) return;

  await queryClient.prefetchQuery({
    queryKey: showtimesKey(params),
    queryFn: () => getShowtimes(params),
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 5,
  });
};