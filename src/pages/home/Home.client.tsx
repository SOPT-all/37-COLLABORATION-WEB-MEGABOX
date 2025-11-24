import { Divider, Movie } from '@components/index';
import Carousel from '@pages/home/components/Carousel';
import type { MoviePoster } from '@constants/movies';
import type { MovieSummaryResponse } from '@/../apis/data-contracts';

interface HomeClientProps {
  selectedMovie: MovieSummaryResponse | undefined;
  items: MoviePoster[];
  handleClickItem: (_id: number) => void;
  handleClickCard: () => void;
}

export default function HomeClient({
  selectedMovie,
  items,
  handleClickItem,
  handleClickCard,
}: HomeClientProps) {
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
          isDetail={false}
        />
      )}

      <div className='flex flex-col gap-[2rem] px-[1.7rem]'>
        <Divider />
        <Carousel items={items} handleClickItem={handleClickItem} />
      </div>
    </div>
  );
}
