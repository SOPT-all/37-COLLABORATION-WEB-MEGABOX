import { create } from 'zustand';

export interface ShowtimeDetail {
  cinemaName: string;
  movieTitle: string;
  theaterName: string;
  screenType: string;
  showtimeId: number;
  startTime: string;
  endTime: string;
  totalSeatCount: number;
  availableSeatCount: number;
}

interface ShowtimeStore {
  selectedShowtime: ShowtimeDetail | null;
  setSelectedShowtime: (_: ShowtimeDetail) => void;
  clearSelectedShowtime: () => void;
}

export const useShowtimeStore = create<ShowtimeStore>((set) => ({
  selectedShowtime: null,
  setSelectedShowtime: (data) => set({ selectedShowtime: data }),
  clearSelectedShowtime: () => set({ selectedShowtime: null }),
}));
