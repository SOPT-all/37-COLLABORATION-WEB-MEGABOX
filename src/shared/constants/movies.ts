interface Movie {
  id: number;
  title: string;
  tag: string;
  image: string;
  backgroundImage: string;
}

export const MOVIES: Record<number, Movie> = Object.freeze({
  1: {
    id: 1,
    title: '나우 유 씨 미 3',
    tag: '#애니메이션 #액션',
    image: '/assets/@movies/img-moviePoster.png',
    backgroundImage: '/assets/@movies/img-stillcut1.png',
  },
  2: {
    id: 2,
    title: '극장판 체인소 맨: 레제편',
    tag: '#애니메이션 #액션',
    image: '/assets/@movies/img-moviePoster.png',
    backgroundImage: '/assets/@movies/img-moviePoster-chainman.png',
  },
  3: {
    id: 3,
    title: '극장판 주술회전: 회옥·옥절',
    tag: '#애니메이션 #액션',
    image: '/assets/@movies/img-moviePoster.png',
    backgroundImage: '/assets/@movies/img-moviePoster-jujutsuKaisen.png',
  },
  4: {
    id: 4,
    title: '퍼스트 라이드',
    tag: '#드라마',
    image: '/assets/@movies/img-moviePoster.png',
    backgroundImage: '/assets/@movies/img-moviePoster-firstRide.png',
  },
  5: {
    id: 5,
    title: '극장판 귀멸의 칼날: 무한성편',
    tag: '#애니메이션 #액션',
    image: '/assets/@movies/img-moviePoster.png',
    backgroundImage: 'https://via.placeholder.com/150',
  },
  6: {
    id: 6,
    title: '위키드',
    tag: '#드라마',
    image: '/assets/@movies/img-moviePoster.png',
    backgroundImage: 'https://via.placeholder.com/150',
  },
  7: {
    id: 7,
    title: '프레데터: 죽음의 땅',
    tag: '#드라마',
    image: '/assets/@movies/img-moviePoster.png',
    backgroundImage: 'https://via.placeholder.com/150',
  },
});
