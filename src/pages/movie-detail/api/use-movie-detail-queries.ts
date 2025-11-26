
import { apiRequest } from '@api/api-request';
import { useSuspenseQuery } from '@tanstack/react-query';
import { MOVIE_KEY } from '@/shared/query-key/movie';
import type {
  ApiResponseMovieDetailResponse,
  ApiResponseReviewListResponse,
} from 'apis/data-contracts';

const getMovieDetail = async (movieId: number) => {
  const response = await apiRequest<ApiResponseMovieDetailResponse>({
    method: 'GET',
    endPoint: `/api/v1/movies/${movieId}`,
  });
  return response;
};

export const getMovieDetailQuery = (movieId: number) => ({
  queryKey: MOVIE_KEY.DETAIL(movieId),
  queryFn: () => getMovieDetail(movieId),
});

export const useGetMovieDetailQuery = (movieId: number) =>
  useSuspenseQuery<ApiResponseMovieDetailResponse>(
    getMovieDetailQuery(movieId)
  );

const getMovieReviews = async (movieId: number) => {
  const response = await apiRequest<ApiResponseReviewListResponse>({
    method: 'GET',
    endPoint: `/api/v1/movies/${movieId}/reviews`,
  });
  return response;
};

export const getMovieReviewsQuery = (movieId: number) => ({
  queryKey: MOVIE_KEY.REVIEWS(movieId),
  queryFn: () => getMovieReviews(movieId),
});

export const useGetMovieReviewsQuery = (movieId: number) =>
  useSuspenseQuery<ApiResponseReviewListResponse>(
    getMovieReviewsQuery(movieId)
  );
