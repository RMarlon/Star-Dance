export const Galery = () => {
    return (
        <div className="bg-white">
            <h2 className="flex items-center justify-between font-display text-2xl text-black text-right py-6 px-10">
                <img src="images/moudura.png" alt="imagem de moudura"/>
                Galeria Star Dance
            </h2>
            <div className="border-b text-gray-500"></div>
            <div className="flex justify-around items-center">
                <p className="text-gray-600 text-lg px-10">
                    Essas são nossas imagens, elas mostram nossos momentos em apresentações e ensaios.
                    Cada um deles é o que mantem nosso grupo unido e atuando até hoje. Somos gratos a esses momentos, e
                    sei que outros estão por vir, e sempre daremos nosso melhor!
                </p>
                <div className="hidden md:block mr-10">
                    <img src="images/logo2.png" alt="imagem logo" className=""/>
                </div>
            </div>
        </div>
    );
}