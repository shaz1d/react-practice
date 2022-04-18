import React from "react";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <a href="http://">Home</a>
          </li>
          <li>
            <a href="http://">About</a>
          </li>
          <li>
            <a href="http://">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
