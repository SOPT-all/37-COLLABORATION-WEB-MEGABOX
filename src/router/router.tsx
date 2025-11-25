import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '@router/constant/routes';
import Layout from '@router/Layout';

import Payment from '@/pages/payment/Payment';
import Home from '@/pages/home/Home';
import MovieDetail from '@pages/movie-detail/MovieDetail';


export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.MOVIE_DETAIL,
        element: <MovieDetail />,
      },
      {
        path: ROUTES.PAYMENT,
        element: <Payment />,
      },
    ],
  },
]);
