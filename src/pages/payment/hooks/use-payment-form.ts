import { useForm } from 'react-hook-form';
import { zodResolver} from '@hookform/resolvers/zod';
import {
  paymentFormDefaultValues,
    paymentFormSchema,
    type PaymentFormData,
} from '@pages/payment/schemas/payment.schema';

export const usePaymentForm = () => {
  // useForm 설정
  const form = useForm<PaymentFormData>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: paymentFormDefaultValues,
    mode: 'onChange', // -> 입력 실시간 검증
  });
  // 필요 메소드 및 상태 추출
  const {
    trigger,
    // watch,
    formState: { errors, isValid },
    setValue,
  } = form;

  // const fields = {
  //     activeTab: formData.activeTab,
  //     selectedDiscountId: formData.selectedDiscountId,
  //     isChecked: formData.isChecked,
  // };

  // 토스트 메시지
  const fieldErrors = {
    selectedDiscountId: errors.selectedDiscountId?.message,
    isChecked: errors.isChecked?.message,
  };

  // 탭
  const handleActiveTab = (tab: PaymentFormData['activeTab']) => {
    setValue('activeTab', tab, { shouldValidate: true });
  };

  // 그리드 아이템
  const handleSelectedDiscountId = (
    id: PaymentFormData['selectedDiscountId']
  ) => {
    setValue('selectedDiscountId', id, { shouldValidate: true });
  };

  // 체크박스
  const handleIsChecked = (id: PaymentFormData['isChecked']) => {
    setValue('isChecked', id, { shouldValidate: true });
  };
  // 결제수단 관련 핸들러
  const handlePaymentMethod = (
    method: PaymentFormData['selectedPaymentMethod']
  ) => {
    setValue('selectedPaymentMethod', method, { shouldValidate: true });
  };

  const handleCardSelect = (card: PaymentFormData['selectedCard']) => {
    setValue('selectedCard', card, { shouldValidate: true });
  };

  const handlePaymentType = (type: PaymentFormData['paymentType']) => {
    setValue('paymentType', type, { shouldValidate: true });
  };

  const handleAgreed = (agreed: PaymentFormData['isAgreed']) => {
    setValue('isAgreed', agreed, { shouldValidate: true });
  };


  const onSubmit = async (data: PaymentFormData) => {
    // 모든 필드 검증
    const isValid = await trigger();
    // 검증 실패
    if (!isValid) {
      return;
    }
    console.info('폼 데이터', data);
  };

  return {
    form,
    fieldErrors,
    isValid,
    onSubmit,
    handleActiveTab,
    handleSelectedDiscountId,
    handleIsChecked,
    // 결제수단 관련
    handlePaymentMethod,
    handleCardSelect,
    handlePaymentType,
    handleAgreed,
  };
}