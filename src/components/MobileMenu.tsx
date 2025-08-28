import { MobileNavBar } from "@/types/MobileNavBar";

type PropsMobile = {
    mobileNav: MobileNavBar[];
}

export const MobileMenu = ({mobileNav}: PropsMobile) =>{
    return(
        <>
            {mobileNav.map(menu =>(
                <div key={menu.id}>

                </div>
            ))}
        </>
    );
}