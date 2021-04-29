import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiUsers, FiLogOut } from "react-icons/fi";

import userIcon from "../assets/images/user-icon.png";

export default function Navbar({ page }) {
  const history = useHistory();

  const [userDropdown, setUserDropdown] = useState(false);

  function handleLogout() {
    history.push("/login");
  }

  const checkActiveLink = (linkPage) =>
    linkPage === page ? "nav-link-active" : "";

  return (
    <>
      <nav className="header">
        <div className="container nav-container">
          <Link to="/" className="header-brand">
            CATARCO
          </Link>
          <div className="h-100">
            <div
              className="header-user-box"
              type="button"
              onClick={() => setUserDropdown(!userDropdown)}
            >
              <img
                src={userIcon}
                className="header-user-icon"
                alt="User Icon"
              />
              <div className="d-none d-sm-block">
                <p className="header-user-name">Igor Aragão Gomes</p>
                <p className="header-user-role">Administrador</p>
              </div>
            </div>
            {userDropdown ? (
              <div className="dropdown-menu header-user-drop pr-4">
                <div className="d-block d-sm-none mb-3">
                  <p className="header-user-name text-dark">
                    Igor Aragão Gomes
                  </p>
                  <p className="header-user-role text-dark">Administrador</p>
                </div>
                <div
                  className="d-flex flex-row mb-drop-item"
                  type="button"
                  onClick={() => history.push("/usuarios")}
                >
                  <FiUsers className="drop-item-icon" />
                  <p className="drop-item-text">Gerenciar Usuários</p>
                </div>
                <div
                  className="d-flex flex-row"
                  type="button"
                  onClick={() => handleLogout()}
                >
                  <FiLogOut className="drop-item-icon" />
                  <p className="drop-item-text">Sair</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
      <nav className="navbar">
        <div className="container">
          <div className="nav-list">
            <Link to="/" className={`nav-link ${checkActiveLink("dashboard")}`}>
              Dashboard
            </Link>
            <Link
              to="/controle"
              className={`nav-link ${checkActiveLink("controle")}`}
            >
              Controle
            </Link>
            <Link
              to="/registros"
              className={`nav-link ${checkActiveLink("registros")}`}
            >
              Registros
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
