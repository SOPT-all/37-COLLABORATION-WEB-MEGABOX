import { useRef, type RefObject } from 'react';

interface UseScrollResult {
  containerRef: RefObject<HTMLDivElement | null>;
  scrollToIndex: (index: number) => void;
}
// 화면 정중앙에 와야하는 item index를 받아서 스크롤을 이동시키는 hook
export default function useScroll(): UseScrollResult {
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
