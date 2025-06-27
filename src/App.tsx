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
import MessageUs from './components/MessageUs';
import TeamOverlay from './components/AboutImage';
import Footer from './components/Footer'; // Make sure Footer is imported
import { Dashboard } from './pages/Dashboard';
import Login1 from './pages/Login';
import VideoGalleryCollection from './pages/VideoGalleryCollection';
import ImageGallery from './pages/ImageGalleryCollection';

// Landing page layout as a separate component
const LandingPage = () => {
  return (
    <>
    <div><Navbar1 /></div>
      <div><HeroPage /></div>
      <div><Parralax /></div>
      <div><PhotoGallery /></div>
      <div><AboutUs /></div>
      <div><TeamOverlay /></div>
      <div><Services /></div>
      <div><GallerySlider /></div>
      <div><VideoList /></div>
      <div><Feedback /></div>
      <div><MessageUs /></div>
      <div><Footer /></div>
    </>
  );
};

// New component to encapsulate VideoGalleryCollection and Footer
const VideoCollectionPageLayout = () => {
  return (
    <>
    <div><Navbar1 /></div>
      <VideoGalleryCollection />
      {/* Removed <ImageGallery /> from here as requested */}
      <Footer /> {/* The Footer is now included here */}
    </>
  );
};

// New component to encapsulate ImageGallery and Footer
const ImageCollectionPageLayout = () => {
  return (
    <>
    <div><Navbar1 /></div>
      <ImageGallery />
      <Footer />
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
        {/* Use the new VideoCollectionPageLayout component for the /videos route */}
        <Route path="/videos" element={<VideoCollectionPageLayout />} />
        {/* Use the new ImageCollectionPageLayout component for the /images route */}
        <Route path="/images" element={<ImageCollectionPageLayout />} />
      </Routes>
    </Router>
  );
};

export default App;
