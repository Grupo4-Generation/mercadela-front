import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "./SlideHome.css";
import { Link } from "react-router-dom";

function SlideHome() {
  const slides = [
    {
      id: "1",
      image: "https://iili.io/JX1jgtV.png",
    },
    {
      id: "2",
      image: "https://iili.io/JX1NFqP.png",
    },
    {
      id: "3",
      image: "https://iili.io/JX1j89j.png",
    },
    {
      id: "4",
      image: "https://iili.io/JX1jUwQ.png",
    },
  ];

  return (
    <div className="w-[90vw] h-fit">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        className="container">

        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Link to="/sobre">
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="slide-imagem"/>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SlideHome;
