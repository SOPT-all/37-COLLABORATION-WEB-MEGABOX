import IconRadio from '@assets/components/IconChooseFill';
import type { PaymentFormData } from '@pages/payment/schemas/payment.schema';

type PaymentType = PaymentFormData['paymentType'];

interface PaymentTypeRadioProps {
  paymentType: PaymentType;
  handleChange: (_type: PaymentType) => void;
}

export default function PaymentTypeRadio({
  paymentType,
  handleChange,
}: PaymentTypeRadioProps) {
  return (
    <div className='mb-[2.2rem] flex gap-[0.8rem]'>
      <button
        type='button'
        onClick={() => handleChange('isp')}
        className='flex items-center gap-[0.5rem]'
      >
        <IconRadio
          width={18}
          height={18}
          className={
            paymentType === 'isp' ? 'text-violet-700' : 'text-gray-300'
          }
        />
        <span className='font-button2 text-gray-800'>ISP</span>
      </button>
      <button
        type='button'
        onClick={() => handleChange('general')}
        className='flex items-center gap-[0.5rem]'
      >
        <IconRadio
          width={18}
          height={18}
          className={
            paymentType === 'general' ? 'text-violet-700' : 'text-gray-300'
          }
        />
        <span className='font-button2 text-gray-800'>일반결제</span>
      </button>
    </div>
  );
}
