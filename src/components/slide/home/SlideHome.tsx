import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "./SlideHome.css"

function SlideHome() {
    const slides = [
        { id: "1", image: "src/assets/slide/1.jpg" },
        { id: "2", image: "src/assets/slide/2.jpg" },
        { id: "3", image: "src/assets/slide/3.jpg" },
        { id: "4", image: "src/assets/slide/4.jpg" },
    ];

    return (
        <div className="container">
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
                onSlideChange={() => console.log('slide change')}
                className="swiper-home"
            >
                {slides.map(slide => (
                    <SwiperSlide>
                        <img src={slide.image} alt="Slides" className="slide-imagem" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SlideHome;