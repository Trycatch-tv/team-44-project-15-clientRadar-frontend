import React from "react";
import PropTypes from "prop-types";

const SellModal = ({ sell }) => {
  return (
    <React.Fragment>
      <div
        className="modal fade"
        id="sellModal"
        tabIndex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="sellModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Factura de venta</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="card">
                <div className="card-body">
                  <h1>CLIENT RADAR</h1>
                  <h2>Factura: 1 </h2>
                  <hr />
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Descripcion</th>
                        <th>Unidad</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>IVA</th>
                        <th>Importe</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h3>Consulta</h3>
                          <p>CEO</p>
                        </td>
                        <td>1</td>
                        <td>hora</td>
                        <td>60.00</td>
                        <td>21%</td>
                        <td>60.00</td>
                      </tr>
                      <tr>
                        <td>
                          <h3>Sesión de coaching</h3>
                          <p>Llevados a cabo los dias 13,14 y 15 de junio</p>
                        </td>
                        <td>3</td>
                        <td>hora</td>
                        <td>75.00</td>
                        <td>21%</td>
                        <td>225.00</td>
                      </tr>
                      <tr>
                        <td colSpan={3}></td>
                        <td colSpan={2}>Subtotal sin iva</td>
                        <td colSpan={1}>285.00</td>
                      </tr>
                      <tr>
                        <td colSpan={3}></td>
                        <td colSpan={2}>Descuento 5%</td>
                        <td colSpan={1}>14.25</td>
                      </tr>
                      <tr>
                        <td colSpan={3}></td>
                        <td colSpan={2}>IVA de 270.75</td>
                        <td colSpan={1}>56.86</td>
                      </tr>
                      <tr>
                        <td colSpan={3}></td>
                        <td colSpan={2}>Total</td>
                        <td colSpan={1}>327.61</td>
                      </tr>
                    </tbody>
                  </table>

                  <h3>Observaciones:</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolorum, recusandae magni? Repudiandae pariatur impedit sunt
                    quam perferendis explicabo ipsa, cupiditate modi dolorem
                    quis corrupti alias nisi ipsum tenetur deserunt qui.
                  </p>
                  <hr />
                  <p>header</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-success">Imprimir</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

SellModal.propTypes = {
  sell: PropTypes.object,
};

export default SellModal;
