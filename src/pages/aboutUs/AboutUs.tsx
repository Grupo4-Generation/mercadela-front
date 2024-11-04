import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

function AboutUs() {
    return (
        <>
            <section className="flex justify-center m-0 px-[12vw]">
                <div className="font-sans text-[#DB5413] bg-[#FEEAE0] flex flex-col justify-center items-center rounded-3xl my-10 p-10">
                    <div>
                        <h1 className="font-fontProjeto text-3xl text-[#DB5413] font-bold pb-7 text-center">
                            Sobre nós
                        </h1>
                        <div className="text-justify text-2xl">
                            <p>
                                Nossa equipe é proveniente da turma 67 do bootcamp da Generation Brasil de desenvolvedores full stack em Java (Jr), estamos dedicadas ao desenvolvimento do MercaDela, um inovador comércio eletrônico baseado na estrutura de marketplace. Nosso principal propósito é ampliar a presença social e econômica das mulheres no cenário do empreendedorismo brasileiro.
                            </p>
                            <br />
                            <p>
                                O MercaDela não é apenas um comércio eletrônico, é um projeto que busca gerar impacto social positivo. Além de impulsionar empresas lideradas por mulheres e vendedoras independentes, destinamos uma parte dos lucros do e-commerce para a realização de trabalhos sociais. O nome "MercaDela" é uma fusão das palavras "Mercado" e "Ela/Dela". Inspirado na Calêndula, conhecida como "La flor de Mercadela" em espanhol, escolhemos a pétala como símbolo do nosso logotipo.
                            </p>
                            <br />
                            <p>
                                Nosso marketplace se destaca por um algoritmo que seleciona produtos de novas vendedoras ou em alta, colocando-os em evidência para impulsionar suas vendas. Embora qualquer usuário possa adquirir produtos no site, a adesão como vendedora requer uma verificação prévia. Além disso, destinamos 10% dos lucros para doação a ONGs que se dedicam exclusivamente a causas sociais apoiando mulheres e meninas.
                            </p>
                            <br />
                            <p>
                                Desde a concepção do projeto, nossa equipe tem como valor fundamental a promoção da diversidade e inclusão. Alinhamos nossos objetivos com a ODS 5 da ONU, que trata da igualdade de gênero. Acreditamos que ao incentivar a participação feminina na economia e no empreendedorismo, estaremos contribuindo para uma sociedade onde as mulheres terão independência financeira para participar ativamente na economia do país.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="font-fontProjeto text-3xl text-[#DB5413] font-bold mt-2 p-4 text-center">Conheça nossa equipe</h2>
                        <div className="flex space-x-5">
                            <div className="bg-gradient-to-r from-[#DB5413] via-[#C24730] to-[#983853] p-6 rounded-3xl text-[white]">
                                <div className="flex items-center flex-col text-center">
                                    <img src="https://iili.io/JX1r63Q.jpg" alt="imagemPerfil" className="w-[14vw] h-[14vw] rounded-full border-2 border-[#FEEAE0] object-cover" />

                                    <h2 className="font-fontProjeto text-2xl pt-2">Amanda Gomes</h2>
                                </div>
                                <div className="flex justify-center p-1">
                                    <a href="https://github.com/Lwppytta" target="_blank"><GithubLogo size={40} className="bg-[#FEEAE0] m-1 p-2 rounded-xl text-[#DB5413] hover:bg-[#983853] hover:text-[white]" /></a>
                                    <a href="https://www.linkedin.com/in/amanda-leticia-gomes/" target="_blank"><LinkedinLogo size={40} className="bg-[#FEEAE0] m-1 p-2 rounded-xl text-[#DB5413] hover:bg-[#983853] hover:text-[white]" /></a>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-[#DB5413] via-[#C24730] to-[#983853] p-6 rounded-3xl text-[white]">
                                <div className="flex items-center flex-col text-center">
                                    <img src="https://iili.io/JX1vSAg.png" alt="imagemPerfil" className="w-[14vw] h-[14vw] rounded-full border-2 object-cover border-[#FEEAE0]" />

                                    <h2 className="font-fontProjeto text-2xl pt-2">Flávio Farias</h2>
                                </div>
                                <div className="flex justify-center p-1">
                                    <a href="https://github.com/oFurabio" target="_blank"><GithubLogo size={40} className="bg-[#FEEAE0] m-1 p-2 rounded-xl text-[#DB5413] hover:bg-[#983853] hover:text-[white]" /></a>
                                    <a href="https://www.linkedin.com/in/flaviosfarias/" target="_blank"><LinkedinLogo size={40} className="bg-[#FEEAE0] m-1 p-2 rounded-xl text-[#DB5413] hover:bg-[#983853] hover:text-[white]" /></a>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-[#DB5413] via-[#C24730] to-[#983853] p-6 rounded-3xl text-[white]">
                                <div className="flex items-center flex-col text-center">
                                    <img src="https://iili.io/JX1vkS1.png" alt="imagemPerfil" className="w-[14vw] h-[14vw] rounded-full border-2 object-cover border-[#FEEAE0]" />

                                    <h2 className="font-fontProjeto text-2xl pt-2">Julia Domingues</h2>
                                </div>
                                <div className="flex justify-center p-1">
                                    <a href="https://github.com/julooch" target="_blank"><GithubLogo size={40} className="bg-[#FEEAE0] m-1 p-2 rounded-xl text-[#DB5413] hover:bg-[#983853] hover:text-[white]" /></a>
                                    <a href="https://www.linkedin.com/in/juliadom/" target="_blank"><LinkedinLogo size={40} className="bg-[#FEEAE0] m-1 p-2 rounded-xl text-[#DB5413] hover:bg-[#983853] hover:text-[white]" /></a>
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-5">
                            <div className="bg-gradient-to-r from-[#DB5413] via-[#C24730] to-[#983853] p-6 rounded-3xl text-[white]">
                                <div className="flex items-center flex-col text-center">
                                    <img src="https://iili.io/JX1v8HF.png" alt="imagemPerfil" className="w-[14vw] h-[14vw] rounded-full border-2 object-cover border-[#FEEAE0]" />

                                    <h2 className="font-fontProjeto text-2xl pt-2">Larissa Dias</h2>
                                </div>
                                <div className="flex justify-center p-1">
                                    <a href="https://github.com/LarissaDiasDS" target="_blank"><GithubLogo size={40} className="bg-[#FEEAE0] m-1 p-2 rounded-xl text-[#DB5413] hover:bg-[#983853] hover:text-[white]" /></a>
                                    <a href="https://www.linkedin.com/in/larissadias-santos/" target="_blank">
                                        <LinkedinLogo size={40} className="bg-[#FEEAE0] m-1 p-2 rounded-xl text-[#DB5413] hover:bg-[#983853] hover:text-[white]" /></a>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-[#DB5413] via-[#C24730] to-[#983853] p-6 rounded-3xl text-[white]">
                                <div className="flex items-center flex-col text-center">
                                    <img src="https://iili.io/JX1vUNa.png" alt="imagemPerfil" className="w-[14vw] h-[14vw] rounded-full border-2 object-cover border-[#FEEAE0]" />

                                    <h2 className="font-fontProjeto text-2xl pt-2">Marcos Dantas</h2>
                                </div>
                                <div className="flex justify-center p-1">
                                    <a href="https://github.com/marcoosdantas" target="_blank"><GithubLogo size={40} className="bg-[#FEEAE0] m-1 p-2 rounded-xl text-[#DB5413] hover:bg-[#983853] hover:text-[white]" /></a>
                                    <a href="https://www.linkedin.com/in/marcos-dantas/" target="_blank"><LinkedinLogo size={40} className="bg-[#FEEAE0] m-1 p-2 rounded-xl text-[#DB5413] hover:bg-[#983853] hover:text-[white]" /></a>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-[#DB5413] via-[#C24730] to-[#983853] p-6 rounded-3xl text-[white]">
                                <div className="flex items-center flex-col text-center">
                                    <img src="https://iili.io/JX1rr6x.jpg" alt="imagemPerfil" className="w-[14vw] h-[14vw] rounded-full border-2 object-cover border-[#FEEAE0]" />

                                    <h2 className="font-fontProjeto text-2xl pt-2">Matheus Silva</h2>
                                </div>
                                <div className="flex justify-center p-1">
                                    <a href="https://github.com/matheuxsx3" target="_blank"><GithubLogo size={40} className="bg-[#FEEAE0] m-1 p-2 rounded-xl text-[#DB5413] hover:bg-[#983853] hover:text-[white]" /></a>
                                    <a href="https://www.linkedin.com/in/matheus-ps-dev" target="_blank"><LinkedinLogo size={40} className="bg-[#FEEAE0] m-1 p-2 rounded-xl text-[#DB5413] hover:bg-[#983853] hover:text-[white]" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs;
