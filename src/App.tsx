import { useEffect, useState } from "react";
import HeroPage from "./components/HeroPage";
import PhotoGallery from "./components/PhotoGallery";
import Parralax from "./components/Parralax";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import GallerySlider from "./components/GallerySlider";
import VideoCollection from "./components/VideoCollection";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [loading, setLoading] = useState(true);

  const youtubeVideoUrls = [
    "https://www.youtube.com/watch?v=jeqdYqsrsA0",
    "https://www.youtube.com/watch?v=JleoAppaxi0&list=RDEM79RRQ105L7V61p68gX8ahw&start_radio=1",
    "https://www.youtube.com/watch?v=6J9ixwhDYSM&list=RDEM79RRQ105L7V61p68gX8ahw&index=2",
    "https://www.youtube.com/watch?v=nM0xDI5R50E",
    "https://www.youtube.com/watch?v=D1PvIWdJ8xo",
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); // Simulate 2s load
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div><HeroPage /></div>
      <div><Parralax /></div>
      <div><PhotoGallery /></div>
      <div><AboutUs /></div>
      <div><Services /></div>
      <div><GallerySlider /></div>
      <div><VideoCollection urls={youtubeVideoUrls} /></div>
      <div><Feedback /></div>
      <div><Footer /></div>
    </>
  );
}

export default App;
