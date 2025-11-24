import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '@router/constant/routes';
import Layout from '@router/Layout';

import Payment from '@/pages/payment/Payment';
import PaymentInfo from '@/pages/pay/PaymentInfo'
import Home from '@/pages/home/Home';


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
        element: <PaymentInfo />,
      },
      {
        path: ROUTES.PAY,
        element: <Payment />,
      },
    ],
  },
]);
