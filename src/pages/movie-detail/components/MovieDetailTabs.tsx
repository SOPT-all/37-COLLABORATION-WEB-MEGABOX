import { cn } from '@utils/cn';
import Divider from '@components/divider/Divider';
import type { MovieDetailMenu } from '@pages/movie-detail/types/menu';

interface TabProps {
  text: string;
  value: MovieDetailMenu;
  isActive?: boolean;
  handleClickTab: (_tab: MovieDetailMenu) => void;
}
interface TabContainerProps extends React.PropsWithChildren {
  activeTab: MovieDetailMenu;
}

export const Tab = ({ text, value, isActive, handleClickTab }: TabProps) => {
  return (
    <button
      type='button'
      className={cn(
        'relative w-full py-[1.1rem] text-center',
        isActive ? 'font-body2 text-gray-0' : 'font-body1 text-gray-300'
      )}
      onClick={() => handleClickTab(value)}
    >
      {text}
    </button>
  );
};

export function TabContainer({ children, activeTab }: TabContainerProps) {
  return (
    <div className='h-[4.2rem]'>
      <div className='flex w-full justify-between'>{children}</div>

      <div className='relative mt-[0.25rem] h-[1.2rem] w-full'>
        <div className='absolute inset-x-0 top-[0.5rem] h-[0.0625rem] bg-[linear-gradient(90deg,var(--color-gray-900)_0%,var(--color-violet-200)_50%,var(--color-gray-900)_100%)]' />

        <div
          className={cn(
            'absolute inset-0 flex transition-all duration-200 ease-out',
            activeTab === 'info' ? 'justify-start' : 'justify-end'
          )}
        >
          <div className='w-1/2 overflow-hidden'>
            <Divider />
          </div>
        </div>
      </div>
    </div>
  );
}
