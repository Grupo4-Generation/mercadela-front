import { Envelope, FacebookLogo, InstagramLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-[#C24730] text-[#FDD3BE] font-fontProjeto font-bold">
                <div className="container flex justify-between items-center py-2">
                    <div>
                    <img src="src\assets\logo-footer.png" alt="LogoFooter" className='w-32' />
                    </div>

                    <div>
                        <p>Copyright: {data}</p>
                        <div className='flex gap-2'>
                            <Envelope size={30} />
                            <InstagramLogo size={30} />
                            <FacebookLogo size={30} />
                        </div>
                    </div>

                    <div className="flex flex-col text-end">
                        <p>Politica de Privacidade</p>
                        <p>Termos e Condições</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer