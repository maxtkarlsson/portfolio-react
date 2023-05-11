import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <nav className="navigation-container">
      <ul className="nav">
        <li className="nav__item">
          <Link to="/">About me</Link>
        </li>
        <li className="nav__item">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="nav__item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
