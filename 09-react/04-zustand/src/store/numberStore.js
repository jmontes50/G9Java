import { create } from "zustand";

//set funciona como un setter me permite cambiar el estado del store
const useNumberStore = create((set) => ({
    number: 0,
    //state representa el estado actual del store
    incrementar: () => set((state) => ({ number: state.number + 1}))
}))

export default useNumberStore;