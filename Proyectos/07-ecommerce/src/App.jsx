import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductView from "./modules/Products/ProductView";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App