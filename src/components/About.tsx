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
<<<<<<< HEAD
                    <div className="text-white bg-black flex flex-col items-center lg:flex-row lg:justify-between font-display-1 px-10 py-10">
=======
                    <div className="text-white bg-black  flex flex-col items-center lg:flex-row lg:justify-between font-display-1 px-10 py-10">
>>>>>>> f6960f0c4b146616462393e135ea4346c0f2d045
                        <div className="w-full">
                            <p id="about" className="text-2xl pb-4 border-b border-gray-700 text-center font-display">
                                {item.about[0]}
                            </p>

                            <p className="w-full  sm:w-[550px] m-auto text-justify py-7 text-gray-700 font-medium lg:p-10 ">
                                {item.about[1]}
                            </p>
                        </div>
<<<<<<< HEAD
                        <Swiper>
                            <Slider data={listSliderData} />
                        </Swiper>
=======

                        <div >
                            <img src={item.goupImg} alt="imagens do grupo star dance" className="pt-40"/>
                            <h2 className="text-center text-2xl pt-4 font-display">{item.title}</h2>
                        </div>
>>>>>>> f6960f0c4b146616462393e135ea4346c0f2d045
                    </div>
                </div>
            ))}
        </>
    );
}