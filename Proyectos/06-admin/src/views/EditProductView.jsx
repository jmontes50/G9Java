import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { requestProductById } from "../services/productService"

const EditProductView = () => {
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await requestProductById(id);
        console.log(data);
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