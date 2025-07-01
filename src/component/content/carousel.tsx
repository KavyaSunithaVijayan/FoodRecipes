import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function MultipleSlideCarousel() {
  const slides = [
    {
      index: "1",
      image: "./images/banner/01.jpg",
      alt: "01.jpg",
    },
    {
      index: "2",
      image: "./images/banner/02.jpg",
      alt: "02.jpg",
    },
    {
      index: "3",
      image: "./images/banner/03.jpg",
      alt: "03.jpg",
    },
    {
      index: "4",
      image: "./images/banner/02.jpg",
      alt: "04.jpg",
    },
  ];

  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={5}
        breakpoints={{
          1920: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1028: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          990: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        className="multiple-slide-carousel swiper-container"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.index}>
            <div className="h-96 flex justify-center items-center">
              <img
                src={slide.image}
                alt={slide.alt}
                className="object-cover h-full w-full rounded-2xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
