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
import Swal from "sweetalert2";

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
      if (selected) {
        handleUpdate(values);
      } else {
        handleCreate(values);
      }
    },
  });

  const handleSelect = (item) => setSelected(item);

  const handleClean = () => {
    setSelected(null);
    handleReset();
  };

  const handleCreate = (payload) => {
    axiosClient
      .post(`/role`, payload)
      .then(() => {
        Swal.fire({
          title: "Registro agregado correctamente",
          icon: "success",
        }).then(() => {
          getData();
          handleClean();
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Registro no agregado",
          icon: "error",
        });
      });
  };

  const handleUpdate = (payload) => {
    Swal.fire({
      title: "Seguro que quiere actualizar el resgistro?",
      icon: "question",
      showCancelButton: true,
      cancelButtonText: "No",
      cancelButtonColor: "#dc3545",
      confirmButtonText: "Si",
      confirmButtonColor: "#28a745",
    }).then((res) => {
      if (res.isConfirmed) {
        axiosClient
          .put(`/role/${selected?.id}`, payload)
          .then(() => {
            Swal.fire({
              title: "Registro actualizado correctamente",
              icon: "success",
            }).then(() => {
              getData();
              handleClean();
            });
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              title: "Registro no actualizado",
              icon: "error",
            });
          });
      }
    });
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Seguro que quiere eliminar el resgistro?",
      icon: "question",
      showCancelButton: true,
      cancelButtonText: "No",
      cancelButtonColor: "#dc3545",
      confirmButtonText: "Si",
      confirmButtonColor: "#28a745",
    }).then((res) => {
      if (res.isConfirmed) {
        axiosClient
          .delete(`/role/${selected?.id}`)
          .then(() => {
            Swal.fire({
              title: "Registro eliminado correctamente",
              icon: "success",
            }).then(() => {
              getData();
              handleClean();
            });
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              title: "Registro no eliminado",
              icon: "error",
            });
          });
      }
    });
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
            selected={selected}
            onDelete={handleDelete}
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

            <div className="accordion mb-3" id="accordionPanelModules">
              {modulesData.map((mod) => (
                <div key={`accordion_item_${mod}`} className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#panelStay-collapse-${mod}`}
                      aria-expanded="false"
                      aria-controls={`panelStay-collapse-${mod}`}
                    >
                      {mod.toUpperCase()}
                    </button>
                    <div
                      id={`panelStay-collapse-${mod}`}
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body">
                        <div className="row">
                          <div className="col-6">
                            <InputSwitch
                              label="Crear"
                              id={`${mod}_create`}
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
                              id={`${mod}_view`}
                              values={values}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              errors={errors}
                              touched={touched}
                            />
                          </div>
                          {mod != "sell" && mod != "purchase" ? (
                            <React.Fragment>
                              <div className="col-6">
                                <InputSwitch
                                  label="Actualizar"
                                  id={`${mod}_update`}
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
                                  id={`${mod}_delete`}
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
                  </h2>
                </div>
              ))}
            </div>
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
