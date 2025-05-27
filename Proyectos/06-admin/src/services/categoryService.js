import axios from "axios";

const URL = "https://json-server-vercel-eosin-tau.vercel.app";

const requestCategories = async () => {
  try {
    const response = await axios.get(`${URL}/categories`);
    if (response.status === 200) {
      return response.data; //[ arreglo de categorias]
    } else {
      throw new Error("Error en la petición al solicitar categorias");
    }
  } catch (error) {
    throw error;
  }
}

export {
  requestCategories
}