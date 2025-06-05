import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useCartStore = create(devtools((set) => ({
  cart: [],
  addProductToCart: (product) => {
    set((state) => {
      const cartChanged = [...state.cart, product]
      return {
        cart: cartChanged
      }
      //retornemos el cambio de estado que queremos hacer
    }, false, "cart/addProductToCart");
  }
})))

export default useCartStore;