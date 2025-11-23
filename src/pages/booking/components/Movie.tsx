import { MOVIES } from '@constants/movies';
import { getIdByTitle } from '@pages/booking/utils/index';

interface MovieProps {
  movieTitle: string;
  ageRating: 'ALL' | 12 | 15 | 19;
}

export default function Movie({
  movieTitle,
  ageRating
}: MovieProps) {
  const movieId = getIdByTitle(movieTitle);
  if (!movieId) return null;

  return (
    <div className='flex gap-[1.1rem]'>
      <img
        src={MOVIES[movieId].image}
        alt={`${movieTitle} 포스터`}
        className='w-[3.4rem] h-[4.5rem]'
      />
      <div className='flex items-center gap-[0.6rem]'>
        <img
          src={`/assets/ageLimit-${ageRating}.png`}
          alt={`${ageRating} 제한`}
          className='w-[1.5rem] h-[1.5rem]'
        />
        <span className='font-title2 text-gray-0'>{movieTitle}</span>
      </div>
    </div>
  );
};