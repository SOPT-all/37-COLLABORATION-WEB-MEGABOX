import { useState } from 'react';
import {
  IconSystemBack,
  IconHeart,
  IconHeartFill,
  IconSystemShare,
} from '@assets/index';
import ImgLogo from '@/../public/assets/img-logo.svg';

type HeaderVariant = 'main' | 'movie';

interface HeaderProps {
  variant?: HeaderVariant;
  title?: string;
  icon?: boolean;
  handleClickBack?: () => void;
}

export default function Header({
  variant = 'movie',
  title = '',
  icon = true,
  handleClickBack,
}: HeaderProps) {
  const [liked, setLiked] = useState(false);
  const isMain = variant === 'main';

  const headerClassName = `
    sticky top-0 z-100
    gradient-2
    flex h-[5.2rem] w-full items-center
    px-[1.5rem] text-white
    ${isMain ? 'justify-start' : 'justify-between'}
  `;

  if (isMain) {
    return (
      <header className={headerClassName}>
        <img src={ImgLogo} alt='MEGABOX' className='h-[2.1rem] w-auto' />
      </header>
    );
  }

  return (
   <header className={headerClassName}>
    <div className="w-[3.6rem] flex items-center justify-start">
      <IconSystemBack
        aria-label='뒤로가기'
        className='h-[2.4rem] w-[2.4rem] cursor-pointer transition-transform active:scale-90 hover:opacity-70'
        onClick={handleClickBack}
      />
    </div>

    <h1 className="flex-1 text-center font-title1">
      {title}
    </h1>

    <div className="w-[3.6rem] flex items-center justify-end">
      {icon && (
        <div className="flex items-center gap-[1.3rem]">
          {liked ? (
            <IconHeartFill
              aria-label='하트 취소'
              className='h-[2.4rem] w-[2.4rem] cursor-pointer transition-transform active:scale-90 hover:opacity-70'
              onClick={() => setLiked(false)}
            />
          ) : (
            <IconHeart
              aria-label='하트 클릭'
              className='h-[2.4rem] w-[2.4rem] cursor-pointer transition-transform active:scale-90 hover:opacity-70'
              onClick={() => setLiked(true)}
            />
          )}

          <IconSystemShare
            aria-label='공유하기'
            className='h-[2.4rem] w-[2.4rem] cursor-pointer text-white transition-transform active:scale-90 hover:opacity-70'
          />
        </div>
      )}
    </div>
  </header>
  );
}
