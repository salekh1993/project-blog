import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container-header">
        <p>THE</p>
        <h1>Unicode</h1>
      </div>
      <nav>
        <ul className="category">
          <Link to="/">Home</Link>
          <Link to="/Tourism">Tourism</Link>
          <Link to="/Technology">Technology</Link>
          <Link to="/fitness">Fitness</Link>
          <Link to="/sport">Sport</Link>
          <Link to="/food">food</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
