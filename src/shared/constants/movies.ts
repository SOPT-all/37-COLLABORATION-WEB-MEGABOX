export const MOVIES = Object.freeze({
  1: {
    title: '나우 유 씨 미 3',
    categories: ['나우 유 씨 미 3'],
    image: '/assets/@movies/img-moviePoster.png',
    backgroundImage: '/assets/@movies/img-stillcut1.png',
  },
  2: {
    title: '극장판 체인소 맨: 레제편',
    categories: ['극장판 체인소 맨: 레제편'],
    image: '/assets/@movies/img-moviePoster.png',
    backgroundImage: '/assets/@movies/img-moviePoster-chainman.png',
  },
  3: {
    title: '극장판 주술회전: 회옥·옥절',
    categories: ['극장판 주술회전: 회옥·옥절'],
    image: '/assets/@movies/img-moviePoster.png',
    backgroundImage: '/assets/@movies/img-moviePoster-jujutsuKaisen.png',
  },
  4: {
    title: '퍼스트 라이드',
    categories: ['퍼스트 라이드'],
    image: '/assets/@movies/img-moviePoster.png',
    backgroundImage: '/assets/@movies/img-moviePoster-firstRide.png',
  },
  5: {
    title: '극장판 귀멸의 칼날: 무한성편',
    categories: ['극장판 귀멸의 칼날: 무한성편'],
    image: '/assets/@movies/img-moviePoster.png',
    backgroundImage: 'https://via.placeholder.com/150',
  },
  6: {
    title: '위키드',
    categories: ['위키드'],
    image: '/assets/@movies/img-moviePoster.png',
    backgroundImage: 'https://via.placeholder.com/150',
  },
  7: {
    title: '프레데터: 죽음의 땅',
    categories: ['프레데터: 죽음의 땅'],
    image: '/assets/@movies/img-moviePoster.png',
    backgroundImage: 'https://via.placeholder.com/150',
  },
});

export type Movie = (typeof MOVIES)[keyof typeof MOVIES];
