import axios from "axios";

const URL = "https://json-server-vercel-eosin-tau.vercel.app";

const requestProducts = async () => {
  try {
    const response = await axios.get(`${URL}/products`);
    // console.log(response);
    if(response.status === 200) {
      return response.data;
    } else {
      throw new Error("Error en el código de estado de la petición");
    }
  } catch (error) {
    console.error(error);
  }
}

export {
  requestProducts
}