
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormularioCategoria from "./components/categoria/formularioCategoria/FormularioCategoria";
import ListaCategorias from "./components/categoria/listaCategoria/ListaCategoria";
import Footer from "./components/footer/Footer";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Produto from "./pages/produto/Produto";
import Sobre from "./pages/sobre/Sobre";
import Navbar from "./components/navbar/Navbar";

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
                <Route path="/produto/:id" element={<Produto />} />
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