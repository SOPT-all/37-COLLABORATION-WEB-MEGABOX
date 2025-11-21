import IconItemPlus from '@assets/components/IconItemPlus';

const JoongAngPayButton = () => {
  return (
    <div className='mb-[1.6rem]'>
      <button className='flex w-full items-center justify-between rounded-[0.4rem] border border-gray-300 px-[2rem] py-[0.6rem]'>
        <img
          src='/assets/img-joonang-logo.png'
          alt='JoongAng PAY'
          className='h-[3.2rem]'
        />
        <IconItemPlus width={24} height={24} className='text-gray-500' />
      </button>
    </div>
  );
}

export default JoongAngPayButton
