
import { useMemo } from 'react';
import { mockShowtimes } from '@pages/booking/mock';
import { TIME_RANGES } from '@pages/booking/constants';

/**
 * 상영 시간표를 선택된 시간대에 따라 필터링하는 훅
 * @param selectedTimeId 현재 선택된 시간대 ID
 * @returns 필터링된 상영 시간표
 */
export function useFilter(selectedTimeId: number | null) {
  return useMemo(() => {
    // 1. 아무것도 선택 안 한 경우 - 전체 반환
    if (selectedTimeId === null) {
      return mockShowtimes;
    }

    // 2. 선택 한 경우 - 선택된 시간대에 따라 시간 범위 정의
    const range = TIME_RANGES[selectedTimeId];

    return mockShowtimes.map(cinema => {
      const filteredMovies = cinema.movies.map(movie => {
        const filteredTheaters = movie.theaters.map(theater => {
          const filteredShowtimes = theater.showtimes.filter(showtime => {
            const date = new Date(showtime.startTime);
            const hour = date.getHours();

            if (range.isOvernight) {
              return (hour >= range.minHour && hour <= 23) || (hour >= 0 && hour < range.maxHour);
            } else {
              return hour >= range.minHour && hour < range.maxHour;
            }
          });

          // 위에서 필터링되고 남은 결과가 없는 상영관은 제거
          if (filteredShowtimes.length > 0) {
            return { ...theater, showtimes: filteredShowtimes };
          }
          return null;
        }).filter((t) => t !== null);

        // 위에서 필터링되고 남은 결과가 없는 영화는 제거
        if (filteredTheaters.length > 0) {
          return { ...movie, theaters: filteredTheaters };
        }
        return null;
      }).filter((m) => m !== null);

      // 위에서 필터링 되고 남은 결과가 없는 영화관은 제거
      if (filteredMovies.length > 0) {
        return { ...cinema, movies: filteredMovies };
      }
      return null;
    }).filter((c) => c !== null);

  }, [selectedTimeId]);
}