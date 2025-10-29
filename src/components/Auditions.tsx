import { listSocialMedia } from "@/data/listSocialMedia";
import { SocialMedia } from "./SocialMedia";
import { Localization } from "./Localization";
import { listLocaliations } from "@/data/listLocalizations";


export const Auditions = () => {

    return (
        <div>
            <div className="px-10 pb-4 flex flex-row-reverse justify-between items-center">
                <h2 className="font-display text-black text-2xl">Audições</h2>
                <SocialMedia medias={listSocialMedia} />
                <img src="images/kpop.png" alt="icone kpop" className="hidden lg:block" />
            </div>
            <div className="border-b text-gray-500"></div>

            <p className="max-w-[700px] font-display-1 text-2xl text-gray-600 px-10 pt-4 text-justify text-shadow-sm">
                Se você é uma pessoa que gosta de K-pop, e quer ter oportunidades
                de dançar em eventos, então sinta-se convidado(a) e faça sua inscrição
                abaixo!
            </p>
            <div className="flex flex-col-reverse items-center justify-around px-10 py-10 md:flex-row">
                <div className="h- border border-gray-600 px-20 rounded-md shadow shadow-gray-600">

                    <h3 className="text-black font-display py-4 text-2xl">Venha ser um Star 🪩</h3>
                    <form action="" className="flex flex-col gap-4">
                        <input type="text" placeholder="Digite seu nome"
                            className="border border-black text-gray-600 outline-0 text-center px-4 py-2 rounded-md" />
                        <input type="text" placeholder="Digite sua idade"
                            className="border border-black text-gray-600 outline-0 text-center px-4 py-2 rounded-md" />

                        <section>
                                <Localization
                                    local={listLocaliations}
                                /> 
                        </section>
                    </form>
                    <button
                        className="flex justify-center items-center m-auto py-4 px-2 border
                        mt-4 mb-4 rounded-md font-display-1 border-gray-600 text-gray-600
                        cursor-pointer hover:font-bold hover:bg-gray-400 duration-300 ease-in-out
                        "
                    >
                        Enviar sua inscrição
                    </button>
                </div>
                <img src="images/logo.jpg" alt="" className="h-40 hidden xl:block" />
                <div className="">
                    <img src="images/img8-sf.png" alt="" className="" />
                </div>
            </div>
        </div>
    );
}