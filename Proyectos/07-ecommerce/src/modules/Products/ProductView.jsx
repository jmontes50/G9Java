import { useState } from "react";
import useGetAxios from "../../hooks/useGetAxios";
import Loading from "../ui/Loading";
import ProductCard from "../ui/ProductCard";

const ProductView = () => {
  const [page, setPage] = useState(1);

  // const URL = "https://simple-api-3maz.onrender.com/productos";
  const URL = `https://simple-api-3maz.onrender.com/productos?page=${page}`

  const { data, loading, error } = useGetAxios(URL);

  const totalPages = data.meta.totalPages;

  const previousPage = () => {
    if(page > 1) { //para no pasarnos del 1 ó menos
      setPage(page - 1);
    }
  }

  const nextPage = () => {
    if(page < totalPages) { //validamos que sea menor a las paginas totales de la API
      setPage(page + 1);
    }
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <p className="text-xl p-4">
        Ocurrio un error, por favor intente de nuevo en unos momentos
      </p>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto p-6">
      {/* obj?.property , operador de encadenamiento opcional */}
      <h2 className="text-3xl mb-6">Productos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {data?.productos &&
          data.productos.map((item) => (
            <ProductCard product={item} key={item.id} />
          ))}
      </div>
      <div className="flex justify-between">
        <button className="btn btn-primary" onClick={previousPage}>
          Página Previa
        </button>
        <button className="btn btn-primary" onClick={nextPage}>
          Siguiente Página
        </button>
      </div>
    </div>
  );
};

export default ProductView;
