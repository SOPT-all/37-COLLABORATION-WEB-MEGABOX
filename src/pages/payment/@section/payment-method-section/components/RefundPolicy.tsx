import { cn } from '@utils/cn';
import IconCheckFill from '@assets/components/IconCheckFill';
import type { PaymentFormData } from '@pages/payment/schemas/payment.schema';

interface RefundPolicyProps {
  isAgreed: PaymentFormData['isAgreed'];
  handleChange: (_agreed: PaymentFormData['isAgreed']) => void;
}

export default function RefundPolicy({
  isAgreed,
  handleChange,
}: RefundPolicyProps) {
  return (
    <div className='mt-[2.2rem]'>
      <button
        type='button'
        onClick={() => handleChange(!isAgreed)}
        className='flex items-center gap-[0.6rem]'
      >
        <IconCheckFill
          width={18}
          height={18}
          className={cn(
            'transition-colors',
            isAgreed ? 'text-violet-600' : 'text-gray-300'
          )}
        />
        <span className='font-caption2 text-gray-800'>
          취소/환불 정책에 대한 동의
        </span>
      </button>
      <div className='mt-[1.6rem] space-y-[1.4rem] border-t border-gray-200 pt-[1.6rem]'>
        <p className='font-caption3 mb-[0.9rem] text-gray-400'>
          - 온라인 예매는 영화 상영시간 20분전까지 취소 가능하며, 20분 이후 현장
          취소만 가능합니다.
        </p>
        <p className='font-caption3 mb-[0.7rem] text-gray-400'>
          - 현장 취소 시 영화 상영시간 이전까지만 가능합니다.
        </p>
      </div>
    </div>
  );
}
