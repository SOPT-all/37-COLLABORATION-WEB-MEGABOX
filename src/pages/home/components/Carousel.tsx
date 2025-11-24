import { useCallback, useEffect } from 'react';

import { useScroll, useSlide, handleScroll } from '@/pages/home/hooks';
import { cn } from '@utils/index';
import type { MoviePoster } from '@constants/movies';

interface CarouselProps {
  items: MoviePoster[];
  handleClickItem: (_id: number) => void;
}

export default function Carousel({ items, handleClickItem }: CarouselProps) {
  const ITEMS_LENGTH = items.length;

  const {
    handleClickSlide,
    SLIDE_LENGTH,
    selectedSlideIndex,
    firstSlideIndex,
    setSelectedSlideIndex,
  } = useSlide();
  const { containerRef, scrollToIndex } = useScroll();

  const handleScrollCallback = useCallback(
    () => handleScroll(containerRef, setSelectedSlideIndex, SLIDE_LENGTH),
    [containerRef, setSelectedSlideIndex, SLIDE_LENGTH]
  );

  useEffect(() => {
    scrollToIndex(firstSlideIndex);
  }, [firstSlideIndex, scrollToIndex]);

  return (
    <div className='flex flex-col gap-[5rem] px-[1rem]'>
      <div
        onScroll={handleScrollCallback}
        ref={containerRef}
        className='scrollbar-hide flex gap-[1.2rem] overflow-x-auto opacity-80'
      >
        <div className='w-[15rem] flex-shrink-0' aria-hidden='true' />
        {items.map(movie => (
          <div
            onClick={() => handleClickItem(movie.id)}
            key={movie.id}
            className='h-[7.9rem] w-[5.6rem] flex-shrink-0'
          >
            <img
              src={movie.image}
              alt={`${movie.id}번 영화`}
              className='h-full w-full object-cover'
            />
          </div>
        ))}
        <div className='w-[15rem] flex-shrink-0' aria-hidden='true' />
      </div>
      <div className='flex w-full items-center justify-center gap-[0.4rem]'>
        {Array.from({ length: SLIDE_LENGTH }).map((_, index) => (
          <div
            onClick={() => handleClickSlide(index, ITEMS_LENGTH)}
            key={index}
            className={cn(
              'h-[0.6rem] w-[0.6rem] flex-shrink-0 rounded-full',
              selectedSlideIndex === index ? 'bg-gray-200' : 'bg-gray-500'
            )}
          />
        ))}
      </div>
    </div>
  );
}
