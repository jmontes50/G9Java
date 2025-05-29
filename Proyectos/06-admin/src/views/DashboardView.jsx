import { useState, useEffect } from "react";
import { requestProducts, requestDeleteProduct } from "../services/productService";
import TableData from "../components/TableData";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const DashboardView = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  //se utilizará para las cabeceras de la tabla
  const headers = [
    { name: "nombre", label: "Nombre" },
    { name: "descripcion", label: "Descripción" },
    {
      name: "precio",
      label: "Precio Normal",
      format: (value) => `S/ ${value}`,
    },
  ];

  const handleDelete = async (id) => {
    const resultSwal = await Swal.fire({
      title: "Desea eliminar este producto?",
      text: "Esta acción es irreversible",
      icon: "warning",
      showConfirmButton: true,
      confirmButtonText: "Si, eliminar producto",
      confirmButtonColor: "red",
      showCancelButton: true,
      cancelButtonText: "No, cancelar"
    })
  }

  //objetitos que indique el nombre, el como de la acción a ejecutar (editar y eliminar)
  const actionsTable = [
    {
      name: "Editar",
      icon: "edit",
      class: "btn btn-warning btn-sm", //X bgColor
      action: (id) => {
        navigate(`/editproduct/${id}`)
      },
    },
    {
      name: "Eliminar",
      icon: "delete",
      class: "btn btn-error btn-sm", //X bgColor
      action: () => {
        handleDelete()
      },
    },
  ];

  useEffect(() => {
    try {
      const getProducts = async () => {
        const productsObtained = await requestProducts();
        // console.log(products);
        setProducts(productsObtained);
      };
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto p-4">
      <h2 className="pb-4">Dashboard View</h2>
      <TableData data={products} headers={headers} actions={actionsTable} />
    </div>
  );
};

export default DashboardView;
