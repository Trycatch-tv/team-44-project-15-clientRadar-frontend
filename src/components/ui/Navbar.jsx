import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { auth, user, role } = useContext(AuthContext);
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
            {auth ? (
              <>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {/* MODULE USER */}
                  {role?.user_view || role?.role_view ? (
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
                        {role.role_view ? (
                          <li>
                            <Link className="dropdown-item" to="/app/role">
                              roles
                            </Link>
                          </li>
                        ) : null}
                        {role?.user_view ? (
                          <li>
                            <Link className="dropdown-item" to="/app/user">
                              user
                            </Link>
                          </li>
                        ) : null}
                      </ul>
                    </li>
                  ) : null}

                  {/* MODULE WAREHOUSE */}
                  {role?.category_view || role?.product ? (
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
                        {role?.category_view ? (
                          <li>
                            <Link className="dropdown-item" to="/app/category">
                              category
                            </Link>
                          </li>
                        ) : null}
                        {role?.product_view ? (
                          <li>
                            <Link className="dropdown-item" to="/app/product">
                              product
                            </Link>
                          </li>
                        ) : null}
                      </ul>
                    </li>
                  ) : null}

                  {/* MODULE SHOP */}
                  {role?.customer_view || role?.sell_view ? (
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
                        {role?.customer_view ? (
                          <li>
                            <Link className="dropdown-item" to="/app/customer">
                              clientes
                            </Link>
                          </li>
                        ) : null}

                        {role?.sell_view ? (
                          <li>
                            <Link className="dropdown-item" to="/app/order">
                              ventas
                            </Link>
                          </li>
                        ) : null}
                      </ul>
                    </li>
                  ) : null}
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
                      {user?.email}
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
            ) : null}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
