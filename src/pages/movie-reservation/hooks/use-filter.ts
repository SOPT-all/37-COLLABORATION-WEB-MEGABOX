import { mockShowtimes } from '@pages/movie-reservation/mock';
/**
 * 상영 시간표를 선택된 시간대에 따라 필터링하는 훅
 * @param selectedDate 현재 선택된 날짜
 * @returns 서버에서 받아온 데이터겠죠 필터링을 서버에서 해주니까
 */
export function useFilter(selectedDate: string) {
  console.info(selectedDate);
  return mockShowtimes;
}
