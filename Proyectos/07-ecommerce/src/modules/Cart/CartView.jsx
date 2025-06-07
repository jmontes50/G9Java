const CartView = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-6">
      <h2 className="text-3xl font-semibold mb-5">
        Checkout
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* primera col */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-4">
            Resumen del carrito
          </h3>
          <table className="w-full">
            <thead className="text-xs uppercase">
              <tr>
                <th className="px-4 py-3 text-left">Producto</th>
                <th className="px-4 py-3 text-left">P. Unit.</th>
                <th className="px-4 py-3 text-left">Cant.</th>
                <th className="px-4 py-3 text-left">Sub-Total</th>
              </tr>
            </thead>
          </table>
        </div>
        {/* segunda col */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold">
            Datos de envio
          </h3>
        </div>
      </div>
    </div>
  )
}

export default CartView
