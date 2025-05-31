import useGetAxios from "../../hooks/useGetAxios";

const ProductView = () => {
  const URL = "https://simple-api-3maz.onrender.com/productos";

  const { data } = useGetAxios(URL);
  console.log(data);

  return (
    <div>
      {data.productos &&
        data.productos.map((item) => <p key={item.id}>{item.nombre}</p>)}
    </div>
  );
};

export default ProductView;
