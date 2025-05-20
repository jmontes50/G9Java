import axios from "axios";

const URL = "https://json-server-vercel-eosin-tau.vercel.app";

const requestProducts = async () => {
  try {
    const response = await axios.get(`${URL}/products`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export {
  requestProducts
}