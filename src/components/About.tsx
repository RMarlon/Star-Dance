import { AboutUs } from "@/types/AboutUs";
import { Slider } from "@/components/Slider";
import { listSliderData } from "@/data/listSliderData";

import { Swiper } from 'swiper/react';

type PropsAbout = {
    we: AboutUs[];
}

export const About = ({ we }: PropsAbout) => {
    return (
        <>
            {we.map(item => (
                <div key={item.id}>
                    <div className="text-white bg-black flex flex-col items-center lg:flex-row lg:justify-between font-display-1 px-10 py-10">
                        <div className="w-full">
                            <p id="about" className="text-2xl pb-4 border-b border-gray-700 text-center font-display">
                                {item.about[0]}
                            </p>

                            <p className="w-full  sm:w-[550px] m-auto text-justify py-7 text-gray-700 font-medium lg:p-10 ">
                                {item.about[1]}
                            </p>
                        </div>
                        <Swiper>
                            <Slider data={listSliderData} />
                        </Swiper>
                    </div>
                </div>
            ))}
        </>
    );
}