import { Envelope, FacebookLogo, InstagramLogo } from "@phosphor-icons/react"

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="bg-[#C24730] flex items-center justify-center px-2 text-[#FDD3BE] font-fontProjeto font-bold">
                
                <div className="container flex justify-between items-center">
                    <div>
                        <img src="src\assets\logo-footer.png" alt="LogoFooter" className="min-w-[15px] min-h-[15px] max-w-[150px] max-h-[150px]" />
                    </div>

                    <div>
                        <p>Copyright: {data}</p>
                        <div className="flex justify-evenly">
                            <a href="/contact"><Envelope size={30} /></a>
                            <InstagramLogo size={30} />
                            <FacebookLogo size={30} />
                        </div>
                    </div>

                    <div className="flex flex-col text-end">
                        <p className="hover:text-gray-400 cursor-pointer">Politica de Privacidade</p>
                        <p className="hover:text-gray-400 cursor-pointer">Termos e Condições</p>
                        <a href="/sobre" className="hover:text-gray-400">Sobre nós!</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer