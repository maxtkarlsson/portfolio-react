//import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <nav className="navigation-container">
      <ul className="nav">
        <li className="nav__item">
          <a>About me</a>
        </li>
        <li className="nav__item">
          <a>Projects</a>
        </li>
        <li className="nav__item">
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  );
};
