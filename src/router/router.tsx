import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '@router/constant/routes';
import Layout from '@router/Layout';
import Home from '@/pages/home/Home';
import Booking from '@/pages/booking/Booking';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.BOOKING,
        element: <Booking />,
      },
    ],
  },
]);
