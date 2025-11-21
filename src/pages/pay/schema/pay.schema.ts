import { z } from 'zod';

export const paymentMethodSchema = z.object({
  // 선텍한 결제 방법
  selectedPaymentMethod: z
    .enum(['credit-card', 'simple-pay', 'phone-pay', 'account-pay'])
    .nullable(),

  // 선택한 카드
  selectedCard: z.string().nullable(),

  // 결제 타입
  paymentType: z.enum(['isp', 'general']),

  // 취소/환불 정책 동의
  isAgreed: z.boolean().refine(val => val === true, {
    message: '취소/환불 정책에 동의해주세요',
  }),
});

// 타입 자동 생성
export type PaymentMethodFormData = z.infer<typeof paymentMethodSchema>;

// 초기값
export const paymentMethodDefaultValues: PaymentMethodFormData = {
  selectedPaymentMethod: null,
  selectedCard: null,
  paymentType: 'isp',
  isAgreed: false,
};