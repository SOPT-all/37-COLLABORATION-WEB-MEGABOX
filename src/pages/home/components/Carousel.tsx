import type { MoviePoster } from '@constants/movies';

interface CarouselProps {
  items: MoviePoster[];
  handleClickItem: (_id: number) => void;
}

export default function Carousel({ items, handleClickItem }: CarouselProps) {
  return (
    <div className='flex flex-col gap-[5rem] px-[1rem]'>
      <div className='scrollbar-hide flex gap-[1.2rem] overflow-x-auto opacity-80'>
        {items.map(movie => (
          <div
            onClick={() => handleClickItem(movie.id)}
            key={movie.id}
            className='h-[7.9rem] w-[5.6rem] flex-shrink-0 cursor-pointer'
          >
            <img
              src={movie.image}
              alt={`${movie.id}번 영화`}
              className='h-full w-full object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
