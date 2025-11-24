import { IconItemMinus, IconItemPlus, IconSystemClose } from '@assets/index';
import * as Dialog from '@radix-ui/react-dialog';
import Button from '@components/button/Button';

interface ModalProps {
  isOpen: boolean;
  handleOpenChange: (_open: boolean) => void;
  movieTitle: string;
  date: string;
  location: string;
  quantity: number;
  handleDecrease: () => void;
  handleIncrease: () => void;
  handleClickPayment: () => void;
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
  handleClickPayment,
}: ModalProps) {
  //TODO: maxQuantity toast 추가
  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black/50' />
        <Dialog.Content className='fixed-center shadow-modal z-100 flex flex-col items-center rounded-t-[1.2rem] bg-gray-800 px-[1.5rem] py-[2rem]'>
          <Dialog.Close className='mb-[2rem] flex w-full justify-end'>
            <IconSystemClose className='text-gray-300' />
          </Dialog.Close>
          <Dialog.Title className='mb-[2.7rem] flex flex-col items-center gap-[1.1rem]'>
            <span className='font-button3 text-gray-0'> {movieTitle}</span>
            <div className='flex flex-col gap-[0.4rem]'>
              <p className='font-caption1 text-gray-500'>{date}</p>
              <p className='font-caption1 text-gray-500'>{location}</p>
            </div>
          </Dialog.Title>

          <div className='mb-[4.4rem] flex w-full items-center justify-between'>
            <span className='font-body2 text-gray-100'>성인</span>
            <div className='border-gray-0 flex items-center justify-center gap-[1rem] rounded-[0.4rem] border p-[0.5rem]'>
              <IconItemMinus
                onClick={handleDecrease}
                className='text-gray-0 h-[1.6rem] w-[1.6rem]'
              />
              <span className='font-button2 text-violet-400'>{quantity}</span>
              <IconItemPlus
                onClick={handleIncrease}
                className='text-gray-0 h-[1.6rem] w-[1.6rem]'
              />
            </div>
          </div>
          <Button variant='primary' onClick={handleClickPayment}>
            결제하기
          </Button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
