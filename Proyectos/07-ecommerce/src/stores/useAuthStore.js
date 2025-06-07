import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { saveStorage, getStorage } from "../utils/localStorageHandler";
import axios from "axios";
import { toast } from "react-toastify";

const useAuthStore = create(devtools((set) => ({
  user: null,
  token: null, //jwt
  isLogged: false,

  //userInfo es un objeto que tiene { nombre, email, password }
  registerUser: async (userInfo) => {
    try {
      const response = await axios.post("https://simple-api-3maz.onrender.com/auth/register", userInfo);
      console.log({ response })
      if(response.status === 201) {
        toast.success("Usuario registrado!");
        return true;
      }else{
        throw new Error("Error al registrarse, verificar información")
      }
    } catch (error) {
      toast.success("Error al registrarse, intente de nuevo");
      throw error;
    }
  },
  login: async (email, password) => {
    try {
      const response = await axios.post("https://simple-api-3maz.onrender.com/auth/login", { email, password });
      if(response.status === 200) {
        /** response
         * token: "jwt",
         * usuario: { nombre, email }
         */
        const { token, usuario } = response.data;
        saveStorage("token-g9", token);
        //seteamos el cambio en el store
        set({ user: usuario, token: token, isLogged: true }, false, "auth/Login")
      }else {
        throw new Error("Error en la petición de login")
      }
    } catch (error) {
      toast.error("Hubo un error, pruebe de nuevo");
      throw(error);
    }
  }
})));

export default useAuthStore;
