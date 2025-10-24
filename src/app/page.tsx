"use client"

import { About } from "@/components/About";
import { Auditions } from "@/components/Auditions";
import { Banner } from "@/components/Banner";
import { Galery } from "@/components/Galery";
import { MobileMenu } from "@/components/MobileMenu";
import { NavBar } from "@/components/NavBar";
import { Videos } from "@/components/Videos";
import { listAbout } from "@/data/listAbout";
import { listBanner } from "@/data/listBanner";
import { listGalery } from "@/data/listGalery";
import { listMobileMenu } from "@/data/listMobileMenu";
import { listNav } from "@/data/listNav";
import { listVideos } from "@/data/listVideos";


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
      
      <section className="pb-10">
        <Galery img={listGalery} handleClick={() => { }} />
      </section>
      
      <section className="pb-10">
        <Videos play={listVideos}/>
      </section>

      <Auditions />

    </div>
  );
}

export default Page;