"use client"
import { MenuBar } from "@/types/MenuBar";
import Link from "next/link";

type NavProps = {
    menu: MenuBar[];
}

export const NavBar = ({ menu }: NavProps) => {
    return (
        <>
            {menu.map(item => (
                <div key={item.id}>
                    <div 
                    className="hidden sm:flex sm:justify-center md:gap-10 sm:items-center mt-4 font-display text-black
                    "
                    >
                        <div>
                            <ul className="flex gap-10">
                                <li>
                                    <Link href={item.about[1]}
                                        className="hover:border-b 
                                        hover:border-gray-400 hover:opacity-80 hover:pb-2 duration-300 ease-in-out
                                        "
                                    >
                                        {item.about[0]}
                                    </Link>
                                </li>

                                <li>
                                    <Link href={item.galery[1]}
                                        className="hover:border-b 
                                        hover:border-gray-400 hover:opacity-80 hover:pb-2 duration-300 ease-in-out
                                        "
                                    >
                                        {item.galery[0]}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <img src={item.images} alt="logo star dance" className="w-40 h-40" />
                        <div className="">
                            <ul className="flex gap-10">
                                <li>
                                    <Link href={item.videos[1]}
                                        className="hover:border-b 
                                        hover:border-gray-400 hover:opacity-80 hover:pb-2 duration-300 ease-in-out
                                        "
                                    >
                                        {item.videos[0]}
                                    </Link>
                                </li>
                                <li>
                                    <Link href={item.audition[1]}
                                        className="hover:border-b 
                                        hover:border-gray-400 hover:opacity-80 hover:pb-2 duration-300 ease-in-out
                                        "
                                    >
                                        {item.audition[0]}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}