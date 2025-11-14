export const Footer = () => {
    return (
        <div>
            <div className="bg-white flex items-center justify-between px-6 mb-4">
                <div className="flex items-center justify-center">
                    <a
                        href="https://marlondevnoob.com.br/"
                        target="_blank"
                        className="flex items-center justify-center duration-300 ease-in-out hover:opacity-80">
                        <img src="images/copy.svg" alt="copyright" className="w-6 h-6" />
                        <small className="text-[#410085] font-display-1 pl-1">[Dev]-Noob</small>
                    </a>
                </div>
                <div className="">
                    <img src="images/logo2.png" alt="logo Star Dance" className="w-40 h-40" />
                </div>
            </div>
        </div>
    );
}