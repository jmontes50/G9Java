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
    { name:"descripcion", label:"Descripción", type: "text" }
  ]
  // import Input from "../components/Input";
  return (
    <form>
      {inputsInfo.map((item, i) => (
        <Input
          key={i} //key no se envia como props
          value={product}
          name={item.name}
          label={item.label}
          type={item.type}
          handleInput={() => {}}
        />
      ))}
    </form>
  )
}

export default CreateProductView