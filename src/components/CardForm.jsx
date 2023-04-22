import React from "react";
import PropTypes from "prop-types";

const CardForm = ({ title, onSubmit, children, onReset }) => {
  return (
    <div className="card">
      <h2 className="card-header">{title}</h2>
      <form className="card-body" onSubmit={onSubmit}>
        {children}

        <div className="mb-3">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%" }}
          >
            Agregar
          </button>
        </div>
        <div className="mb-3">
          <button
            type="button"
            onClick={onReset}
            className="btn btn-warning"
            style={{ width: "100%" }}
          >
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
};

CardForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  children: PropTypes.any,
};

export default CardForm;
