import { useMemo } from 'react';
import { mockShowtimes } from '@pages/movie-reservation/mock';
import { TIME_RANGES } from '@pages/movie-reservation/constants';

/**
 * 상영 시간표를 선택된 시간대에 따라 필터링하는 훅
 * @param selectedTimeId 현재 선택된 시간대 ID
 * @returns 필터링된 상영 시간표
 */
export function useFilter(selectedTimeId: number | null) {
  return useMemo(() => {
    if (selectedTimeId === null) {
      return mockShowtimes;
    }

    const range = TIME_RANGES[selectedTimeId];

    return mockShowtimes
      .map(cinema => {
        const filteredMovies = cinema.movies
          .map(movie => {
            const filteredTheaters = movie.theaters
              .map(theater => {
                const filteredShowtimes = theater.showtimes.filter(showtime => {
                  const date = new Date(showtime.startTime);
                  const hour = date.getHours();

                  if (range.isOvernight) {
                    return (
                      (hour >= range.minHour && hour <= 23) ||
                      (hour >= 0 && hour < range.maxHour)
                    );
                  } else {
                    return hour >= range.minHour && hour < range.maxHour;
                  }
                });

                if (filteredShowtimes.length > 0) {
                  return { ...theater, showtimes: filteredShowtimes };
                }
                return null;
              })
              .filter(t => t !== null);

            if (filteredTheaters.length > 0) {
              return { ...movie, theaters: filteredTheaters };
            }
            return null;
          })
          .filter(m => m !== null);

        if (filteredMovies.length > 0) {
          return { ...cinema, movies: filteredMovies };
        }
        return null;
      })
      .filter(c => c !== null);
  }, [selectedTimeId]);
}
