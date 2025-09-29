import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';

import { EffectCoverflow } from 'swiper/modules';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';


import { Dat } from "@/types/Dat";

type PropsSlider = {
    data: Dat[];
}

export const Slider = ({ data }: PropsSlider) => {

    return (
        <div>
            <Swiper
                modules={[EffectCoverflow]}
                effect='coverflow'
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay
            >
                {data.map(item => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt="Slider images"
                            className="w-full h-[450px] rounded-md "
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}