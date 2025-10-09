"use client"

import { About } from "@/components/About";
import { Banner } from "@/components/Banner";
import { Galery } from "@/components/Galery";
import { MobileMenu } from "@/components/MobileMenu";
import { NavBar } from "@/components/NavBar";
import { listAbout } from "@/data/listAbout";
import { listBanner } from "@/data/listBanner";
import { listGalery } from "@/data/listGalery";
import { listMobileMenu } from "@/data/listMobileMenu";
import { listNav } from "@/data/listNav";


const Page = () => {

  const toggleMenu = () => {
    const menu = document.querySelector('#menu');
    menu?.classList.toggle('translate-x-full');
  }

  return (
    <div className="container mx-auto bg-white rounded-md shadow-2xl shadow-gray-600">

      <section>
        <MobileMenu mobileNav={listMobileMenu} openMenu={toggleMenu} closeMenu={toggleMenu} />
      </section>

      <NavBar menu={listNav} />
      <Banner banner={listBanner} />
      <About we={listAbout} />
      <Galery img={listGalery} handleClick={() => { }} />

    </div>
  );
}

export default Page;