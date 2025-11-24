import { usePaymentForm } from '@pages/payment/hooks/use-payment-form';
import { DiscountSection } from '@pages/payment/section/DiscountSection'


export default function Payment() {
  const { form, fields, handleActiveTab, handleSelectedDiscountId, handleIsChecked, onSubmit} = usePaymentForm();

  return (
    <>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <DiscountSection
          form={form}
          handleActiveTab={handleActiveTab}
          handleSelectedDiscountId={handleSelectedDiscountId}
          handleIsChecked={handleIsChecked}
        />

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
