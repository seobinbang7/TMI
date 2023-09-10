import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { RootLayout } from './layout/RootLayout';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <div>
        <h1>안녕하세요</h1>
        <Home />
      </div>
    </>
  );
}

export default App;
