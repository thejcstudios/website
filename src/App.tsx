import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar1 from './components/Navbar';
import HeroPage from './components/HeroPage';
import PhotoGallery from './components/PhotoGallery';
import Parralax from './components/Parralax';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import GallerySlider from './components/GallerySlider';
import VideoList from './components/VideoList';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import { Dashboard } from './pages/Dashboard';
import Login1 from './pages/Login';
import VideoGalleryCollection from './pages/VideoGalleryCollection';

// Landing page layout as a separate component
const LandingPage = () => {
  return (
    <>
    <div><Navbar1 /></div>
      <div><HeroPage /></div>
      <div><Parralax /></div>
      <div><PhotoGallery /></div>
      <div><AboutUs /></div>
      <div><Services /></div>
      <div><GallerySlider /></div>
      <div><VideoList /></div>
      <div><Feedback /></div>
      <div><Footer /></div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login1 />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/videos" element={<VideoGalleryCollection />} />
      </Routes>
    </Router>
  );
};

export default App;