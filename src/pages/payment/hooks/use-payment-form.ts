import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  paymentFormDefaultValues,
  paymentFormSchema,
  type PaymentFormData,
} from '@pages/payment/schemas/payment.schema';
import {
  type PaymentMethodType,
  type PaymentTypeType,
} from '@pages/payment/constants/pay';

export const usePaymentForm = () => {
  const form = useForm<PaymentFormData>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: paymentFormDefaultValues,
    mode: 'onChange',
  });

  const {
    trigger,
    control,
    formState: { errors, isValid },
    setValue,
  } = form;

  const selectedCoupon = useWatch({ control, name: 'selectedCoupon' });
  const selectedPolicy = useWatch({ control, name: 'selectedPolicy' });
  const selectedPoint = useWatch({ control, name: 'selectedPoint' });
  const isChecked = useWatch({ control, name: 'isChecked' });
  const selectedPaymentMethod = useWatch({
    control,
    name: 'selectedPaymentMethod',
  });
  const paymentType = useWatch({ control, name: 'paymentType' });
  const selectedCard = useWatch({ control, name: 'selectedCard' });
  const isAgreed = useWatch({ control, name: 'isAgreed' });

  const handleSelectedCoupon = (coupon: PaymentFormData['selectedCoupon']) => {
    setValue('selectedCoupon', coupon, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const handleSelectedPoint = (point: PaymentFormData['selectedPoint']) => {
    setValue('selectedPoint', point, { shouldValidate: true });
  };

  const handleSelectedPolicy = (policy: PaymentFormData['selectedPolicy']) => {
    setValue('selectedPolicy', policy, { shouldValidate: true });
  };

  const handleSelectedPaymentMethod = (method: PaymentMethodType) => {
    setValue('selectedPaymentMethod', method, { shouldValidate: true });
  };

  const handleSelectedPaymentType = (type: PaymentTypeType) => {
    setValue('paymentType', type, { shouldValidate: true });
  };

  const handleSelectedAgreed = (agreed: PaymentFormData['isAgreed']) => {
    setValue('isAgreed', agreed, { shouldValidate: true });
  };

  const handleSelectedCard = (card: PaymentFormData['selectedCard']) => {
    setValue('selectedCard', card, { shouldValidate: true });
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

  const formFields = {
    selectedCoupon,
    selectedPolicy,
    selectedPoint,
    isChecked,
    selectedPaymentMethod,
    paymentType,
    selectedCard,
    isAgreed,
  };

  const fieldErrors = {
    selectedCoupon: errors.selectedCoupon?.message,
    selectedPolicy: errors.selectedPolicy?.message,
    selectedPoint: errors.selectedPoint?.message,
    isChecked: errors.isChecked?.message,
    selectedPaymentMethod: errors.selectedPaymentMethod?.message,
    paymentType: errors.paymentType?.message,
    isAgreed: errors.isAgreed?.message,
    selectedCard: errors.selectedCard?.message,
  };
  return {
    form: formFields,
    errors: fieldErrors,
    isValid,
    onSubmit,
    handleSelectedCoupon,
    handleSelectedPoint,
    handleSelectedPolicy,
    handleSelectedPaymentMethod,
    handleSelectedPaymentType,
    handleSelectedAgreed,
    handleSelectedCard,
  };
};
