import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useFormik } from "formik";

import InputText from "../components/forms/InputText";

import userFormValidation from "../validations/user.validation";
import { tableHeadersUser } from "../configuration/tables";
import axiosClient from "../configuration/axiosClient";
import CardForm from "../components/CardForm";
import Table from "../components/Table";
import Swal from "sweetalert2";
import InputSelect from "../components/forms/InputSelect";

const UserPage = () => {
  const [selected, setSelected] = useState(null);
  const [headers] = useState(tableHeadersUser);
  const [rows, setRows] = useState([]);
  const [roles, setRoles] = useState([]);
  useEffect(() => getData, []);

  useEffect(() => {
    if (selected) {
      Object.keys(selected).map((i) => setFieldValue(i, selected[i]));
    }
  }, [selected]);

  const getData = () => {
    axiosClient
      .get("/users")
      .then(({ data }) => setRows(data))
      .catch(console.error);
    axiosClient
      .get("/roles")
      .then(({ data }) => setRoles(data))
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
    ...userFormValidation,
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
      .post(`/user`, payload)
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
          .put(`/user/${selected?.id}`, payload)
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
          .delete(`/user/${selected?.id}`)
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
        <title>USER</title>
      </Helmet>
      <div className="row">
        <div className="col-md-5">
          <CardForm
            title="Formulario Usuario"
            onSubmit={handleSubmit}
            onClean={handleClean}
            selected={selected}
            onDelete={handleDelete}
          >
            <InputSelect
              data={roles}
              label="Role"
              id="role"
              values={values}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors}
              touched={touched}
            />
            <InputText
              label="Nombres"
              id="name"
              values={values}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors}
              touched={touched}
            />

            <InputText
              label="Apellidos"
              id="surname"
              values={values}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors}
              touched={touched}
            />

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

export default UserPage;
