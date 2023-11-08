function Home() {
  return (
    <>
      <div className="max-w-xs  rounded-lg p-3 shadow duration-150 hover:shadow-md">
        {/* caminho da variavel fotoProduto */}
        <img className="w-full rounded-lg object-cover object-center bg-gray-100" src="src\assets\pente.png" alt="product" />
        <div>
          <div className="my-3 flex items-center justify-center">
            {/* caminho da variavel nomeProduto */}
            <p className="font-bold text-xl text-orange-500">Pente</p>
          </div>
          <div className="my-2 flex justify-center">
            {/* caminho da variavel precoProduto */}
            <p className="font-semibold text-green-500">R$ 130,00</p>
          </div>
          <div className="my-2 flex justify-center">
            <p className="rounded-full cursor-pointer bg-green-500 px-2 text-2xl font-semibold hover:scale-105 text-white">Comprar</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home