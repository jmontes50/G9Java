import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./modules/ui/Navbar";
import ProductView from "./modules/Products/ProductView";
import ProductDetailView from "./modules/Products/ProductDetailView";
import HomeView from "./modules/Home/HomeView";
import CategoryBar from "./modules/ui/CategoryBar";
import CartView from "./modules/Cart/CartView";
import RegisterPage from "./modules/Auth/RegisterPage";
import LoginPage from "./modules/Auth/LoginPage";
import PrivateRoute from "./modules/Auth/components/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <CategoryBar />
      <Routes>
        <Route path='/' element={<HomeView />} />
        {/* <Route path="/" element={<ProductView />} /> */}
        <Route path="/product/:id" element={<ProductDetailView/>} />
        <Route path="/" element={<ProductView />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartView />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App
