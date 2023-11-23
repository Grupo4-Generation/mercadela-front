import { Envelope, FacebookLogo, InstagramLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Footer() {
  let data = new Date().getFullYear();

  return (
    <>
      <div className="w-full bg-[#C24730] flex items-center justify-center px-1 text-[#FDD3BE] font-fontProjeto font-bold mt-8">
        <div className="container flex justify-between items-center">
          <div>
            <img
              src="http://cdn.discordapp.com/attachments/1139577278892875784/1177223443146616862/logo-footer.png"
              alt="LogoFooter"
              className="min-w-[5vw] min-h-[5vw] max-w-[12vw] max-h-[12vw]"
            />
          </div>

          <div>
            <p className="text-2xl">MercaDela | Copyright: {data}</p>
            <div className="flex justify-evenly">
              <Link to="/contato">
                <Envelope size={40} />
              </Link>
              <div className="cursor-pointer">
                <InstagramLogo size={40} />
              </div>
              <div className="cursor-pointer">
                <FacebookLogo size={40} />
              </div>
            </div>
          </div>

          <div className="text-2xl flex flex-col text-end">
            <p className="hover:text-[#ffffff] cursor-pointer">
              Politica de Privacidade
            </p>
            <p className="hover:text-[#ffffff] cursor-pointer">
              Termos e Condições
            </p>
            <Link to="/sobre" className="hover:text-[#ffffff]">
              Sobre nós
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
