import { z } from 'zod';
import { PAYMENT_MESSAGES } from '@pages/payment/constants/payment-messages';

/**
 * 할인 적용 폼 스키마
 * 해당 스키마는 선택사항(선택하지 않아도 결제에 문제 없음)
 */
export const discountFormSchema = z
  .object({
    // 활성화 탭
    activeTab: z.enum(['coupon', 'point']).nullable(),

    // 선택된 할인 수단 ID
    selectedDiscountId: z.number().positive().nullable(),

    // 자동 적용 체크 여부
    isChecked: z.boolean(),
  })
  .refine(
    data => {
      // activeTab이 선택되었으면 selectedDiscountId도 필수
      if (data.activeTab !== null && data.selectedDiscountId === null) {
        return false;
      }
      return true;
    },
    {
      message: PAYMENT_MESSAGES.SELECT_DISCOUNT,
      path: ['selectedDiscountId'],
    }
)

// 타입 자동 생성
export type DiscountFormData = z.infer<typeof discountFormSchema>;

// 초기값
export const discountFormDefaultValues: DiscountFormData = {
  // 할인
  activeTab: null,
  selectedDiscountId: null,
  isChecked: false,
};

/**
 * 결제수단 폼 스키마 (필수)
 */
export const paymentMethodSchema = z.object({
    // 선택한 결제 방법
    selectedPaymentMethod: z
      .enum(['credit-card', 'simple-pay', 'phone-pay', 'account-pay'])
      .nullable(),

    // 선택한 카드
    selectedCard: z.string(),

    // 결제 타입
    paymentType: z.enum(['isp', 'general']),

    // 취소/환불 정책 동의
    isAgreed: z.boolean(),
})
.refine(
  data => {
    // 결제 방법은 필수
    return data.selectedPaymentMethod !== null;
  },
  {
    message: '결제 수단을 선택해주세요',
    path: ['selectedPaymentMethod'],
  }
)
.refine(
  data => {
    // 취소/환불 정책 동의는 필수
    return data.isAgreed === true;
  },
  {
    message: '취소/환불 정책에 동의해주세요',
    path: ['isAgreed'],
  }
);

export type PaymentMethodFormData = z.infer<typeof paymentMethodSchema>;

// 초기값
export const paymentMethodDefaultValues: PaymentMethodFormData = {
  selectedPaymentMethod: null,
  selectedCard: '',
  paymentType: 'isp',
  isAgreed: false,
};

/**
 * 최종 결제 폼 스키마 (할인 + 결제수단)
 */
export const paymentFormSchema = discountFormSchema.merge(paymentMethodSchema);

// 타입 자동 생성
export type PaymentFormData = z.infer<typeof paymentFormSchema>;

// 초기값
export const paymentFormDefaultValues: PaymentFormData = {
  // 할인 -> 선택사항
  activeTab: null,
  selectedDiscountId: null,
  isChecked: false,

  // 결제수단 -> 필수사항
  selectedPaymentMethod: null,
  selectedCard: '',
  paymentType: 'isp',
  isAgreed: false,
};