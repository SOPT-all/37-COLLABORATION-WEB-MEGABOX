/**
 * 날짜에서 일, 요일 정보를 추출합니다. (ex. '2025-11-22' -> 22, 토)
 * @param mockDates - 최근 7일 날짜 배열
 * @param selectedDateId - 선택된 날짜 ID
 * @returns selectedDate - 일, selectedWeekday - 요일, weekdays - 최근 7일 요일 배열
 */
export function getDateAndWeekday(mockDates: string[], selectedDateId: number) {
  const dates = [...mockDates];

  const selectedDate = dates[selectedDateId];

  const weekdays = dates.map(dateStr => {
    const date = new Date(dateStr);
    return ['일','월','화','수','목','금','토'][date.getDay()];
  });

  const selectedWeekday = weekdays[selectedDateId];

  return { selectedDate, selectedWeekday, weekdays };
}