'use client';

import { useState } from 'react';

type PropsModal = {
    image: string;
    closeModal: () => void;
}

export const Modal = ({image, closeModal}: PropsModal) =>{
    const [isZoomed, setIsZoomed] = useState(false);

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={closeModal}>
            <div className={`relative max-w-[95vw] max-h-[95vh] w-full lg:w-[min(1200px,95vw)] transition-transform duration-300 ${isZoomed ? 'scale-150 max-w-none' : ''}`} onClick={(event) => event.stopPropagation()}>
                <img
                    src={image}
                    alt="imagens do modal"
                    className="w-full h-auto max-h-[95vh] object-contain rounded-xl shadow-2xl cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={() => setIsZoomed(!isZoomed)}
                />
                <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-3 right-3 h-10 w-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg"
                    aria-label="Fechar modal"
                >
                    <img src="images/close.svg" alt="Fechar" className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
}