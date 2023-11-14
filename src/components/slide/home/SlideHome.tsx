import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css"

import i1 from "../../../assets/teste/1.jpg"
import i2 from "../../../assets/teste/2.jpg"
import i3 from "../../../assets/teste/3.jpg"
import i4 from "../../../assets/teste/4.jpg"
import "./SlideHome.css"

function SlideHome() {
    const slides = [i1, i2, i3, i4];

    return (
        <div className="container">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                loop={true}
                className="swiper-home"
            >
                {slides.map(slide => (
                    <SwiperSlide>
                        <img src={slide} alt={slide} className="min-w-[90%] min-h-[90%]"/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SlideHome;