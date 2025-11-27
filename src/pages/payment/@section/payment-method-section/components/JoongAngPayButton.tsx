import { useState } from 'react';
import IconItemPlus from '@assets/components/IconItemPlus';
import Tooltip from '@components/tooltip/Tooltip';
import JoongAngPAY from '@../../public/assets/img-joonang-logo.svg';

export default function JoongAngPayButton() {
  const tooltipMessage = '자주 사용하는 카드를 등록하고 빠르게 결제하세요!';
  const [isTooltipOpen, setIsTooltipOpen] = useState(true);

  const handleCloseTooltip = () => {
    setIsTooltipOpen(false);
  };

  return (
    <div className='relative mb-[1.6rem]'>
      {isTooltipOpen && (
        <div className='absolute left-[1.6rem] -top-[2.5rem]'>
          <Tooltip
            message={tooltipMessage}
            handleClose={handleCloseTooltip}
          />
        </div>
      )}
      <button
        type='button'
        className='flex w-full items-center justify-between rounded-[0.4rem] border border-gray-300 px-[2rem] py-[0.6rem]'
      >
        <img src={JoongAngPAY} alt='JoongAng PAY' className='h-[3.2rem]' />
        <IconItemPlus width={24} height={24} className='text-gray-500' />
      </button>
    </div>
  );
}
