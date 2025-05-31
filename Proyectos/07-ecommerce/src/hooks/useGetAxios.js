import { useState, useEffect } from "react";
import axios from "axios";

const useGetAxios = (url) => {
  //es como tener la parte del componente aquí
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); //Si esta cargando
  const [error, setError] = useState(null);

  useEffect(() => {
    //manejo de datos
    const requestData = async () => {
      try {
        const response = await axios.get(url);
        if(response.status === 200){
          setLoading(false)
          setData(response.data);
        }else{
          throw new Error("Error en el código de estado");
        }
      } catch (error) {
        // console.log(error)
        setError(error);
        setLoading(false);
      }
    }
    requestData();
  },[url]) //Si es que cambia la URL este useEffect se volverá a ejecutar

  return { data, loading, error }
}

export default useGetAxios;