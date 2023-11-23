import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "./SlideHome.css";

function SlideHome() {
  const slides = [
    { id: "1", image: "http://cdn.discordapp.com/attachments/1139577278892875784/1177249762215477319/1.png" },
    { id: "2", image: "http://cdn.discordapp.com/attachments/1139577278892875784/1177249757354270800/2.png" },
    { id: "3", image: "http://cdn.discordapp.com/attachments/1139577278892875784/1177249757748543518/3.png" },
    { id: "4", image: "http://cdn.discordapp.com/attachments/1139577278892875784/1177249758105051256/4.png" },
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
            <img src={slide.image} alt={`Slide ${slide.id}`} className="slide-imagem" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SlideHome;
