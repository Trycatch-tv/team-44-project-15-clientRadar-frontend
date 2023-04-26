import moment from "moment";
import * as Yup from "yup";

const initialValues = {
  id: null,
  customer: 0,
  subtotal: 0,
  taxes: 0,
  obsevation: "",
  created_at: moment().toLocaleString(),
  details: [],
};

const validationSchema = Yup.object({
  customer: Yup.string().required().min(1),
  subtotal: Yup.number().required().min(1),
  taxes: Yup.number().min(1),
  obsevation: Yup.string(),
  created_at: Yup.string().required(),
  details: Yup.array().of(
    Yup.object({
      product: Yup.number().required(),
      count: Yup.number().required(),
      price: Yup.number().required(),
      taxes: Yup.number().required(),
    })
  ),
});

const sellFormValidation = {
  initialValues,
  validationSchema,
};

export default sellFormValidation;
