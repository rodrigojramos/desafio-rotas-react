import "./styles.css";
import homeIcon from "../../assets/home.svg";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="drr-container drr-header-container">
        <div className="navbar">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "navbar-menu menu-active" : "navbar-menu"
            }
          >
            Início
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "navbar-menu menu-active" : "navbar-menu"
            }
          >
            Produtos
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "navbar-menu menu-active" : "navbar-menu"
            }
          >
            Sobre nós
          </NavLink>
        </div>
        <div className="navbar-img">
          <Link to="/">
            <img src={homeIcon} alt="Home" />
          </Link>
        </div>
      </div>
    </header>
  );
}
