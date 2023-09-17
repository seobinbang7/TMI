import { Outlet } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import { DarkModeProvider } from './layout/DarkModeContext';
import S from './App.module.css';

function App() {
  return (
    <DarkModeProvider>
        <div className={`App ${S.appWrapper}`}>
          <RootLayout className={`${S.appWrapper}`}>
            <main>
              <Outlet />
            </main>
          </RootLayout>
        </div>
    </DarkModeProvider>
  );
}

export default App;
