import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./modules/ui/Navbar";
import ProductView from "./modules/Products/ProductView";
import ProductDetailView from "./modules/Products/ProductDetailView";
import HomeView from "./modules/Home/HomeView";
import CategoryBar from "./modules/ui/CategoryBar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <CategoryBar />
      <Routes>
        <Route path='/' element={<HomeView />} />
        {/* <Route path="/" element={<ProductView />} /> */}
        <Route path="/product/:id" element={<ProductDetailView/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
