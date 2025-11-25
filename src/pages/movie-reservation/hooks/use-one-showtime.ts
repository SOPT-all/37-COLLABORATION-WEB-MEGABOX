import { useQuery } from "@tanstack/react-query";
import { Api } from "apis/Api";

const api = new Api({
  baseURL: import.meta.env.VITE_API_SERVER_URL,
});

/**
 * 예매 전 상영정보 조회 API
 * @param showtimeId 선택된 상영정보 ID
 * @returns 선택된 상영정보의 세부정보
 */
export function useOneShowtime(showtimeId: number) {
  return useQuery({
    queryKey: ['oneShowtime', showtimeId],
    queryFn: () => api.getShowtimeBeforeReservation(showtimeId).then((res) => res.data.data),
  });
}