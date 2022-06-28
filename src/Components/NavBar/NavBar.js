import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <Link to="/" className="logoContainer">
        <img src="http://placehold.jp/80x80.png" alt="logo" />
      </Link>
      <input placeholder="searchBar" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/productlist">Product List</Link>
        </li>
      </ul>
      <Link to="/cart" className="shoppingCartContainer">
        <img src="http://placehold.jp/80x80.png" alt="cart" />
      </Link>
    </nav>
  );
};

export default NavBar;
