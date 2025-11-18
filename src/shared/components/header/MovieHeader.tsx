import { useState } from 'react';
import {
  IconSystemBack,
  IconHeart,
  IconHeartFill,
  IconSystemShare,
} from '@assets/index';

interface MovieHeaderProps {
  title: string;
  onClickBack?: () => void;
}

const ICON_BUTTON_CLASS =
  'flex h-[2.4rem] w-[2.4rem] items-center justify-center';

export default function MovieHeader({ title, onClickBack }: MovieHeaderProps) {
  const [liked, setLiked] = useState(false);

  return (
    <header className="sticky top-0 z-10 gradient-2 flex h-[5.2rem] w-full items-center justify-between px-[1.5rem] text-white">
      <button
        type="button"
        aria-label="뒤로가기"
        onClick={onClickBack}
        className={ICON_BUTTON_CLASS}
      >
        <IconSystemBack />
      </button>

      <h1 className="flex-1 text-center text-title1">{title}</h1>

      <div className="flex items-center gap-[1.3rem]">
        <button
          type="button"
          aria-label={liked ? '하트 취소' : '하트 클릭'}
          onClick={() => setLiked((prev) => !prev)}
          className={ICON_BUTTON_CLASS}
        >
          {liked ? <IconHeartFill /> : <IconHeart />}
        </button>

        <button
          type="button"
          aria-label="공유하기"
          className={ICON_BUTTON_CLASS}
        >
          <IconSystemShare className="text-white" />
        </button>
      </div>
    </header>
  );
}
