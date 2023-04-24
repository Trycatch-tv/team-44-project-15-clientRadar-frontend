import React, { useContext } from "react";
import { useFormik } from "formik";
import Swal from "sweetalert2";

import authFormValidation from "../validations/auth.validation";
import axiosClient from "../configuration/axiosClient";
import InputText from "../components/forms/InputText";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const { values, handleChange, handleBlur, touched, errors, handleSubmit } =
    useFormik({
      ...authFormValidation,
      onSubmit: (values) => {
        axiosClient
          .post("/auth/login", values)
          .then(({ data }) => {
            login(data.token, data.user, data.role);
            Swal.fire({
              title: "Bienvenido!",
              icon: "success",
            }).then(() => navigate("/app"));
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              title: "Credenciales invalidas",
              text: "valide los datos ingresados e intente de nuevo.",
              icon: "error",
            });
          });
      },
    });
  return (
    <React.Fragment>
      <div className="card" style={{ minWidth: 400 }}>
        <div className="card-header text-center" data-testid="test-title">
          Inicio de sesión
        </div>
        <form className="card-body" onSubmit={handleSubmit}>
          <InputText
            type="email"
            label="Correo electronico"
            id="email"
            values={values}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors}
            touched={touched}
          />
          <InputText
            type="password"
            label="Contaseña"
            id="password"
            values={values}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors}
            touched={touched}
          />

          <div className="mb-3">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%" }}
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
