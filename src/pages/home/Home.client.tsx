import { Divider, Movie } from '@/shared/components';
import Carousel from './components/Carousel';
import type { Item } from './hooks/use-movie';
import type { MovieSummaryResponse } from '@/../apis/data-contracts';

interface HomeClientProps {
  isError: boolean;
  selectedMovie: MovieSummaryResponse | undefined;
  items: Item[];
  handleClickItem: (id: number) => void;
  handleClickCard: () => void;
}
export default function HomeClient({
  isError,
  selectedMovie,
  items,
  handleClickItem,
  handleClickCard,
}: HomeClientProps) {
  if (isError) {
    return (
      <div className='mt-[20rem] text-center text-gray-500'>
        영화 정보가 없습니다.
      </div>
    );
  }

  return (
    <div>
      {selectedMovie && (
        <Movie
          key={selectedMovie.id}
          id={selectedMovie.id!}
          title={selectedMovie.title!}
          tag={selectedMovie.tag!}
          ageRating={selectedMovie.ageRating!}
          releaseDate={selectedMovie.releaseDate!}
          runningTimeMinutes={selectedMovie.runningTimeMinutes!}
          className='mb-[0.9rem] cursor-pointer'
          handleClickCard={handleClickCard}
        />
      )}

      <div className='flex flex-col gap-[2rem] px-[1.7rem]'>
        <Divider />
        <Carousel items={items} handleClickItem={handleClickItem} />
      </div>
    </div>
  );
}
