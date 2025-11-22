import dayjs from 'dayjs';
/**
 * 주어진 날짜를 'YYYY.MM.DD' 형식으로 포맷팅합니다.
 * @param date - 날짜
 * @returns 포맷팅된 날짜
 */
export function formatDate(date: Date) {
  return dayjs(date).format('YYYY.MM.DD');
}
/**
 * ISO 문자열에서 시간만 'HH:MM' 형태로 추출합니다.
 * @param dateString - 'YYYY-MM-DD' 형식의 날짜 문자열
 * @returns 'HH:MM' 형식의 시간 문자열
 */
export const formatTime = (isoString: string) => {
  if (!isoString) return '';
  return isoString.split('T')[1]?.substring(0, 5) ?? 'N/A';
};