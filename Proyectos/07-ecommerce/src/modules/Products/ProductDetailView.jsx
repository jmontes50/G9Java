import { useState } from "react";
import { useParams } from "react-router-dom";
import useGetAxios from "../../hooks/useGetAxios";
import Loading from "../ui/Loading";
import ButtonsQty from "../ui/ButtonsQty";

const ProductDetailView = () => {
  const [qtyProduct, setQtyProduct] = useState(1);

  const { id } = useParams();

  const { data, loading, error } = useGetAxios(`https://simple-api-3maz.onrender.com/productos/${id}`)

  if (loading) {
    return <Loading />
  }

  if(error) {
    return <p>Error al realizar la operación, intente de nuevo en unos momentos</p>
  }
  
  const incrementQty = () => {
    //en caso se llegue a la misma cantidad del stock cortamos la ejecución
    if(qtyProduct === data.stock) return;
    setQtyProduct(qtyProduct + 1);
  }

  const decrementQty = () => {
    if(qtyProduct === 1) return;
    setQtyProduct(qtyProduct - 1);
  }

  return (
    <div className="max-w-[1200px] mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="w-full h-[500px]">
        {/* img */}
        <img src={data.imagen} alt={data.nombre} className="w-full h-full object-cover" />
      </div>
      <div className="">
        {/* content */}
        <h2 className="text-3xl font-semibold mb-5">
          {data.nombre}
        </h2>
        <h3 className="text-2xl mb-5">Categoría: {data.categoria.nombre}</h3>
        <p className="font-semibold text-gray-400 mb-3">Stock: {data.stock}</p>
        <p className="font-semibold mb-4">S/ {data.precio.toFixed(2)}</p>
        <p className="mb-4">{data.descripcion}</p>
        <ButtonsQty />
      </div>
    </div>
  )
}

export default ProductDetailView;