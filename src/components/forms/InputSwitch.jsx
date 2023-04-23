import React from "react";
import PropTypes from "prop-types";

const InputSwitch = ({
  id,
  name,
  label,
  values,
  onChange,
  onBlur,
  errors,
  touched,
}) => {
  return (
    <div className="form-check">
      <input
        className={`form-check-input ${
          touched[id] ? (errors[id] ? "is-invalid" : "is-valid") : null
        }`}
        type="checkbox"
        id={id}
        name={name ? name : id}
        checked={values[id]}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label className="form-check-label h6" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

InputSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default InputSwitch;
