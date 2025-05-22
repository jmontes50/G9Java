import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardView from "./views/DashboardView"

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        {/* aquí dentro van solo las rutas */}
        {/* <Route path="ruta" element={<Componente a mostrar />} /> */}
        <Route path="/" element={<DashboardView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App