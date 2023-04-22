import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/ui/Navbar";

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-3">
            {" "}
            <span className="text-danger">Opps!</span> Pagina no encontrada.
          </p>
          <p className="lead">La pagina a la cual quieres acceder no existe.</p>
          <Link className="btn btn-primary" to="/app">
            Ir al inicio
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotFoundPage;
