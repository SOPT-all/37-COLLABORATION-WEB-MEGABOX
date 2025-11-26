import type { Date } from '@pages/movie-reservation/types/date';

const DAY_NAMES = ['일', '월', '화', '수', '목', '금', '토'];

export function useDate(): Date[] {
  const today = new Date();

  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dateString = date.toISOString().split('T')[0];
    const day = DAY_NAMES[date.getDay()];

    return {
      date: dateString,
      day: day,
    };
  });

  return dates;
}
