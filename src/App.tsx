import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Contact from "./pages/contact/Contact";
import Produto from "./pages/produto/Produto";
import Sobre from "./pages/sobre/Sobre";
import ListaCategorias from "./components/categoria/listaCategoria/ListaCategoria";
import FormularioCategoria from "./components/categoria/formularioCategoria/FormularioCategoria";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <AuthProvider>
          <BrowserRouter>
            <Navbar />
            <div className="flex flex-grow items-center justify-center my-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/produto" element={<Produto />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/categoria" element={<ListaCategorias />} />
                <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
                <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
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