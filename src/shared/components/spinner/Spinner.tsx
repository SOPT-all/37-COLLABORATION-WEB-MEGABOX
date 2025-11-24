import ImgSpinner from '@/../public/assets/img-spinner.gif';

interface SpinnerProps {
  className?: string;
}

export default function Spinner({ className }: SpinnerProps) {
  return (
    <div className='flex w-full items-center justify-center'>
      <img
        src={ImgSpinner}
        alt='spinner'
        aria-label='spinner'
        className={className}
      />
    </div>
  );
}
