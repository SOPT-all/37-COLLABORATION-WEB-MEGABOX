import { usePaymentForm } from './hooks/use-payment-form'; 
import { DiscountSection } from './section/DiscountSection'


const Payment = () => {
  // 제출 버튼 비활성화, 토스트 메시지(에러 문구)를 위해 formData, errors 냅둠
  const { form, formData, errors, onSubmit} = usePaymentForm();

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
