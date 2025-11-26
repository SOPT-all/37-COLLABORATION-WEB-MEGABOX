import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '@router/constant/routes';
import Layout from '@router/Layout';
import Home from '@/pages/home/Home';
import MovieDetail from '@pages/movie-detail/MovieDetail';
import Reservation from '@/pages/movie-reservation/Reservation';
import Payment from '@/pages/payment/Payment';

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
        path: ROUTES.MOVIE_RESERVATION,
        element: <Reservation />,
      },
      {
        path: ROUTES.PAYMENT,
        element: <Payment />,
      },
    ],
  },
]);
