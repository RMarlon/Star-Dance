import { listSocialMedia } from "@/data/listSocialMedia";
import { SocialMedia } from "./SocialMedia";

export const Information = () => {
    return (
        <div>
            <div className="flex flex-col justify-between items-center bg-black px-10 py-6 xl:flex-row">
                <div className="flex flex-col justify-around items-center xl:flex-row">
                    <img src="images/logo2.png" alt="logo star dance" className="w-50 h-50" />
                    <div className="flex  flex-col items-center gap-8 font-display px-10">
                        <a
                            href="#about"
                            className="text-gray-500 hover:text-gray-400
                            duration-300 ease-in-out"
                        >
                            Nossa história
                        </a>
                        <a
                            href="#videos"
                            className="text-gray-500 text-center hover:text-gray-400
                            duration-300 ease-in-out"
                        >
                            Vídeos Star Dance
                        </a>
                        <a
                            href="#galery"
                            className="text-gray-500 text-center hover:text-gray-400
                            duration-300 ease-in-out"
                        >
                            Galeria Star Dance
                        </a>
                        <a
                            href="#auditions"
                            className="text-gray-500 text-center hover:text-gray-400
                            duration-300 ease-in-out"
                        >
                            Venha fazer parte
                        </a>
                    </div>

                </div>
                <div className="">
                    <img src="images/img1-sf.png" alt="image grupo star dance" className="w-full"/>
                </div>

                <div className="">
                    <h3 className="font-display pb-4 text-2xl">Nossas Redes</h3>
                    <SocialMedia medias={listSocialMedia}/>
                </div>
            </div>
        </div>
    );
}