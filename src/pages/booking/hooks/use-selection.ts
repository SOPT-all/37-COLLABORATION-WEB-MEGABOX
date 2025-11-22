import { useState } from 'react';
import { mockCinema } from '@pages/booking/mock';

// 영화, 영화관, 날짜, 시간대를 선택하는 훅
// 영화관은 사용자가 선택 X 영화에 따라 자동 선택 O
export function useSelection() {
  const [selectedMovieIds, setSelectedMovieIds] = useState<number[]>([1]);
  const [selectedDateId, setSelectedDateId] = useState<number>(0);
  const [selectedTimeId, setSelectedTimeId] = useState<number | null>(null);

  // 영화 선택에 따라 자동으로 선택되는 영화관 배열
  const selectedCinemas = Array.from(new Set(selectedMovieIds.flatMap(id => mockCinema[id]?.cinemas || [])));

  // 영화 선택 핸들러 (1개 이상 필수 선택, 재선택 시 선택 해제)
  const handleClickMovie = (id: number) => {
    setSelectedMovieIds(prev => {
      if (prev.includes(id) && prev.length === 1) return prev;
      return prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id];
    });
  };

  // 날짜 선택 핸들러 (1개 이상 필수 선택, 재선택 시 선택 해제)
  const handleClickDate = (id: number) => {
    setSelectedDateId(id)
  };

  // 시간대 선택 핸들러 (아무것도 선택 안 하기 가능)
  const handleClickTime = (id: number) => {
    setSelectedTimeId(prev => prev === id ? null : id)
  };

  return {
    selectedMovieIds,
    selectedCinemas,
    selectedDateId,
    selectedTimeId,
    handleClickMovie,
    handleClickDate,
    handleClickTime,
  };
}
