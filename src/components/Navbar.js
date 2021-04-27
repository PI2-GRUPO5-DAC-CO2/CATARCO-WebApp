import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ page }) {
  const checkActiveLink = (linkPage) => linkPage === page ? "nav-link-active" : "" ;

  return (
    <>
      <nav className="header">
        <div className="container nav-container">
          <Link to="/" className="header-brand">
            CATARCO
          </Link>
        </div>
      </nav>
      <nav className="navbar">
        <div className="container">
          <div className="nav-list">
            <Link to="/" className={`nav-link ${checkActiveLink("dashboard")}`}>
              Dashboard
            </Link>
            <Link to="/controle" className={`nav-link ${checkActiveLink("controle")}`}>
              Controle
            </Link>
            <Link to="/registros" className={`nav-link ${checkActiveLink("registros")}`}>
              Registros
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
