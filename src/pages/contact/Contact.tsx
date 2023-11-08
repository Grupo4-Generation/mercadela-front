export function Contact() {
  return (
    <>
      <div className="bg-[#FEEAE0] flex flex-col justify-center items-center m-96 rounded-3xl mt-10 mb-10 p-10 max-w-md">
        <form className="max-w-[400px] w-full mx-auto">
          <h1 className="font-sans text-3xl text-[#DB5413] font-bold pb-7 text-center">
            Contate-nos
          </h1>
          <div className="flex flex-col">
            <label className="font-sans text-xl text-[#DB5413] font-bold pb-2 pl-5">
              Nome
            </label>
            <input
              className="p-1 border border-gray-300 rounded rounded-3xl pl-5 italic"
              placeholder="Digite seu nome"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-sans text-xl text-[#DB5413] font-bold pb-2 pl-5 pt-5">
              E-mail
            </label>
            <input
              className="p-1 border border-gray-300 rounded rounded-3xl pl-5 italic"
              placeholder="E-mail"
              type="email"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-sans text-xl text-[#DB5413] font-bold pb-2 pl-5 pt-5">
              Mensagem
            </label>
            <input
              className="p-1 border border-gray-300 rounded rounded-3xl pl-5 italic"
              placeholder="Digite sua mensagem"
              type="text"
            />
          </div>
          <div className="flex justify-center pt-5">
            <button
              className="text-3xl font-sans text-white font-bold rounded-3xl pt-1 pb-1 pl-4 pr-4 bg-[#13DBB7]"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
