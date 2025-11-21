export interface ShowtimeResponse {
  showtimeId: number;
  startTime: string;
  endTime: string;
  seatCount: number;
  leftSeatCount: number;
}

export interface TheaterResponse {
  theaterName: string;
  screenType: string;
  showtimes: ShowtimeResponse[];
}

export interface MovieResponse {
  movieTitle: string;
  theaters: TheaterResponse[];
  ageRating?: 'ALL' | 12 | 15 | 19;
}

export interface CinemaResponse {
  cinemaName: string;
  movies: MovieResponse[];
}

export interface ShowtimeDetail {
  cinemaName: string;
  movieTitle: string;
  theaterName: string;
  screenType: string;
  showtimeId: number;
  startTime: string;
  endTime: string;
  seatCount: number;
  leftSeatCount: number;
}

export interface ShowtimeProps {
  cinema: CinemaResponse;
  handleClickShowtime: (_: ShowtimeDetail) => void;
}

export interface ShowtimeByTimeProps {
  showtime: ShowtimeResponse;
  movieTitle: string;
  cinemaName: string;
  theaterName: string;
  screenType: string;
  handleClick: (_: ShowtimeDetail) => void;
}

export interface ShowtimeByTheaterProps {
  theater: TheaterResponse;
  movieTitle: string;
  cinemaName: string;
  handleClick: (_: ShowtimeDetail) => void;
}

export interface ShowtimeByMovieProps {
  movie: MovieResponse;
  cinemaName: string;
  handleClickShowtime: (_: ShowtimeDetail) => void;
}