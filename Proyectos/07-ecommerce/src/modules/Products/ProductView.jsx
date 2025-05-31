import useGetAxios from "../../hooks/useGetAxios"

const ProductView = () => {

  const URL = "https://simple-api-3maz.onrender.com/productos";

  const { data } = useGetAxios(URL);
  console.log(data);

  return (
    <div>ProductView</div>
  )
}

export default ProductView