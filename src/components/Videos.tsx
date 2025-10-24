import { VideosUs } from "@/types/VideosUs";
import { SocialMedia } from "./SocialMedia";
import { listSocialMedia } from "@/data/listSocialMedia";

type PropsVideos = {
    play: VideosUs[];
}

export const Videos = ({ play }: PropsVideos) => {
    return (
        <div className="bg-black py-6">
            <div className="flex flex-col items-center 
                sm:flex-row sm:justify-between sm:items-center pb-4 px-10">
                <h2 className="font-display text-2xl text-white mt-4 mb-4">Vídeos Star Dance</h2>
                <section className="xl:mr-90">

                    <SocialMedia medias={listSocialMedia} />
                </section>
                <img src="images/videos.png" alt="imagem icone videos" className="w-15 hidden xl:block" />
            </div>


            <div className="border-b text-gray-500"></div>
            <div className="flex flex-col justify-around items-center md:flex-row">

                <div className="ml-10">
                    <img src="images/logo2.png" alt="imagem logo" className="w-40 md:w-90 lg:w-60 lg:h-30" />
                </div>

                <p className="text-gray-600 text-justify text-lg px-10 py-10 font-display-1 lg:py-0">
                    Essas são nossas imagens, elas mostram nossos momentos em apresentações e ensaios.
                    Cada um deles é o que mantem nosso grupo unido e atuando até hoje. Somos gratos a esses momentos, e
                    sei que outros estão por vir, e sempre daremos nosso melhor!
                </p>
            </div>

            <div
                className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
                bg-gray-800 bg-cover shadow shadow-white py-2 px-2
                bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% xl:rounded-md">

                {play.map(item => (
                    <>
                        <div key={item.id}>
                            <video src={item.videos} controls className="border border-white rounded-md cursor-pointer hover:opacity-80" />
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}