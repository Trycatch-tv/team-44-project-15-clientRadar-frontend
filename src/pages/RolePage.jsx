import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useFormik } from "formik";
import moment from "moment";

import InputSwitch from "../components/forms/InputSwitch";
import InputText from "../components/forms/InputText";

import roleFormValidation from "../validations/role.validation";
import axiosClient from "../configuration/axiosClient";
import modulesData from "../data/modules.data";
import CardForm from "../components/CardForm";

const RolePage = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => getData, []);

  const getData = () => {
    axiosClient
      .get("/roles")
      .then(({ data }) => setRows(data))
      .catch(console.error);
  };

  const { values, handleChange, handleBlur, touched, errors, handleSubmit, handleReset } =
    useFormik({
      ...roleFormValidation,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <React.Fragment>
      <Helmet>
        <title>ROLE</title>
      </Helmet>
      <div className="row">
        <div className="col-md-5">
          <CardForm title="Formulario Role" onSubmit={handleSubmit} onReset={handleReset}>
            <InputText
              label="Nombre"
              id="name"
              values={values}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors}
              touched={touched}
            />
            <InputText
              label="Descipción"
              id="description"
              values={values}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors}
              touched={touched}
            />

            {modulesData.map((m) => (
              <div key={`card_form_module_${m}`} className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title h6">{m.toUpperCase()}</h5>
                  <div className="row">
                    <div className="col-6">
                      <InputSwitch
                        label="Crear"
                        id={`${m}_create`}
                        values={values}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                      />
                    </div>
                    <div className="col-6">
                      <InputSwitch
                        label="Ver"
                        id={`${m}_view`}
                        values={values}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                      />
                    </div>
                    {m != "sale" && m != "purchase" ? (
                      <React.Fragment>
                        <div className="col-6">
                          <InputSwitch
                            label="Actualizar"
                            id={`${m}_update`}
                            values={values}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errors={errors}
                            touched={touched}
                          />
                        </div>
                        <div className="col-6">
                          <InputSwitch
                            label="Eliminar"
                            id={`${m}_delete`}
                            values={values}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errors={errors}
                            touched={touched}
                          />
                        </div>
                      </React.Fragment>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </CardForm>
        </div>

        <div className="col-md-7">
          <div className="table-responsive">
            <table className="table table-hover text-center table-bordered align-middle">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Fecha de creación</th>
                  <th>opciones</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id}>
                    <td>{row.name}</td>
                    <td>{row.description}</td>
                    <td>{moment(row.created_at).fromNow()}</td>
                    <td>
                      <button type="button" className="btn btn-primary">
                        Seleccionar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RolePage;
