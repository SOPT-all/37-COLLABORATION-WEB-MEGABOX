interface PaymentBtnProps {
  totalAmount: number;
  disabled?: boolean;
}
//네이밍 다시 해라
export default function PaymentButton({
  totalAmount,
  disabled = false,
}: PaymentBtnProps) {
  const formatAmount = (amount: number) => {
    return amount.toLocaleString('ko-KR');
  };

  return (
    <button
      type='submit'
      disabled={disabled}
      className='font-button4 w-full bg-violet-600 px-[3.2rem] py-[1.6rem] text-white disabled:bg-gray-800'
    >
      {`${formatAmount(totalAmount)}원 결제하기`}
    </button>
  );
}
