import { useRef, type RefObject } from 'react';

import { getItemSlideIndex } from '@pages/Home/utils/slide';

// 화면 정중앙에 와야하는 item index를 받아서 스크롤을 이동시키는 hook
export function useScroll() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollToIndex = (index: number) => {
    if (index < 0) return;

    const container = containerRef.current;
    const target = container?.children?.[index + 1] as HTMLElement | undefined;
    console.log(container, target);
    if (!container || !target) return;

    // 뷰포트(화면) 중앙
    const viewportCenter = window.innerWidth / 2;

    // 현재 기준에서 아이템 중앙이 화면에서 어디에 있는지 위치하는지 계산
    const targetRect = target.getBoundingClientRect();
    const targetCenter = targetRect.left + targetRect.width / 2;

    // 아이템 중앙을 화면 중앙으로 가져오기 위해 필요한 이동량 계산
    const diff = targetCenter - viewportCenter;

    container.scrollTo({
      left: container.scrollLeft + diff,
      behavior: 'smooth',
    });
  };

  return { containerRef, scrollToIndex };
}

// 스크롤 시, selectedSlideIndex를 업데이트하는 함수
export function handleScroll(
  containerRef: RefObject<HTMLDivElement | null>,
  handleSetSelectedSlideIndex: (index: number) => void,

  slideLength: number
) {
  const container = containerRef.current;
  if (!container) return;

  const children = Array.from(container.children).slice(
    1,
    container.children.length - 1
  );
  //화면 중앙 위치 계산
  const containerRect = container.getBoundingClientRect();
  const containerCenter = containerRect.left + containerRect.width / 2;

  //화면중앙에  가장 가까운 아이템 index 찾기
  let minDistance = Infinity;
  let centerItemIndex = 0;

  children.forEach((child, index) => {
    const childRect = child.getBoundingClientRect();
    const childCenter = childRect.left + childRect.width / 2;
    const distance = Math.abs(childCenter - containerCenter);

    if (distance < minDistance) {
      minDistance = distance;
      centerItemIndex = index;
    }
  });

  //아이템이 몇번째 슬라이드에 위치하는지 계산
  const itemSlideIndex = getItemSlideIndex(
    centerItemIndex,
    children.length,
    slideLength
  );

  //selectedSlideIndex 업데이트
  handleSetSelectedSlideIndex(itemSlideIndex);
}
