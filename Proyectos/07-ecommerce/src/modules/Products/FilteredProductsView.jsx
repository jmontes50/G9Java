import useProductStore from "../../stores/useProductsStore";
import ProductCard from "../ui/ProductCard";

const FilteredProductsView = () => {
  const { productosFiltrados } = useProductStore()

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-6">
      <h2 className="text-3xl mb-4">Resultados</h2>

      {productosFiltrados.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {productosFiltrados.map((producto) => (
            <ProductCard key={producto.id} product={producto} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No hay productos para mostrar</p>
      )}
    </div>
  );
};

export default FilteredProductsView;
