import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Cadastro from "./pages/cadastro/Cadastro";
import Sobre from "./pages/sobre/Sobre";
import Login from "./pages/Login/Login";
import Contato from "./pages/contato/Contato";
import EditarProduto from "./components/produto/crudProduto/editarProduto/EditarProduto";
import PageProduto from "./pages/produto/ProdutoDinamico";

import FormularioCategoria from "./components/categoria/formularioCategoria/FormularioCategoria";
import ListaCategorias from "./components/categoria/listaCategoria/ListaCategoria";
import Produtos from "./pages/produto/Produtos";
import Load from "./pages/produto/ProdutoLoad";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <AuthProvider>
        <ToastContainer/>
          <BrowserRouter>
            <Navbar />
            <div className="flex flex-grow items-center justify-center my-4">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/produto/:id" element={<PageProduto />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/cadastroProduto" element={<EditarProduto />} />
                <Route path="/editarProduto/:id" element={<EditarProduto />} />
                <Route path="/categoria" element={<ListaCategorias />} />
                <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
                <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
                <Route path="/load" element={<Load />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;