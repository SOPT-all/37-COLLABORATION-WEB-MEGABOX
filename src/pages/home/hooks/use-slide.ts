import { useState } from 'react';

import { getSlidesPage } from '@/pages/home/utils/slide';

// 슬라이드 관련 상태와 함수를 관리하는 hook
export function useSlide() {
  const SLIDE_LENGTH = 4;
  const [selectedSlideIndex, setSelectedSlideIndex] = useState<number>(0);
  const [firstSlideIndex, setFirstSlideIndex] = useState<number>(0);

  const handleClickSlide = (index: number, itemsLength: number) => {
    const slidesPerPage = getSlidesPage(itemsLength, SLIDE_LENGTH);
    const firstIndex = slidesPerPage * index;
    setFirstSlideIndex(firstIndex);
    setSelectedSlideIndex(index);
  };

  return {
    handleClickSlide,
    SLIDE_LENGTH,
    selectedSlideIndex,
    firstSlideIndex,
    setSelectedSlideIndex,
  };
}
