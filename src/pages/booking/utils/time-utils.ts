/**
 * ISO 문자열에서 시간만 'HH:MM' 형태로 추출
 * @param dateString 'YYYY-MM-DD' 형식의 날짜 문자열
 * @returns 'HH:MM' 형식의 시간 문자열
 */
export const formatTime = (isoString: string) => {
  if (!isoString) return '';
  return isoString.split('T')[1]?.substring(0, 5) ?? 'N/A';
};

/**
 * 'YYYY-MM-DD' 형식의 날짜 문자열을 'YYYY.MM.DD' 형식으로 변환
 * @param dateString 'YYYY-MM-DD' 형식의 날짜 문자열
 * @returns 'YYYY.MM.DD' 형식의 날짜 문자열
 */
export function formatDate(dateString: string): string {
  return dateString.replace(/-/g, '.');
}