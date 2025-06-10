import { useState, useEffect } from "react";
import useGetAxios from "../../../hooks/useGetAxios";
import ProductCard from "../../ui/ProductCard";

const OurProducts = () => {
  const [categorySelected, setCategorySelected] = useState(1);
  const [products, setProducts] = useState([]);
  const URL = "https://simple-api-3maz.onrender.com/categorias";
  const { data: categories, loading, error } = useGetAxios(URL);

  useEffect(() => {
    if (categories && categories.length > 0) {
      const selectedCategory = categories.find(
        (cat) => cat.id === categorySelected
      );
      setProducts(selectedCategory?.productos || []);
    }
  }, [categories, categorySelected]);

  return (
    <div className="max-w-[1000px] mx-auto py-4 mb-10">
      <h3 className="text-xl font-semibold text-center mb-4">Our Products</h3>

      <div className="join flex justify-center mb-6 flex-wrap gap-2">
        {categories &&
          categories.map((item) => (
            <button
              className={`btn join-item ${categorySelected === item.id ? "btn-primary" : "btn-ghost"}`}
              key={item.id}
              onClick={() => setCategorySelected(item.id)}
            >
              {item.nombre}
            </button>
          ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
        {products.length > 0 ? (
          products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-full">No hay productos disponibles</p>
        )}
      </div>
    </div>
  );
};

export default OurProducts;
