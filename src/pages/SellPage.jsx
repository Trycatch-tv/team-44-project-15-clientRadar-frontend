import { Helmet } from "react-helmet-async";
import { useFormik } from "formik";
import React, { useState } from "react";
import sellFormValidation from "../validations/sell.validation";
import InputText from "../components/forms/InputText";
import InputSelect from "../components/forms/InputSelect";
import mockCustomer from "../mock/mockCustomer";
import mockProduct from "../mock/mockProduct";

const SellPage = () => {
  const [customers, setCustomers] = useState(mockCustomer);
  const [products, setProducts] = useState(mockProduct);
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
    if (existe.length) {
      data.forEach((d, index) => {
        if (d.product == product.id) {
          data[index] = { ...d, count: d.count + 1 };
        }
      });

      setFieldValue("details", [...data]);
    } else {
      setFieldValue("details", [...data, payload]);
    }


    
  };

  const getName = (id) => {
    let name = "";
    let filtered = products.filter((p) => p.id == id);
    if (filtered.length) {
      name = filtered[0].name;
    }
    return name;
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>SELL</title>
      </Helmet>
      <div className="row">
        <div className="col-md-6">
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

          <InputText
            type="date"
            label="Fecha"
            id="created_at"
            values={values}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors}
            touched={touched}
          />
          <InputText
            type="number"
            label="Subtotal"
            id="subtotal"
            values={values}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors}
            touched={touched}
          />
          <InputText
            type="number"
            label="Impuestos"
            id="taxes"
            values={values}
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors}
            touched={touched}
          />

          <div className="card">
            <div className="card-body">
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
                      <td>{product.price + product.price * product.taxes}</td>
                      <td>
                        <button
                          className="btn btn-success"
                          onClick={() => handleSelectProduct(product)}
                        >
                          Agregar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Impuestos</th>
                <th>Total</th>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SellPage;
