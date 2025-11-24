import { usePaymentForm } from '@pages/payment/hooks/use-payment-form';
import DiscountSection from '@pages/payment/section/DiscountSection';
import MovieInfo from '@pages/payment/components/MovieInfo';
import PaymentMethodSection from '@pages/payment/section/PaymentMethodSection';
import PaymentBtn from '@pages/payment/components/PaymentBtn';
import PaymentAmountSection from '@pages/payment/components/PaymentAmountSection';
import GiftCardInquiry from '@pages/payment/components/GiftCardInquiry';


const Payment = () => {
  const {
    form,
    handleActiveTab,
    handleSelectedDiscountId,
    handleIsChecked,
    handlePaymentMethod,
    handleCardSelect,
    handlePaymentType,
    handleAgreed,
    onSubmit,
    isValid,
  } = usePaymentForm();

  // 필수 필드 구독
  const selectedPaymentMethod = form.watch('selectedPaymentMethod');
  const selectedCard = form.watch('selectedCard');
  const isAgreed = form.watch('isAgreed');

  const isFormValid =
    selectedPaymentMethod !== null &&
    selectedCard !== '' &&
    isAgreed === true &&
    isValid;

  return (
    <>
      <form
      onSubmit={form.handleSubmit(onSubmit)}
      className='flex min-h-screen flex-col'
      >
      <div className='flex-1 bg-gray-0'>
        <MovieInfo
          movie={{
            id: 1,
            title: '위키드:포 굿',
            showTime: '2025.11.19(수)10:00~12:27',
            theater: '강남/르릴클라이너1관·2D(자막)',
            seats: 2,
            posterUrl: '/assets/@movie/img-movieposter-wicked.svg',
          }}
        />
        <DiscountSection
          form={form}
          handleActiveTab={handleActiveTab}
          handleSelectedDiscountId={handleSelectedDiscountId}
          handleIsChecked={handleIsChecked}
        />
        <GiftCardInquiry />
        <PaymentMethodSection
          form={form}
          handlePaymentMethod={handlePaymentMethod}
          handleCardSelect={handleCardSelect}
          handlePaymentType={handlePaymentType}
          handleAgreed={handleAgreed}
        />
        <PaymentAmountSection
          productAmount={24000}
          discountAmount={1000}
          deductionAmount={0}
          totalAmount={23000}
        />
        </div>
        <div className='bg-gray-0 pt-[2rem]'>
          <PaymentBtn totalAmount={23000} disabled={!isFormValid} />
        </div>
      </form>
    </>
  );
};

export default Payment;
