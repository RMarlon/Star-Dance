import { VideosUs } from "@/types/VideosUs";

type PropsVideos = {
    play: VideosUs[];
}

export const Videos = ({ play }: PropsVideos) => {
    return (
        <div className="bg-black py-10">
            <h2 className="flex items-center justify-between font-display text-2xl text-white text-right py-4 px-10">
                Vídeos Star Dance
                <img src="images/videos.png" alt="imagem icone videos" className="w-15" />
            </h2>
            <div className="border-b text-gray-500"></div>
            <div className="flex justify-around items-center">

                <div className="hidden md:block ml-10">
                    <img src="images/logo2.png" alt="imagem logo" className="w-60 h-30" />
                </div>

                <p className="text-gray-600 text-lg px-10 py-10 font-display-1 lg:py-0">
                    Essas são nossas imagens, elas mostram nossos momentos em apresentações e ensaios.
                    Cada um deles é o que mantem nosso grupo unido e atuando até hoje. Somos gratos a esses momentos, e
                    sei que outros estão por vir, e sempre daremos nosso melhor!
                </p>
            </div>

            <div
                className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
                bg-gray-800 bg-cover shadow shadow-white py-2 px-2
                bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% xl:rounded-md "
            >
                {play.map(item => (
                    <>
                        <div key={item.id}>
                            <video src={item.videos} controls className="border border-white rounded-md cursor-pointer hover:opacity-80"/>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}