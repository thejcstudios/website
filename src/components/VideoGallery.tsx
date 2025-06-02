import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function SafeSwiper() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // ✅ Check before accessing
          if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        onSwiper={(swiper) => {
          // Wait to ensure refs are attached
          setTimeout(() => {
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
      >
        <SwiperSlide>
          <div className="p-8 bg-blue-300 rounded-xl text-center">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-8 bg-green-300 rounded-xl text-center">Slide 2</div>
        </SwiperSlide>

        <button
          ref={prevRef}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white px-4 py-2 rounded-full shadow"
        >
          Prev
        </button>
        <button
          ref={nextRef}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white px-4 py-2 rounded-full shadow"
        >
          Next
        </button>
      </Swiper>
    </div>
  );
}