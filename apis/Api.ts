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

import {
  CreateReservationData,
  GetCinemasData,
  GetDetailData,
  GetListData,
  GetRecent7DaysData,
  GetReviewsData,
  GetShowtimeBeforeReservationData,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Api<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * @description 영화 예매 정보를 생성하는 API입니다. - Request Header로 memberId(예약자 ID)를 전달합니다. - Path Variable로 showtimeId(상영정보 ID)를 전달합니다. - RequestBody로 numOfPeople(예약 좌석수)를 전달합니다.
   *
   * @tags 예매 API
   * @name CreateReservation
   * @summary 영화 예매
   * @request POST:/api/v1/showtimes/{showtimeId}/reservations
   * @response `200` `CreateReservationData` OK
   */
  createReservation = (
    showtimeId: number,
    query: {
      /** @format int32 */
      numOfPeople: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<CreateReservationData, any>({
      path: `/api/v1/showtimes/${showtimeId}/reservations`,
      method: "POST",
      query: query,
      ...params,
    });
  /**
   * @description 영화 예매 전 상영정보를 조회하는 API입니다. - Path Variable로 showtimeId(상영정보 ID)를 전달합니다.
   *
   * @tags 상영정보 API
   * @name GetShowtimeBeforeReservation
   * @summary 예매 전 상영정보 조회
   * @request GET:/api/v1/showtimes/{showtimeId}
   * @response `200` `GetShowtimeBeforeReservationData` OK
   */
  getShowtimeBeforeReservation = (
    showtimeId: number,
    params: RequestParams = {},
  ) =>
    this.request<GetShowtimeBeforeReservationData, any>({
      path: `/api/v1/showtimes/${showtimeId}`,
      method: "GET",
      ...params,
    });
  /**
   * @description 오늘을 포함한 최근 7일의 날짜를 조회하는 API입니다.
   *
   * @tags date-controller
   * @name GetRecent7Days
   * @summary 최근 7일 날짜 조회
   * @request GET:/api/v1/recent-dates
   * @response `200` `GetRecent7DaysData` OK
   */
  getRecent7Days = (params: RequestParams = {}) =>
    this.request<GetRecent7DaysData, any>({
      path: `/api/v1/recent-dates`,
      method: "GET",
      ...params,
    });
  /**
   * @description 등록된 영화들의 기본 정보를 조회하는 API입니다. - 정렬 기준: 영화 ID 오름차순
   *
   * @tags 영화 API
   * @name GetList
   * @summary 영화 목록 조회
   * @request GET:/api/v1/movies
   * @response `200` `GetListData` OK
   */
  getList = (params: RequestParams = {}) =>
    this.request<GetListData, any>({
      path: `/api/v1/movies`,
      method: "GET",
      ...params,
    });
  /**
   * @description 선택한 영화의 상세 정보를 조회하는 API입니다. - Path Variable로 movieId(영화 ID)를 전달합니다.
   *
   * @tags 영화 API
   * @name GetDetail
   * @summary 영화 상세 조회
   * @request GET:/api/v1/movies/{movieId}
   * @response `200` `GetDetailData` OK
   */
  getDetail = (movieId: number, params: RequestParams = {}) =>
    this.request<GetDetailData, any>({
      path: `/api/v1/movies/${movieId}`,
      method: "GET",
      ...params,
    });
  /**
   * @description 선택한 영화의 관람평들을 조회하는 API입니다. - Path Variable로 movieId(영화 ID)를 전달합니다.
   *
   * @tags 영화 API
   * @name GetReviews
   * @summary 영화 관람평 조회
   * @request GET:/api/v1/movies/{movieId}/reviews
   * @response `200` `GetReviewsData` OK
   */
  getReviews = (movieId: number, params: RequestParams = {}) =>
    this.request<GetReviewsData, any>({
      path: `/api/v1/movies/${movieId}/reviews`,
      method: "GET",
      ...params,
    });
  /**
   * @description 선택한 영화들의 영화관을 조회하는 API입니다. - RequestParam으로 movieIds(영화 ID 리스트)를 전달합니다.
   *
   * @tags 영화관 API
   * @name GetCinemas
   * @summary 영화 영화관 리스트 조회
   * @request GET:/api/v1/cinemas
   * @response `200` `GetCinemasData` OK
   */
  getCinemas = (
    query: {
      movieIds: number[];
    },
    params: RequestParams = {},
  ) =>
    this.request<GetCinemasData, any>({
      path: `/api/v1/cinemas`,
      method: "GET",
      query: query,
      ...params,
    });
}
