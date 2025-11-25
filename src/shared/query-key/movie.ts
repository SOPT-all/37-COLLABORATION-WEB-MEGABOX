export const MOVIE_KEY = {
  ALL: ['movies'],
  LIST: () => [...MOVIE_KEY.ALL, 'list'],
  DETAILS: () => [...MOVIE_KEY.ALL, 'detail'],
  DETAIL: (movieId: number) => [...MOVIE_KEY.DETAILS(), movieId],
  REVIEWS: (movieId: number) => [...MOVIE_KEY.DETAIL(movieId), 'reviews'],
  THEATERS: (movieId: number) => [...MOVIE_KEY.DETAIL(movieId), 'theaters'],
  THEATER: (movieId: number, theaterId: number) => [
    ...MOVIE_KEY.THEATERS(movieId),
    theaterId,
  ],
} as const;
