import { MobileNavBar } from "@/types/MobileNavBar";
import Link from "next/link";

type PropsMobile = {
    mobileNav: MobileNavBar[];
    openMenu: () => void;
    closeMenu:() => void;
}

export const MobileMenu = ({ mobileNav, openMenu, closeMenu }: PropsMobile) => {
    
    return (
        <>
            {mobileNav.map(menu => (
                <div key={menu.id} className="font-display">

                    <div className="relative flex justify-between items-center sm:hidden">
                        <img src={menu.images} alt="imagem da logo" className="w-40 h-40 rounded-full" />

                        <button onClick={openMenu} className="absolute right-10 top-10 cursor-pointer">
                            <img id="imgBurger" src={menu.imagesMenuBurger} alt="botão menu hamburger" className="w-10" />
                        </button>
                    </div>

                    <div id="menu" className="w-70 h-screen fixed top-0 right-0  translate-x-full duration-300 ease-in-out bg-black">

                        <div className="flex justify-between items-center px-10 pt-4">
                            <h1 className="">Star Dance ⭐</h1>

                            <button onClick={closeMenu} className="cursor-pointer">
                                <img src={menu.imagesClose} alt="botão para fechar o menu" />
                            </button>
                        </div>

                        <img src={menu.images} alt="logo star dance" className="h-screen opacity-40" />
                        <ul className="flex flex-col  gap-6 absolute top-[30%] right-10 text-2xl ">
                            <li>
                                <Link href={menu.about[1]}
                                    className="hover:border-b hover:border-purple-700 hover:pb-2
                                    duration-300 ease-in-out 
                                ">

                                    {menu.about[0]}
                                </Link>
                            </li>
                            <li>
                                <Link href={menu.galery[1]}
                                    className="hover:border-b hover:border-purple-700 hover:pb-2
                                    duration-300 ease-in-out 
                                ">
                                    {menu.galery[0]}
                                </Link>
                            </li>
                            <li>
                                <Link href={menu.videos[1]}
                                    className="hover:border-b hover:border-purple-700 hover:pb-2
                                    duration-300 ease-in-out 
                                ">
                                    {menu.videos[0]}
                                </Link>
                            </li>
                            <li>
                                <Link href={menu.audition[1]}
                                    className="hover:border-b hover:border-purple-700 hover:pb-2
                                    duration-300 ease-in-out 
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