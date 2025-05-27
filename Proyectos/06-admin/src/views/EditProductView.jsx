import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { requestProductById } from "../services/productService"

const EditProductView = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({
    nombre:"",
    descripcion:"",
    precio:0,
    detalles:"",
    precio_oferta:0,
    cantidad:0,
    estrellas:4,
    imagen: "https://picsum.photos/500",
    categoryId:1,
  });

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await requestProductById(id);
        // console.log(data);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, [])

  return (
    <div>EditProductView</div>
  )
}

export default EditProductView