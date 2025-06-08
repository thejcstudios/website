import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App.tsx'
import './App.css'
import './assets/styles.css/Gallery.scss'
import "./assets/styles.css/GallerySlider.css";
import './assets/styles.css/Feeedback.css'
import './assets/styles.css/Hero.css'
import './assets/styles.css/footer.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
