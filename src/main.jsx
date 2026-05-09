import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import DarkNinja from './pages/DarkNinja.jsx';
import Pipsy from './pages/Pipsy.jsx';
import GizlilikPolitikasi from './pages/Gizlilik.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/dark-ninja" element={<DarkNinja />} />
            <Route path="/pipsy" element={<Pipsy />} />
            <Route path="/pipsy/gizlilik-politikasi" element={<GizlilikPolitikasi />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
