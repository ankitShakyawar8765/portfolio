import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Global error handlers to surface runtime errors in the browser console
window.addEventListener('error', (e) => {
  console.error('Window error:', e.error || e.message);
});
window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled Rejection:', e.reason);
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
