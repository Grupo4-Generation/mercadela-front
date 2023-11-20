import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Cadastro from "./pages/cadastro/Cadastro";
import Home from "./pages/home/Home";
import Sobre from "./pages/sobre/Sobre";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login/Login";
import Contato from "./pages/contato/Contato";
import EditarProduto from "./components/produto/editarProduto/EditarProduto";
import PageProduto from "./pages/produto/PageProduto";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <AuthProvider>
          <BrowserRouter>
            <Navbar />
            <div className="flex-grow flex items-center justify-center my-5">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/contact" element={<Contato />} />
                <Route path="/produto/:id" element={<PageProduto />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/cadastroProduto" element={<EditarProduto />} />
                <Route path="/editarProduto/:id" element={<EditarProduto />} />
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