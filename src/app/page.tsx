"use client"

import { About } from "@/components/About";
import { MobileMenu } from "@/components/MobileMenu";
import { NavBar } from "@/components/NavBar";
import { listAbout } from "@/data/listAbout";
import { listMobileMenu } from "@/data/listMobileMenu";
import { listNav } from "@/data/listNav";

const Page = () =>{

  const toggleMenu = () =>{
      const menu = document.querySelector('#menu');
      menu?.classList.toggle('translate-x-full');
  }

  return(
    <div className="container mx-auto bg-white h-screen rounded-md shadow-2xl shadow-gray-600">

      <section>
        <MobileMenu mobileNav={listMobileMenu} openMenu={toggleMenu} closeMenu={toggleMenu}/>
      </section>

      <section>
        <NavBar menu={listNav}/>
      </section>

      <section>
        <About we={listAbout}/>
      </section>
    </div>
  );
}

export default Page;