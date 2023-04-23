import React from "react";
import PropTypes from "prop-types";

const InputSelect = ({
  data,
  label,
  id,
  name,
  values,
  onChange,
  onBlur,
  touched,
  errors,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <select
        className={`form-select is-${
          touched[id] ? (errors[id] ? "invalid" : "valid") : null
        }`}
        id={id}
        name={name ? name : id}
        onChange={onChange}
        value={values[id]}
        onBlur={onBlur}
        autoComplete="off"
      >
        <option value=""></option>

        {data.map((opt) => (
          <option key={`role_option_${opt.id}`} value={opt.id}>
            {opt.name}
          </option>
        ))}
      </select>
      {touched[id] && errors[id] ? (
        <div className="invalid-feedback">{errors[id]}</div>
      ) : null}
    </div>
  );
};

InputSelect.propTypes = {
  data: PropTypes.array,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  values: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default InputSelect;
