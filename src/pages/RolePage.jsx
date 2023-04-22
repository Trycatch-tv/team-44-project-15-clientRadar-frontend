import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import InputText from "../components/forms/InputText";
import InputSwitch from "../components/forms/InputSwitch";
import modulesData from "../data/modules.data";
import axiosClient from "../configuration/axiosClient";
import moment from "moment";

const RolePage = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axiosClient
      .get("/roles")
      .then(({ data }) => setRows(data))
      .catch(console.error);
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>ROLE</title>
      </Helmet>
      <div className="row">
        <div className="col-md-5">
          <div className="card">
            <h2 className="card-header">Role</h2>
            <div className="card-body">
              <InputText label="Nombre" id="name" />
              <InputText label="Descipción" id="description" />

              {modulesData.map((m) => (
                <div key={`card_form_module_${m}`} className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title h6">{m.toUpperCase()}</h5>
                    <div className="row">
                      <div className="col-6">
                        <InputSwitch label="Crear" id={`${m}_create`} />
                      </div>
                      <div className="col-6">
                        <InputSwitch label="Ver" id={`${m}_view`} />
                      </div>
                      {m != "sale" && m != "purchase" ? (
                        <React.Fragment>
                          <div className="col-6">
                            <InputSwitch
                              label="Actualizar"
                              id={`${m}_update`}
                            />
                          </div>
                          <div className="col-6">
                            <InputSwitch label="Eliminar" id={`${m}_delete`} />
                          </div>
                        </React.Fragment>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}

              <div className="mb-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>
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
