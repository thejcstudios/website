import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.tsx'
import './App.css'
import './Gallery.scss'
import "./GallerySlider.css";
import './Feeedback.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Hero.css'
import "./LoadingSpinner.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
