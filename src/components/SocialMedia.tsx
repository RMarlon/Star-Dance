import { SocialMediaType } from "@/types/SocialMediaType";

type PropsSocial = {
    medias: SocialMediaType[];
}
export const SocialMedia = ({ medias }: PropsSocial) => {
    return (
        <div>
            {medias.map(item => (
                <>
                    <div key={item.id} className="flex gap-8">
                        <a href={item.instagram[1]} target="_blank">
                            <img src={item.instagram[0]} alt="logo do instagram"
                                className="w-10 h-10 hover:border-b hover:border-gray-600 hover:opacity-80
                                hover:pb-2 duration-300 transition-all ease-in-out" />
                        </a>

                        <a href={item.facebook[1]} target="_blank">
                            <img src={item.facebook[0]} alt="logo do facebook"
                                className="w-10 h-10 hover:border-b hover:border-gray-600 hover:opacity-80
                                hover:pb-2 duration-300 transition-all ease-in-out" />
                        </a>

                        <a href={item.tiktok[1]} target="_blank">
                            <img src={item.tiktok[0]} alt="logo do facebook"
                                className="w-10 h-10 hover:border-b hover:border-gray-600 hover:opacity-80
                                hover:pb-2 duration-300 transition-all ease-in-out" />
                        </a>
                    </div>
                </>
            ))}
        </div>
    );
}