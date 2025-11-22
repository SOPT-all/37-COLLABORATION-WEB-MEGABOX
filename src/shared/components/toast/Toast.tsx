import { useToastStore } from '@store/toast';

export default function Toast() {
  const toast = useToastStore(state => state.toast);
  const hideToast = useToastStore(state => state.hideToast);

  if (!toast) {
    return null;
  }

  return (
    <div className='animate-fade-in fixed right-[1rem] bottom-[2rem] left-[1rem] z-10'>
      <div className='mx-auto flex max-w-[34.3rem] items-center justify-between gap-[1rem] rounded-[0.6rem] bg-gray-700 px-[1rem] py-[1.5rem]'>
        <span className='font-subtitle1 text-white'>{toast.message}</span>
        <button onClick={hideToast} className='font-body2 text-violet-300'>
          확인
        </button>
      </div>
    </div>
  );
}
