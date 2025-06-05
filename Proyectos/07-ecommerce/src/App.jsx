import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductView from "./modules/Products/ProductView";
import ProductDetailView from "./modules/Products/ProductDetailView";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductView />} />
        <Route path="/product/:id" element={<ProductDetailView/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App