const EventBanner = () => {
  return (
    <div className='rounded-[0.4rem] bg-gray-100 px-[1rem] py-[1.3rem]'>
      <div className='flex items-center gap-[0.2rem]'>
        <img
          src='/assets/img-toss-logo.png'
          alt='toss-payments'
          className='h-[2.9rem]'
        />
        <span className='font-caption1 text-gray-500'>
          11월 토스페이 생애 첫 결제 시 1천원 즉시 할인
        </span>
      </div>
      <div className='flex items-center gap-[3.3rem]'>
        <img
          src='/assets/img-010Pay-logo.png'
          alt='010Pay'
          className='h-[1.9rem]'
        />
        <span className='font-caption1 text-gray-500'>
          1.5만원 이상 내통장결제 시 굿즈 증정! (이벤트 탭 확인)
        </span>
      </div>
    </div>
  );
}

export default EventBanner
