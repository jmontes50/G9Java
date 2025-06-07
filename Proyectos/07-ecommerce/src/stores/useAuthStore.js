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
  register: async (userInfo) => {
    try {
      const response = await axios.post("https://simple-api-3maz.onrender.com/auth/register", userInfo);
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
  }
})));

export default useAuthStore;
