/**
 * 주어진 평점을 반올림하여 별점 상태를 반환합니다.
 * @param rating - 평점 (0 ~ 5)
 * @returns 별점 상태 배열 (0 | 0.5 | 1)
 */
export function getRoundedStarStates(rating: number): (0 | 0.5 | 1)[] {
  const roundedToHalf = Math.round(rating * 2) / 2;
  const clamped = Math.min(5, Math.max(0, roundedToHalf));
  return Array.from({ length: 5 }, (_, index) => {
    const remainder = clamped - index;
    if (remainder >= 1) return 1;
    if (remainder >= 0.5) return 0.5;
    return 0;
  });
}
