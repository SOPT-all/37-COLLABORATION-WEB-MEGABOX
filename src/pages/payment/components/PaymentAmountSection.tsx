interface PaymentAmountSectionProps {
  productAmount: number;
  discountAmount: number;
  deductionAmount: number;
  totalAmount: number;
}

const PaymentAmountSection = ({
  productAmount,
  discountAmount,
  deductionAmount,
  totalAmount,
}: PaymentAmountSectionProps) => {
  const formatAmount = (amount: number) => {
    return amount.toLocaleString('ko-KR');
  };

  return (
    <>
      <div className='h-[0.8rem] bg-gray-100' />
      <section className='bg-gray-0 p-[1.6rem]'>
        <h2 className='font-title2 mb-[2rem]'>결제금액</h2>

        <div className='space-y-[1.6rem]'>
          {/* 상품금액 */}
          <div className='flex items-center justify-between'>
            <span className='font-caption2 text-gray-900'>상품금액</span>
            <span className='font-caption2 text-gray-900'>
              {`${formatAmount(productAmount)}원`}
            </span>
          </div>

          {/* 할인금액 */}
          <div className='flex items-center justify-between'>
            <span className='font-caption2 text-gray-900'>할인금액</span>
            <span className='font-caption2 text-red-500'>
              {`-${formatAmount(discountAmount)}원`}
            </span>
          </div>

          {/* 차감금액 */}
          <div className='flex items-center justify-between'>
            <span className='font-caption2 text-gray-900'>차감금액</span>
            <span className='font-caption2 text-gray-900'>
              {`${formatAmount(deductionAmount)}원`}
            </span>
          </div>

          {/* 총 결제금액 */}
          <div className='flex items-center justify-between border-t border-gray-200 pt-[1.6rem]'>
            <span className='font-button3 text-gray-900'>총 결제금액</span>
            <span className='font-title2 text-violet-600'>
              {`${formatAmount(totalAmount)}원`}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentAmountSection;