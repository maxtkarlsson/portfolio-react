import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
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
