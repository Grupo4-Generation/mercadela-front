import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login/Login";
import Contact from "./pages/contact/Contact";
import Cadastro from "./pages/cadastro/Cadastro";
import Produto from "./pages/produto/Produto";
import Home from "./pages/home/Home";
import Sobre from "./pages/sobre/Sobre";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/produto" element={<Produto />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
          </div>
          <Routes>
          <Route path="/home" element={<Home />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;