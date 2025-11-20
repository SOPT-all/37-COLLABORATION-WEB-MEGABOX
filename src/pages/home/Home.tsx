import { Divider, Movie } from '@components/index';
import Carousel from '@/pages/home/components/Carousel';
import { useMovie } from '@/pages/home/hooks';

export default function Home() {
  const { selectedMovie, item, handleClickItem, handleClickCard } = useMovie();

  return (
    <div>
      {/* header 영역 */}

      {selectedMovie && (
        <Movie
          key={selectedMovie.id}
          id={selectedMovie.id}
          title={selectedMovie.title}
          tag={selectedMovie.tag}
          ageRating={selectedMovie.ageRating}
          releaseDate={selectedMovie.releaseDate}
          runningTimeMinutes={selectedMovie.runningTimeMinutes}
          className='mb-[0.9rem] cursor-pointer'
          handleClickCard={handleClickCard}
        />
      )}

      <div className='flex flex-col gap-[1rem] px-[1.7rem]'>
        <Divider />
        <Carousel items={item} handleClickItem={handleClickItem} />
      </div>
    </div>
  );
}
