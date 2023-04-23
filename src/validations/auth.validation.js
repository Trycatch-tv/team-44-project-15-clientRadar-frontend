import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const authFormValidation = {
  initialValues,
  validationSchema,
};

export default authFormValidation;
