import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useProductStore = create(devtools((set) => ({
  productosFiltrados: [],
  setProductosFiltrados: (productos) => set({ productosFiltrados: productos }, false, "products/setProductos"),
  limpiarProductos: () => set({ productosFiltrados: [] }, false, "products/limpiar"),
})));

export default useProductStore;
