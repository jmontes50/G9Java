import useProductStore from "../../stores/useProductsStore";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

const SearchInput = () => {
  const inputRef = useRef(null);
  const setProductosFiltrados = useProductStore(
    (state) => state.setProductosFiltrados
  );

  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    const query = inputRef.current?.value.trim();
    if (!query) return;

    try {
      const response = await axios.get(
        `https://simple-api-3maz.onrender.com/productos?q=${query}`
      );
      setProductosFiltrados(response.data.productos);
      navigate("/products");
    } catch (error) {
      console.error("Error en la búsqueda:", error);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Buscar productos..."
        className="input input-bordered w-auto md:w-[350px]"
      />
    </form>
  );
};

export default SearchInput;
