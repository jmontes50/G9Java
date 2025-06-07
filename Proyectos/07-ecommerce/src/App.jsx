import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./modules/ui/Navbar";
import ProductView from "./modules/Products/ProductView";
import ProductDetailView from "./modules/Products/ProductDetailView";
import CartView from "./modules/Cart/CartView";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductView />} />
        <Route path="/product/:id" element={<ProductDetailView/>} />
        <Route path="/cart" element={<CartView />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
