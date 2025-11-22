import { Divider, Movie, Header, Button, Spinner } from '@components/index';
import Carousel from '@/pages/home/components/Carousel';
import { useMovie } from '@/pages/home/hooks';

export default function Home() {
  const {
    selectedMovie,
    item,
    handleClickItem,
    handleClickCard,
    isPending,
    isError,
  } = useMovie();
  if (isPending) {
    return <Spinner />;
  }
  if (isError) {
    //TODO:토스트 추가
    return <div className='text-center text-gray-500'>Error</div>;
  }
  return (
    <div>
      <Header variant='main' />

      {selectedMovie && (
        <Movie
          key={selectedMovie.id}
          id={selectedMovie.id!}
          title={selectedMovie.title!}
          tag={selectedMovie.tag!}
          ageRating={selectedMovie.ageRating!}
          releaseDate={selectedMovie.releaseDate!}
          runningTimeMinutes={selectedMovie.runningTimeMinutes ?? 0}
          className='mb-[0.9rem] cursor-pointer'
          handleClickCard={handleClickCard}
        />
      )}

      <div className='flex flex-col gap-[2rem] px-[1.7rem]'>
        <Divider />
        <Carousel items={item} handleClickItem={handleClickItem} />
      </div>

      <footer className='fixed-center right-0 bottom-0 left-0 px-[1.7rem] pb-[4.9rem]'>
        <Button variant='primary' onClick={handleClickCard}>
          바로 예매 하기
        </Button>
      </footer>
    </div>
  );
}
