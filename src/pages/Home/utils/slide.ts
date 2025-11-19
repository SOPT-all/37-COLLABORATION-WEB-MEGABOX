// 총 아이템 수와 슬라이드 수를 받아서 한 슬라이드에 몇개의 아이템이 들어가는지 반환하는 함수
export function getSlidesPage(itemsLength: number, slideLength: number) {
  return Math.max(1, Math.ceil(itemsLength / slideLength));
}

// 아이템이 몇 번째 슬라이드(페이지)에 속하는지 반환하는 함수
export function getItemSlideIndex(
  itemIndex: number,
  itemsLength: number,
  slideLength: number
) {
  if (slideLength <= 1) return 0; // 슬라이드 1개 이하면 무조건 0

  // 슬라이드 하나당 아이템 개수 (ceil로 균등 분배)
  const itemsPerSlide = getSlidesPage(itemsLength, slideLength);
  //아이템이 몇번째 슬라이드에 위치하는지 계산
  const itemSlideIndex = Math.floor(itemIndex / itemsPerSlide);
  console.log(itemIndex, itemsPerSlide, itemSlideIndex);
  //0 ~ slideLength - 1 범위로 클램핑
  return itemSlideIndex;
}
