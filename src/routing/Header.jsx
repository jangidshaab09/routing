import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="main">
        <h1> ROUTING </h1>
      
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/service">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      </div>
    </header>
    
  );
}

export default Header;
