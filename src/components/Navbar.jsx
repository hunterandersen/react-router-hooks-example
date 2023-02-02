import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul id={"nav-ul"}>
          <li>
            <Link to="/">This will take you Home</Link>
          </li>
          <li>
            <Link to="/about">This will take you to the About page</Link>
          </li>
          <li>
            <Link to="/contact">This will take you to the Contact page</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
