import { useState } from 'react';
import { useWatch, type UseFormReturn } from 'react-hook-form';
import type { PaymentFormData } from '@pages/payment/schemas/payment.schema';
import PaymentHeader from '@pages/payment/section/PaymentMethodSection/PaymentHeader';
import JoongAngPayButton from '@pages/payment/section/PaymentMethodSection/JoongAngPayButton';
import PaymentGrid from '@pages/payment/section/PaymentMethodSection/PaymentGrid';
import CardSelector from '@pages/payment/section/PaymentMethodSection/CardSelector';
import PaymentTypeRadio from '@pages/payment/section/PaymentMethodSection/PaymentTypeRadio';
import EventBanner from '@pages/payment/section/PaymentMethodSection/EventBanner';
import RefundPolicy from '@pages/payment/section/PaymentMethodSection/RefundPolicy';

type PaymentMethodType = NonNullable<PaymentFormData['selectedPaymentMethod']>;

interface PaymentMethodSectionProps {
  form: UseFormReturn<PaymentFormData>;
  handlePaymentMethod: (
    _method: PaymentFormData['selectedPaymentMethod']
  ) => void;
  handleCardSelect: (_card: PaymentFormData['selectedCard']) => void;
  handlePaymentType: (_type: PaymentFormData['paymentType']) => void;
  handleAgreed: (_agreed: PaymentFormData['isAgreed']) => void;
}

const PaymentMethodSection = ({
  form,
  handlePaymentMethod,
  handleCardSelect,
  handlePaymentType,
  handleAgreed,
}: PaymentMethodSectionProps) => {
  const [activeTab, setActiveTab] = useState<boolean>(true);

  const selectedPaymentMethod = useWatch({
    control: form.control,
    name: 'selectedPaymentMethod',
  });

  const selectedCard = useWatch({
    control: form.control,
    name: 'selectedCard',
  });

  const paymentType = useWatch({
    control: form.control,
    name: 'paymentType',
  });

  const isAgreed = useWatch({
    control: form.control,
    name: 'isAgreed',
  });

  const handleToggle = () => {
    setActiveTab(!activeTab);
  };

  const handlePaymentMethodChange = (method: PaymentMethodType) => {
    handlePaymentMethod(selectedPaymentMethod === method ? null : method);
  };

  return (
    <section className='bg-gray-0 p-[1.6rem]'>
      <PaymentHeader activeTab={activeTab} handleToggle={handleToggle} />

      {activeTab && (
        <>
          <JoongAngPayButton />
          <PaymentGrid
            selectedMethod={selectedPaymentMethod}
            handleSelect={handlePaymentMethodChange}
          />
          {selectedPaymentMethod && (
            <>
              <CardSelector
                selectedCard={selectedCard}
                handleSelect={handleCardSelect}
              />
              <PaymentTypeRadio
                paymentType={paymentType}
                handleChange={handlePaymentType}
              />
            </>
          )}
          <EventBanner />
          <RefundPolicy isAgreed={isAgreed} handleChange={handleAgreed} />
        </>
      )}
    </section>
  );
};

export default PaymentMethodSection;
