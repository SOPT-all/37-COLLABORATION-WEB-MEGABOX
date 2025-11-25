import { useQuery } from '@tanstack/react-query';
import { Api } from 'apis/Api';

const api = new Api({
  baseURL: import.meta.env.VITE_API_SERVER_URL,
});

/**
 * 영화 영화관 리스트 조회 API
 * @param movieIds 선택된 영화들
 * @returns 선택된 영화들을 상영하는 영화관 배열
 */
export function useCinemas(movieIds: number[]) {
  return useQuery({
    queryKey: ['cinemas', movieIds],
    queryFn: () => api.getCinemas({ movieIds }).then(res => res.data.data?.cinemas),
    enabled: movieIds.length > 0,
  });
}