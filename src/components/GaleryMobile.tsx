"use client";

import { TouchEvent, useRef, useState } from "react";
import { GaleryUs } from "@/types/GaleryUs";
import "../app/galery-mobile.css";

type Props = {
    img: GaleryUs[];
    onOpenImage: (id: number) => void;
};

type Page =
    | { kind: "cover" }
    | { kind: "photos"; title: string }
    | { kind: "closing" };

// Mesma sequência do livro no desktop: capa + páginas 1 a 6.
const PAGES: Page[] = [
    { kind: "cover" },
    { kind: "photos", title: "Memorias" },
    { kind: "photos", title: "Eventos" },
    { kind: "photos", title: "Memorias" },
    { kind: "photos", title: "Eventos" },
    { kind: "photos", title: "Memorias" },
    { kind: "closing" },
];

const NUMBERED_PAGES = PAGES.length - 1; // a capa não tem número
const SWIPE_MIN_DISTANCE = 50;

export const GaleryMobile = ({ img, onOpenImage }: Props) => {
    const [index, setIndex] = useState(0);
    // 0 = primeira renderização (sem animação), 1 = avançou, -1 = voltou
    const [direction, setDirection] = useState<0 | 1 | -1>(0);
    const touchStart = useRef<{ x: number; y: number } | null>(null);

    const go = (delta: 1 | -1) => {
        const next = index + delta;
        if (next < 0 || next >= PAGES.length) return;
        setIndex(next);
        setDirection(delta);
    };

    const handleTouchStart = (e: TouchEvent) => {
        const touch = e.touches[0];
        touchStart.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = (e: TouchEvent) => {
        const start = touchStart.current;
        touchStart.current = null;
        if (!start) return;

        const touch = e.changedTouches[0];
        const dx = touch.clientX - start.x;
        const dy = touch.clientY - start.y;

        // ignora toques curtos e gestos mais verticais (scroll da lista de fotos)
        if (Math.abs(dx) < SWIPE_MIN_DISTANCE) return;
        if (Math.abs(dx) < Math.abs(dy) * 1.5) return;

        go(dx < 0 ? 1 : -1);
    };

    const page = PAGES[index];
    const turnClass =
        direction === 1 ? "m-turn-next" : direction === -1 ? "m-turn-prev" : "";

    return (
        <section className="m-album" aria-label="Álbum de fotos">
            <div className="m-book font-display-1">
                <div
                    className="m-sheet"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* key = index: remonta o conteúdo a cada página e reinicia a animação */}
                    <div key={index} className={`m-content ${turnClass}`}>
                        {page.kind === "cover" && (
                            <div className="m-center">
                                <img src="/images/logo2.png" alt="logo Star Dance" className="m-logo" />
                                <h1 className="m-cover-title font-display">Star Dance</h1>
                                <h3>Cover K-pop</h3>
                                <p>
                                    Obserem agora as nossas memórias, e vejam o quanto crescemos. E se gostaram do que viram, venham fazer parte do nosso grupo.
                                </p>
                            </div>
                        )}

                        {page.kind === "photos" && (
                            <>
                                <h2 className="m-title font-display">{page.title}</h2>
                                <div className="m-timeline">
                                    <span className="m-year">2020 - 2021</span>
                                    <h3>Nosso desenvolvimento</h3>
                                    <div className="m-photos">
                                        {img.map(item => (
                                            <button
                                                key={item.id}
                                                type="button"
                                                className="m-photo"
                                                onClick={() => onOpenImage(item.id)}
                                                aria-label="Ampliar foto"
                                            >
                                                <img
                                                    src={item.image}
                                                    alt="imagens do grupo star dance"
                                                    loading="lazy"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}

                        {page.kind === "closing" && (
                            <>
                                <h2 className="m-title font-display">⭐</h2>
                                <div className="m-center">
                                    <h3>E por hoje é isso!☺️</h3>
                                    <img src="/images/logo2.png" alt="logo Star Dance" className="m-logo" />
                                    <p>
                                        Se chegou até aqui, e gosta de K-pop, já pensou
                                        em fazer parte de um grupo? Então venha fazer uma
                                        audição com a gente. Veja se possui os requisitos
                                        mínimos.
                                    </p>
                                    <a href="#auditions" className="m-cta">Venha fazer parte</a>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="m-controls">
                        <button
                            type="button"
                            className="m-nav"
                            onClick={() => go(-1)}
                            disabled={index === 0}
                            aria-label="Página anterior"
                        >
                            <img src="/images/arrow-back.svg" alt="" />
                        </button>

                        <span className="m-count" aria-live="polite">
                            {index > 0 ? `${index} / ${NUMBERED_PAGES}` : ""}
                        </span>

                        <button
                            type="button"
                            className="m-nav"
                            onClick={() => go(1)}
                            disabled={index === PAGES.length - 1}
                            aria-label="Próxima página"
                        >
                            <img src="/images/arrow-next.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
