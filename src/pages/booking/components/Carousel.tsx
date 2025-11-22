import { cn } from '@utils/cn';

interface MovieItem {
  id: number;
  title: string;
  image: string;
}

interface CarouselProps {
  movies: MovieItem[];
  selectedMovieIds: number[];
  handleClick: (_: number) => void;
}

export default function Carousel({
  movies,
  selectedMovieIds,
  handleClick
}: CarouselProps) {
  return (
    <ul className='flex items-center gap-[0.9rem] w-full overflow-x-scroll scrollbar-hide'>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <button
              className={cn(
                'w-[5.7rem] h-[8rem] shrink-0',
                selectedMovieIds.includes(movie.id)
                  ? 'border rounded-[0.4rem] border-gray-0'
                  : 'border rounded-[0.6rem] border-transparent opacity-30'
              )}
              onClick={() => handleClick(movie.id)}
            >
              <img
                src={movie.image}
                alt={movie.title}
                className='w-full h-full'
              />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
