import { QueryClient } from '@tanstack/react-query';
import { type ShowtimeReadRequest } from 'apis/data-contracts';

export interface PrefetchConfig {
  movieIds?: number[];
  date?: string;
  timeSlot?: ShowtimeReadRequest['timeSlot'];
  queryClient: QueryClient;
  prefetchShowtimes: (_: QueryClient, __: ShowtimeReadRequest) => void;
}