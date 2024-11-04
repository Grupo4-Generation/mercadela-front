import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import Contact from "./pages/contact/Contato";
import LoadContact from "./components/loads/ContactLoad";
import SelectedProduct from "./pages/product/SelectedProduct";
import ProductList from "./pages/product/ProductList";
import EditProduct from "./components/product/productCard/crud/EditProduct";
import CategoryList from "./pages/categoryList/CategoryList";
import CategoryForm from "./components/category/categoryForm/CategoryForm";
import LoadProduto from "./components/loads/ProductLoad";
import Register from "./pages/register/Register";
import CategoryLoad from "./components/loads/CategoryLoad";
import AboutUs from "./pages/aboutUs/AboutUs";
import Login from "./pages/Login/Login";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className="flex flex-1 items-center justify-center mt-7 w-[80%] mx-auto">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:id" element={<SelectedProduct />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/createProduct" element={<EditProduct />} />
              <Route path="/category" element={<CategoryList />} />
              <Route path="/createCategory" element={<CategoryForm />} />
              <Route path="/editCategory/:id" element={<CategoryForm />} />
              <Route path="/loadProduct" element={<LoadProduto />} />
              <Route path="/loadCategory" element={<CategoryLoad />} />
              <Route path="/loadContact" element={<LoadContact />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
