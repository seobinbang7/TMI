import { Outlet } from 'react-router-dom';
import RootLayout from './layout/RootLayout';

function App() {
  return (
    <div className="App">
      <RootLayout>
        <main>
          <Outlet />
        </main>
      </RootLayout>
    </div>
  );
}

export default App;
