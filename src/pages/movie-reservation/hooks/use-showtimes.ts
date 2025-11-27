import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { type ShowtimeReadRequest } from 'apis/data-contracts';

async function apiGetShowtimesFixed(params: ShowtimeReadRequest) {
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

const showtimesKey = (params: ShowtimeReadRequest) => [
  'showtimes',
  JSON.stringify([...(params.movieIds ?? [])].sort((a, b) => a - b)),
  params.date,
  params.timeSlot ?? null,
];

/**
 * 상영정보 조회 API
 * @param movieIds 선택된 영화들
 * @param date 선택된 날짜
 * @param timeSlot 선택된 시간대
 * @returns 조건에 해당하는 상영정보 배열
 */
export function useShowtimes({
  movieIds,
  date,
  timeSlot
}: ShowtimeReadRequest) {
  return useQuery({
    // queryKey: ['showtimes', movieIds, date, timeSlot],
    queryKey: showtimesKey({ movieIds, date, timeSlot }),
    queryFn: () =>
      apiGetShowtimesFixed({ movieIds, date, timeSlot }),
    enabled: movieIds && movieIds.length > 0,
    staleTime: 1000 * 60,
  });
}
