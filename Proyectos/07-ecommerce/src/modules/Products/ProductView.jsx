import useGetAxios from "../../hooks/useGetAxios";
import Loading from "../ui/Loading";
import ProductCard from "../ui/ProductCard";

const ProductView = () => {
  const URL = "https://simple-api-3maz.onrender.com/productos";

  const { data, loading, error } = useGetAxios(URL);

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.productos &&
          data.productos.map((item) => (
            <ProductCard product={item} key={item.id} />
          ))}
      </div>
    </div>
  );
};

export default ProductView;
