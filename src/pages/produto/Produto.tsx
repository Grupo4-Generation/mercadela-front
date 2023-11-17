import { useState } from "react";
import ModalProduto from "../../components/produto/modalProduto/ModalProduto";

function Produto() {

    const [, setMensagem] = useState('');
    let handleClick = () => {
        setMensagem('Compra efetuada com sucesso!');
        alert('Compra efetuada com sucesso!');
    }
    const [quantidade, setQuantidade] = useState(1);
    let adicionar = () => {
        setQuantidade(quantidade + 1);
    }
    let subtrair = () => {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        }else{
            alert('Quantidade mínima atingida!');
        }
    }

    return (

        <>
            <div className="flex m-0 items-center justify-center font-fontProjeto">
                {/* caminho da variavel fotoProduto */}
                <img className="shadow-2xl max-w-sm rounded-lg object-cover object-center bg-white-500" src="src\assets\pente.png" alt="product" />
                <div className="flex flex-col flex-wrap pl-5">
                    <div className="my-5 flex ml-4 align-top">
                        {/* caminho da variavel nomeProduto */}
                        <p className="align-top font-bold text-5xl text-justify text-[#d95613]">Pente</p>
                    </div>
                    <div className="ml-4 mr-6">
                        <p className="text-justify max-w-md">Descrição do Produto aqui vai para ser feito um teste de texto longo vamos ver se o texto fica justificado</p>
                    </div>
                    <div className="my-5 flex ml-4">
                        {/* caminho da variavel precoProduto */}
                        <p className="font-bold text-5xl text-justify text-[#13dbb7]">R$ 30,00</p>
                    </div>
                    <div className="flex justify-around pl-4">
                        <div className="flex justify-around items-center py-4 px-5 box-border border-[#bd5c46] border-4 rounded-full text-2xl font-semibold hover:scale-10 w-35">
                            <button onClick={subtrair} className="px-2 text-[#bd5c46]">-</button>
                            <span className="px-2">{quantidade}</span>
                            <button onClick={adicionar} className="px-2 text-[#13dbb7] ">+</button>
                        </div>
                        <div className="my-2 flex ml-4">
                            <button onClick={handleClick} className="rounded-full cursor-pointer bg-[#13dbb7] px-4 text-2xl font-semibold hover:scale-105 text-white">Adicionar ao carrinho</button>
                        </div>
                    </div>
                </div>
                <div className="flex h-96 justify-between flex-col">
                    <ModalProduto/>
                    <button className=" flex rounded-full justify-center text-center cursor-pointer bg-[#fe322e] px-2 py-2 text-2xl font-semibold hover:scale-105 text-white ">deletar</button>
                    
                </div>
            </div>
        </>
    )
}

export default Produto