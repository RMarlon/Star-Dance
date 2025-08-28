import { MobileNavBar } from "@/types/MobileNavBar";
import Link from "next/link";

type PropsMobile = {
    mobileNav: MobileNavBar[];
}

export const MobileMenu = ({ mobileNav }: PropsMobile) => {
    return (
        <>
            {mobileNav.map(menu => (
                <div key={menu.id} className="font-display text-black">

                    <div className="relative flex justify-between items-center">
                        <img src={menu.images} alt="imagem da logo" className="w-40 h-40 rounded-full"/>
                        <button className="absolute right-10 top-8">
                            <img src={menu.imagesMenuBurger} alt="botão menu hamburger" className="w-10" />
                        </button>
                    </div>

                    <div className="w-70 h-screen fixed top-0 right-0 border translate-x-full  duration-300 ease-in-out">

                        <div className="flex justify-between items-center px-10 pt-4">
                            <h1 className="">Star Dance ⭐</h1>
                            <button className="cursor-pointer">
                                <img src={menu.imagesClose} alt="botão para fechar o menu" />
                            </button>
                        </div>

                        <img src={menu.images} alt="logo star dance" className="h-screen opacity-40" />
                        <ul className="flex flex-col  gap-6 absolute top-[30%] right-10 text-2xl ">
                            <li>
                                <Link href={menu.about[1]}
                                    className="hover:border-b hover:border-purple-700 hover:pb-2
                                    duration-300 ease-in-out font-bold 
                                ">

                                    {menu.about[0]}
                                </Link>
                            </li>
                            <li>
                                <Link href={menu.galery[1]}
                                    className="hover:border-b hover:border-purple-700 hover:pb-2
                                    duration-300 ease-in-out font-bold
                                ">
                                    {menu.galery[0]}
                                </Link>
                            </li>
                            <li>
                                <Link href={menu.videos[1]}
                                    className="hover:border-b hover:border-purple-700 hover:pb-2
                                    duration-300 ease-in-out font-bold
                                ">
                                    {menu.videos[0]}
                                </Link>
                            </li>
                            <li>
                                <Link href={menu.audition[1]}
                                    className="hover:border-b hover:border-purple-700 hover:pb-2
                                    duration-300 ease-in-out font-bold
                                ">
                                    {menu.audition[0]}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </>
    );
}