import { createHashRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Mypage from './pages/mypage';

const { VITE_PUBLIC_URL } = import.meta.env;

const router = createHashRouter({
  basename: VITE_PUBLIC_URL,
  routes: [
    {
      path: '/',
      element: <App />,
      children: [{ index: true, element: <Home /> }],
    },
    { path: 'mypage', element: <Mypage /> },
  ],
});

export default router;