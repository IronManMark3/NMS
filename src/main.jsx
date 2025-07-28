import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@styles/index.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

// ✅ Animate on scroll
AOS.init({
  duration: 1000,
  once: false,
  easing: 'ease-in-out',
  mirror: false
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
