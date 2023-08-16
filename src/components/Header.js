import React from "react";
import logo from "../images/Logo.png";

const Header = () => {
  return (
    <header class="flex justify-center items-center py-5 bg-white" >
      <img src={logo} alt="Logo" />
    </header>
  );
};

export default Header;
