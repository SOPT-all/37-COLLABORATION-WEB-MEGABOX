import { useState } from 'react';
import {
  IconSystemBack,
  IconHeart,
  IconHeartFill,
  IconSystemShare,
} from '@assets/index';

type HeaderVariant = 'main' | 'movie';

interface HeaderProps {
  variant?: HeaderVariant;
  title?: string;
  handleClickBack?: () => void;
}

export default function Header({
  variant = 'movie',
  title = '',
  handleClickBack,
}: HeaderProps) {
  const [liked, setLiked] = useState(false);
  const isMain = variant === 'main';

  const headerClassName = `
    sticky top-0 z-10
    gradient-2
    flex h-[5.2rem] w-full items-center
    px-[1.5rem] text-white
    ${isMain ? 'justify-start' : 'justify-between'}
  `;

  if (isMain) {
    return (
      <header className={headerClassName}>
        <img
          src="/assets/img/img-logo.png"
          alt="MEGABOX"
          className="h-[2.1rem] w-auto"
        />
      </header>
    );
  }

  return (
    <header className={headerClassName}>
      <IconSystemBack
        aria-label="뒤로가기"
        className="h-[2.4rem] w-[2.4rem] cursor-pointer"
        onClick={handleClickBack}
      />

      <h1 className="flex-1 text-center font-title1">{title}</h1>

      <div className="flex items-center gap-[1.3rem]">
        {liked ? (
          <IconHeartFill
            aria-label="하트 취소"
            className="h-[2.4rem] w-[2.4rem] cursor-pointer"
            onClick={() => setLiked(false)}
          />
        ) : (
          <IconHeart
            aria-label="하트 클릭"
            className="h-[2.4rem] w-[2.4rem] cursor-pointer"
            onClick={() => setLiked(true)}
          />
        )}

        <IconSystemShare
          aria-label="공유하기"
          // 👉 IconSystemShare SVG 안에서 stroke/fill 이 currentColor 여야 이게 먹어요.
          // (hard-coded #000 이면 흰색으로 안 바뀜)
          className="h-[2.4rem] w-[2.4rem] cursor-pointer text-white"
        />
      </div>
    </header>
  );
}
