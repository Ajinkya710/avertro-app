import React from "react";
import logo from "../../images/Logo.png";

const Header = () => {
  return (
    <header className="fixed flex justify-center items-center py-4 bg-white w-[100%] top-0 shadow-md z-20">
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
    </header>
  );
};

export default Header;
