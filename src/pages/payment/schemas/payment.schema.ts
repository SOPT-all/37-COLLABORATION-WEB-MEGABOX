import { z } from 'zod';
import {
  PAYMENT_METHODS,
  PAYMENT_TYPES,
  CARD_OPTIONS,
} from '@pages/payment/constants/pay';
import { PAYMENT_MESSAGES } from '@pages/payment/constants/payment-messages';
import { COUPON_ITEMS, POINT_ITEMS } from '@pages/payment/constants/discount';

export const paymentFormSchema = z.object({
  //coupon
  selectedCoupon: z
    .enum(COUPON_ITEMS.map(coupon => coupon.key))
    .nullable()
    .optional(),
  selectedPolicy: z.boolean().optional(),
  //포인트
  selectedPoint: z
    .enum(POINT_ITEMS.map(point => point.key))
    .nullable()
    .optional(),
  isChecked: z.boolean().refine(checked => checked === true, {
    message: PAYMENT_MESSAGES.SELECT_CHECKED,
  }),

  // 선택한 결제 방법
  selectedPaymentMethod: z
    .enum(PAYMENT_METHODS.map(method => method.key))
    .nullable()
    .refine(method => method !== null, {
      message: PAYMENT_MESSAGES.SELECT_PAYMENT_METHOD,
    }),

  // 결제 타입
  paymentType: z
    .enum(PAYMENT_TYPES.map(type => type.key))
    .refine(type => type !== null, {
      message: PAYMENT_MESSAGES.SELECT_PAYMENT_TYPE,
    }),
  selectedCard: z
    .enum(CARD_OPTIONS.map(card => card.value))
    .nullable()
    .optional(),

  // 취소/환불 정책 동의
  isAgreed: z.boolean().refine(agreed => agreed === true, {
    message: PAYMENT_MESSAGES.SELECT_AGREED,
  }),
});

export type PaymentFormData = z.infer<typeof paymentFormSchema>;
// 초기값
export const paymentFormDefaultValues = {
  selectedCoupon: null,
  selectedPolicy: false,
  selectedPoint: null,
  isChecked: false,
  selectedPaymentMethod: null,
  paymentType: PAYMENT_TYPES[0].key,
  selectedCard: null,
  isAgreed: false,
};
