const ProductCard = ({ product }) => {
  /**
   * <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
   */
  return (
    <div className="card bg-base-200 w-full shadow-sm">
      <picture className="h-420 w-full">
        <img src={product.imagen} className="w-full h-full object-cover" alt={product.nombre} />
      </picture>
      <div className="card-body">
        <div className="flex gap-4">
          <div className="grow-1">
            <h2 className="card-title">{product.nombre}</h2>
            <p>{product.precio}</p>
          </div>
          <button className="btn btn-primary">
            <i className="fa-solid fa-eye"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard