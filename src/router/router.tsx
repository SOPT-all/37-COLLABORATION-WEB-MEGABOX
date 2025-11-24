import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '@router/constant/routes';
import Layout from '@router/Layout';
import Home from '@pages/home/Home';
import Reservation from '@pages/movie-reservation/Reservation';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.MOVIE_RESERVATION,
        element: <Reservation />,
      },
    ],
  },
]);
