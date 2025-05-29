import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { requestProductById } from "../services/productService"
import Input from "../components/Input";

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

  const inputsInfo = [
    { name:"nombre", label:"Nombre del producto", type: "text" },
    { name:"descripcion", label:"Descripción", type: "text" },
    { name:"precio", label:"Precio Normal", type: "number" },
    { name:"precio_oferta", label:"Precio Oferta", type: "number" },
    { name:"cantidad", label:"Cantidad del producto", type: "number" },
    { name:"estrellas", label:"Califación", type: "number" },
    { name:"detalles", label:"Detalles del producto", type: "text" }
  ]

  const handleInput = (event) => {
    setProduct({...product, [event.target.name]:event.target.value});
  }

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
    <>
      <h1 className="text-2xl font-semibold mb-2">
        Editar Producto
      </h1>
      <form>
        {inputsInfo.map((item, i) => (
          <Input
            key={i} //key no se envia como props
            value={product}
            name={item.name}
            label={item.label}
            type={item.type}
            handleInput={handleInput}
          />
        ))}
      </form>
    </>
  )
}

export default EditProductView