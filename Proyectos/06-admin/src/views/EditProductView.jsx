import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { requestProductById } from "../services/productService";
import { requestCategories } from "../services/categoryService";
import Input from "../components/Input";
import { uploadFile } from "../services/supabaseService";
import { requestUpdateProduct } from "../services/productService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const EditProductView = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    detalles: "",
    precio_oferta: 0,
    cantidad: 0,
    estrellas: 4,
    imagen: "https://picsum.photos/500",
    categoryId: 1,
  });

  //sirve para referenciar elementos en el JSX,
  //sin necesidad de un estado
  const modalRef = useRef();

  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const inputsInfo = [
    { name: "nombre", label: "Nombre del producto", type: "text" },
    { name: "descripcion", label: "Descripción", type: "text" },
    { name: "precio", label: "Precio Normal", type: "number" },
    { name: "precio_oferta", label: "Precio Oferta", type: "number" },
    { name: "cantidad", label: "Cantidad del producto", type: "number" },
    { name: "estrellas", label: "Califación", type: "number" },
    { name: "detalles", label: "Detalles del producto", type: "text" },
  ];

  const handleInput = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSelect = (e) => {
    const newCategoryId = Number(e.target.value);
    setProduct({ ...product, categoryId: newCategoryId });
  };

  const handleInputFile = (event) => {
    //target.files nos da un FileList que funciona como Array asi que tomamos la 1ra imagen con [0]
    setImage(event.target.files[0]);
  };

  const openDialog = () => {
    modalRef.current.showModal();
  }

  const closeDialog = () => {
    modalRef.current.close();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(image) {
        const publicUrlImage = await uploadFile(image);
        product.imagen = publicUrlImage;
      }
      await requestUpdateProduct(product);
      await Swal.fire({
        icon:"success",
        title:"Edición exitosa",
        text:`${product.nombre} se editó correctamente`
      })
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const getProductAndCategories = async () => {
      try {
        const data = await requestProductById(id);
        const dataCategories = await requestCategories();
        // console.log(data);
        setProduct(data);
        setCategories(dataCategories);
      } catch (error) {
        console.log(error);
      }
    };
    getProductAndCategories();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-semibold mb-2">Editar Producto</h1>
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
          <select className="select w-full" onChange={handleSelect}>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.nombre}
              </option>
            ))}
          </select>
        </div>
        {/* input file */}
        <div className="mb-3 p-2">
          <label className="block mb-1" htmlFor="imagen">
            Seleccione una imagen:
          </label>
          <div className="flex gap-2">
            <input
              className="file-input w-full"
              id="imagen"
              type="file"
              onChange={handleInputFile}
              // multiple
            />
            {/* ver imagen actual */}
            <button 
              className="btn btn-neutral" 
              type="button"
              onClick={openDialog}
            >
              Ver Imagen Actual
            </button>
          </div>
          {/* <img src={product.imagen} alt={product.nombre} className={show ? "block" : "hidden"}/> */}
        </div>
        <button className="btn btn-soft btn-success mt-2">
          Confirmar cambios
        </button>
      </form>
      {/* modal */}
      <dialog className="modal" ref={modalRef}>
        <div className="modal-box">
          {/* content */}
          <img src={product.imagen} alt={product.nombre} />
          <button 
            className="btn btn-neutral btn-sm mt-2 ms-auto block" 
            onClick={closeDialog}
          >
            Cerrar
          </button>
        </div>
      </dialog>
    </>
  );
};

export default EditProductView;
