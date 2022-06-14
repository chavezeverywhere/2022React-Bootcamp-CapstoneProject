import React from "react";
import "./NavBar.css";
import { Home, Cart } from "../../Pages";

const renderMap = {
  HOME: <Home />,
  CART: <Cart />,
};

const NavBar = () => {
  return (
    <nav className="navBar">
      <a href="/" className="logoContainer">
        <img src="http://placehold.jp/80x80.png" alt="logo" />
      </a>
      <input placeholder="searchBar" />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/productlist">Product List</a>
        </li>
      </ul>
      <a href="/cart" className="shoppingCartContainer">
        <img src="http://placehold.jp/80x80.png" alt="cart" />
      </a>
    </nav>
  );
};

export default NavBar;
