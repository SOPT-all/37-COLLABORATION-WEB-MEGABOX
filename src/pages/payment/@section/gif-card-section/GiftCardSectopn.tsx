export default function GiftCardSection() {
  return (
    <>
      <div className='h-[0.8rem] bg-gray-100' />
      <section className='flex items-center justify-between px-[1.6rem] py-[1.5rem]'>
        <h2 className='font-title2 text-gray-900'>메가박스 기프트카드</h2>
        <button
          type='button'
          className='font-button1 bg-gray-0 rounded-[0.4rem] border border-gray-300 px-[0.8rem] py-[0.7rem] text-gray-500'
        >
          카드조회
        </button>
      </section>
      <div className='h-[0.8rem] bg-gray-100' />
    </>
  );
}
