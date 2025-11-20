import CloseIcon from '@assets/svg/icon-system-close.svg?react';

interface TooltipProps {
  message: string;
  handleClose?: () => void;
}

export default function Tooltip({ message, handleClose }: TooltipProps) {
  return (
    <div className="relative inline-block">
      <div
        className="
          inline-flex h-[2.6rem] items-center gap-[0.4rem]
          rounded-[0.4rem] bg-blueGreen-500
          px-[0.9rem] py-[0.6rem]
          text-white
        "
      >
        <span className="font-label2">{message}</span>

        {handleClose && (
          <CloseIcon
            className="h-[1rem] w-[1rem] stroke-white cursor-pointer"
            aria-label="툴팁 닫기"
            onClick={handleClose}
          />
        )}
      </div>

      <div
        className="
          absolute left-[1.2rem] top-full
          h-0 w-0
          border-l-[0.6rem] border-r-[0.6rem] border-t-[0.8rem]
          border-l-transparent border-r-transparent
          border-t-blueGreen-500
          pointer-events-none
        "
      />
    </div>
  );
}
