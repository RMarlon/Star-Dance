"use client";

import { listGalery } from "@/data/listGalery";
import { GaleryUs } from "@/types/GaleryUs";
import { useState } from "react";
import { Modal } from "./Modal";
import { useEffect, useRef } from 'react';
import '../app/galery.css';



type PropsGaley = {
    img: GaleryUs[];
    handleClick: () => void;
}

export const Galery = ({ img, handleClick }: PropsGaley) => {

    const pageTurnBtnRef = useRef<NodeListOf<HTMLElement> | null>(null);
    const pagesRef = useRef<NodeListOf<HTMLElement> | null>(null);
    const contactMeBtnRef = useRef<HTMLElement | null>(null);
    const backProfileBtnRef = useRef<HTMLElement | null>(null);
    const coverRightRef = useRef<HTMLElement | null>(null);
    const pageLeftRef = useRef<HTMLElement | null>(null);
    const pageNumberRef = useRef<number>(0);
    const totalPagesRef = useRef<number>(0);

    // Funções auxiliares
    const reverseIndex = (): void => {
        pageNumberRef.current--;
        if (pageNumberRef.current < 0) {
            pageNumberRef.current = totalPagesRef.current - 1;
        }
    };

    const handlePageTurn = (pageTurnId: string, index: number) => {
        const pageTurn = document.getElementById(pageTurnId);
        if (!pageTurn) return;

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = (20 - index).toString();
            }, 500);
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = (20 + index).toString();
            }, 500);
        }
    };

    const handleContactMe = () => {
        if (!pagesRef.current) return;

        pagesRef.current.forEach((page: HTMLElement, index: number) => {
            setTimeout(() => {
                page.classList.add('turn');
                setTimeout(() => {
                    page.style.zIndex = (20 + index).toString();
                }, 500);
            }, (index + 1) * 200 + 100);
        });
    };

    const handleBackProfile = () => {
        if (!pagesRef.current) return;

        pagesRef.current.forEach((_: HTMLElement, index: number) => {
            setTimeout(() => {
                reverseIndex();
                pagesRef.current![pageNumberRef.current].classList.remove('turn');
                setTimeout(() => {
                    pagesRef.current![pageNumberRef.current].style.zIndex = (10 + index).toString();
                }, 500);
            }, (index + 1) * 200 + 100);
        });
    };

    useEffect(() => {
        // Só execute no cliente
        if (typeof window === 'undefined') return;

        // Coletar elementos
        pageTurnBtnRef.current = document.querySelectorAll('.nexprev-btn');
        pagesRef.current = document.querySelectorAll('.book-page.page-right');
        contactMeBtnRef.current = document.querySelector('.btn.contact-me');
        backProfileBtnRef.current = document.querySelector('.btn.back-profile');
        coverRightRef.current = document.querySelector('.cover.cover-right');
        pageLeftRef.current = document.querySelector('.book-page.page-left');

        // Configurar totais
        if (pagesRef.current) {
            totalPagesRef.current = pagesRef.current.length;
        }

        // Configurar event listeners para botões de página
        pageTurnBtnRef.current?.forEach((el: HTMLElement, index: number) => {
            el.addEventListener('click', () => {
                const pageTurnId = el.getAttribute('data-page');
                if (pageTurnId) {
                    handlePageTurn(pageTurnId, index);
                }
            });
        });

        // Configurar botão Contact Me
        contactMeBtnRef.current?.addEventListener('click', handleContactMe);

        // Configurar botão Back Profile
        backProfileBtnRef.current?.addEventListener('click', handleBackProfile);

        // Animações iniciais
        const initialAnimations = () => {
            setTimeout(() => {
                coverRightRef.current?.classList.add('turn');
            }, 2100);

            setTimeout(() => {
                if (coverRightRef.current) {
                    coverRightRef.current.style.zIndex = '-1';
                }
            }, 2800);

            setTimeout(() => {
                if (pageLeftRef.current) {
                    pageLeftRef.current.style.zIndex = '20';
                }
            }, 3200);

            // Animação inicial das páginas
            if (pagesRef.current) {
                pagesRef.current.forEach((_: HTMLElement, index: number) => {
                    setTimeout(() => {
                        reverseIndex();
                        pagesRef.current![pageNumberRef.current].classList.remove('turn');
                        setTimeout(() => {
                            pagesRef.current![pageNumberRef.current].style.zIndex = (10 + index).toString();
                        }, 500);
                    }, (index + 1) * 200 + 2100);
                });
            }
        };

        initialAnimations();

        // Cleanup
        return () => {
            pageTurnBtnRef.current?.forEach((el: HTMLElement) => {
                el.removeEventListener('click', () => { });
            });

            contactMeBtnRef.current?.removeEventListener('click', handleContactMe);
            backProfileBtnRef.current?.removeEventListener('click', handleBackProfile);
        };
    }, []);


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
                    <div className="cover cover-right"></div>

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
                                    <a href="#" className="btn contact-me">Venha fazer parte</a>
                                    {/* <a href="#" className="btn">Futuro</a> */}
                                </div>
                            </div>
                        </div>
                        {/* page 1 & 2 */}
                        <div className="book-page page-right turn" id="turn-1">
                            <div className="page-front">
                                <h1 className="title">Memorias</h1>

                                <div className="workeduc-box">
                                    <div className="workeduc-content">
                                        <span className="year">2020 - 2021</span>
                                        <h3>Nosso desenvolvimento</h3>
                                        <div>
                                            {img.map(item => (
                                                <div key={item.id} onClick={() => openModal(item.id)} className="cursor-pointer">
                                                    <img src={item.image} alt="imagens do grupo star dance" className="w-[450px] h-[250px] pt-2 rounded-md duration-500 transition ease-in-out hover:opacity-80" />
                                                </div>
                                            ))}
                                        </div>
                                        {modal &&
                                            <Modal image={imageModal} closeModal={closeModal} />
                                        }
                                    </div>
                                </div>

                                <span className="number-page">1</span>
                                <span className="nexprev-btn" data-page="turn-1">
                                    <img src="images/arrow-next.svg" alt="icon next" />
                                </span>
                            </div>

                            <div className="page-back">
                                <h1 className="title">Eventos</h1>

                                <div className="workeduc-box">
                                    <div className="workeduc-content">
                                        <span className="year">2020 - 2021</span>
                                        <h3>Nosso desenvolvimento</h3>
                                        <div>
                                            {img.map(item => (
                                                <div key={item.id} onClick={() => openModal(item.id)} className="cursor-pointer">
                                                    <img src={item.image} alt="imagens do grupo star dance" className="w-[450px] h-[250px] pt-2 rounded-md duration-500 transition ease-in-out hover:opacity-80" />
                                                </div>
                                            ))}
                                        </div>
                                        {modal &&
                                            <Modal image={imageModal} closeModal={closeModal} />
                                        }
                                    </div>
                                </div>

                                <span className="number-page">2</span>
                                <span className="nexprev-btn back" data-page="turn-1">
                                    <img src="images/arrow-back.svg" alt="icon back" />
                                </span>
                            </div>
                        </div>
                        {/* page 3 & 4 */}

                        <div className="book-page page-right turn" id="turn-2">
                            {/* page 3 */}
                            <div className="page-front">
                                <h1 className="title">Memorias</h1>
                                <div className="workeduc-box">
                                    <div className="workeduc-content">
                                        <span className="year">2020 - 2021</span>
                                        <h3>Nosso desenvolvimento</h3>
                                        <div>
                                            {img.map(item => (
                                                <div key={item.id} onClick={() => openModal(item.id)} className="cursor-pointer">
                                                    <img src={item.image} alt="imagens do grupo star dance" className="w-[450px] h-[250px] pt-2 rounded-md duration-500 transition ease-in-out hover:opacity-80" />
                                                </div>
                                            ))}
                                        </div>
                                        {modal &&
                                            <Modal image={imageModal} closeModal={closeModal} />
                                        }
                                    </div>
                                </div>

                                <span className="number-page">3</span>
                                <span className="nexprev-btn" data-page="turn-2">
                                    <img src="images/arrow-next.svg" alt="icon next" />
                                </span>
                            </div>
                            {/* page 4 */}

                            <div className="page-back">
                                <h1 className="title">Eventos</h1>

                                <div className="workeduc-box">
                                    <div className="workeduc-content">
                                        <span className="year">2020 - 2021</span>
                                        <h3>Nosso desenvolvimento</h3>
                                        <div>
                                            {img.map(item => (
                                                <div key={item.id} onClick={() => openModal(item.id)} className="cursor-pointer">
                                                    <img src={item.image} alt="imagens do grupo star dance" className="w-[450px] h-[250px] pt-2 rounded-md duration-500 transition ease-in-out hover:opacity-80" />
                                                </div>
                                            ))}
                                        </div>
                                        {modal &&
                                            <Modal image={imageModal} closeModal={closeModal} />
                                        }
                                    </div>
                                </div>

                                <span className="number-page">4</span>
                                <span className="nexprev-btn back" data-page="turn-2">
                                    <img src="images/arrow-back.svg" alt="icon back" />
                                </span>
                            </div>
                        </div>

                        {/* page 5 & 6 */}

                        <div className="book-page page-right turn" id="turn-3">
                            <div className="page-front">
                                <h1 className="title">Memorias</h1>
                                <div className="workeduc-box">
                                    <div className="workeduc-content">
                                        <span className="year">2020 - 2021</span>
                                        <h3>Nosso desenvolvimento</h3>
                                        <div>
                                            {img.map(item => (
                                                <div key={item.id} onClick={() => openModal(item.id)} className="cursor-pointer">
                                                    <img src={item.image} alt="imagens do grupo star dance" className="w-[450px] h-[250px] pt-2 rounded-md duration-500 transition ease-in-out hover:opacity-80" />
                                                </div>
                                            ))}
                                        </div>
                                        {modal &&
                                            <Modal image={imageModal} closeModal={closeModal} />
                                        }
                                    </div>
                                </div>

                                <span className="number-page">5</span>
                                <span className="nexprev-btn" data-page="turn-3">
                                    <img src="images/arrow-next.svg" alt="icon next" />
                                </span>
                            </div>

                            <div className="page-back">
                                <h1 className="title">⭐</h1>

                                <div className="skills-box">
                                    <div className="profile-page">
                                        <h3>E por hoje é isso!☺️</h3>
                                        <div className="content">
                                            <img src="images/logo2.png" alt="logo Star Dance" className="logo" />
                                        </div>
                                        <p>
                                            Se chegou até aqui, e gosta de K-pop, já pensou
                                            em fazer parte de um grupo? Então venha fazer uma
                                            audição com a gente. Veja se possui os requisitos
                                            mínimos.
                                        </p>

                                        <div className="btn-box back-profile">
                                            <a href="#" className="btn contact-me">Venha fazer parte</a>
                                            {/* <a href="#" className="btn back-profile">Rever</a> */}
                                        </div>
                                    </div>
                                </div>

                                <span className="number-page">6</span>
                                <span className="nexprev-btn back" data-page="turn-3">
                                    <img src="images/arrow-back.svg" alt="icon back" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
