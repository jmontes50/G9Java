import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { saveStorage, getStorage } from "../utils/localStorageHandler";

const NAME_KEY_CART = "cart";

const useCartStore = create(devtools((set) => ({
  cart: getStorage(NAME_KEY_CART) || [], //estado
  addProductToCart: (product) => {
    //SET ACTUALIZA EL ESTADO
    set((state) => {
      //preguntando si existe el producto, findIndex retorna la posición númerica de un item que encuentre, si no retorna -1
      const indexProductIfExists = state.cart.findIndex((item) => item.id === product.id)

      if(indexProductIfExists === -1){ //si es -1 es nuevo, lo agregamos como un producto nuevo al estado/arreglo cart
        const cartChanged = [...state.cart, product]
        saveStorage(NAME_KEY_CART, cartChanged);
        //a traves del return que representa el cambio de estado
        return {
          cart: cartChanged
        }
        //retornemos el cambio de estado que queremos hacer
      } else { //si ya existe, me da 0,1,2,3,4,...
        const cartTemporal = [...state.cart]; //hacemos una copia mediante spread operator
        cartTemporal[indexProductIfExists].quantity = product.quantity; //actualizamos quantity mediante el indice cartTemporal[1].quantity
        saveStorage(NAME_KEY_CART, cartTemporal);
        return {
          cart:cartTemporal
        }
      }

    }, false, "cart/addProductToCart");
  }
})))

export default useCartStore;