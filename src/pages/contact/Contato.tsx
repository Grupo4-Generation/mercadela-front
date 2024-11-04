import { useNavigate } from "react-router-dom";
import { toastAlerta } from "../../util/toastAlerta";

export function Contact() {
  const navigate = useNavigate();
  function retornar(){
    navigate ('/LoadContato')
    toastAlerta('Mensagem enviada com sucesso', 'sucesso')
  }

  return (
    <>
      <section className="flex justify-center m-0 pr-5 pl-5">
        <div className="font-fontProjeto bg-[#FEEAE0] flex flex-col justify-center items-center rounded-3xl m-10 p-8">
          <h1 className="text-3xl text-[#DB5413] font-bold pb-7 text-center">
            Entre em contato
          </h1>
          <form className="flex flex-col space-y-5">
            <div className="flex flex-col">
              <label htmlFor="nomeMensagem" className="text-xl text-[#DB5413] font-bold">
                Nome</label>
              <input
                type="text"
                id="nomeMensagem"
                name="nomeMensagem"
                placeholder="Digite seu nome"
                className="p-1 w-[36vw] border border-gray-300 rounded-3xl pl-5 italic"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="emailMensagem" className="text-xl text-[#DB5413] font-bold">
                E-mail</label>
              <input
                type="email"
                id="emailMensagem"
                name="emailMensagem"
                placeholder="Digite o e-mail"
                className="p-1 w-[36vw] border border-gray-300 rounded-3xl pl-5 italic"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="assuntoMensagem" className="text-xl text-[#DB5413] font-bold">
                Assunto</label>
              <select
                id="assuntoMensagem"
                name="assuntoMensagem"
                className="h-8 p-1 w-[36vw] border border-gray-300 rounded-3xl pl-5 italic"
              >
                <option selected disabled value="">Selecione</option>
                <option>Dúvidas</option>
                <option>Saber mais</option>
                <option>Outros</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="mensagem" className="text-xl text-[#DB5413] font-bold">
                Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Digite sua mensagem"
                className="p-1 w-[36vw] border border-gray-300 rounded-xl pl-5 italic"
              />
            </div>

            <div className='flex flex-col mt-10 space-y-4'>
              <div className="flex justify-center">
                <button
                onClick={retornar}
                  className="flex text-3xl text-white font-bold rounded-3xl pt-1 px-3 bg-[#13DBB7] hover:bg-[#0F9D84]"
                  type="submit"
                >Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact