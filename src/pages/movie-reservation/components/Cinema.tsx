import { useState } from 'react';
import { cn } from '@utils/cn';
import { IconStarFill } from '@assets/index';
import UpArrow from '@assets/components/IconSystemUparrow';

interface CinemaProps {
  cinemaName: string;
  isShowtimeOpen: boolean;
  handleOpenShowtime: (_: boolean) => void;
}

export default function Cinema({
  cinemaName,
  isShowtimeOpen,
  handleOpenShowtime
}: CinemaProps) {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <div className='flex items-center gap-[0.4rem] py-[0.5rem]'>
      <IconStarFill
        className={cn('cursor-pointer', isLiked ? 'text-violet-400' : 'text-gray-600')}
        onClick={() => setIsLiked(prev => !prev)}
      />
      <span className='font-title2 text-gray-0'>
        {cinemaName}
      </span>
      <UpArrow
        width={12}
        height={12}
        className={cn('text-gray-300 cursor-pointer', isShowtimeOpen ? 'rotate-0' : 'rotate-180')}
        onClick={() => handleOpenShowtime(!isShowtimeOpen)}
      />
    </div>
  );
}