import { RouterProvider } from 'react-router-dom';
import router from './routes';
import RootLayout from './layout/RootLayout';
import './App.css'

function App() {
  return (
    <>
        <RouterProvider router={router} />
        <RootLayout />
    </>
  );
}

export default App
