import { usePaymentForm } from '@pages/payment/hooks/use-payment-form';
import PaymentButton from '@/pages/payment/components/PaymentButton';
import { useToastStore } from '@store/toast';
import { PAYMENT_MESSAGES } from '@pages/payment/constants/payment-messages';
import {
  DiscountSection,
  MovieSection,
  PaymentMethodSection,
  PaymentAmountSection,
  GiftCardSection,
} from '@/pages/payment/@section';
import { mockMovie, mockPaymentAmount } from '@pages/payment/mock';

export default function Payment() {
  const {
    form,
    handleSelectedCoupon,
    handleSelectedPoint,
    handleSelectedPolicy,
    // onSubmit,
    handleSelectedPaymentMethod,
    handleSelectedPaymentType,
    handleSelectedAgreed,
    isValid,
    handleSelectedCard,
  } = usePaymentForm();

  const { showToast } = useToastStore();

  const handleSubmitClick = () => {
    const { selectedPaymentMethod, paymentType, isAgreed } = form;
    if(!selectedPaymentMethod) {
      showToast(PAYMENT_MESSAGES.SELECT_PAYMENT_METHOD);
      return;
    }
    if(!paymentType) {
      showToast(PAYMENT_MESSAGES.SELECT_PAYMENT_TYPE);
      return;
    }
    if(!isAgreed) {
      showToast(PAYMENT_MESSAGES.SELECT_AGREED);
      return;
    }
  }

  return (
    <div className='flex min-h-screen flex-col'>
      <div className='bg-gray-0 flex-1'>
        <MovieSection
          id={mockMovie.id}
          title={mockMovie.title}
          showTime={mockMovie.showTime}
          theater={mockMovie.theater}
          seats={mockMovie.seats}
          posterUrl={mockMovie.posterUrl}
        />
        <DiscountSection
          selectedCoupon={form.selectedCoupon || null}
          selectedPoint={form.selectedPoint || null}
          selectedPolicy={form.selectedPolicy || false}
          handleSelectedCoupon={handleSelectedCoupon}
          handleSelectedPoint={handleSelectedPoint}
          handleSelectedPolicy={handleSelectedPolicy}
        />
        <GiftCardSection />
        <PaymentMethodSection
          selectedPaymentMethod={form.selectedPaymentMethod || null}
          paymentType={form.paymentType}
          selectedCard={form.selectedCard || null}
          isAgreed={form.isAgreed}
          handleSelectedPaymentMethod={handleSelectedPaymentMethod}
          handleSelectedPaymentType={handleSelectedPaymentType}
          handleSelectedAgreed={handleSelectedAgreed}
          handleSelectedCard={handleSelectedCard}
        />
        <PaymentAmountSection
          productAmount={mockPaymentAmount.productAmount}
          discountAmount={mockPaymentAmount.discountAmount}
          deductionAmount={mockPaymentAmount.deductionAmount}
          totalAmount={mockPaymentAmount.totalAmount}
        />
      </div>
      <div className='bg-gray-0 pt-[2rem]'>
        <PaymentButton
          totalAmount={23000}
          isDisabled={!isValid}
          onClick={handleSubmitClick}
        />
      </div>
    </div>
  );
}
