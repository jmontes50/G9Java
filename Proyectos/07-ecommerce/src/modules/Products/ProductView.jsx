import useGetAxios from "../../hooks/useGetAxios";
import Loading from "../ui/Loading";

const ProductView = () => {
  const URL = "https://simple-api-3maz.onrender.com/productos";

  const { data, loading, error } = useGetAxios(URL);
  
  if(loading){
    return <Loading />
  }

  if(error) {
    return <p className="text-xl p-4">Ocurrio un error, por favor intente de nuevo en unos momentos</p>
  }

  return (
    <div>
      {/* obj?.property , operador de encadenamiento opcional */}
      {data?.productos &&
        data.productos.map((item) => <p key={item.id}>{item.nombre}</p>)}
    </div>
  );
};

export default ProductView;
