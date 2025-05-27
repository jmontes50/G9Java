import { useState, useEffect } from "react";
import Input from "../components/Input";
import { requestCreateProduct } from "../services/productService";
import { requestCategories } from "../services/categoryService";
import { uploadFile } from "../services/supabaseService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

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
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log({ product })
    try {
      if(image){
        const publicUrlImage = await uploadFile(image);
        product.imagen = publicUrlImage;
      }
      // return; //temporal, para que no cree el producto todavia
      const res = await requestCreateProduct(product);
      // console.log("Hecho!!", res);
      await Swal.fire({
        icon:"success",
        title:`Éxito!`,
        text:`${product.nombre} se creó exitosamente`
      })
      navigate('/');
    } catch (error) {
      console.log(error)
    }
  }

  const handleInputFile = (event) => {
    // console.log(event.target.files)
    //target.files nos da un FileList que funciona como Array asi que tomamos la 1ra imagen con [0]
    setImage(event.target.files[0]);
  }

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await requestCategories();
        // console.log("getCategories", data);
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    }
    getCategories();
  }, []);
  
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
      {/* select de categorias */}
      <div className="mb-3 p-2">
        <label className="block mb-1">Seleccione la categoría</label>
        <select className="select w-full">
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* inputfile */}
      <div className="mb-3 p-2">
        <label className="block mb-1" htmlFor="imagen">Seleccione una imagen:</label>
        <input
          className="file-input w-full"
          id="imagen" 
          type="file"
          onChange={handleInputFile}
          // multiple
        />
      </div>

      <button className="btn btn-soft btn-success mt-2">
        Guardar
      </button>
    </form>
  )
}

export default CreateProductView