export interface Movie {
  id: number;
  title: string;
  tag: string;
  image: string;
  backgroundImage: string;

  trailers: string[];
  posters: string[];
  goods?: { title: string; image: string } | null;
}

export type MoviePoster = Pick<Movie, 'id' | 'image'>;

export const MOVIES: Record<number, Movie> = Object.freeze({
  1: {
    id: 1,
    title: '나우 유 씨 미 3',
    tag: '#애니메이션 #액션',
    image: '/assets/@movie/img-movieposter-nowyou.svg',
    backgroundImage: '/assets/@movie/img-stillcut-nowyou.svg',

    trailers: [
      '/assets/img-trailer1.svg',
    ],
    posters: ['/assets/@movie/img-stillcut-nowyou.svg'],
     goods: {
      title: '나우 유 씨 미 3 한정 굿즈',
      image: '/assets/@movie/img-goods.svg',
    },
  },

  2: {
    id: 2,
    title: '극장판 체인소 맨: 레제편',
    tag: '#애니메이션 #액션',
    image: '/assets/@movie/img-moviepposter-chainsoman.svg',
    backgroundImage: '/assets/@movie/img-stillcut-chainsoman.svg',

    trailers: [
      '/assets/img-trailer1.svg',
    ],
    posters: [
      '/assets/@movie/img-stillcut-chainsoman.svg',
    ],
    goods: {
      title: '체인소맨 특전 굿즈',
      image: '/assets/@movie/img-goods.svg',
    },
  },

  3: {
    id: 3,
    title: '극장판 주술회전: 회옥·옥절',
    tag: '#애니메이션 #액션',
    image: '/assets/@movie/img-movieposter-magic.svg',
    backgroundImage: '/assets/@movie/img-stillcut-magic.svg',

    trailers: [
      '/assets/img-trailer1.svg',
    ],
    posters: [
      '/assets/@movie/img-stillcut-magic.svg',
    ],
    goods: {
      title: '주술회전 굿즈',
      image: '/assets/@movie/img-goods.svg',
    },
  },

  4: {
    id: 4,
    title: '퍼스트 라이드',
    tag: '#드라마',
    image: '/assets/@movie/img-movieposter-firstride.svg',
    backgroundImage: '/assets/@movie/img-stillcut-firstride.svg',

    trailers: [
      '/assets/img-trailer1.svg',
    ],
    posters: [
      '/assets/@movie/img-stillcut-firstride.svg',
    ],
    goods: {
      title: '퍼스트 라이드 굿즈',
      image: '/assets/@movie/img-goods.svg',
    },
  },

  5: {
    id: 5,
    title: '극장판 귀멸의 칼날: 무한성편',
    tag: '#애니메이션 #액션',
    image: '/assets/@movie/img-movieposter-knife.svg',
    backgroundImage: '/assets/@movie/img-stillcut-knife.svg',

    trailers: [
      '/assets/img-trailer1.svg',
    ],
    posters: [
      '/assets/@movie/img-stillcut-knife.svg',
    ],
    goods: {
      title: '귀멸의 칼날 굿즈',
      image: '/assets/@movie/img-goods.svg',
    },
  },

  6: {
    id: 6,
    title: '위키드',
    tag: '#드라마',
    image: '/assets/@movie/img-movieposter-wicked-1.svg',
    backgroundImage: '/assets/@movie/img-stillcut-wicked.svg',

    trailers: [
      '/assets/img-trailer1.svg',
    ],
    posters: [
      '/assets/@movie/img-stillcut-wicked.svg',
    ],
    goods: {
      title: '위키드 굿즈',
      image: '/assets/@movie/img-goods.svg',
    },
  },

  7: {
    id: 7,
    title: '프레데터: 죽음의 땅',
    tag: '#드라마',
    image: '/assets/@movie/img-movieposter-predator.svg',
    backgroundImage: '/assets/@movie/img-stillcut-predator.svg',

    trailers: [
      '/assets/img-trailer1.svg',
    ],
    posters: [
      '/assets/@movie/img-stillcut-predator.svg',
    ],
    goods: {
      title: '프레데터 굿즈',
      image: '/assets/@movie/img-goods.svg',
    },
  },
});
