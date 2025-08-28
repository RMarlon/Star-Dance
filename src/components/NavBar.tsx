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
                    <div className="flex justify-center gap-10 items-center mt-10 font-display text-black">
                        <div>
                            <ul className="flex gap-4">
                                <li>
                                    <Link href={item.about[1]}
                                        className="hover:shadow shadow-gray-600 hover:py-2 hover:px-1 hover:border-b 
                                        hover:border-purple-600 hover:pb-2 rounded-md duration-200 ease-in-out
                                        "
                                    >
                                        {item.about[0]}
                                    </Link>
                                </li>

                                <li>
                                    <Link href={item.galery[1]}
                                        className="hover:shadow shadow-gray-600 hover:py-2 hover:px-1 hover:border-b 
                                        hover:border-purple-600 hover:pb-2 rounded-md duration-200 ease-in-out
                                        "
                                    >
                                        {item.galery[0]}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <img src={item.images} alt="logo star dance" className="w-40 h-40 rounded-full " />
                        <div className="">
                            <ul className="flex gap-4">
                                <li>
                                    <Link href={item.videos[1]}
                                        className="hover:shadow shadow-gray-600 hover:py-2 hover:px-1 hover:border-b 
                                        hover:border-purple-600 hover:pb-2 rounded-md duration-200 ease-in-out
                                        "
                                    >
                                        {item.videos[0]}
                                    </Link>
                                </li>
                                <li>
                                    <Link href={item.audition[1]}
                                        className="hover:shadow shadow-gray-600 hover:py-2 hover:px-1 hover:border-b 
                                        hover:border-purple-600 hover:pb-2 rounded-md duration-200 ease-in-out
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