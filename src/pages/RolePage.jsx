import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useFormik } from "formik";

import InputSwitch from "../components/forms/InputSwitch";
import InputText from "../components/forms/InputText";

import roleFormValidation from "../validations/role.validation";
import { tableHeadersRole } from "../configuration/tables";
import axiosClient from "../configuration/axiosClient";
import modulesData from "../data/modules.data";
import CardForm from "../components/CardForm";
import Table from "../components/Table";

const RolePage = () => {
  const [selected, setSelected] = useState(null);
  const [headers] = useState(tableHeadersRole);
  const [rows, setRows] = useState([]);
  useEffect(() => getData, []);

  useEffect(() => {
    if (selected) {
      Object.keys(selected).map((i) => setFieldValue(i, selected[i]));
    }
  }, [selected]);

  const getData = () => {
    axiosClient
      .get("/roles")
      .then(({ data }) => setRows(data))
      .catch(console.error);
  };

  const {
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
    handleSubmit,
    handleReset,
    setFieldValue,
  } = useFormik({
    ...roleFormValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleSelect = (item) => setSelected(item);

  const handleClean = () => {
    setSelected(null);
    handleReset();
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>ROLE</title>
      </Helmet>
      <div className="row">
        <div className="col-md-5">
          <CardForm
            title="Formulario Role"
            onSubmit={handleSubmit}
            onClean={handleClean}
          >
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
                    {m != "sell" && m != "purchase" ? (
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
          <Table
            headers={headers}
            rows={rows}
            options={true}
            onOption={handleSelect}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default RolePage;
