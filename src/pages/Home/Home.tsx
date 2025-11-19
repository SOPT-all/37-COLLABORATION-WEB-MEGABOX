import Divider from '@components/divider/Divider';
import { MOVIES } from '@constants/movies';
import Carousel from '@pages/Home/components/Carousel';

export default function Home() {
  const item = MOVIES.map(movie => ({ id: movie.id, image: movie.image }));
  const handleClickItem = (id: number) => {
    console.info(id);
  };

  return (
    <div>
      {/* header 영역 */}
      {/* main 영역 */}
      <div className='h-[50rem]' />
      <div className='flex flex-col gap-[1rem] px-[1.7rem]'>
        <Divider />
        <Carousel items={item} handleClickItem={handleClickItem} />
      </div>
    </div>
  );
}
