import React from "react";
import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-icon2.svg";
import navIcon3 from "../assets/nav-icon3.svg";
import navIcon4 from "../assets/nav-icon4.svg";
import navIcon0 from "../assets/wapp2.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#CB955D] text-white fixed bottom-0 w-full py-1">
      <div className="social-icon container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center  max-w-[1240px]">
        {/* Logo o Título */}

        
        {/* Enlaces de navegación */}
        <div className="">
          
        </div>

        {/* Redes sociales */}
        <div className="flex space-x-4">
        <button className=" " onClick={() => window.open('https://web.whatsapp.com/send?phone=+5491164691990&text=Hola!%20me%20contacto%20desde%20el%20sitio%20web', '_blank')}>
          <img src={navIcon0} alt="" className="fill-white" />
        </button>
        <a href="https://www.linkedin.com/" className="">
          <img src={navIcon1} alt="" />
        </a>
        <a href="https://www.facebook.com/" className="">
          <img src={navIcon2} alt="" />
        </a>
        <a href="https://www.instagram.com/" className="">
          <img src={navIcon3} alt="" />
        </a>
        <a href="https://twitter.com/" className="">
          <img src={navIcon4} style={{ color: "white" }} alt="" />
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
