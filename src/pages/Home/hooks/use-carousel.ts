import { useState } from 'react';

export default function useCarousel() {
  const SLIDE_LENGTH = 4;
  const [selectedSlideIndex, setSelectedSlideIndex] = useState<number>(0);
  const [firstSlideIndex, setFirstSlideIndex] = useState<number>(0);

  const handleClickSlide = (index: number, itemsLength: number) => {
    const slidesPerPage = Math.max(1, Math.ceil(itemsLength / SLIDE_LENGTH));
    const firstIndex = slidesPerPage * index;
    setFirstSlideIndex(firstIndex);
    setSelectedSlideIndex(index);
  };

  return {
    handleClickSlide,
    SLIDE_LENGTH,
    selectedSlideIndex,
    firstSlideIndex,
  };
}
