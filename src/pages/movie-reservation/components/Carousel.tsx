import { cn } from '@utils/cn';
import { MOVIES } from '@constants/movies';

interface CarouselProps {
  selectedMovieIds: number[];
  handleClick: (_id: number) => void;
}

export default function Carousel({
  selectedMovieIds,
  handleClick,
}: CarouselProps) {
  return (
    <ul className='scrollbar-hide flex w-full items-center gap-[0.9rem] overflow-x-scroll px-[0.5rem]'>
      {Object.values(MOVIES).map(movie => (
        <li key={movie.id}>
          <button
            className={cn(
              'h-[8rem] w-[5.7rem] shrink-0',
              selectedMovieIds.includes(movie.id)
                ? 'border-gray-0 rounded-[0.4rem] border'
                : 'rounded-[0.6rem] border border-transparent opacity-30'
            )}
            onClick={() => handleClick(movie.id)}
          >
            <img src={movie.image} className='h-full w-full' />
          </button>
        </li>
      ))}
    </ul>
  );
}
