import { Helmet } from "react-helmet-async";
import { useFormik } from "formik";
import React, { useState } from "react";
import sellFormValidation from "../validations/sell.validation";
import InputSelect from "../components/forms/InputSelect";
import mockCustomer from "../mock/mockCustomer";
import mockProduct from "../mock/mockProduct";
import SellModal from "../components/modals/SellModal";

const SellPage = () => {
  const [customers, setCustomers] = useState(mockCustomer);
  const [products, setProducts] = useState(mockProduct);
  const [selected, setSelected] = useState({});

  const {
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    ...sellFormValidation,
    onSubmit: (frm) => {
      console.log(frm);
    },
  });

  const handleSelectProduct = (product) => {
    let data = values.details;
    let payload = {
      product: product.id,
      count: 1,
      price: product.price,
      taxes: product.taxes,
    };
    let existe = data.filter((d) => d.product == product.id);
    let tmp = [];
    if (existe.length) {
      data.forEach((d, index) => {
        if (d.product == product.id) {
          data[index] = { ...d, count: d.count + 1 };
        }
      });

      setFieldValue("details", [...data]);
      tmp = [...data];
    } else {
      setFieldValue("details", [...data, payload]);
      tmp = [...data, payload];
    }
    handleSetTotals(tmp);
  };

  const getName = (id) => {
    let name = "";
    let filtered = products.filter((p) => p.id == id);
    if (filtered.length) {
      name = filtered[0].name;
    }
    return name;
  };

  const handleSetTotals = (data) => {
    let subtotal = 0;
    let taxes = 0;
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      subtotal += element.count * element.price;
      taxes += element.count * element.price * element.taxes;
    }

    setFieldValue("taxes", taxes);
    setFieldValue("subtotal", subtotal);
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>SELL</title>
      </Helmet>
      <div className="row">
        <div className="col-md-6 mt-3">
          <form onSubmit={handleSubmit} className="card">
            <div className="card-body">
              <InputSelect
                data={customers}
                label="Cliente"
                id="customer"
                values={values}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
              />

              <div className="card mb-3">
                <div
                  className="card-body overflow-auto"
                  style={{ maxHeight: 500 }}
                >
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Impuestos</th>
                        <th>Total</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={`product_${product.id}`}>
                          <td>{product.name}</td>
                          <td>{product.price}</td>
                          <td>{product.price * product.taxes}</td>
                          <td>
                            {product.price + product.price * product.taxes}
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-success"
                              onClick={() => handleSelectProduct(product)}
                            >
                              <i className="fa-solid fa-plus" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-3">
                <button className="btn btn-primary" style={{ width: "100%" }}>
                  Generar
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6 mt-3">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Impuestos</th>
                  <th>Total</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {values?.details.map((detail, index) => (
                  <tr key={`detail_${index}`}>
                    <td>{getName(detail.product)}</td>
                    <td>{detail.price}</td>
                    <td>{detail.count}</td>
                    <td>{detail.price * detail.count * detail.taxes}</td>
                    <td>
                      {detail.price * detail.count +
                        detail.price * detail.count * detail.taxes}
                    </td>
                    <td>
                      <button className="btn btn-danger">
                        <i className="fa-solid fa-trash" />
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="" colSpan={4}>
                    Subtotal
                  </td>
                  <td colSpan={2}>${values.subtotal}</td>
                </tr>
                <tr>
                  <td className="" colSpan={4}>
                    Impuestos
                  </td>
                  <td colSpan={2}>${values.taxes}</td>
                </tr>
                <tr>
                  <td className="" colSpan={4}>
                    Total
                  </td>
                  <td colSpan={2}>${values.subtotal + values.taxes}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary hiden"
        data-bs-toggle="modal"
        data-bs-target="#sellModal"
      >
        open modal
      </button>
      <SellModal sell={selected} />
    </React.Fragment>
  );
};

export default SellPage;
