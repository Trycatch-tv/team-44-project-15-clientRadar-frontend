import React from "react";
import PropTypes from "prop-types";

const InputText = ({
  type = "text",
  label,
  id,
  name,
  values,
  onChange,
  onBlur,
  errors,
  touched,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        className={`form-control ${
          touched[id] ? (errors[id] ? "is-invalid" : "is-valid") : null
        }`}
        type={type}
        id={id}
        name={name ? name : id}
        onChange={onChange}
        onBlur={onBlur}
        value={values[id]}
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
