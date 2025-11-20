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
          inline-flex h-[26px] items-center gap-[4px]
          rounded-[4px] bg-blueGreen-500
          px-[9px] py-[6px]
          text-white
        "
      >
        <span className="font-label2 tracking-[-0.72px]">{message}</span>

        {handleClose && (
          <CloseIcon
            className="h-[10px] w-[10px] stroke-white cursor-pointer"
            aria-label="툴팁 닫기"
            onClick={handleClose}
          />
        )}
      </div>

      <div
        className="
          absolute left-[12px] top-full
          h-0 w-0
          border-l-[6px] border-r-[6px] border-t-[8px]
          border-l-transparent border-r-transparent
          border-t-blueGreen-500
          pointer-events-none
        "
      />
    </div>
  );
}
