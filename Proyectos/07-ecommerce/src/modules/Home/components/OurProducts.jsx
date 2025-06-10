import { useState, useEffect } from "react";
import useGetAxios from "../../../hooks/useGetAxios";
import ProductCard from "../../ui/ProductCard";

const OurProducts = () => {
  const [categorySelected, setCategorySelected] = useState(1);
  const URL = "https://simple-api-3maz.onrender.com/categorias";

  //si estamos aplicando desestructuración pero quiero referenciar lo obtenido con otro nombre puedo asignar una referencia al momento de desestrecturar
  const { data: categories, loading, error } = useGetAxios(URL);

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
    </div>
  );
};

export default OurProducts;
