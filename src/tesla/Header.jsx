import React, { useState } from "react";
import TeslaLogo from "./images/logo.svg";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenu(e) {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  }

  return (
    <header>
      <img src={TeslaLogo} alt="Tesla Logo" />
      <ul>
        <li>
          <a href="">Model S</a>
        </li>
        <li>
          <a href="">Model 3</a>
        </li>
        <li>
          <a href="">Model X</a>
        </li>
        <li>
          <a href="">Model Y</a>
        </li>
        <li>
          <a href="">Solar Roof</a>
        </li>
        <li>
          <a href="">Solar Panels</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">Account</a>
        </li>
        <li>
          <a href="" onClick={handleMenu}>
            Menu
          </a>
        </li>
      </ul>

      <ul className="sidebar" style={{ right: menuOpen ? "0" : "-250px" }}>
        <CloseIcon className="closeIcon" onClick={handleMenu} />
        <li>
          <a href="">Model S</a>
        </li>
        <li>
          <a href="">Model 3</a>
        </li>
        <li>
          <a href="">Model X</a>
        </li>
        <li>
          <a href="">Model Y</a>
        </li>
        <li>
          <a href="">Solar Roof</a>
        </li>
        <li>
          <a href="">Solar Panels</a>
        </li>
        <li>
          <a href="">Existing Inventory</a>
        </li>
        <li>
          <a href="">Used Inventory</a>
        </li>
        <li>
          <a href="">Trade In</a>
        </li>
        <li>
          <a href="">Test Drive</a>
        </li>
        <li>
          <a href="">Powerwall</a>
        </li>
        <li>
          <a href="">Commercial Energy</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
