import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="card bg-base-200 w-full shadow-sm">
      <picture className="h-[320px] w-full overflow-hidden">
        <img src={product.imagen} className="w-full h-full object-cover" alt={product.nombre} />
      </picture>
      <div className="card-body">
        <div className="flex gap-4">
          <div className="grow-1">
            <h2 className="card-title">{product.nombre}</h2>
            {/* toFixed es un método que me permite indicar cuantos decimales quiero mostrar */}
            <p>S/ {product.precio.toFixed(2)}</p>
          </div>
          {/* button */}
          <Link to={`/product/${product.id}`} className="btn btn-primary">
            <i className="fa-solid fa-eye"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard