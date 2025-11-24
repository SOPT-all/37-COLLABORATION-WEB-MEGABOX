import { MOVIES, type MoviePoster } from '@constants/movies';

/**
 * @description 영화 포스터 매핑
 * @returns {MoviePoster[]} 영화 포스터 목록
 */

export function mappingMoviePosters() {
  const moviePosters: MoviePoster[] = Object.values(MOVIES).map(movie => ({
    id: movie.id,
    image: movie.image,
  }));
  return moviePosters;
}
