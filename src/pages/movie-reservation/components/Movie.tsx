import { MOVIES } from '@constants/movies';

interface MovieProps {
  movieTitle: string;
  ageRating: 'all' | 12 | 15 | 19;
}

export default function Movie({ movieTitle, ageRating }: MovieProps) {
  const movieId = Object.values(MOVIES).find(
    movie => movie.title === movieTitle
  )?.id;
  if (!movieId) return null;

  return (
    <div className='flex gap-[1.1rem]'>
      <img
        src={MOVIES[movieId].image}
        alt={`${movieTitle} 포스터`}
        className='h-[4.5rem] w-[3.4rem]'
      />
      <div className='flex items-center gap-[0.6rem]'>
        <img
          src={`/assets/agelimit-${ageRating}.svg`}
          alt={`${ageRating} 제한`}
          className='h-[1.5rem] w-[1.5rem]'
        />
        <span className='font-title2 text-gray-0'>{movieTitle}</span>
      </div>
    </div>
  );
}
