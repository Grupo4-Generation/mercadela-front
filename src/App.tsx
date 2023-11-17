import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contato/Contato";
import Cadastro from "./pages/cadastro/Cadastro";
import Produto from "./pages/produto/Produto";
import Home from "./pages/home/Home";
import Sobre from "./pages/sobre/Sobre";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login/Login";

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
                <Route path="/contact" element={<Contact />} />
                <Route path="/produto" element={<Produto />} />
                <Route path="/sobre" element={<Sobre />} />
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