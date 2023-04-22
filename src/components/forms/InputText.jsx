import React from "react";
import PropTypes from "prop-types";

const InputText = ({ type = "text", label, id, name }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        className={`form-control`}
        type={type}
        id={id}
        name={name ? name : id}
        autoComplete="off"
      />
    </div>
  );
};

InputText.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
};

export default InputText;
