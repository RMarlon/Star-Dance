export const Footer = () => {
    return (
        <div>
            <div className="bg-white flex items-center justify-between px-10 py-10">
                <div className="flex ">
                    <a
                        href="https://marlondevnoob.com.br/"
                        target="_blank"
                        className="flex items-center duration-300 ease-in-out hover:opacity-80">
                        <img src="images/copy.svg" alt="copyright" className="w-6 h-6" />
                        <small className="text-[#410085] font-display-1">DevNoob</small>
                    </a>
                </div>
                <div className="">
                    <img src="images/logo2.png" alt="logo Star Dance" className="w-40 h-30" />
                </div>
            </div>
        </div>
    );
}