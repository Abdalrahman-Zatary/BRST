import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MenubarProvider } from './context/menubar/menubar.provider.jsx';

import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MenubarProvider>
        <App />
      </MenubarProvider>
    </BrowserRouter>
  </StrictMode>,
)
