import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '@router/constant/routes';
import Layout from '@router/Layout';
import Home from '@pages/Home/Home';
import Payment from '@pages/Payment/Payment';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.PAYMENT,
        element: <Payment />,
      },
    ],
  },
]);
