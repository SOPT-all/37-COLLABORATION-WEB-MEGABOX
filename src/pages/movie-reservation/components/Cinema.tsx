import { useState, useEffect } from 'react';
import { cn } from '@utils/cn';
import { IconStarFill } from '@assets/index';
import UpArrow from '@assets/components/IconSystemUparrow';

interface CinemaProps {
  cinemaName: string;
  isShowtimeOpen: boolean;
  handleOpenShowtime: (_: boolean) => void;
}

const FAVORITE_CINEMAS_KEY = 'favoriteCinemas';

export default function Cinema({
  cinemaName,
  isShowtimeOpen,
  handleOpenShowtime
}: CinemaProps) {
  const [isLiked, setIsLiked] = useState<boolean>(() => {
    const favorites = JSON.parse(localStorage.getItem(FAVORITE_CINEMAS_KEY) || '[]');
    return favorites.includes(cinemaName);
  });

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem(FAVORITE_CINEMAS_KEY) || '[]');
    setIsLiked(favorites.includes(cinemaName));
  }, [cinemaName]);

  return (
    <div className='flex items-center gap-[0.4rem] py-[0.5rem]'>
      <IconStarFill
        className={cn('cursor-pointer', isLiked ? 'text-violet-400' : 'text-gray-600')}
        onClick={() => {
          const favorites = JSON.parse(localStorage.getItem(FAVORITE_CINEMAS_KEY) || '[]');
          const newFavorites = isLiked
            ? favorites.filter((name: string) => name !== cinemaName)
            : [...favorites, cinemaName];
          localStorage.setItem(FAVORITE_CINEMAS_KEY, JSON.stringify(newFavorites));
          setIsLiked(!isLiked);
          window.dispatchEvent(new Event('favoriteCinemasChanged'));
        }}
      />
      <span className='font-title2 text-gray-0'>
        {cinemaName}
      </span>
      <UpArrow
        width={12}
        height={12}
        className={cn('text-gray-300 cursor-pointer animation-rotate duration-300 ease-in-out', isShowtimeOpen ? 'rotate-0' : 'rotate-180')}
        onClick={() => handleOpenShowtime(!isShowtimeOpen)}
      />
    </div>
  );
}