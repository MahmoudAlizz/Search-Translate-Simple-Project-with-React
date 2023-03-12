import React from "react";
import Link from "./Link";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <a href="/" className="navbar-brand">
          Logo
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className=" navbar-collapse collapse" id="mainNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Search Wikipedia
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Translate" className="nav-link">
                Translate
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/SearchVideo" className="nav-link">
                Search Youtube
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Unsplash" className="nav-link">
                Search Unsplash
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
