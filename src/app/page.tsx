import { MobileMenu } from "@/components/MobileMenu";
import { NavBar } from "@/components/NavBar";
import { listMobileMenu } from "@/data/listMobileMenu";
import { listNav } from "@/data/listNav";

const Page = () =>{
  return(
    <div className="container mx-auto bg-white h-screen rounded-md shadow-2xl shadow-gray-600">

      <section>
        <MobileMenu mobileNav={listMobileMenu}/>
      </section>

      <section>
        <NavBar menu={listNav}/>
      </section>
    </div>
  );
}

export default Page;