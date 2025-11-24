import { MOVIES } from '@constants/movies';

/**
 * 영화 제목에 따른 영화 아이디를 반환합니다.
 * @param title - 영화 제목
 * @returns 영화 아이디
 */

export function getIdByTitle(title: string): number | undefined {
  const entry = Object.entries(MOVIES).find(
    ([, movie]) => movie.title === title
  );
  return entry ? Number(entry[0]) : undefined;
}