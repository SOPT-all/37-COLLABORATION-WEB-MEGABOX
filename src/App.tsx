import { RouterProvider } from 'react-router-dom';

import { router } from '@router/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '@styles/global.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
