export const MOVIE_KEY = {
  ALL: ['movies'],
  LIST: () => [...MOVIE_KEY.ALL, 'list'],
  DETAILS: () => [...MOVIE_KEY.ALL, 'detail'],
  DETAIL: (id: number) => [...MOVIE_KEY.DETAILS(), id],
} as const;
