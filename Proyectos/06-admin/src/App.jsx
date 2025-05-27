import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardView from "./views/DashboardView";
import CreateProductView from "./views/CreateProductView";
import EditProductView from "./views/EditProductView";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      {/* fuera de Routes puedo poner JSX, componentes, html */}
      <Navbar />
      <Routes>
        {/* aquí dentro van solo las rutas */}
        {/* <Route path="ruta" element={<Componente a mostrar />} /> */}
        <Route path="/" element={<DashboardView />} />
        <Route path="/createproduct" element={<CreateProductView />} />
        <Route path="/editproduct/:id" element={<EditProductView/>} />
        {/* <Route path="/acercade" element={<DashboardView />} >
              <Route index element={<DashboardHijoMain />} /> /acercade/
              <Route path="contacto" element={<OtroHijo />} /> /acercade/contacto
            </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App