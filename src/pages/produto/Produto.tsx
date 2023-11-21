import React from 'react'

function Produto() {
    return (

        <>
            <div className="flex min-h-screen items-center justify-center">
                {/* caminho da variavel fotoProduto */}
                <img className="shadow-xl max-w-sm rounded-lg object-cover object-center" src="src\assets\pente.png" alt="product"/>
                <div>
                    <div className="my-3 flex ml-4 align-top">
                        {/* caminho da variavel nomeProduto */}
                        <p className="font-fontProjeto align-top font-bold text-5xl text-justify text-[#DB5413]">Pente</p>
                    </div>
                    <div className="ml-4 mr-6">
                        <p className="font-Open-Sans text-justify max-w-sm">Descrição do Produto aqui vai para ser feito um teste de texto longo vamos ver se o texto fica justificado</p>
                    </div>
                    <div className="my-2 flex ml-4">
                        {/* caminho da variavel precoProduto */}
                        <p className="font-bold text-5xl text-justify text-[#13dbb7]">R$ 30,00</p>
                    </div>
                    <div className="my-2 flex ml-4">
                        <p className="rounded-full cursor-pointer bg-[#13dbb7] px-2 text-2xl font-bold hover:scale-105 hover:bg-[] text-white">Adicionar ao carrinho</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Produto