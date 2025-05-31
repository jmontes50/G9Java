import { useState, useEffect } from "react";
import axios from "axios";

const useGetAxios = (url) => {
  //es como tener la parte del componente aquí
  const [data, setData] = useState(null);

  useEffect(() => {
    //manejo de datos
    const requestData = async () => {
      try {
        const response = await axios.get(url);
        if(response.status === 200){
          setData(response.data);
        }else{
          throw new Error("Error en el código de estado");
        }
      } catch (error) {
        console.log(error)
      }
    }
    requestData();
  },[])

  return { data }
}

export default useGetAxios;