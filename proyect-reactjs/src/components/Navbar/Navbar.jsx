import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MiLogo</div>

      <div className="links">
        <ul>
          <li>
            <a href="#">Verduras</a>
          </li>
          <li>
            <a href="#">Frutas</a>
          </li>
          <li>
            <a href="#">Lacteos</a>
          </li>
          <li>
            <a href="#">Huevos</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>

      <CartWidget />
    </nav>
  );
};

export default Navbar;
