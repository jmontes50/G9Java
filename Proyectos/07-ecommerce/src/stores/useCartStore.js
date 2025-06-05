import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useCartStore = create(devtools((set) => ({
  cart: [],
  addProductToCart: (product) => {
    //SET ACTUALIZA EL ESTADO
    set((state) => {
      const cartChanged = [...state.cart, product]
      //a traves del return que representa el cambio de estado
      return {
        cart: cartChanged
      }
      //retornemos el cambio de estado que queremos hacer
    }, false, "cart/addProductToCart");
  }
})))

export default useCartStore;