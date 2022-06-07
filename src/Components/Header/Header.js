import React from "react";
import "./Header.css";

const Header = () => {
  return (
      <div className="header">
        <img src="http://placehold.jp/80x80.png" al="logo"/>
        <input placeholder="Search"/>
        <img src="http://placehold.jp/80x80.png" al="cart"/>
      </div>
  );
};

export default Header;
