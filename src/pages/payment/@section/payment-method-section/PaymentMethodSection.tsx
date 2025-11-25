import { useState } from 'react';
import {
  JoongAngPayButton,
  PaymentGrid,
  CardSelector,
  PaymentTypeRadio,
  EventBanner,
  RefundPolicy,
} from '@pages/payment/@section/payment-method-section/components';
import type {
  PaymentMethodType,
  PaymentTypeType,
} from '@pages/payment/constants/pay';
import SectionHeader from '../../components/SectionHeader';

interface PaymentMethodSectionProps {
  selectedPaymentMethod: PaymentMethodType | null;
  paymentType: PaymentTypeType;
  selectedCard: string | null;
  isAgreed: boolean;

  handleSelectedPaymentMethod: (_method: PaymentMethodType) => void;
  handleSelectedPaymentType: (type: PaymentTypeType) => void;
  handleSelectedAgreed: (agreed: boolean) => void;
  handleSelectedCard: (card: string) => void;
}

export default function PaymentMethodSection({
  selectedPaymentMethod,
  paymentType,
  selectedCard,
  isAgreed,
  handleSelectedPaymentMethod,
  handleSelectedPaymentType,
  handleSelectedAgreed,
  handleSelectedCard,
}: PaymentMethodSectionProps) {
  const [showPaymentMethod, setShowPaymentMethod] = useState<boolean>(true);

  const handleShowPaymentMethod = () => {
    setShowPaymentMethod(!showPaymentMethod);
  };

  return (
    <section className='bg-gray-0 p-[1.6rem]'>
      <SectionHeader
        title='결제 수단'
        subtitle='결제 수단을 선택하세요'
        isOpen={showPaymentMethod}
        handleShow={handleShowPaymentMethod}
      />

      {showPaymentMethod && (
        <>
          <JoongAngPayButton />
          <PaymentGrid
            selectedPaymentMethod={selectedPaymentMethod}
            handleSelect={handleSelectedPaymentMethod}
          />
          {selectedPaymentMethod && (
            <>
              <CardSelector
                selectedCard={selectedCard}
                handleSelect={handleSelectedCard}
              />
              <PaymentTypeRadio
                paymentType={paymentType}
                handleChange={handleSelectedPaymentType}
              />
            </>
          )}
          <EventBanner />
          <RefundPolicy
            isAgreed={isAgreed}
            handleChange={handleSelectedAgreed}
          />
        </>
      )}
    </section>
  );
}
