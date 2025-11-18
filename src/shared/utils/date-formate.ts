import dayjs from 'dayjs';
/**
 * 주어진 날짜를 'YYYY.MM.DD' 형식으로 포맷팅합니다.
 * @param date - 날짜
 * @returns 포맷팅된 날짜
 */
export function formatDate(date: Date) {
  return dayjs(date).format('YYYY.MM.DD');
}
