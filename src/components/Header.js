import React from "react";
import logo from "../images/Logo.png";

const Header = () => {
  return (
    <header className="flex justify-center items-center py-4 bg-white">
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
    </header>
  );
};

export default Header;
