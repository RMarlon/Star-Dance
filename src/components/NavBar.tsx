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
                    <div className="hidden sm:flex sm:justify-center gap-10 sm:gap-4 sm:items-center mt-10 font-display text-black">
                        <div>
<<<<<<< HEAD
                            <ul className="flex gap-6 sm:gap-10">
=======
                            <ul className="flex gap-10">
>>>>>>> f6960f0c4b146616462393e135ea4346c0f2d045
                                <li>
                                    <Link href={item.about[1]}
                                        className="hover:border-b 
                                        hover:border-purple-600 hover:opacity-80 hover:pb-2 duration-300 ease-in-out
                                        "
                                    >
                                        {item.about[0]}
                                    </Link>
                                </li>

                                <li>
                                    <Link href={item.galery[1]}
                                        className="hover:border-b 
                                        hover:border-purple-600 hover:opacity-80 hover:pb-2 duration-300 ease-in-out
                                        "
                                    >
                                        {item.galery[0]}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <img src={item.images} alt="logo star dance" className="w-40 h-40 rounded-full " />
                        <div className="">
<<<<<<< HEAD
                            <ul className="flex gap-6 sm:gap-10">
=======
                            <ul className="flex gap-10">
>>>>>>> f6960f0c4b146616462393e135ea4346c0f2d045
                                <li>
                                    <Link href={item.videos[1]}
                                        className="hover:border-b 
                                        hover:border-purple-600 hover:opacity-80 hover:pb-2 duration-300 ease-in-out
                                        "
                                    >
                                        {item.videos[0]}
                                    </Link>
                                </li>
                                <li>
                                    <Link href={item.audition[1]}
                                        className="hover:border-b 
                                        hover:border-purple-600 hover:opacity-80 hover:pb-2 duration-300 ease-in-out
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