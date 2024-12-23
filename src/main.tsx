import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { init as initEmailJS } from '@emailjs/browser';
import App from './App.tsx';
import './index.css';

// Initialize EmailJS
initEmailJS('3fSjce1abYHGSZ82z');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);