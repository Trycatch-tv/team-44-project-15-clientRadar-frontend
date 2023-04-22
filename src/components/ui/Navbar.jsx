import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/app">
            CLIENT RADAR
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-controls="navbarMain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarMain">
            <>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* MODULE USER */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Users
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/app/role">
                        roles
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="/app/user">
                        user
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* MODULE WAREHOUSE */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Almacen
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/app/category">
                        category
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="/app/product">
                        product
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* MODULE SHOP */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Tienda
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/app/customer">
                        clientes
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" to="/app/order">
                        ventas
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              {/* ACCOUNT */}
              <span className="navbar-text">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Correo electronico
                  </button>

                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/app/profile">
                        perfil
                      </Link>
                    </li>
                    <li>
                      <span className="dropdown-item">salir</span>
                    </li>
                  </ul>
                </div>
              </span>
            </>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
