import { create } from "zustand";

const useProductStore = create((set) => ({
  productosFiltrados: [],
  setProductosFiltrados: (productos) => set({ productosFiltrados: productos }),
  limpiarProductos: () => set({ productosFiltrados: [] }),
}));

export default useProductStore;
