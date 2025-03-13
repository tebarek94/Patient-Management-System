import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./assets/css/styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
    </BrowserRouter>
)
