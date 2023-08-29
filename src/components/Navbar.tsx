//import { Link } from "react-router-dom";

import { NavListItem } from "./styled/nav/NavListItem";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavListItem>
          <a>About me</a>
        </NavListItem>

        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  );
};
