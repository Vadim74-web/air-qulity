import React from 'react';
import SlideFacts from "./SlideFacts";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import './Facts.css';


SwiperCore.use([Navigation, Pagination]);

const Facts = ({title, slides}) => {
    const factsSlides = slides.map ((slide) => <SwiperSlide>  <SlideFacts item={slide} key={slide.id} />     </SwiperSlide>);

    return (
        <section className="facts container">
            <h2 className="facts-title">{title}</h2>
            <div className="swiper-button-next" />
            <Swiper
                spaceBetween={40}
                slidesPerView={3}
                                
                navigation= {{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}

                  pagination= {{
                    el: '.facts-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                      return `<span class="facts-pagination-bullet ${className}"></span>`;
                    },
                }}
                
                slidesPerGroup={3}>
            
                {factsSlides}
            </Swiper>
            <div className="swiper-button-prev" />
            <div className="facts-pagination" />

        </section>
    );
};

export default Facts;