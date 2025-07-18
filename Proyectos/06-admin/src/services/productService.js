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
    throw error;
  }
}

const requestCreateProduct = async (newProduct) => {
  try {
    const response = await axios.post(`${URL}/products`, newProduct);
    if (response.status === 201) {
      return response.data
    } else {
      throw new Error ("Error en el código de estado de la petición");
    }
  } catch (error) {
    throw error;
  }
}

const requestProductById = async (id) => {
  try {
    const response = await axios.get(`${URL}/products/${id}`);
    if(response.status === 200) {
      return response.data;
    } else {
      throw new Error("Error en el código de estado de la petición por ID");
    }
  } catch (error) {
    throw error;
  }
}

const requestUpdateProduct = async (productUpdated) => {
  try {
    const response = await axios.put(`${URL}/products/${productUpdated.id}`, productUpdated);
    if(response.status === 200) {
      return response.data;
    } else {
      throw new Error("Error en el código de estado de la petición por ID");
    }
  } catch (error) {
    throw error;
  }
}

const requestDeleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${URL}/products/${id}`);
    console.log(response)
    return response.data;
  } catch (error) {
    throw error;
  }
}

export {
  requestProducts,
  requestCreateProduct,
  requestProductById,
  requestUpdateProduct,
  requestDeleteProduct
}