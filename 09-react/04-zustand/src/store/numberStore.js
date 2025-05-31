import { create } from "zustand";
import { devtools } from "zustand/middleware";

//set funciona como un setter me permite cambiar el estado del store
const useNumberStore = create(
  devtools((set) => ({
    //puedo colocar todas las propiedades y métodos que necesite
    number: 0,
    nombre: "Jorge",
    //state representa el estado actual del store
    incrementar: () => {
      set(
        (state) => ({ number: state.number + 1 }),
        false, //aqui indicamos si el cambio sera parcial o reemplazara al estado
        "number/incrementar" //indicamos el nombre para redux devtools
      );
    },
  }))
);

export default useNumberStore;
