import { NavLink } from "react-router-dom";
import "./styles.css";

export default function Card() {
  return (
    <div className="drr-container drr-card-container drr-mt20 drr-mb20">
      <NavLink
        to="/products/computers"
        className={({ isActive }) =>
          isActive ? "navbar-card menu-active" : "navbar-card"
        }
      >
        Computadores
      </NavLink>

      <NavLink
        to="/products/electronics"
        className={({ isActive }) =>
          isActive ? "navbar-card menu-active" : "navbar-card"
        }
      >
        Eletrônicos
      </NavLink>

      <NavLink
        to="/products/books"
        className={({ isActive }) =>
          isActive ? "navbar-card menu-active" : "navbar-card"
        }
      >
        Livros
      </NavLink>
    </div>
  );
}
