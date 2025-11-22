import { z } from 'zod';

/**
 * 할인 적용 폼 스키마
 */
export const discountFormSchema = z.object({
  // 활성화 탭
  activeTab: z.enum(['coupon', 'point']).nullable(),

  // 선택된 할인 수단 ID
  selectedDiscountId: z.number().positive('할인 수단을 선택하세요').nullable(),

  // 자동 적용 체크 여부
  isChecked: z.boolean(),
});

// 타입 자동 생성
export type DiscountFormData = z.infer<typeof discountFormSchema>;

// 초기값
export const discountFormDefaultValues: DiscountFormData = {
  activeTab: null,
  selectedDiscountId: null,
  isChecked: false,
};