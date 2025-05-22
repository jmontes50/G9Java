import { useState, useEffect } from "react";
import { requestProducts } from "../services/productService";
import TableData from "../components/TableData";

const DashboardView = () => {
  const [products, setProducts] = useState([]);

  //se utilizará para las cabeceras de la tabla
  const headers = [
    { name: "nombre", label: "Nombre" },
    { name: "descripcion", label: "Descripción" },
    { name: "precio", label: "Precio Normal"}
  ]

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

  return <div className="max-w-[1280px] mx-auto p-4">
    <h2 className="pb-4">Dashboard View</h2>
    <TableData data={products} headers={headers} />
  </div>;
};

export default DashboardView;
