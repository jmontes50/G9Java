import { Link } from "react-router-dom";
import useCartStore from "../../stores/useCartStore";

const Navbar = () => {
  const { cart } = useCartStore();

  const totalQty = cart.reduce((acumulador, item) => acumulador + item.quantity, 0);

  return (
    <nav className="navbar bg-base-100 shadow-sm max-w-[1200px] mx-auto">
      {/* start */}
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">Store</Link>
      </div>
      {/* center */}
      <div className="navbar-center">
        <form>
          <input
            type="search"
            placeholder="Search"
            className="input input-bordered w-auto md:w-[350px]"
          />
        </form>
      </div>
      {/* end */}
      <div className="navbar-end">
        <Link to="/cart" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <i className="fa-solid fa-cart-shopping fa-2x"></i>
            <span
            className="badge badge-xs badge-primary indicator-item"
            >
              {totalQty}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
