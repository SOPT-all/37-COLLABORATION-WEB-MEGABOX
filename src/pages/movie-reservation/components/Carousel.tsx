import { cn } from '@utils/cn';
import { MOVIES } from '@constants/movies';
import type { PrefetchConfig } from '@pages/movie-reservation/types/index';

interface CarouselProps {
  selectedMovieIds: number[];
  initialSelectedMovie: number;
  handleClickMovie: (_id: number) => void;
  prefetchConfig: PrefetchConfig;
}

export default function Carousel({
  selectedMovieIds,
  initialSelectedMovie,
  handleClickMovie,
  prefetchConfig
}: CarouselProps) {
  const moviesWithSelectedFirst = Object.values(MOVIES).sort((a, b) => {
    if (a.id === initialSelectedMovie) return -1;
    if (b.id === initialSelectedMovie) return 1;
    return 0;
  })

  return (
    <ul className='scrollbar-hide flex w-full items-center gap-[0.9rem] overflow-x-scroll px-[0.5rem]'>
      {moviesWithSelectedFirst.map(movie => (
        <li key={movie.id}>
          <button
            className={cn(
              'h-[8rem] w-[5.7rem] shrink-0',
              selectedMovieIds.includes(movie.id)
                ? 'border-gray-0 rounded-[0.4rem] border'
                : 'rounded-[0.6rem] border border-transparent opacity-30'
            )}
            onClick={() => handleClickMovie(movie.id)}
            onMouseEnter={() =>
              prefetchConfig.prefetchShowtimes(prefetchConfig.queryClient, {
                movieIds: selectedMovieIds.includes(movie.id)
                            ? selectedMovieIds.filter(id => id !== movie.id)
                            : [movie.id, ...selectedMovieIds.filter(id => id !== movie.id)],
                date: prefetchConfig.date,
                timeSlot: prefetchConfig.timeSlot,
              })
            }
          >
            <img src={movie.image} className='w-full h-full rounded-[0.4rem] object-cover' />
          </button>
        </li>
      ))}
    </ul>
  );
}
