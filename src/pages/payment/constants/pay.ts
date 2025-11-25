export const PAYMENT_METHODS = [
  { key: 'credit-card', label: '신용카드' },
  { key: 'simple-pay', label: '간편결제' },
  { key: 'phone-pay', label: '휴대폰결제' },
  { key: 'account-pay', label: '내통장결제' },
] as const;

export type PaymentMethodType = (typeof PAYMENT_METHODS)[number]['key'];

export const PAYMENT_TYPES = [
  { key: 'isp', label: 'ISP' },
  { key: 'general', label: '일반결제' },
] as const;

export const CARD_OPTIONS = [
  { value: 'toss-card', label: '토스카드' },
  { value: 'kb-card', label: '국민카드' },
  { value: 'kakao-bank', label: '카카오뱅크' },
  { value: 'nh-bank', label: '농협은행' },
  { value: 'hana-bank', label: '하나은행' },
  { value: 'ibk-bank', label: '기업은행' },
];

export type CardOptionType = (typeof CARD_OPTIONS)[number];
export type PaymentTypeType = (typeof PAYMENT_TYPES)[number]['key'];
