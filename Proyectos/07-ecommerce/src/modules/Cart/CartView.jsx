import useCartStore from "../../stores/useCartStore";
import { useForm } from "react-hook-form";

const CartView = () => {
  const { cart } = useCartStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleConfirmCart = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-[1200px] mx-auto py-6">
      <h2 className="text-3xl font-semibold mb-5">Checkout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* primera col */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-4">Resumen del carrito</h3>
          <table className="w-full">
            <thead className="text-xs uppercase">
              <tr>
                <th className="px-4 py-3 text-left">Producto</th>
                <th className="px-4 py-3 text-left">P. Unit.</th>
                <th className="px-4 py-3 text-left">Cant.</th>
                <th className="px-4 py-3 text-left">Sub-Total</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {cart &&
                cart.map((prod) => (
                  <tr key={prod.id} className="border-b-2">
                    <td className="px-4 py-3">{prod.nombre}</td>
                    <td className="px-4 py-3">S/ {prod.precio.toFixed(2)}</td>
                    <td className="px-4 py-3">{prod.quantity} Unid.</td>
                    <td className="px-4 py-3">
                      S/ {(prod.precio * prod.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {/* segunda col */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold">Datos de envio</h3>
          <form onSubmit={handleSubmit(handleConfirmCart)}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Nombre completo:</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Jorge M"
                {...register("fullname", { required: true })}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Dirección:</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Av. Arenales"
                {...register("address", {
                  required: "Este campo es obligatorio",
                  minLength: {
                    value: 5,
                    message: "La dirección requiere al menos 5 letras"
                  },
                  maxLength: {
                    value: 20,
                    message: "La dirección requiere no más de 20 letras"
                  },
                })}
              />
              {errors.address && (<span className="text-red-600">
                {errors.address.message}
              </span>)}
            </fieldset>
            <button className="btn btn-success mt-4 ml-auto block">
              Confirmar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartView;
