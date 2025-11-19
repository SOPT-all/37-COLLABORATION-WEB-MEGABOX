import { IconSystemClose } from '@assets/index';
import { cn } from '@utils/cn';

interface TooltipProps {
  /**
   * 툴팁 본문 텍스트
   */
  message: string;
  /**
   * 상단에 작게 표시되는 라벨 (기본값: tooltip)
   */
  label?: string;
  /**
   * 닫기 버튼 클릭 핸들러를 전달하면 닫기 버튼이 표시됩니다.
   */
  onClose?: () => void;
  /**
   * 외부에서 전달할 추가 클래스
   */
  className?: string;
  /**
   * 스크린 리더용 닫기 버튼 레이블
   */
  closeButtonLabel?: string;
}

/**
 * 스크린샷에 맞춘 말풍선 스타일의 툴팁 컴포넌트
 */
export default function Tooltip({
  message,
  label = 'tooltip',
  onClose,
  className,
  closeButtonLabel = '툴팁 닫기',
}: TooltipProps) {
  const showCloseButton = typeof onClose === 'function';

  return (
    <div className={cn('relative inline-flex flex-col gap-[0.8rem]', className)}>
      <div className="flex items-center gap-[0.4rem] text-[1.2rem] font-medium leading-none text-[#c4a8ff]">
        <span
          className="inline-block h-[0.8rem] w-[0.8rem] rounded-[0.2rem] bg-[#c4a8ff]"
          aria-hidden
        />
        {label}
      </div>

      <div className="relative flex min-w-[28rem] items-center gap-[1.2rem] rounded-[1.2rem] bg-[#00c8d2] px-[2.4rem] py-[1.6rem] text-white shadow-[0_0.4rem_1.6rem_rgba(0,0,0,0.2)]">
        <p className="flex-1 text-[1.6rem] font-semibold leading-[2.3rem]">
          {message}
        </p>

        {showCloseButton ? (
          <button
            type="button"
            aria-label={closeButtonLabel}
            onClick={onClose}
            className="flex h-[2.4rem] w-[2.4rem] items-center justify-center rounded-full transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <IconSystemClose className="h-[1.6rem] w-[1.6rem] text-white" />
          </button>
        ) : null}

        <span
          className="pointer-events-none absolute left-[4rem] -bottom-[1rem] h-0 w-0 border-x-[1.2rem] border-x-transparent border-t-[1.2rem] border-t-[#00c8d2]"
          aria-hidden
        />
      </div>
    </div>
  );
}
