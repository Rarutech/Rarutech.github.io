import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import LenisProvider from './components/LenisProvider';
import './styles/base.css';
import './styles/skeleton.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LenisProvider>
      <RouterProvider router={router} />
    </LenisProvider>
  </React.StrictMode>
);


