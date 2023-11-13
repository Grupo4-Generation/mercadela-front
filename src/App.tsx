import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login/Login";
import Contact from "./pages/contact/Contact";
import Cadastro from "./pages/cadastro/Cadastro";
import Produto from "./pages/produto/Produto";
import Home from "./pages/home/Home";
import Sobre from "./pages/sobre/Sobre";

import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Cadastro from './pages/cadastro/Cadastro';
import { Contact } from './pages/contact/Contact';
import Produto from './pages/produto/Produto';
import { Login } from './pages/login/Login';
import { AuthProvider } from './contexts/AuthContext';

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
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/produto" element={<Produto />} />
                <Route path="/home" element={<Home />} />
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