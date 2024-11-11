import {
  Envelope,
  GithubLogo,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Footer() {
  let data = new Date().getFullYear();

  return (
    <>
      <div className="w-full bg-[#C24730] flex items-center justify-center px-1 text-[#FDD3BE] font-fontProjeto font-bold mt-8">
        <div className="container flex justify-between items-center">
          <div>
            <img
              src="https://iili.io/JX1hvhN.png"
              alt="LogoFooter"
              className="min-w-[5vw] min-h-[5vw] max-w-[12vw] max-h-[12vw]"
            />
          </div>

          <div className="py-2">
            <p className="text-2xl">MercaDela | Copyright: {data}</p>
            <div className="flex justify-evenly">
              <Link to="/contact">
                <Envelope size={40} className="hover:text-[#ffffff]" />
              </Link>

              <div className="cursor-pointer">
                <a href="https://github.com/Grupo4-Generation" target="_blank">
                  <GithubLogo size={40} className="hover:text-[#ffffff]" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-2xl flex flex-col text-end">
            <p className="hover:text-[#ffffff] cursor-pointer">
              Política de Privacidade
            </p>
            <p className="hover:text-[#ffffff] cursor-pointer">
              Termos e Condições
            </p>
            <Link to="/aboutUs" className="hover:text-[#ffffff]">
              Sobre nós
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
