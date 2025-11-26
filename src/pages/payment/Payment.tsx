import { useLocation, useNavigate } from 'react-router-dom';
import { usePaymentForm } from '@pages/payment/hooks/use-payment-form';
import PaymentButton from '@/pages/payment/components/PaymentButton';
import Header from '@components/header/Header';
import { useToastStore } from '@store/toast';
import { PAYMENT_MESSAGES } from '@pages/payment/constants/payment-messages';
import {
  DiscountSection,
  MovieSection,
  PaymentMethodSection,
  PaymentAmountSection,
  GiftCardSection,
} from '@/pages/payment/@section';
import { MOVIES } from '@constants/movies';
import { mockMovie, mockPaymentAmount } from '@pages/payment/mock';
import {
  ADULT_PRICE,
  FIXED_DISCOUNT_AMOUNT,
} from '@pages/payment/constants/payment';

interface ReservationState {
  memberId: number;
  showtimeId: number;
  movieId: number;
  movieTitle: string;
  date: string;
  location: string;
  numOfPeople: number;
}

export default function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const reservationData = location.state as ReservationState | null;

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

  // 영화 데이터
  const movieData = reservationData
    ? {
        id: reservationData.movieId,
        title: reservationData.movieTitle,
        showTime: reservationData.date,
        theater: reservationData.location,
        seats: reservationData.numOfPeople,
        posterUrl: MOVIES[reservationData.movieId]?.image || mockMovie.posterUrl,
      }
    : mockMovie;

  const productAmount = reservationData
    ? reservationData.numOfPeople * ADULT_PRICE
    : mockPaymentAmount.productAmount;
  const discountAmount = reservationData
    ? FIXED_DISCOUNT_AMOUNT
    : mockPaymentAmount.discountAmount;
  const deductionAmount = reservationData
    ? 0
    : mockPaymentAmount.deductionAmount;
  const totalAmount = reservationData
    ? Math.max(productAmount - discountAmount - deductionAmount, 0)
    : mockPaymentAmount.totalAmount;

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
      <Header
        variant='movie'
        title='결제하기'
        icon={false}
        handleClickBack={() => navigate(-1)}
      />
      <div className='bg-gray-0 flex-1'>
        <MovieSection
          id={movieData.id}
          title={movieData.title}
          showTime={movieData.showTime}
          theater={movieData.theater}
          seats={movieData.seats}
          posterUrl={movieData.posterUrl}
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
          productAmount={productAmount}
          discountAmount={discountAmount}
          deductionAmount={deductionAmount}
          totalAmount={totalAmount}
        />
      </div>
      <div className='bg-gray-0 pt-[2rem]'>
        <PaymentButton
          totalAmount={totalAmount}
          isDisabled={!isValid}
          showTooltip={isValid}
          handleClick={handleSubmitClick}
        />
      </div>
    </div>
  );
}
