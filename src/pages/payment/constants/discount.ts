export const COUPON_ITEMS = [
  { key: 'discount-coupon', label: '할인쿠폰' },
  { key: 'vip-movie-coupon', label: 'VIP 영화쿠폰' },
  { key: 'megabox-movie-ticket', label: '메가박스 관람권' },
  { key: 'store-exchange-ticket', label: '스토어 교환권' },
  { key: 'mobile-movie-ticket', label: '모바일 관람권' },
  { key: 'phase-cash-ticket', label: '페이즈 금액권' },
  { key: 'central-family', label: '중앙 패밀리' },
];

export type CouponItemType = (typeof COUPON_ITEMS)[number]['key'];

export const POINT_ITEMS = [
  { key: 'vip-movie-coupon', label: 'VIP 영화쿠폰' },
  { key: 'u-membership', label: 'U+ 멤버십' },
  { key: 'ok-cashback', label: 'OK캐시백' },
  { key: 'lpoint', label: 'LPOINT' },
  { key: 'gs-point', label: 'GS&POINT' },
  { key: 'hd-hyundai-oil-bank', label: 'HD현대오일뱅크' },
  { key: 'happy-point', label: '해피포인트' },
  { key: 'blue-membership-point', label: '블루멤버스포인트' },
  { key: 'kia-membership-point', label: '기아멤버스포인트' },
  { key: 'hyundai-m-point', label: '현대M포인트' },
  { key: 'north-and-life-cash', label: '북앤라이프캐시' },
  { key: 'culture-cash', label: '컬쳐캐시' },
  { key: 'culture-culture-card', label: '문화누리카드' },
  { key: 'central-membership', label: '중앙멤버십' },
];

export type PointItemType = (typeof POINT_ITEMS)[number]['key'];
