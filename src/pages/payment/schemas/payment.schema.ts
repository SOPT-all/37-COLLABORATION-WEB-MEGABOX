import { z } from 'zod';
import { PAYMENT_MESSAGES } from '@pages/payment/constants/payment-messages';

/**
 * 할인 적용 폼 스키마
 */
export const discountFormSchema = z.object({
  // 활성화 탭
  activeTab: z.enum(['coupon', 'point']).nullable(),

  // 선택된 할인 수단 ID
  selectedDiscountId: z.number().positive().nullable(),

  // 자동 적용 체크 여부
  isChecked: z.boolean(),
}).refine((data) => {
  if(data.activeTab !== null && data.selectedDiscountId === null) {
    return false;
  }
  return true;
},{
  message: PAYMENT_MESSAGES.SELECT_DISCOUNT,
  path: ['selectedDiscountId'],
}

)

// 타입 자동 생성
export type DiscountFormData = z.infer<typeof discountFormSchema>;

// 초기값
export const discountFormDefaultValues: DiscountFormData = {
  activeTab: null,
  selectedDiscountId: null,
  isChecked: false,
};