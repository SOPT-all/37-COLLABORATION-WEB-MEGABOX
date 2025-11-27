import { type ShowtimeReadRequest } from 'apis/data-contracts';

export const showtimesKey = (params: ShowtimeReadRequest) => [
  'showtimes',
  JSON.stringify([...(params.movieIds ?? [])].sort((a, b) => a - b)),
  params.date,
  params.timeSlot ?? null,
];