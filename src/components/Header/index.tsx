import "./styles.css";
import homeIcon from "../../assets/home.svg";

export default function Header() {
  return (
    <header>
      <div className="drr-container drr-header-container">
        <div className="navbar">
          <div className="navbar-menu">
            Início
          </div>
          <div className="navbar-menu">
            Produtos
          </div>
          <div className="navbar-menu">
            Sobre nós
          </div>
        </div>
        <div className="navbar-img">
            <img src={homeIcon} alt="Home" />
        </div>
      </div>
    </header>
  );
}
