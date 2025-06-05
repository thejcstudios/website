import { useInView } from "../hooks/useInView";

type Props = {
  slide: { prev: string; next: string; alt: string };
  isActive: boolean;
  index: number;
  onClick: () => void;
};

export default function GallerySlideItem({ slide, isActive, index, onClick }: Props) {
  const { ref, isVisible } = useInView(0.1, "0px", true);

  return (
    <div
      ref={ref}
      key={index}
      className={`gallery-slider__slide ${isActive ? "active" : ""} ${
        isVisible ? "visible" : ""
      }`}
      tabIndex={index + 1}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.code === "Enter") onClick();
      }}
    >
      <div className="gallery-slider__image">
        <img
          className="gallery-slider__img-prev"
          src={slide.prev}
          alt={slide.alt}
          loading="lazy"
        />
        <img
          className="gallery-slider__img-next"
          src={slide.next}
          alt={`${slide.alt} Active`}
          loading="lazy"
        />
      </div>
    </div>
  );
}
