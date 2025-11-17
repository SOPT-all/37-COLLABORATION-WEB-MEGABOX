import Tag from '@components/tag/Tag';
import { IcStarFill } from '@assets/index';

export default function Home() {
  return (
    <div>
      <Tag title='hi' />
      <div className='p-8'>
        {/* TODO : 테스트 후 삭제 예정 */}
        {/* 텍스트 색상 테스트 */}
        <h1 className='mb-4 text-4xl font-bold text-violet-700'>Violet 700</h1>
        <h1 className='mb-4 text-4xl font-bold text-violet-600'>Violet 600</h1>
        <h1 className='mb-4 text-4xl font-bold text-violet-500'>Violet 500</h1>
        <h1 className='mb-4 text-4xl font-bold text-violet-400'>Violet 400</h1>
        <h1 className='mb-4 text-4xl font-bold text-violet-300'>Violet 300</h1>
        <h1 className='mb-8 text-4xl font-bold text-violet-200'>Violet 200</h1>
        <h1 className='mb-8 text-4xl font-bold text-red-500'>Sub-Red-200</h1>
        <h1 className='mb-8 text-4xl font-bold text-blue-500'>Sub-Blue-200</h1>
        <h1 className='text-blueGreen-500 mb-8 text-4xl font-bold'>
          Sub-blueGreen-200
        </h1>

        {/* 그라디언트 테스트 */}
        <div className='gradient-1 mb-4 h-64 w-64 rounded-3xl'></div>
        <div className='gradient-2 mb-4 h-64 w-64 rounded-3xl'></div>
        <div className='gradient-3 h-64 w-64 rounded-3xl'></div>
      </div>
      <IcStarFill />
    </div>
  );
}
