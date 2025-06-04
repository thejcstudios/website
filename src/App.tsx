
import HeroPage from "./components/HeroPage";
import PhotoGallery from "./components/PhotoGallery";
import Parralax from "./components/Parralax";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import GallerySlider from "./components/GallerySlider";
import VideoList from "./components/VideoList";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

function App() {

  

  return (
    <>
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
}

export default App;
