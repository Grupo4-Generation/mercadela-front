import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./SlideProdutos.css"
import CardProduto from "../../cardProduto/CardProduto";

export default function SlideProdutos() {
    return (
        <div className="container-produtos">
            <Swiper
                modules={[Pagination, Navigation]}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                slidesPerView={3}
                spaceBetween={30}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </div>
    )
}