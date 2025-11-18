import { IconItemMinus, IconItemPlus, IconSystemClose } from '@/shared/assets';
import * as Dialog from '@radix-ui/react-dialog';

interface ModalProps {
  isOpen: boolean;
  handleOpenChange: (open: boolean) => void;
  movieTitle: string;
  date: string;
  location: string;
  quantity: number;
  handleDecrease: () => void;
  handleIncrease: () => void;
}
export default function Modal({
  isOpen,
  handleOpenChange,
  movieTitle,
  date,
  location,
  quantity,
  handleDecrease,
  handleIncrease,
}: ModalProps) {
  //TODO: maxQuantity toast 추가
  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black/50' />
        <Dialog.Content className='fixed-center shadow-modal flex flex-col items-center rounded-t-[1.2rem] bg-gray-800 px-[1.5rem] py-[2rem]'>
          <Dialog.Close className='mb-[2rem] flex w-full justify-end'>
            <IconSystemClose className='text-gray-300' />
          </Dialog.Close>
          <Dialog.Title className='mb-[2.7rem] flex flex-col items-center gap-[1.1rem]'>
            <span className='text-button3 text-gray-0'> {movieTitle}</span>
            <div className='flex flex-col gap-[0.4rem]'>
              <p className='text-caption1 text-gray-500'>{date}</p>
              <p className='text-caption1 text-gray-500'>{location}</p>
            </div>
          </Dialog.Title>

          <div className='mb-[4.4rem] flex w-full items-center justify-between'>
            <span className='text-body2 text-gray-100'>성인</span>
            <div className='border-gray-0 flex items-center justify-center gap-[1rem] rounded-[0.4rem] border p-[0.5rem]'>
              <button
                onClick={handleDecrease}
                disabled={quantity <= 1}
                aria-label='인원 감소'
              >
                <IconItemMinus className='text-gray-0 h-[1.6rem] w-[1.6rem]' />
              </button>
              <span className='text-button2 text-violet-400'>{quantity}</span>
              <button onClick={handleIncrease} aria-label='인원 증가'>
                <IconItemPlus className='text-gray-0 h-[1.6rem] w-[1.6rem]' />
              </button>
            </div>
          </div>
          {/* TODO : 버튼 컴포넌트 추가 */}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
