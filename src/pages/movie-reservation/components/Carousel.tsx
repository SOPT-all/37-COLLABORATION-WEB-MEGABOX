import { cn } from '@utils/cn';
import { MOVIES } from '@constants/movies';

import { type Date } from '@pages/movie-reservation/types/date';
import { type ShowtimeReadRequest } from 'apis/data-contracts';

interface CarouselProps {
  selectedMovieIds: number[];
  initialSelectedMovie: number;
  handleClick: (_id: number) => void;
  prefetchShowtimes: (_: ShowtimeReadRequest) => void;   // ⭐ 추가
  selectedDate: Date;                                  // ⭐ 추가
  selectedTimeSlot: ShowtimeReadRequest['timeSlot'];     // ⭐ 추가
}

export default function Carousel({
  selectedMovieIds,
  initialSelectedMovie,
  handleClick,
  prefetchShowtimes,
  selectedDate,
  selectedTimeSlot,
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
            onClick={() => handleClick(movie.id)}
            onMouseEnter={() =>
              prefetchShowtimes({
                movieIds: [movie.id, ...selectedMovieIds.filter(id => id !== movie.id)].sort(),
                // movieIds: selectedMovieIds,
                date: selectedDate.date,
                timeSlot: selectedTimeSlot,
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
