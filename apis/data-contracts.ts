/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ApiResponseVoid {
  status?: "SUCCESS" | "FAIL" | "ERROR";
  /** @format int32 */
  statusCode?: number;
  data?: any;
  message?: string;
  errorCode?: string;
  errorName?: string;
}

export interface ApiResponseShowtimeBeforeReservationResponse {
  status?: "SUCCESS" | "FAIL" | "ERROR";
  /** @format int32 */
  statusCode?: number;
  data?: ShowtimeBeforeReservationResponse;
  message?: string;
  errorCode?: string;
  errorName?: string;
}

export interface ShowtimeBeforeReservationResponse {
  /** @format int64 */
  movieId?: number;
  title?: string;
  /** @format date-time */
  startTime?: string;
  /** @format date-time */
  endTime?: string;
  cinemaName?: string;
  theaterName?: string;
  screenType?: string;
}

export interface ApiResponseRecentDatesResponse {
  status?: "SUCCESS" | "FAIL" | "ERROR";
  /** @format int32 */
  statusCode?: number;
  data?: RecentDatesResponse;
  message?: string;
  errorCode?: string;
  errorName?: string;
}

export interface RecentDatesResponse {
  dates?: string[];
}

export interface ApiResponseMovieListResponse {
  status?: "SUCCESS" | "FAIL" | "ERROR";
  /** @format int32 */
  statusCode?: number;
  data?: MovieListResponse;
  message?: string;
  errorCode?: string;
  errorName?: string;
}

export interface MovieListResponse {
  movies?: MovieSummaryResponse[];
}

export interface MovieSummaryResponse {
  /** @format int64 */
  id?: number;
  title?: string;
  tag?: string;
}

export interface ApiResponseMovieDetailResponse {
  status?: "SUCCESS" | "FAIL" | "ERROR";
  /** @format int32 */
  statusCode?: number;
  data?: MovieDetailResponse;
  message?: string;
  errorCode?: string;
  errorName?: string;
}

export interface MovieDetailResponse {
  /** @format int64 */
  id?: number;
  title?: string;
  tag?: string;
  /** @format int32 */
  ageRating?: number;
  /** @format date */
  releaseDate?: string;
  /** @format int32 */
  runningTimeMinutes?: number;
  /** @format int32 */
  rank?: number;
  /** @format float */
  rating?: number;
  /** @format float */
  marketShare?: number;
  /** @format int64 */
  totalAudience?: number;
  description?: string;
  summary?: string;
}

export interface ApiResponseReviewListResponse {
  status?: "SUCCESS" | "FAIL" | "ERROR";
  /** @format int32 */
  statusCode?: number;
  data?: ReviewListResponse;
  message?: string;
  errorCode?: string;
  errorName?: string;
}

export interface ReviewListResponse {
  /** @format int32 */
  reviewCount?: number;
  reviews?: ReviewResponse[];
}

export interface ReviewResponse {
  /** @format int64 */
  reviewId?: number;
  /** @format int32 */
  rating?: number;
  /** @format int64 */
  memberId?: number;
  nickname?: string;
  content?: string;
  /** @format date-time */
  createdAt?: string;
}

export interface ApiResponseCinemaListResponse {
  status?: "SUCCESS" | "FAIL" | "ERROR";
  /** @format int32 */
  statusCode?: number;
  data?: CinemaListResponse;
  message?: string;
  errorCode?: string;
  errorName?: string;
}

export interface CinemaListResponse {
  cinemas?: string[];
}

export type CreateReservationData = ApiResponseVoid;

export type GetShowtimeBeforeReservationData =
  ApiResponseShowtimeBeforeReservationResponse;

export type GetRecent7DaysData = ApiResponseRecentDatesResponse;

export type GetListData = ApiResponseMovieListResponse;

export type GetDetailData = ApiResponseMovieDetailResponse;

export type GetReviewsData = ApiResponseReviewListResponse;

export type GetCinemasData = ApiResponseCinemaListResponse;
