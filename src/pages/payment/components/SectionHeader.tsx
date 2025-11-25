import { cn } from '@utils/cn';
import UppArrow from '@assets/components/IconSystemUparrow';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  isOpen: boolean;
  handleShow: () => void;
}

export default function SectionHeader({
  title,
  subtitle,
  isOpen,
  handleShow,
}: SectionHeaderProps) {
  return (
    <div className='mb-[2.5rem] flex items-center justify-between'>
      <h2 className='font-title2'>{title}</h2>
      <div>
        <button
          type='button'
          onClick={handleShow}
          className='flex items-center gap-[0.9rem]'
        >
          <span className='font-caption1 text-gray-400'>{subtitle}</span>
          <UppArrow
            width={14}
            height={14}
            className={cn(
              'text-gray-300',
              'transition-transform',
              !isOpen && 'rotate-180'
            )}
          />
        </button>
      </div>
    </div>
  );
}
