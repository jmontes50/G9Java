import { useState } from "react";
import Input from "../components/Input";

const CreateProductView = () => {
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
    // console.log("name:", event.target.name);
    // console.log("value:", event.target.value);
    setProduct({...product, [event.target.name]:event.target.value});

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ product })
  }
  
  return (
    <form onSubmit={handleSubmit}>
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
      <button className="btn btn-soft btn-success mt-2">
        Guardar
      </button>
    </form>
  )
}

export default CreateProductView