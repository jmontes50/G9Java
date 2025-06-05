import { Link } from "react-router-dom";

const Navbar = () => {
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
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <i className="fa-solid fa-cart-shopping"></i>
            <span 
            className="badge badge-xs badge-primary indicator-item"
            >
              1
            </span>
          </div>
        </button>
      </div>
    </nav>
  )
}

export default Navbar