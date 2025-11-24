import { Outlet } from 'react-router-dom';
import Toast from '@components/toast/Toast'

export default function Layout() {
  return (
    <main>
      <Outlet />
      <Toast />
    </main>
  );
}
