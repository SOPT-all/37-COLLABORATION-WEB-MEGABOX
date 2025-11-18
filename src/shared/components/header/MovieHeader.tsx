import { useState } from 'react';
import {
  IconSystemBack,
  IconHeart,
  IconHeartFill,
  IconSystemShare,
} from '@assets/index';

interface MovieHeaderProps {
  title: string;        // 제목
  onClickBack?: () => void; // 뒤로가기
}

// 아이콘 버튼 크기
const ICON_BUTTON_CLASS =
  'flex h-[2.4rem] w-[2.4rem] items-center justify-center';

export default function MovieHeader({ title, onClickBack }: MovieHeaderProps) {
  // 하트 상태
  const [liked, setLiked] = useState(false);

  return (
    <header
      className="gradient-2 flex h-[5.2rem] w-full flex-col items-start gap-[1rem] px-[1.5rem] py-[1.4rem] text-white"
    >
      <div className="relative flex w-full items-center justify-between">
        {/* 뒤로가기 버튼 */}
        <button
          type="button"
          aria-label="뒤로가기"
          onClick={onClickBack}
          className={ICON_BUTTON_CLASS}
        >
          <IconSystemBack />
        </button>

        {/* 제목 */}
        <h1
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-title1"
        >
          {title}
        </h1>

        {/* 오른쪽 아이콘 */}
        <div className="flex items-center gap-[1.5rem]">
          {/* 하트 아이콘 */}
          <button
            type="button"
            aria-label={liked ? '하트 취소' : '하트 클릭'}
            onClick={() => setLiked((prev) => !prev)}
            className={ICON_BUTTON_CLASS}
          >
            {liked ? <IconHeartFill /> : <IconHeart />}
          </button>

          {/* 공유 아이콘 (인터렉션 없음) */}
          <button
            type="button"
            aria-label="공유하기"
            className={ICON_BUTTON_CLASS}
          >
            <IconSystemShare />
          </button>
        </div>
      </div>
    </header>
  );
}

