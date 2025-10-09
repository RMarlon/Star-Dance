type PropsModal = {
    image: string;
    closeModal: () => void;
}

export const Modal = ({image, closeModal}: PropsModal) =>{
    return(
        <>
            <div onClick={closeModal} className="fixed left-0 top-0 right-0 bottom-0 flex justify-center bg-black/90 z-50">
                <img src={image} alt="imagens do modal" className="max-w-screen max-h-screen"/>
            </div>
            <div onClick={closeModal} className="fixed top-5 right-5 w-10 h-10 cursor-pointer z-50">
                <img src="images/close.svg" alt="botão para fechar o modal" className="w-20 h-20" />
            </div>
        </>
    );
}