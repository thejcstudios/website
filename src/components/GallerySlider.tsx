import { useState } from "react";
import rec1 from '../assets/rec1.jpg';
import sq1 from '../assets/sq1.jpg';
import rec2 from '../assets/rec2.jpg';
import sq2 from '../assets/sq2.jpg';
import rec3 from '../assets/rec3.jpg';
import sq3 from '../assets/sq3.jpg';
import rec4 from '../assets/rec4.jpg';
import sq4 from '../assets/sq4.jpg';
import rec5 from '../assets/rec5.jpg';
import sq5 from '../assets/sq5.jpg';


function GallerySlider() {
  const slides = [
    {
      prev: rec1,
      next: sq1,
      alt: "Gallery Slide - 1",
    },
    {
      prev: rec2,
      next: sq2,
      alt: "Gallery Slide - 2",
    },
    {
      prev: rec3,
      next: sq3,
      alt: "Gallery Slide - 3",
    },
    {
      prev: rec4,
      next: sq4,
      alt: "Gallery Slide - 4",
    },
    {
      prev: rec5,
      next: sq5,
      alt: "Gallery Slide - 5",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
   

      <section className="base-template">
        <div className="wrapper base-template__wrapper">
          <h1 className="base-template__title">
            Elevating Stylish Photography
          </h1>
          <div className="base-template__text">
          At JC Studio, we believe photography is more than just capturing images—it's about elevating each moment with style, emotion, and artistic flair.     <br />Whether it's a grand wedding, a corporate milestone, or a creative editorial, our lens is focused on transforming ordinary moments into timeless visual stories.     <br />We blend elegance with authenticity, ensuring every frame reflects the essence of your occasion while maintaining a distinct, stylish touch. Let us help you tell your story—beautifully, boldly, and beyond expectation.
        
            
          </div>

          <div className="base-template__content">
            <div className="gallery-slider">
              <div className="gallery-slider__slider">
                <div className="gallery-slider__wrapper">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`gallery-slider__slide ${
                        index === activeIndex ? "active" : ""
                      }`}
                      tabIndex={index + 1}
                      onClick={() => setActiveIndex(index)}
                      onKeyDown={(e) => {
                        if (e.code === "Enter") setActiveIndex(index);
                      }}
                    >
                      <div className="gallery-slider__image">
                        <img
                          className="gallery-slider__img-prev"
                          src={slide.prev}
                          alt={slide.alt}
                        />
                        <img
                          className="gallery-slider__img-next"
                          src={slide.next}
                          alt={`${slide.alt} Active`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GallerySlider;