import { AboutUs } from "@/types/AboutUs";

type PropsAbout = {
    we: AboutUs[];
}
export const About = ({we}:PropsAbout) =>{
    return(
        <>
            {we.map(item =>(
                <div key={item.id}>
                    <div className="text-black flex flex-col items-center lg:flex-row lg:justify-around font-display-1 px-10 py-4">
                        <div className="w-[600px]">
                            <p id="about" className="text-2xl pb-4 border-b border-gray-700 text-center font-display">
                                {item.about[0]}
                            </p>

                            <p className="w-[380px] sm:w-[600px] m-auto text-justify py-7 text-gray-700 font-medium">
                                {item.about[1]}
                            </p>
                        </div>

                        <div>
                            <img src={item.goupImg} alt="imagens do grupo star dance" className="w-full"/>
                            <h2 className="text-center text-xl pt-4 font-display">{item.title}</h2>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}