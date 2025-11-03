import { listGalery } from "@/data/listGalery";
import { GaleryUs } from "@/types/GaleryUs";
import { useState } from "react";
import { Modal } from "./Modal";
import { SocialMedia } from "./SocialMedia";
import { listSocialMedia } from "@/data/listSocialMedia";

type PropsGaley = {
    img: GaleryUs[];
    handleClick: () => void;
}

export const Galery = ({ img, handleClick }: PropsGaley) => {
    const [modal, setModal] = useState(false);
    const [imageModal, setImageModal] = useState('');

    const openModal = (id: number) => {
        const picture = listGalery.find(item => item.id === id);
        if (picture) {
            setImageModal(picture.image);
            setModal(true);
        }
    }

    const closeModal = () => {
        setModal(false);
    }

    return (
        <div className="bg-white py-6">

            <div
                className="flex flex-col items-center 
                sm:flex-row-reverse sm:justify-between sm:items-center pb-4 px-10">
                <h2 className="font-display text-2xl text-black">Galeria Star Dance</h2>
                <section className="xl:ml-[7.4rem] ">
                    <SocialMedia medias={listSocialMedia} />
                </section>
                <img src="images/moudura.png" alt="imagem de moudura" className="hidden xl:block" />
            </div>


            <div className="border-b text-gray-500"></div>
            <div className="flex flex-col-reverse justify-around items-center md:flex-row">
                <p className="text-gray-600 text-justify text-lg font-display-1 px-10 py-10">
                    Essas são nossas imagens, elas mostram nossos momentos em apresentações e ensaios.
                    Cada um deles é o que mantem nosso grupo unido e atuando até hoje. Somos gratos a esses momentos, e
                    sei que outros estão por vir, e sempre daremos nosso melhor!
                </p>
                <div className="mr-10">
                    <img src="images/logo2.png" alt="imagem logo" className="w-40 md:w-90  lg:w-60 lg:h-30" />
                </div>
            </div>

            <div
                className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
                bg-gray-800 bg-cover shadow-2xl shadow-black py-2 px-2
                bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% xl:rounded-md">

                {img.map(item => (
                    <>
                        <div onClick={() => openModal(item.id)} key={item.id} className="cursor-pointer">
                            <img src={item.image} alt="imagens do grupo star dance" className="w-full rounded-md duration-500 transition ease-in-out hover:opacity-80" />
                        </div>
                    </>
                ))}
            </div>
            {modal &&
                <Modal image={imageModal} closeModal={closeModal} />
            }
        </div>
    );
}