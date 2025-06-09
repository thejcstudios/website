import { useState } from "react";
import { useInView } from "./hooks/useInView"; // Adjust the path as needed
import GallerySlideItem from "./hooks/GallerySlideItem"; // Adjust the path as needed

function GallerySlider() {
  const slides = [
    {
      prev: "https://i.imgur.com/4N7kDjE.jpeg", // landscape
      next: "https://i.imgur.com/pXn2Dvc.jpeg", // square
      alt: "Gallery Slide - 1",
    },
    {
      prev: "https://i.imgur.com/QNvRcbN.jpeg",
      next: "https://i.imgur.com/Wrvxukx.jpeg",
      alt: "Gallery Slide - 2",
    },
    {
      prev: "https://i.imgur.com/8x37LDW.jpeg",
      next: "https://i.imgur.com/mpsr2Ke.jpeg",
      alt: "Gallery Slide - 3",
    },
    {
      prev: "https://i.imgur.com/jjzxCYx.jpeg",
      next: "https://i.imgur.com/3AAbSnj.jpeg",
      alt: "Gallery Slide - 4",
    },
    {
      prev: "https://i.imgur.com/KjgIJVy.jpeg",
      next: "https://i.imgur.com/murjth9.jpeg",
      alt: "Gallery Slide - 5",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const { ref: titleRef, isVisible: isTitleVisible } = useInView(0.2, "0px", true);
  const { ref: textRef, isVisible: isTextVisible } = useInView(0.2, "0px", true);
  const { ref: wrapperRef, isVisible: isWrapperVisible } = useInView(0.2, "0px", true);

  return (
    <section id="photo" className="base-template">
      <div className="wrapper base-template__wrapper">
        <h1
          ref={titleRef}
          className={`base-template__title ${isTitleVisible ? "visible" : ""}`}
        >
          Elevating Stylish Photography
        </h1>

        <div
          ref={textRef}
          className={`base-template__text ${isTextVisible ? "visible" : ""}`}
        >
          At JC Studio, we believe photography is more than just capturing images—
          it's about elevating each moment with style, emotion, and artistic flair. <br />
          Whether it's a grand wedding, a corporate milestone, or a creative editorial,
          our lens is focused on transforming ordinary moments into timeless visual stories. <br />
          We blend elegance with authenticity, ensuring every frame reflects the essence
          of your occasion while maintaining a distinct, stylish touch. Let us help you tell
          your story—beautifully, boldly, and beyond expectation.
        </div>

        <div
          ref={wrapperRef}
          className={`base-template__content ${isWrapperVisible ? "visible" : ""}`}
        >
          <div className="gallery-slider">
            <div className="gallery-slider__slider">
              <div className="gallery-slider__wrapper">
                {slides.map((slide, index) => (
                  <GallerySlideItem
                    key={index}
                    slide={slide}
                    index={index}
                    isActive={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GallerySlider;
