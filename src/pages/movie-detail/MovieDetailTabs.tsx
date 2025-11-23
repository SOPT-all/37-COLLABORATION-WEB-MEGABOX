import { cn } from '@utils/cn';
import Divider from '@components/divider/Divider';

export type MovieDetailTab = 'info' | 'review';

interface MovieDetailTabsProps {
  activeTab: MovieDetailTab;
  onChange: (_tab: MovieDetailTab) => void;
  reviewCount?: number;
}

export default function MovieDetailTabs({
  activeTab,
  onChange,
  reviewCount,
}: MovieDetailTabsProps) {
  const formattedReviewCount =
    typeof reviewCount === 'number'
      ? reviewCount.toLocaleString('ko-KR')
      : undefined;

  return (
    <div className="bg-gray-900">
      <div className="flex px-[1.5rem] pt-[1rem] pb-[0.25rem]">
        <button
          type="button"
          className={cn(
            'flex-1 text-center',
            activeTab === 'info'
              ? 'font-body2 text-gray-0'
              : 'font-body1 text-gray-300'
          )}
          onClick={() => onChange('info')}
        >
          상세정보
        </button>

        <button
          type="button"
          className={cn(
            'flex-1 text-center',
            activeTab === 'review'
              ? 'font-body2 text-gray-0'
              : 'font-body1 text-gray-300'
          )}
          onClick={() => onChange('review')}
        >
          {formattedReviewCount
            ? `실관람평 (${formattedReviewCount})`
            : '실관람평'}
        </button>
      </div>

      <div className="relative mt-[0.25rem] h-[1.2rem] w-full">
        <div className="absolute inset-x-0 top-[0.5rem] h-[0.0625rem] bg-[linear-gradient(90deg,var(--color-gray-900)_0%,var(--color-violet-200)_50%,var(--color-gray-900)_100%)]" />

        <div
          className={cn(
            'absolute inset-0 flex transition-all duration-200 ease-out',
            activeTab === 'info' ? 'justify-start' : 'justify-end'
          )}
        >
          <div className="w-1/2 overflow-hidden">
            <Divider />
          </div>
        </div>
      </div>
    </div>
  );
}
