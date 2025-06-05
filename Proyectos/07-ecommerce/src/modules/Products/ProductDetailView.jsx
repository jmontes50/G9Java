import { useParams } from "react-router-dom";
import useGetAxios from "../../hooks/useGetAxios";
import Loading from "../ui/Loading";

const ProductDetailView = () => {
  const { id } = useParams();

  const { data, loading, error } = useGetAxios(`https://simple-api-3maz.onrender.com/productos/${id}`)

  if (loading) {
    return <Loading />
  }

  if(error) {
    return <p>Error al realizar la operación, intente de nuevo en unos momentos</p>
  }
  // console.log(data);

  return (
    <div>ProductDetailView</div>
  )
}

export default ProductDetailView;