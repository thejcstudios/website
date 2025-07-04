import { useState, useEffect } from 'react';
import '../assets/styles/Herov2.css'

// HeroSection component definition
function HeroSection() {
  // Array of image URLs for the carousel. Using placeholder images for demonstration.
  const images = [
    'https://i.imgur.com/8p7lUB1.jpeg',
    'https://i.imgur.com/YMrlsJu.jpeg',
    'https://i.imgur.com/rE87oI4.jpeg',
    'https://i.imgur.com/Ti87HTA.jpeg',
  ];

  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // The main heading is now static
  const mainHeading = "We create the magical world of memories - Where your narratives live on.";


  // useEffect hook to manage the image carousel
  useEffect(() => {
    // Set up an interval to change the image every 5 seconds (5000 milliseconds)
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(interval);
  }, [images.length]); // Re-run effect if images array length changes

  return (
    <>
      {/* Inline style block for CSS rules */}
     

      <section className="hero-section">
        {/* Background image carousel container */}
        <div className="background-carousel">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Background ${index + 1}`}
              // Apply CSS classes for full coverage, object-fit, smooth transitions, and explicit centering
              className={`background-image ${index === currentImageIndex ? 'active' : 'inactive'}`}
              // Fallback for image loading errors
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/1920x1080/CCCCCC/000000?text=Image+Error';
              }}
            />
          ))}
        </div>

        {/* Overlay to darken the background images for better text readability */}
        <div className="overlay"></div>

        {/* Content container for heading and button */}
        <div className="content-container">
          {/* Main heading */}
          <h1 className="main-heading">
            {mainHeading}
          </h1>

          {/* Call-to-action button */}
          <button
  className="call-to-action-button"
  onClick={() => (window.location.href = '/videos')}
>
  Discover More
</button>
        </div>

        {/* Navigation dots */}
        <div className="navigation-dots">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)} // Allows clicking dots to change image
              className={`dot-button ${index === currentImageIndex ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>
    </>
  );
}

export default HeroSection;
