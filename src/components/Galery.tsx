import { listGalery } from "@/data/listGalery";
import { GaleryUs } from "@/types/GaleryUs";
import { useState } from "react";
import { Modal } from "./Modal";
import '../app/galery.css';

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
        <div className="bg-white">
            <h2 className="flex items-center justify-between font-display text-2xl text-black text-right py-6 px-10 ">
                <img src="images/moudura.png" alt="imagem de moudura" />
                Galeria Star Dance
            </h2>
            <div className="border-b text-gray-500"></div>
            
            <div id="body" className="body">
                <div id="wrapper" className="wrapper">
                    <div className="cover cover-left"></div>
                    <div className="cover cover-right turn"></div>

                    <div className="book font-display-1">
                        <div className="book-page page-left">
                            <div className="profile-page">
                                <img src="images/logo2.png" alt="logo Star Dance" className="logo" />
                                <h1 className="title font-display">Star Dance</h1>
                                <h3>Cover K-pop</h3>

                                <div className="social-media">

                                </div>

                                <p>
                                    Essas são nossas imagens, elas mostram nossos momentos em apresentações e ensaios.
                                    Cada um deles é o que mantem nosso grupo unido e atuando até hoje. Somos gratos a esses momentos, e
                                    sei que outros estão por vir, e sempre daremos nosso melhor!
                                </p>

                                <div className="btn-box">
                                    <a href="" className="btn contact-me" >Venha fazer parte</a>
                                </div>
                            </div>
                        </div>
                        {/* page 1 & 2 */}
                        <div className="book-page page-right" id="turn-1">
                            <div className="page-front">
                                <h1 className="title">Memorias</h1>

                                <div className="workeduc-box">
                                    <div className="workeduc-content">
                                        <span className="year">2020 - 2021</span>
                                        <h3>Nosso desenvolvimento</h3>
                                        <div>
                                            {img.map(item => (
                                                <>
                                                    <div key={item.id} onClick={() => openModal(item.id)} className="cursor-pointer">
                                                        <img  src={item.image} alt="imagens do grupo star dance" className="w-[450px] h-[250px] pt-2 rounded-md duration-500 transition ease-in-out hover:opacity-80" />
                                                    </div>
                                                </>
                                            ))}
                                        </div>
                                        {modal &&
                                            <Modal image={imageModal} closeModal={closeModal} />
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="page-back">
                                <h1 className="title">Eventos</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}