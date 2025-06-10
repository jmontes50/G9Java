import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { saveStorage, getStorage } from "../utils/localStorageHandler";
import axios from "axios";
import { toast } from "react-toastify";
import tokenIsValid from "../utils/jwtUtils";

const useAuthStore = create(
  devtools((set) => ({
    user: null,
    token: null, //jwt
    isLogged: false,

    //userInfo es un objeto que tiene { nombre, email, password }
    registerUser: async (userInfo) => {
      try {
        const response = await axios.post(
          "https://simple-api-3maz.onrender.com/auth/register",
          userInfo
        );
        console.log({ response });
        if (response.status === 201) {
          toast.success("Usuario registrado!");
          return true;
        } else {
          throw new Error("Error al registrarse, verificar información");
        }
      } catch (error) {
        toast.success("Error al registrarse, intente de nuevo");
        throw error;
      }
    },
    login: async (email, password) => {
      try {
        const response = await axios.post(
          "https://simple-api-3maz.onrender.com/auth/login",
          { email, password }
        );
        if (response.status === 200) {
          /** response
           * token: "jwt",
           * usuario: { nombre, email }
           */
          const { token, usuario } = response.data;
          saveStorage("token-g9", token);
          //seteamos el cambio en el store
          set(
            { user: usuario, token: token, isLogged: true },
            false,
            "auth/Login"
          );
        } else {
          throw new Error("Error en la petición de login");
        }
      } catch (error) {
        toast.error("Hubo un error, pruebe de nuevo");
        throw error;
      }
    },
    verifyAuth: () => {
      const token = getStorage("token-g9");
      // !token invertimos el valor de token, a un booleano
      //si es undefined se convierte a true
      if (!token) return;

      const isValid = tokenIsValid(token);
      //en el caso que no sea válido
      if (!isValid) {
        localStorage.removeItem("token-g9");
        set({
          token: null,
          user: null,
          isLogged: false,
        });
      }
    },
    logout: () => {
      localStorage.removeItem("token-g9");
      set({
        token: null,
        user: null,
        isLogged: false,
      });
      toast.info("Sesión cerrada");
    }
  }))
);

export default useAuthStore;
