import { useState, useEffect } from "react";
import useGetAxios from "../../../hooks/useGetAxios";
import ProductCard from "../../ui/ProductCard";

const OurProducts = () => {
  const [categorySelected, setCategorySelected] = useState(1);
  const [products, setProducts] = useState([]);
  const URL = "https://simple-api-3maz.onrender.com/categorias";

  //si estamos aplicando desestructuración pero quiero referenciar lo obtenido con otro nombre puedo asignar una referencia al momento de desestrecturar
  const { data: categories, loading, error } = useGetAxios(URL);

  useEffect(() => {
    if(categories && categories.length > 0) {
      const categoryFound = categories.find((cat) => cat.id === categorySelected);
      console.log(categoryFound)
    }
  }, [categorySelected])

  return (
    <div className="max-w-[1000px] mx-auto py-4 mb-10">
      <h3 className="text-xl font-semibold text-center mb-4">Our Products</h3>
      <div className="join flex justify-center mb-6 gap-4">
        {categories &&
          categories.map((item) => (
            <button
              className={`btn join-item ${categorySelected === item.id ? "btn-primary" : "btn-ghost"} `}
              key={item.id}
              onClick={() => setCategorySelected(item.id)}
            >
              {item.nombre}
            </button>
          ))}
      </div>
      {/* productos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-4">

      </div>
    </div>
  );
};

export default OurProducts;
