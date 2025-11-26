import { useToastStore } from '@store/toast';

export default function Toast() {
  const toast = useToastStore(state => state.toast);
  const hideToast = useToastStore(state => state.hideToast);

  if (!toast) {
    return null;
  }

  return (
    <div className='animate-fade-in fixed inset-x-0 top-[6rem] z-10 px-[1.6rem] flex justify-center'>
      <div className='flex w-full max-w-[60rem] items-center justify-between gap-[1rem] rounded-[0.6rem] bg-gray-700 px-[1.6rem] py-[1.5rem]'>
        <span className='font-subtitle1 text-white'>{toast.message}</span>
        <button onClick={hideToast} className='font-body2 text-violet-300'>
          확인
        </button>
      </div>
    </div>
  );
}
