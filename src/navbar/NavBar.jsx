import { Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";

import "./NavBar.css";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <span className="navbar__item">
        <Link className="navbar__link" to="/ships">
          SHIPS
        </Link>
      </span>

      <span className="navbar__item">
        <Link className="navbar__link" to="/haulers">
          HAULERS
        </Link>
      </span>

      <span className="navbar__item">
        <Link className="navbar__link" to="/docks">
          DOCKS
        </Link>
      </span>
    </div>
  );
};
