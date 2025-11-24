import { useState } from 'react';
import { useController, type UseFormReturn } from 'react-hook-form';
import type { PaymentMethodFormData } from '@pages/pay/schema/pay.schema';
import PaymentHeader from './PaymentHeader';
import JoongAngPayButton from './JoongAngPayButton';
import PaymentGrid from './PaymentGrid';
import CardSelector from './CardSelector';
import PaymentTypeRadio from './PaymentTypeRadio';
import EventBanner from './EventBanner';
import RefundPolicy from './RefundPolicy';

interface PaymentMethodSectionProps {
  form: UseFormReturn<PaymentMethodFormData>;
}

export const PaymentMethodSection = ({ form }: PaymentMethodSectionProps) => {
  const [activeTab, setActiveTab] = useState<boolean>(true);

  // 결제 방법 컨트롤러
  const {
    field: { value: selectedPaymentMethod, onChange: onPaymentMethodChange },
  } = useController({
    name: 'selectedPaymentMethod',
    control: form.control,
  });

  // 카드 선택 컨트롤러
  const {
    field: { value: selectedCard, onChange: onCardChange },
  } = useController({
    name: 'selectedCard',
    control: form.control,
  });

  // 결제 타입 컨트롤러
  const {
    field: { value: paymentType, onChange: onPaymentTypeChange },
  } = useController({
    name: 'paymentType',
    control: form.control,
  });

  // 동의 체크박스 컨트롤러
  const {
    field: { value: isAgreed, onChange: onAgreedChange },
  } = useController({
    name: 'isAgreed',
    control: form.control,
  });

  const handleToggle = () => {
    setActiveTab(!activeTab);
  };

  const handlePaymentMethodChange = (
    method: 'credit-card' | 'simple-pay' | 'phone-pay' | 'account-pay'
  ) => {
    onPaymentMethodChange(selectedPaymentMethod === method ? null : method);
  };

  return (
    <section className='bg-white p-[1.6rem]'>
      <PaymentHeader activeTab={activeTab} onToggle={handleToggle} />

      {activeTab && (
        <>
          <JoongAngPayButton />
          <PaymentGrid
            selectedMethod={selectedPaymentMethod}
            onChange={handlePaymentMethodChange}
          />
          <CardSelector selectedCard={selectedCard} onChange={onCardChange} />
          <PaymentTypeRadio
            paymentType={paymentType}
            onChange={onPaymentTypeChange}
          />
          <EventBanner />
          <RefundPolicy isAgreed={isAgreed} onChange={onAgreedChange} />
        </>
      )}
    </section>
  );
};

export default PaymentMethodSection;
