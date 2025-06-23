import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'; // Make sure this line exists and points to your main CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App'
import './App.css'
import './assets/styles/Gallery.scss'
import "./assets/styles/GallerySlider.css";
import './assets/styles/Feeedback.css'
import './assets/styles/Hero.css'
import './assets/styles/footer.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
