import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/"> Logo </Link>
      </div>

      <div className="links">
        <ul className="links-nav">
          <li>
            <Link to="category/Verduras" className="nav-ref">
              Verduras
            </Link>
          </li>
          <li>
            <Link to="category/Frutas" className="nav-ref">
              Frutas
            </Link>
          </li>
          <li>
            <Link to="category/Lacteos" className="nav-ref">
              Lacteos
            </Link>
          </li>
          <li>
            <Link to="category/Huevos" className="nav-ref">
              Huevos
            </Link>
          </li>
          <li>
            <Link to="category/Contacto" className="nav-ref">
              Contacto
            </Link>
          </li>
        </ul>
      </div>

      <CartWidget />
    </nav>
  );
};

export default Navbar;
