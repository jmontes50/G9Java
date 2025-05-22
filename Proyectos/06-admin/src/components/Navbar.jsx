import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        {/* <a href="crearproducto">Texto</a> */}
        <Link to="/" className="btn btn-ghost text-xl">
          Admin
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/createproduct">Crear producto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
