import { MOVIES } from '@constants/movies';
import { cn } from '@utils/cn';

import ImgBtBolby from '@/../public/assets/img-bt-bolby.svg';
import ImgBtPlay from '@/../public/assets/img-bt-4d.svg';

interface MovieProps {
  id: number;
  title: string;
  tag: string;
  ageRating: number;
  releaseDate: string;
  runningTimeMinutes: number;
  className?: string;
  handleClickCard?: () => void;
}
export default function Movie({
  id,
  title,
  tag,
  ageRating,
  releaseDate,
  runningTimeMinutes,
  className,
  handleClickCard,
}: MovieProps) {
  const movie = MOVIES[id];

  return (
    <div
      className={cn(
        'relative h-[26.4rem] w-full bg-cover bg-center bg-no-repeat',
        className
      )}
      style={{
        backgroundImage: `url(${movie.backgroundImage})`,
      }}
      aria-label={`${title} 영화 정보`}
      onClick={handleClickCard ?? undefined}
    >
      <div className='gradient-4 absolute inset-0 h-full w-full' />
      <div className='absolute inset-0 h-full w-full bg-gray-900/70' />
      <div className='relative z-10 flex shrink-0 flex-col gap-[0.8rem] px-[3.1rem] py-[2rem]'>
        <div className='flex h-full items-end gap-[2rem]'>
          <img
            src={movie.image}
            alt={`${title} 포스터 이미지`}
            className='h-[17.4rem] w-[12.4rem]'
          />
          <div className='flex flex-col gap-[1.9rem]'>
            <div className='flex flex-col gap-[0.5rem]'>
              <h1 className='font-headline1 text-gray-0'>{title}</h1>
              <p className='font-label1 text-violet-200'>{tag}</p>
            </div>
            <div className='font-caption2 text-gray-0 flex flex-col gap-[0.3rem]'>
              <span>{ageRating}세이상관람가</span>
              <div className='flex gap-[0.4rem]'>
                <span>{releaseDate} 개봉</span>
                <span>·</span>
                <span>{runningTimeMinutes}분</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex gap-[0.5rem]'>
          <img
            src={ImgBtBolby}
            alt={`${title} 볼비 버튼`}
            className='w-[6.9rem]'
          />
          <img
            src={ImgBtPlay}
            alt={`${title} 재생 버튼`}
            className='w-[5rem]'
          />
        </div>
      </div>
    </div>
  );
}
