import { useState } from 'react';
import { cn } from '@utils/cn';
import {
  JoongAngPayButton,
  PaymentGrid,
  CardDropdown,
  PaymentTypeRadio,
  EventBanner,
  RefundPolicy,
} from '@pages/payment/@section/payment-method-section/components';
import type {
  PaymentMethodType,
  PaymentTypeType,
} from '@pages/payment/constants/pay';
import type { PaymentFormData } from '@pages/payment/schemas/payment.schema'; 
import SectionHeader from '@pages/payment/components/SectionHeader';

interface PaymentMethodSectionProps {
  selectedPaymentMethod: PaymentMethodType | null;
  paymentType: PaymentTypeType;
  selectedCard: PaymentFormData['selectedCard'];
  isAgreed: PaymentFormData['isAgreed'];

  handleSelectedPaymentMethod: (_method: PaymentMethodType) => void;
  handleSelectedPaymentType: (type: PaymentTypeType) => void;
  handleSelectedAgreed: (agreed: PaymentFormData['isAgreed']) => void;
  handleSelectedCard: (card: NonNullable<PaymentFormData['selectedCard']>) => void;
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
      <div className={cn(showPaymentMethod && 'mb-[2.5rem]')}>
        <SectionHeader
          title='결제 수단'
          subtitle='결제 수단을 선택하세요'
          isOpen={showPaymentMethod}
          handleShow={handleShowPaymentMethod}
        />
      </div>

      {showPaymentMethod && (
        <>
          <JoongAngPayButton />
          <PaymentGrid
            selectedPaymentMethod={selectedPaymentMethod}
            handleSelect={handleSelectedPaymentMethod}
          />
          {selectedPaymentMethod && (
            <>
              <CardDropdown
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
