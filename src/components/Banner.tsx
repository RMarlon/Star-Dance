import { BannerType } from "@/types/BannerType";

type PropsBanner = {
    banner: BannerType[];
}
export const Banner = ({ banner }: PropsBanner) => {
    return (
        <>
            {banner.map(item => (
                <div key={item.id}>
                    <video controls autoPlay src={item.video}/>
                </div>
            ))}

        </>
    );
}