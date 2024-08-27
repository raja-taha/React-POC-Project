import React from "react";
import HamburgerMenu from "./HamburgerMenu";

const HorizontalMenu = () => {
  return (
    <nav className="flex items-center space-x-4 bg-blue p-4">
      <HamburgerMenu />
      <a href="/" className="text-white hover:text-grey">
        Home
      </a>
      <a href="/" className="text-white hover:text-grey">
        About
      </a>
      <a href="/" className="text-white hover:text-grey">
        Contact
      </a>
      <a href="/" className="text-white hover:text-grey">
        Services
      </a>
    </nav>
  );
};

export default HorizontalMenu;
