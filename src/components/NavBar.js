import React from "react";
import { NavLink } from "react-router-dom";

const styled = {
  fontSize: "20px",
};

function NavBar() {
  return (
    <ul style={styled}>
      <li>
        <NavLink to="home">Home Page</NavLink>
      </li>
      <li>
        <NavLink to="movies">Movies Page</NavLink>
      </li>
      <li>
        <NavLink to="directors">Directories Page</NavLink>
      </li>
      <li>
        <NavLink to="actors">Actors Page</NavLink>
      </li>
    </ul>
  );
}

export default NavBar;
