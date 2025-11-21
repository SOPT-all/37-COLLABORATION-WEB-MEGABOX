import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  discountFormDefaultValues,
  discountFormSchema,
  type DiscountFormData,
} from '@pages/payment/schemas/payment.schema'
import { DiscountSection } from './section/DiscountSection'


const Payment = () => {
  const form = useForm({
    resolver: zodResolver(discountFormSchema),
    defaultValues: discountFormDefaultValues,
  });

  const onSubmit = (data: DiscountFormData) => {
    console.info('폼 데이터', data);
  }

  return (
    <>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <DiscountSection form={form} />

        {/* 버튼 (테스트용) */}
        <button
          type='submit'
          className='m-[2rem] rounded-[0.8rem] bg-violet-600 px-[3.2rem] py-[1.6rem] text-white'
        >
          제출
        </button>
      </form>
    </>
  );
}

export default Payment
